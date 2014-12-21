#! /bin/bash
set -e
git checkout -b test
gulp
git add -f dist
git commit -m"test"
git push origin2 :master
git subtree push --prefix dist  origin2 master
git checkout master
git branch -D test
