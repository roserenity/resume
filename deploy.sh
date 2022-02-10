#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'resume'
git push -f git@github.com:roserenity/resume.git main:gh-pages

cd -