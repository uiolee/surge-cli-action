v=$(pnpm version prerelease --preid action)

git tag -f v0 -m v0 
git tag -f v0.23 -m v0.23 
git tag -f v0.23.1 -m v0.23.1 

git push --follow-tags
git push -f --tags

# gh release create

echo ''
echo ''
echo https://github.com/uiolee/surge-cli-action/releases/new?tag=${v}