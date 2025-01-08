#!/usr/bin/env sh

# Obtiene la rama actual
current_branch=$(git symbolic-ref --short HEAD)

# Verifica si la rama actual es 'main'
if [ "$current_branch" = "main" ]; then
  # Alerta si se intenta hacer commit en la rama main
  echo "🚨🚨 ERROR: You cannot commit directly to the 'main' branch. 🚨🚨"
  echo "Please create a new branch and submit a pull request (PR)."
  exit 1
fi

# Ejecutar `npm run release` para actualizar la versión automáticamente
echo "Running 'npm run release' to bump version..."
npm run release

if [ $? -ne 0 ]; then
  echo "✖✖ 'npm run release' failed! Please fix the issues and try again. ✖✖"
  exit 1
fi

echo "✔ Version bumped successfully!"

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
