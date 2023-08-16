#!/bin/bash

svgr \
  -d ./src/icons/generated/shopl-icons \
  --template ./scripts/templates/icon-template.js \
  --index-template ./scripts/templates/icon-index-template.js \
  ./src/icons/assets/shopl-icons \
  --icon \
  --typescript
