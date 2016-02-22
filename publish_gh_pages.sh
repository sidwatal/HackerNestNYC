cp -r css/ dist/css
cp -r img/ dist/img
cp -r js/ dist/js
git add dist/
git commit -m "Update gh-pages"
git push origin master
git subtree push --prefix dist origin gh-pages
