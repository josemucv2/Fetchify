#!/bin/sh

# Obtiene la rama a la que se está haciendo push
current_branch=$(git symbolic-ref --short HEAD)

# Verifica si la rama actual es 'main'
if [ "$current_branch" = "main" ]; then
  echo "❌❌❌¡Error! No se puede hacer push directo a la rama main.❌❌❌"
  exit 1
fi
