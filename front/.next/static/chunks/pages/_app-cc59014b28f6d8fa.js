(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8510)}])},8418:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(l.push(t.value),!r||l.length!==r);i=!0);}catch(c){a=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var l,i=(l=n(7294))&&l.__esModule?l:{default:l},a=n(6273),c=n(387),u=n(7190);var s={};function f(e,r,n,t){if(e&&a.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[r+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,t=c.useRouter(),l=i.default.useMemo((function(){var r=o(a.resolveHref(t,e.href,!0),2),n=r[0],l=r[1];return{href:n,as:e.as?a.resolveHref(t,e.as):l||n}}),[t,e.href,e.as]),d=l.href,h=l.as,p=e.children,v=e.replace,j=e.shallow,y=e.scroll,x=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var m=(r=i.default.Children.only(p))&&"object"===typeof r&&r.ref,g=o(u.useIntersection({rootMargin:"200px"}),2),b=g[0],w=g[1],_=i.default.useCallback((function(e){b(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,b]);i.default.useEffect((function(){var e=w&&n&&a.isLocalURL(d),r="undefined"!==typeof x?x:t&&t.locale,o=s[d+"%"+h+(r?"%"+r:"")];e&&!o&&f(t,d,h,{locale:r})}),[h,d,w,x,n,t]);var E={ref:_,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,o,l,i,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==i&&t.indexOf("#")>=0&&(i=!1),r[o?"replace":"push"](n,t,{shallow:l,locale:c,scroll:i}))}(e,t,d,h,v,j,y,x)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),a.isLocalURL(d)&&f(t,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var C="undefined"!==typeof x?x:t&&t.locale,M=t&&t.isLocaleDomain&&a.getDomainLocale(h,C,t&&t.locales,t&&t.domainLocales);E.href=M||a.addBasePath(a.addLocale(h,C,t&&t.defaultLocale))}return i.default.cloneElement(r,E)};r.default=d},7190:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(l.push(t.value),!r||l.length!==r);i=!0);}catch(c){a=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,t=e.disabled||!a,u=l.useRef(),s=o(l.useState(!1),2),f=s[0],d=s[1],h=o(l.useState(r?r.current:null),2),p=h[0],v=h[1],j=l.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=c.get(r);if(n)return n;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return c.set(r,n={id:r,observer:o,elements:t}),n}(n),o=t.id,l=t.observer,i=t.elements;return i.set(e,r),l.observe(e),function(){i.delete(e),l.unobserve(e),0===i.size&&(l.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{root:p,rootMargin:n}))}),[t,p,n,f]);return l.useEffect((function(){if(!a&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),l.useEffect((function(){r&&v(r.current)}),[r]),[j,f]};var l=n(7294),i=n(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},8510:function(e,r,n){"use strict";n.r(r);var t=n(5893),o=(n(7294),n(9008)),l=n(1664);n(5846),n(5644);r.default=function(e){var r=e.Component;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.default,{children:(0,t.jsx)("title",{children:"Demeter"})}),(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)("header",{children:[(0,t.jsx)("div",{className:"logo",children:(0,t.jsx)("h1",{children:(0,t.jsx)(l.default,{href:"/",children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:"/img/logo.png",alt:""})})})})}),(0,t.jsx)("nav",{children:(0,t.jsxs)("ul",{className:"clearfix",children:[(0,t.jsx)("h2",{children:(0,t.jsx)(l.default,{href:"/signature",children:(0,t.jsx)("a",{children:(0,t.jsx)("li",{children:"Signature"})})})}),(0,t.jsx)("h2",{children:(0,t.jsx)(l.default,{href:"/brand",children:(0,t.jsx)("a",{children:(0,t.jsx)("li",{children:"Brand"})})})}),(0,t.jsx)("h2",{children:(0,t.jsx)(l.default,{href:"/product",children:(0,t.jsx)("a",{children:(0,t.jsx)("li",{children:"Products"})})})}),(0,t.jsx)("h2",{children:(0,t.jsx)(l.default,{href:"/gift",children:(0,t.jsx)("a",{children:(0,t.jsx)("li",{children:"Gift/Edition"})})})}),(0,t.jsx)("h2",{children:(0,t.jsx)(l.default,{href:"/collaborate",children:(0,t.jsx)("a",{children:(0,t.jsx)("li",{children:"Collaborate"})})})}),(0,t.jsx)("h2",{children:(0,t.jsx)(l.default,{href:"/cs",children:(0,t.jsx)("a",{children:(0,t.jsx)("li",{children:"CS"})})})})]})})]}),(0,t.jsx)("div",{className:"main",children:(0,t.jsx)(r,{})}),(0,t.jsxs)("footer",{children:[(0,t.jsx)(l.default,{href:"/",children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:"/img/footer_logo.png",alt:""})})}),(0,t.jsx)("img",{src:"/img/footer_text.png",alt:""})]})]})]})}},5846:function(){},5644:function(){},9008:function(e,r,n){e.exports=n(5443)},1664:function(e,r,n){e.exports=n(8418)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(1780),r(387)}));var n=e.O();_N_E=n}]);