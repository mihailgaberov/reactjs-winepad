#!/usr/bin/env bash
# js transform
babel --presets react, es2015 js/source -d js/build

# js package
browserify js/build/app.js -o bundle.js

# css package
type css\components\* css\* > bundle.css

# done
date; echo;