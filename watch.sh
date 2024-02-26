#!/bin/bash

clear
echo "watching $(pwd) => make test"
fswatch -o src test | xargs -n 1 -I {} make test
