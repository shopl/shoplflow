#!/bin/bash

svgr \
  -d ./src/icons/generated/ \
  --template ./scripts/templates/template.js \
  --index-template ./scripts/templates/icon-index-template.js \
  ./src/icons/assets/ \
  --icon \
  --typescript

