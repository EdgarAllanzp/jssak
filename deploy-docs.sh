#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm run docs:build
cd docs/.vuepress/dist

git push -f git@github.com:EdgarAllanzp/jssak.git master:gh-pages
