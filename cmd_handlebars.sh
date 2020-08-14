array=( head header footer )
for i in "${array[@]}"
do
  node_modules/handlebars/bin/handlebars \
  jq_securities/handlebars/${i}_hk.handlebars \
  -f jq_securities/templates/${i}_hk.precompiled.js

  node_modules/handlebars/bin/handlebars \
  jq_securities/handlebars/${i}_cn.handlebars \
  -f jq_securities/templates/${i}_cn.precompiled.js

  node_modules/handlebars/bin/handlebars \
  jq_securities/handlebars/${i}_en.handlebars \
  -f jq_securities/templates/${i}_en.precompiled.js
done

node_modules/uglify-js/bin/uglifyjs \
jq_securities/templates/head_hk.precompiled.js \
jq_securities/templates/head_cn.precompiled.js \
jq_securities/templates/head_en.precompiled.js \
jq_securities/templates/header_hk.precompiled.js \
jq_securities/templates/header_cn.precompiled.js \
jq_securities/templates/header_en.precompiled.js \
jq_securities/templates/footer_hk.precompiled.js \
jq_securities/templates/footer_cn.precompiled.js \
jq_securities/templates/footer_en.precompiled.js \
-o jq_securities/assets/js/app.min.js -c -m

