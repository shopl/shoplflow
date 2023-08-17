#!/bin/bash

svgr \
  -d ./src/icons/generated/ \
  --template ./scripts/templates/template.js \
  --index-template ./scripts/templates/index-template.js \
  ./src/illustration/assets/ \
  --icon \
  --typescript

