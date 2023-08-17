#!/bin/bash

svgr \
  -d ./src/icons/generated/hada-icons \
  --template ./scripts/templates/icon-template.js \
  --index-template ./scripts/templates/icon-index-template.js \
  ./src/icons/assets/hada-icons \
  --icon \
  --typescript

