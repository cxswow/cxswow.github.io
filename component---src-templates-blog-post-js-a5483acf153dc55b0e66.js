webpackJsonp([0x620f737b6699],{216:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return e.raw=t,e}t.__esModule=!0,t.pageQuery=void 0;var u=i(["\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n"],["\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n"]),f=i(["\n  width: 100%;\n"],["\n  width: 100%;\n"]),d=i(["\n  color: #aaa;\n"],["\n  color: #aaa;\n"]),c=n(2),s=r(c),p=n(54),m=r(p),h=n(23),y=r(h),w=n(21),b=r(w),E=b.default.div(u),g=b.default.div(f),k=b.default.p(d),v=function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this,t=this.props.data.markdownRemark,n=void 0,r=void 0;if(this.props.data.markdownRemark.fields.tagSlugs){var a=this.props.data.markdownRemark.fields.tagSlugs;n=a.map(function(t,n){var r=n<a.length-1&&s.default.createElement("span",null," | ");return s.default.createElement("span",{key:t},s.default.createElement(y.default,{to:t},e.props.data.markdownRemark.frontmatter.tags[n]),r)}),r=s.default.createElement("em",null,"标签：",n)}return s.default.createElement(E,null,s.default.createElement(m.default,{title:""+t.frontmatter.title,meta:[{name:"description",content:t.excerpt}]}),s.default.createElement(g,null,s.default.createElement("h1",null,t.frontmatter.title),s.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r,s.default.createElement(k,null,t.frontmatter.date)))},t}(s.default.Component);t.default=v;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-blog-post-js-a5483acf153dc55b0e66.js.map