#!/bin/bash

svgr \
  -d ./src/illustrations/generated/ \
  --template ./scripts/templates/template.js \
  --index-template ./scripts/templates/illustration-index-template.js \
  ./src/illustrations/assets/ \
  --typescript
--no-dimensions \
