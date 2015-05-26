#!/bin/bash

echo "Downloading zips.json from http://media.mongodb.org/zips.json..."

cat zips.json
echo $(curl -XGET http://media.mongodb.org/zips.json) >> zips.json

echo "Importing zips.json to mongodb"
mongoimport --db test_db --collection cities --file zips.json
rm zips.json
