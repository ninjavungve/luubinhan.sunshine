webpackJsonp([79611799117203,60335399758886],{175:function(e,a){e.exports={layoutContext:{}}},343:function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i=t(1),r=n(i),l=t(436),c=n(l),s=t(175),u=n(s);a.default=function(e){return r.default.createElement(c.default,o({},e,u.default))},e.exports=a.default},40:function(e,a){"use strict";a.__esModule=!0;a.PRIMARY_NAVIGATION=[{key:"be-trai",slug:"be-trai",name:"Bé Trai",href:"/categories/be-trai",isActive:!1,icon:"",childrens:[{key:"do-bo",name:"Đồ Bộ",icon:"",href:"/tags/do-bo"},{key:"ao",name:"Áo",icon:"",href:"/tags/ao"},{key:"ao-khoac",name:"Áo khoác",icon:"",href:"/tags/ao-khoac"},{key:"ao-lien-quan",name:"Áo liền quần",icon:"",href:"/tags/ao-lien-quan"},{key:"quan",name:"Quần",icon:"",href:"/tags/quan"},{key:"do-ngu",name:"Đồ ngủ",icon:"",href:"/tags/do-ngu"},{key:"giay-dep",name:"Giày dép",icon:"",href:"/tags/giay-dep"}]},{key:"be-gai",slug:"be-gai",name:"Bé Gái",href:"/categories/be-gai",isActive:!1,icon:"",childrens:[{key:"do-bo",name:"Đồ bộ",icon:"",href:"/tags/do-bo"},{key:"ao",name:"Áo",icon:"",href:"/tags/ao"},{key:"ao-khoac",name:"Áo khoác",icon:"",href:"/tags/ao-khoac"},{key:"ao-lien-quan",name:"Áo liền quần",icon:"",href:"/tags/ao-lien-quan"},{key:"quan",name:"Quần",icon:"",href:"/tags/quan"},{key:"dam-vay",name:"Đầm váy",icon:"",href:"/tags/dam-vay"},{key:"do-ngu",name:"Đồ ngủ",icon:"",href:"/tags/do-ngu"},{key:"giay-dep",name:"Giày dép",icon:"",href:"/tags/giay-dep"}]},{key:"do-tuoi",slug:"do-tuoi",name:"Độ Tuổi",href:"/tags/do-tuoi",isActive:!1,icon:"",childrens:[{key:"duoi-2-tuoi",name:"Bé từ 0 - 24 tháng",icon:"",href:"/tags/duoi-2-tuoi"},{key:"duoi-5-tuoi",name:"Bé từ 2 - 5 tuổi",icon:"",href:"/tags/duoi-5-tuoi"},{key:"duoi-12-tuoi",name:"Bé từ 6 - 12 tuổi",icon:"",href:"/tags/duoi-12-tuoi"}]},{key:"khan-mu",slug:"khan-mu",name:"Khăn Mũ",href:"/categories/khan-mu",isActive:!1,icon:""},{key:"ba-lo",slug:"ba-lo",name:"Ba lô",href:"/categories/ba-lo",isActive:!1,icon:""},{key:"giay-dep",slug:"giay-dep",name:"Giày dép",href:"/categories/giay-dep",isActive:!1,icon:""},{key:"do-choi",slug:"do-choi",name:"Đồ chơi",href:"/categories/do-choi",isActive:!1,icon:""},{key:"khuyen-mai",slug:"khuyen-mai",name:"Khuyến Mãi",href:"/categories/khuyen-mai",isActive:!1,icon:""},{key:"lien-he",slug:"lien-he",name:"Liên hệ",href:"/lien-he",isActive:!1,icon:""}]},436:function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function i(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function r(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}a.__esModule=!0;var l=t(1),c=n(l),s=t(43),u=n(s),f=t(34),d=n(f),m=t(26),h=n(m),g=t(40);t(709);var p=t(22),y=t(853),b=n(y),k=function(e){function a(){return o(this,a),i(this,e.apply(this,arguments))}return r(a,e),a.prototype.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var a=h.default.pathPrefix?h.default.pathPrefix:"/",t=this.props.location.pathname.replace(a,"").replace("/",""),n="";if(""===t)n="Home";else if("tags/"===t)n="Tags";else if("categories/"===t)n="Categories";else if("about/"===t)n="About";else if(t.includes("posts"))n="Article";else if(t.includes("tags/")){var o=t.replace("tags/","").replace("/","").replace("-"," ");n="Tagged in "+e(o)}else if(t.includes("categories/")){var i=t.replace("categories/","").replace("/","").replace("-"," ");n=""+e(i)}return n},a.prototype.render=function(){var e=this.props.children;return c.default.createElement("div",{className:"mystyle"},c.default.createElement(u.default,null,c.default.createElement("title",null,h.default.siteTitle+" |  "+this.getLocalTitle()),c.default.createElement("meta",{name:"description",content:h.default.siteDescription})),c.default.createElement("div",{id:"header"},c.default.createElement("div",{className:"header"},c.default.createElement("div",{className:"header-inner"},c.default.createElement(p.Container,null,c.default.createElement("div",{className:"navbar navbar-expand-lg navbar-light"},c.default.createElement(d.default,{to:"/",className:"navbar-brand"},c.default.createElement("img",{src:b.default,height:"40",alt:""})),c.default.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.default.createElement("span",{className:"navbar-toggler-icon"})),c.default.createElement("div",{className:"top-info-block"},c.default.createElement("a",{href:"facebook.com/",className:"link-facebook"},c.default.createElement("i",{className:"ion-social-facebook"})),c.default.createElement("div",{className:"hotline-badge"},c.default.createElement("i",{className:"ion-ios-telephone"}),c.default.createElement("div",{className:"hotline-number"},c.default.createElement("a",{href:"tel:1900-6067"},"1900-6067")))))),c.default.createElement("div",{className:"primary-nav-block"},c.default.createElement(p.Container,null,c.default.createElement(p.Navbar,{items:g.PRIMARY_NAVIGATION,cssClass:"primary-nav"})))))),c.default.createElement(p.Master,null,e()))},a}(c.default.Component);a.default=k,e.exports=a.default},853:function(e,a,t){e.exports=t.p+"static/logo-shop-mat-troi-nho.98819bbb.png"},709:function(e,a){}});
//# sourceMappingURL=component---src-layouts-index-jsx-5f543e713ce1213fce48.js.map