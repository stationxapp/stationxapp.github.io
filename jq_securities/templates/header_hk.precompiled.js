(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header_hk'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active\"><a href=\"index_hk.html\">公司介紹</a></li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <li><a href=\"index_hk.html\">公司介紹</a></li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active drop-down\"><a href=\"#\">公司結構</a>\n              <ul>\n                <li><a href=\"stakeholders_hk.html\">股東背景</a></li>\n                <li><a href=\"equity_hk.html#\">股權結構</a></li>\n                <li><a href=\"organization_hk.html#\">公司結構</a></li>\n              </ul>\n            </li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"drop-down\"><a href=\"#\">公司結構</a>\n              <ul>\n                <li><a href=\"stakeholders_hk.html\">股東背景</a></li>\n                <li><a href=\"equity_hk.html#\">股權結構</a></li>\n                <li><a href=\"organization_hk.html#\">公司結構</a></li>\n              </ul>\n            </li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active drop-down\"><a href=\"business_hk.html\">業務活動</a>\n              <ul>\n                <li><a href=\"business_hk.html#\">証券經紀服務</a></li>\n                <li><a href=\"business_hk.html#\">証券研究與資產管理</a></li>\n                <li><a href=\"business_hk.html#\">發展</a></li>\n                <li><a href=\"market_hk.html\">客戶及市場</a></li>\n              </ul>\n            </li>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"drop-down\"><a href=\"business_hk.html\">業務活動</a>\n              <ul>\n                <li><a href=\"business_hk.html#\">証券經紀服務</a></li>\n                <li><a href=\"business_hk.html#\">証券研究與資產管理</a></li>\n                <li><a href=\"business_hk.html#\">發展</a></li>\n                <li><a href=\"market_hk.html\">客戶及市場</a></li>\n              </ul>\n            </li>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active drop-down\"><a href=\"#\">操作模式</a>\n              <ul>\n                <li><a href=\"operation_hk.html\">証券經紀及買賣</a></li>\n                <li><a href=\"risk_hk.html\">風險和內部控制</a></li>\n                 <li><a href=\"license_hk.html\">牌照</a></li>\n              </ul>\n            </li>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"drop-down\"><a href=\"#\">操作模式</a>\n              <ul>\n                <li><a href=\"operation_hk.html\">証券經紀及買賣</a></li>\n                <li><a href=\"risk_hk.html\">風險和內部控制</a></li>\n                 <li><a href=\"license_hk.html\">牌照</a></li>\n              </ul>\n            </li>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active\"><a href=\"aboutus_hk.html\">關於我們</a></li>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "            <li><a href=\"aboutus_hk.html\">關於我們</a></li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container d-flex align-items-center\">\n\n      <!-- <h1 class=\"logo mr-auto\"><a href=\"index_hk.html\">Multi</a></h1> -->\n      <!-- Uncomment below if you prefer to use an image logo -->\n      <a href=\"index_hk.html\" class=\"logo mr-auto\"><img src=\"assets/img/logo_1.jpg\" alt=\"\" class=\"img-fluid\"></a>\n\n      <nav id=\"nav-menu\" class=\"nav-menu d-none d-lg-block\">\n        <ul>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"index") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":9,"column":10},"end":{"line":13,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"organization") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":15,"column":10},"end":{"line":31,"column":17}}})) != null ? stack1 : "")
    + "          \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"business") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":33,"column":10},"end":{"line":51,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"operation") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":53,"column":10},"end":{"line":69,"column":17}}})) != null ? stack1 : "")
    + "          \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"aboutus") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":71,"column":10},"end":{"line":75,"column":17}}})) != null ? stack1 : "")
    + "\n          <li><a href=\"index_hk.html\">繁</a></li>\n          <li><a href=\"index_cn.html\">简</a></li>\n          <li><a href=\"index_en.html\">ENG</a></li> \n\n      </ul>\n      </nav><!-- .nav-menu -->\n\n      <!-- <a href=\"#about\" class=\"get-started-btn\">Get Started</a> -->\n\n    </div>";
},"useData":true});
})();