node_modules/handlebars/bin/handlebars \
jq_securities/handlebars/header_hk.handlebars \
-f jq_securities/templates/header_hk.precompiled.js

node_modules/handlebars/bin/handlebars \
jq_securities/handlebars/header_cn.handlebars \
-f jq_securities/templates/header_cn.precompiled.js

node_modules/handlebars/bin/handlebars \
jq_securities/handlebars/header_en.handlebars \
-f jq_securities/templates/header_en.precompiled.js

node_modules/handlebars/bin/handlebars \
jq_securities/handlebars/footer_hk.handlebars \
-f jq_securities/templates/footer_hk.precompiled.js

node_modules/handlebars/bin/handlebars \
jq_securities/handlebars/footer_cn.handlebars \
-f jq_securities/templates/footer_cn.precompiled.js

node_modules/handlebars/bin/handlebars \
jq_securities/handlebars/footer_en.handlebars \
-f jq_securities/templates/footer_en.precompiled.js

node_modules/uglify-js/bin/uglifyjs \
jq_securities/templates/header_hk.precompiled.js \
jq_securities/templates/header_cn.precompiled.js \
jq_securities/templates/header_en.precompiled.js \
jq_securities/templates/footer_hk.precompiled.js \
jq_securities/templates/footer_cn.precompiled.js \
jq_securities/templates/footer_en.precompiled.js \
-o jq_securities/assets/js/app.min.js -c -m

