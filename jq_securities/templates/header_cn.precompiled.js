(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header_cn'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active\"><a href=\"index_cn.html\">公司介绍</a></li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <li><a href=\"index_cn.html\">公司介绍</a></li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active drop-down\"><a href=\"#\">公司结构</a>\n              <ul>\n                <li><a href=\"shareholders_cn.html\">股东背景</a></li>\n              </ul>\n            </li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"drop-down\"><a href=\"#\">公司结构</a>\n              <ul>\n                <li><a href=\"shareholders_cn.html\">股东背景</a></li>\n              </ul>\n            </li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active drop-down\"><a href=\"business_cn.html\">业务活动</a>\n              <ul>\n                <li><a href=\"business_cn.html#\">债券项目</a></li>\n                <li><a href=\"business_cn.html#\">证券经纪服务</a></li>\n                <li><a href=\"business_cn.html#\">证券研究与资产管理</a></li>\n                <li><a href=\"business_cn.html#\">发展</a></li>\n                <li><a href=\"business_cn.html#\">客户及市场</a></li>\n              </ul>\n            </li>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"drop-down\"><a href=\"business_cn.html\">业务活动</a>\n              <ul>\n                <li><a href=\"business_cn.html#\">债券项目</a></li>\n                <li><a href=\"business_cn.html#\">证券经纪服务</a></li>\n                <li><a href=\"business_cn.html#\">证券研究与资产管理</a></li>\n                <li><a href=\"business_cn.html#\">发展</a></li>\n                <li><a href=\"business_cn.html#\">客户及市场</a></li>\n              </ul>\n            </li>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active drop-down\"><a href=\"#\">操作模式</a>\n              <ul>\n                <li><a href=\"operation_cn.html\">证券经纪及买卖</a></li>\n                <li><a href=\"risk_cn.html\">风险和内部控制</a></li>\n                 <li><a href=\"license_cn.html\">牌照</a></li>\n              </ul>\n            </li>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"drop-down\"><a href=\"#\">操作模式</a>\n              <ul>\n                <li><a href=\"operation_cn.html\">证券经纪及买卖</a></li>\n                <li><a href=\"risk_cn.html\">风险和内部控制</a></li>\n                 <li><a href=\"license_cn.html\">牌照</a></li>\n              </ul>\n            </li>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active\"><a href=\"aboutus_cn.html\">关於我们</a></li>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "            <li><a href=\"aboutus_cn.html\">关於我们</a></li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container d-flex align-items-center\">\n\n      <!-- <h1 class=\"logo mr-auto\"><a href=\"index_cn.html\">Multi</a></h1> -->\n      <!-- Uncomment below if you prefer to use an image logo -->\n      <a href=\"index_cn.html\" class=\"logo mr-auto\">\n        <img src=\"assets/img/logo_1.jpg\" style=\"max-height:50px\" alt=\"\" class=\"img-fluid\">\n        </a>\n\n      <nav id=\"nav-menu\" class=\"nav-menu d-none d-lg-block\">\n        <ul>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"index") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":11,"column":10},"end":{"line":15,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"organization") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":17,"column":10},"end":{"line":29,"column":17}}})) != null ? stack1 : "")
    + "          \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"business") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":31,"column":10},"end":{"line":51,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"operation") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":53,"column":10},"end":{"line":69,"column":17}}})) != null ? stack1 : "")
    + "          \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"aboutus") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":71,"column":10},"end":{"line":75,"column":17}}})) != null ? stack1 : "")
    + "\n          <li><a class=\"lang-link\" href=\"javascript://\" data-lang=\"hk\">繁</a></li>\n          <li><a class=\"lang-link\" href=\"javascript://\" data-lang=\"cn\">简</a></li>\n          <li><a class=\"lang-link\" href=\"javascript://\" data-lang=\"en\">ENG</a></li> \n\n      </ul>\n      </nav><!-- .nav-menu -->\n\n      <!-- <a href=\"#about\" class=\"get-started-btn\">Get Started</a> -->\n\n    </div>";
},"useData":true});
})();