git ls-files --others --exclude-standard | sed 's/^/git add /g' > git_add.sh
git ls-files -m | sed 's/^/git add /g' >> git_add.sh
chmod 755 git_add.sh
./git_add.sh
git commit -m 'commit'
git push