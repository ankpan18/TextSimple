(this.webpackJsonptextsimple=this.webpackJsonptextsimple||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),o=c.n(s),r=(c(9),c(2)),l=(c(10),c(0));function i(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function d(e){var t=Object(n.useState)("Enter text here2"),c=Object(r.a)(t,2),a=c[0],s=c[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#2c2c2c"},children:[Object(l.jsx)("h1",{children:e.heading}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",value:a,onChange:function(e){console.log("On Change"),s(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"grey",color:"dark"===e.mode?"white":"#2c2c2c"},id:"myBox",rows:"8"})}),Object(l.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("Uppercase was clicked"+a);var t=a.toUpperCase();s(t),e.showAlert("Converted to UpperCase","success")},children:"Convert to Uppercase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("Lowercase was clicked"+a);var t=a.toLowerCase();s(t),e.showAlert("Converted to LowerCase","success")},children:"Convert to LowerCase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){var t=a.split("").reverse().join("");s(t),e.showAlert("Reversed Text","success")},children:"Reverse Text"}),Object(l.jsx)("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){console.log("Copy Text Demo");var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text Copied","success")},children:"Copy Text"}),Object(l.jsx)("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){console.log("Clearing Text");s(""),e.showAlert("Text Cleared","success")},children:"Clear Text"}),Object(l.jsx)("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){console.log("Removing Additional Spaces");var e=a.split(/[ ]+ /);s(e.join(" "))},children:"Remove Extra Spaces"})]}),Object(l.jsxs)("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"#2c2c2c"},children:[Object(l.jsx)("h2",{children:"Your Text Summary"}),Object(l.jsxs)("p",{children:[a.split(" ").filter((function(e){return""!==e})).length," words and ",a.length," characters"]}),Object(l.jsxs)("p",{children:[.008*a.split(" ").length," Minutes"]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:a.length>0?a:"Enter something in the textbox above to preview it here"})]})]})}function b(e){return e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," "]}),e.alert.msg]})}i.defaultProps={title:"Set Title Here",aboutText:"About"};var m=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),o=Object(r.a)(s,2),m=o[0],h=o[1],j=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),1500)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{title:"Fastify",mode:c,toggleMode:function(){"light"===c?(a("dark"),document.body.style.backgroundColor="#2c2c2c",j("Dark Mode has been enabled","success"),document.title="TextSimple- Dark Mode"):(a("light"),document.body.style.backgroundColor="white",j("Light Mode has been enabled","success"),document.title="TextSimple- Light Mode")}}),Object(l.jsx)(b,{alert:m}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(d,{showAlert:j,heading:"Enter the text to Analyze Below",mode:c})})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),h()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.89967d90.chunk.js.map