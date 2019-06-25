#!/usr/bin/env bash

getopts ":Mmp" Option

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')


INCREMENTED=$(bash ./buildUtils/increment.sh -${Option} $PACKAGE_VERSION)

echo $INCREMENTED

sed -i '' 's/version": "'"$PACKAGE_VERSION"'/version": "'"$INCREMENTED"'/' package.json

git add .

git commit -m 'build version ' -m $INCREMENTED
git tag v$INCREMENTED
