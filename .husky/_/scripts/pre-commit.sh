#!/usr/bin/env sh

# Validar archivos TypeScript (incluyendo .ts y .tsx)
echo "Validating TypeScript files..."

output=$(npx tsc --noEmit --pretty false 2>&1)
exitCode="$?"

if [ $exitCode != 0 ]; then
  echo "✖✖ TypeScript validation failed! ✖✖"
  
  # Procesar la salida para mostrar errores por archivo
  echo "$output" | while IFS= read -r line; do
    if echo "$line" | grep -q 'error TS'; then
      # Extraer el archivo y el mensaje de error
      file=$(echo "$line" | cut -d'(' -f1)
      errorMessage=$(echo "$line" | cut -d':' -f2-)
      
      # Mostrar el archivo y el error con una X
      echo "  file: '$file'"
      echo "  error: $errorMessage"
    fi
  done

  exit $exitCode
else
  echo "✔ All TypeScript files passed validation!"
fi

# Finalización del script
exit 0
