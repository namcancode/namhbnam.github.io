#!/bin/bash

dir=`dirname "$1"`
name=`basename "$1" .sketch`
output="$2"
echo "Unzipping $1 to $output"
unzip -o "$1" -d "$output"


if [ $3 = "--pretty-print" ]; then
    cd "$output"
    for file in *.json
    do
      python -m json.tool $file temp.json
      mv temp.json $file;
    done;

    for page in pages/*.json
    do
      python -m json.tool $page temp.json
      mv temp.json $page
    done
fi
