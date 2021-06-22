export unixepoch=`date +%s`
#sed -i '' -e "s/v=#unixepoch/v=$unixepoch/g" jq_securities/*.html
sed -i '' -e "s/v=[[:digit:]]*/v=$unixepoch/g" jq_securities/*.html
git ls-files --others --exclude-standard | sed 's/^/git add /g' > git_add.sh
git ls-files -m | sed 's/^/git add /g' >> git_add.sh
chmod 755 git_add.sh
./git_add.sh
git commit -m 'commit'
git push
