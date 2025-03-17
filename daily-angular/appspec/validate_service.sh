#!/bin/bash

# verify text content of index.html
curl -v --silent localhost:80 2>&1 | grep Daily