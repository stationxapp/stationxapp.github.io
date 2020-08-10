(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active\"><a href=\"index.html\">公司介紹</a></li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <li><a href=\"index.html\">公司介紹</a></li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active\"><a href=\"stakeholders.html\">股東背景</a></li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <li><a href=\"stakeholders.html\">股東背景</a></li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container d-flex align-items-center\">\n\n      <!-- <h1 class=\"logo mr-auto\"><a href=\"index.html\">Multi</a></h1> -->\n      <!-- Uncomment below if you prefer to use an image logo -->\n      <a href=\"index.html\" class=\"logo mr-auto\"><img src=\"assets/img/logo_large.jpg\" alt=\"\" class=\"img-fluid\"></a>\n\n      <nav id=\"nav-menu\" class=\"nav-menu d-none d-lg-block\">\n        <ul>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"index") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":9,"column":10},"end":{"line":13,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"stakeholders") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":14,"column":10},"end":{"line":18,"column":17}}})) != null ? stack1 : "")
    + "          <li><a href=\"#portfolio\">股權結構</a></li>\n          <li><a href=\"#team\">公司結構</a></li>\n          <li class=\"drop-down\"><a href=\"\">業務活動</a>\n            <ul>\n              <li><a href=\"#\">証券經紀服務</a></li>\n              <li><a href=\"#\">証券研究與資產管理</a></li>\n              <li><a href=\"#\">發展 </a></li>\n            </ul>\n          </li>\n          <li><a href=\"#contact\">客戶及市場</a></li>\n          <li class=\"drop-down\"><a href=\"\">操作模式 </a>\n            <ul>\n              <li><a href=\"#\">証券經紀 </a></li>\n              <li><a href=\"#\">証券買賣</a></li>\n            </ul>\n          </li>\n          <li><a href=\"#team\">風險和內部控制</a></li>\n          <li><a href=\"#team\">牌照</a></li> \n        </ul>\n      </nav><!-- .nav-menu -->\n\n      <!-- <a href=\"#about\" class=\"get-started-btn\">Get Started</a> -->\n\n    </div>";
},"useData":true});
})();