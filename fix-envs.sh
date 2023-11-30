# If you want to remove stuff after you have updated .gitignore!
git rm --cached .env.production
git rm --cached .env
git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch .env.produtcion" HEAD
git push --force
