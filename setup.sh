#!/bin/bash

# Install composer dependencies
docker run --rm -v "$(pwd)":/opt -w /opt composer bash -c "composer install"

# Install npm dependencies
cd double-vite
npm install
