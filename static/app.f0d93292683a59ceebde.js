webpackJsonp([4],{104:function(e,t,n){"use strict";var r=n(38),o=n.n(r),i=n(2),a=n.n(i),c=n(27);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;return"boolean"!=typeof t&&(n=t,t=!0),function(r){var i=function(t){function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}var i,c,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,a.a.PureComponent),i=o,(c=[{key:"setTitle",value:function(){var e="function"==typeof n?n.call(this,this):n;e&&Promise.resolve(e).then(function(e){e&&(document.title="React Hackernews | ".concat(e))})}},{key:"componentWillMount",value:function(){e.__inject__&&e.__inject__(this.props.staticContext),this.setTitle()}},{key:"render",value:function(){return a.a.createElement(r,this.props)}}])&&l(i.prototype,c),s&&l(i,s),o}();return Object.defineProperty(i,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"Ssr".concat(r.displayName||r.name||"Component")}),o()(t?Object(c.d)(i):i,r)}};function f(e,t){return 1===e?e+t:e+t+"s"}t.a=function(e){var t=e.replace(/^https?:\/\//,"").replace(/\/.*$/,"").split(".").slice(-3);"www"===t[0]&&t.shift();return t.join(".")},t.c=function(e){var t=Date.now()/1e3-Number(e);return t<3600?f(~~(t/60)," minute"):t<86400?f(~~(t/3600)," hour"):f(~~(t/86400)," day")},n.d(t,"b",function(){return p}),n.d(t,"d",function(){return s});var p={}},108:function(e,t,n){"use strict";var r=n(66),o=n(60),i=n(57),a=n(137),c=n.n(a),u="SET_ACTIVE_TYPE",l="SET_LIST",s="SET_ITEMS",f="SET_USER";function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h={activeType:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.activeType;default:return e}},itemsPerPage:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:20},items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return d({},e,t.items.reduce(function(e,t){return t&&(e[t.id]=t),e},{}));default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return d({},e,p({},t.id,t.user||!1));default:return e}},lists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{top:[],new:[],show:[],ask:[],job:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return d({},e,p({},t.listType,t.ids));default:return e}}},m=n(110),b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=e.activeType,r=e.itemsPerPage,o=e.lists;if(!n)return[];var i=(t-1)*r,a=t*r;return o[n].slice(i,a)},y=function(e,t){return b(e,t).map(function(t){return e.items[t]}).filter(function(e){return e})},v=function(e){return{type:u,activeType:e}},g=function(e,t){return{type:l,listType:e,ids:t}},w=function(e){return{type:s,items:e}},_=function(e,t){return{type:f,id:e,user:t}},O=function(e,t){return function(n){return n(v(e)),Object(m.a)(e).then(function(t){return n(g(e,t))}).then(function(){return n(E(t))})}},j=function(e){return function(t,n){var r=Date.now(),o=n();return(e=e.filter(function(e){var t=o.items[e];return!t||r-t.__lastUpdated>18e4})).length?Object(m.b)(e).then(function(e){return t(w(e))}):Promise.resolve()}},E=function(e){return function(t,n){return t(j(b(n(),e)))}},x=function(e){return function(t,n){return n().users[e]?Promise.resolve():Object(m.c)(e).then(function(n){return t(_(e,n))})}};function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"g",function(){return P}),n.d(t,!1,function(){return v}),n.d(t,"h",function(){return g}),n.d(t,!1,function(){return w}),n.d(t,!1,function(){return _}),n.d(t,"e",function(){return O}),n.d(t,"d",function(){return j}),n.d(t,"c",function(){return E}),n.d(t,"f",function(){return x}),n.d(t,!1,function(){return b}),n.d(t,"a",function(){return y});var P=Object(r.a)(),S=i.d;t.b=function(e){return Object(i.e)(Object(i.c)(T({},h,{router:o.c})),e,S(Object(i.a)(Object(o.b)(P),c.a)))}},110:function(e,t,n){"use strict";(function(e){t.a=function(e){return i.cachedIds&&i.cachedIds[e]?Promise.resolve(i.cachedIds[e]):a("".concat(e,"stories"))},t.b=c,t.c=function(e){return a("user/".concat(e))},t.d=function(e,t){var n=!0,r=i.child("".concat(e,"stories")),o=function(e){n?n=!1:t(e.val())};return r.on("value",o),function(){r.off("value",o)}};var r=n(138),o=!!e.env.DEBUG_API,i=Object(r.a)({version:"/v0",config:{databaseURL:"https://hacker-news.firebaseio.com"}});function a(e){o&&console.log("fetching ".concat(e,"..."));var t=i.cachedItems;return t&&t.has(e)?(o&&console.log("cache hit for ".concat(e,".")),Promise.resolve(t.get(e))):new Promise(function(n,r){i.child(e).once("value",function(r){var i=r.val();i&&(i.__lastUpdated=Date.now()),t&&t.set(e,i),o&&console.log("fetched ".concat(e,".")),n(i)},r)})}function c(e){return Promise.all(e.map(function(e){return a("item/".concat(e))}))}i.onServer&&function e(){c((i.cachedIds.top||[]).slice(0,30));setTimeout(e,9e5)}()}).call(t,n(42))},113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2),i=n.n(o),a=n(54),c=n(120),u=n.n(c),l=n(56),s=n(107),f=n(60),p=n(108),d=n(111),h=n(27),m=n(193),b=n(109),y=n(112),v=n(104);n(205);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),e}function j(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var x=function(e){return Object(a.asyncComponent)({resolve:e})},T=function(e){return x(function(){return n.e(1).then(n.bind(null,221)).then(function(t){return t.default(e)})})},P=[{path:"/",exact:!0,component:function(){return i.a.createElement(h.a,{to:"/top"})}},{path:"/top/:page(\\d+)?",component:T("top")},{path:"/new/:page(\\d+)?",component:T("new")},{path:"/show/:page(\\d+)?",component:T("show")},{path:"/ask/:page(\\d+)?",component:T("ask")},{path:"/job/:page(\\d+)?",component:T("job")},{path:"/item/:id(\\d+)",component:x(function(){return n.e(0).then(n.bind(null,222))})},{path:"/user/:id",component:x(function(){return n.e(2).then(n.bind(null,223))})},{path:"*",component:function(e){function t(){return w(this,t),j(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return E(t,i.a.PureComponent),O(t,[{key:"componentWillMount",value:function(){this.props.staticContext&&(this.props.staticContext.code=404)}},{key:"render",value:function(){return"Custom 404 Page, will you implement it?"}}]),t}()}],S={entering:{opacity:0},entered:{opacity:1}},k=Object(b.c)(r=function(e){function t(){return w(this,t),j(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return E(t,i.a.PureComponent),O(t,[{key:"componentDidMount",value:function(){v.b.appMounted=!0}},{key:"render",value:function(){var e=this.props.location;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{className:"header"},i.a.createElement("nav",{className:"inner"},i.a.createElement(b.b,{to:"/",exact:!0},i.a.createElement("img",{className:"logo",src:"/public/logo-48.png",alt:"logo"})),["top","new","show","ask","job"].map(function(e){return i.a.createElement(b.b,{key:e,to:"/".concat(e)},Object(d.a)(e))}),i.a.createElement("a",{className:"github",href:"https://github.com/JounQin/react-hackernews",target:"_blank",rel:"noopener noreferrer"},"Built with React.js"))),i.a.createElement(y.TransitionGroup,{component:o.Fragment},i.a.createElement(y.Transition,{timeout:200,key:e.pathname.split("/")[1],mountOnEnter:!0,unmountOnExit:!0},function(t){return i.a.createElement("div",{className:"view",style:S[t]},Object(m.a)(P,null,{location:e}))})))}}]),t}())||r,C=Object(p.b)(window.__INITIAL_STATE__),I=window.ASYNC_COMPONENTS_STATE;delete window.__INITIAL_STATE__,delete window.ASYNC_COMPONENTS_STATE;var N=o.Fragment,A=function(){var e=i.a.createElement(N,null,i.a.createElement(a.AsyncComponentProvider,{rehydrateState:I},i.a.createElement(s.a,{store:C},i.a.createElement(f.a,{history:p.g},i.a.createElement(k,null)))));u()(e).then(function(){return Object(l.hydrate)(e,document.getElementById("app"))})};A(),("https:"===location.protocol||["127.0.0.1","localhost"].includes(location.hostname))&&navigator.serviceWorker&&navigator.serviceWorker.register("/service-worker.js")},138:function(e,t,n){"use strict";t.a=function(e){var t=e.config,n=e.version;return o.a.initializeApp(t),o.a.database().ref(n)};var r=n(139),o=n.n(r),i=n(158);n.n(i)},205:function(e,t,n){var r=n(206);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(106)("6a6d2d6a",r,!0)},206:function(e,t,n){(e.exports=n(105)(!1)).push([e.i,"body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:15px;background-color:#f2f3f5;margin:0;padding-top:55px;overflow-y:scroll}a,body{color:#34495e}a{text-decoration:none}.header{background-color:#f60;position:fixed;z-index:999;height:55px;top:0;left:0;right:0}.header .inner{max-width:800px;box-sizing:border-box;margin:0 auto;padding:15px 5px}.header a{color:hsla(0,0%,100%,.8);line-height:24px;transition:color .15s ease;display:inline-block;vertical-align:middle;font-weight:300;letter-spacing:.075em;margin-right:1.8em}.header a.active{color:#fff;font-weight:400}.header a:hover{color:#fff}.header a:nth-child(6){margin-right:0}.header .github{color:#fff;font-size:.9em;margin:0;float:right}.logo{width:24px;margin-right:10px;display:inline-block;vertical-align:middle}.view{max-width:800px;margin:0 auto;position:relative;opacity:0;transition:all .2s ease}@media (max-width:860px){.header .inner{padding:15px 30px}}@media (max-width:600px){.header .inner{padding:15px}.header a{margin-right:1em}.header .github{display:none}}",""])}},[113]);