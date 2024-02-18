#!/usr/bin/env bash

set -eu

yarn svgr \
  --typescript \
  --memo \
  --filename-case kebab \
  --out-dir src/icons src/icons