!function(e){var n={};function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a}),t.d(n,"f",function(){return i}),t.d(n,"g",function(){return u}),t.d(n,"c",function(){return c}),t.d(n,"d",function(){return l}),t.d(n,"e",function(){return p});var r=t(18),s=t.n(r),o=process.env.NODE_ENV||"development",a="development"===o,i="localhost",u=process.env.PORT||4e3,c=a?"http://".concat(i,":").concat(u,"/"):"/",l=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return s.a.resolve.apply(s.a,[process.cwd()].concat(n))},p=require},function(e,n){e.exports=require("webpack")},function(e,n){e.exports=require("debug")},function(e,n){e.exports=require("webpack-merge")},function(e,n){e.exports=require("ssr-webpack-plugin")},function(e,n,t){"use strict";t.d(n,"a",function(){return g});var r=t(1),s=t.n(r),o=t(25),a=t.n(o),i=t(26),u=t.n(i),c=t(27),l=t.n(c),p=t(0);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var f=p.b,m=!f,b=function(e){return a.a.extract({fallback:{loader:"react-style-loader",options:{react:e}},use:[{loader:"css-loader",options:{minimize:m,souceMap:f}},{loader:"postcss-loader",options:{minimize:m,souceMap:f}},{loader:"sass-loader",options:{minimize:m,souceMap:f}}]})},g=function(e){return{test:/\.js$/,loader:"babel-loader",exclude:/node_modules/,options:d({cacheDirectory:!0},e&&{presets:[["@babel/env",{modules:!1,exclude:["babel-plugin-transform-async-to-generator","babel-plugin-transform-regenerator"]}]]})}};n.b={devtool:p.b&&"cheap-module-source-map",resolve:{alias:{lodash:"lodash-es"},extensions:[".js",".scss"],modules:[Object(p.d)("src"),"node_modules"]},module:{rules:[{test:/\.pug$/,use:["apply-loader",{loader:"pug-loader",options:{pretty:p.b}}]},{test:/\.scss$/,oneOf:[{test:/app.scss/,use:b()},{test:/./,use:b(!0)}]}]},plugins:[new s.a.DefinePlugin({"process.env.NODE_ENV":JSON.stringify(p.a),__DEV__:p.b}),new a.a({disable:!0,filename:"[name].[contenthash].css"}),new u.a].concat(function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(p.b?[new s.a.NamedModulesPlugin,new s.a.NamedChunksPlugin]:[new s.a.NoEmitOnErrorsPlugin,new s.a.optimize.ModuleConcatenationPlugin,new l.a]))}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(7),s=t.n(r),o=t(2),a=t.n(o),i=t(8),u=t.n(i),c=t(9),l=t.n(c),p=t(10),d=t.n(p),f=t(11),m=t.n(f),b=t(12),g=t.n(b),h=t(13),v=t.n(h),w=t(14),x=t.n(w),j=t(15),y=t.n(j),O=t(16),k=t.n(O),P=t(17),q=(t.n(P),t(0));function _(){return(_=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var E,S,M=a()("1stg:server"),C=q.b?t(19).renderFile(Object(q.d)("server/template.pug"),{pretty:!0}):s.a.readFileSync(Object(q.d)("dist/template.html"),"utf-8"),N=new u.a,R=k()(1e3),A=[v()(),x()("/public",y()(Object(q.d)("public"),{maxAge:31536e6})),async function(e,n){if(q.b)await E;else if(await e.cashed())return;if("GET"!==e.method||e.url.lastIndexOf(".")>e.url.lastIndexOf("/")||!["*/*","text/html"].find(function(n){return e.get("Accept").includes(n)}))return n();var t={ctx:e,title:"React Hackernews"};e.respond=!1;var r=e.res;S.renderToStream(t).on("afterRender",function(){e.status=t.code||200,e.set({"Content-Type":"text/html"})}).on("error",function(n){var t=n.status,s=n.url;if(s)return e.status=302,e.set({Location:s}),r.end();switch(e.status=t||500,t){case 404:return r.end("404 | Page Not Found");default:r.end("500 | Internal Server Error"),M("error during render : ".concat(s)),M(n.stack)}}).pipe(r)}],F=function(e,n){return Object(P.createBundleRenderer)(e,_({},n,{template:C,basedir:Object(q.d)("dist/static"),runInNewContext:!1}))};if(q.b){var D=t(20).default(function(e){var n=e.bundle,t=e.clientManifest;S=F(n,{clientManifest:t})}),T=D.readyPromise,V=D.webpackMiddleware;E=T,A.push(V)}else{S=F(Object(q.e)(Object(q.d)("dist/ssr-server-bundle.json")),{clientManifest:Object(q.e)(Object(q.d)("dist/ssr-client-manifest.json"))});var $={};A.splice(1,0,m()(),y()(Object(q.d)("dist/static"),{maxAge:31536e6},$),g()(l()({get:function(e){return R.get(e)},set:function(e,n){return R.set(e,n)}}))),$["/service-worker.js"].maxAge=0}N.use(d()(A)),N.listen(q.g,q.f,function(){M("Server start listening at %s:%s",q.f,q.g)})},function(e,n){e.exports=require("fs")},function(e,n){e.exports=require("koa")},function(e,n){e.exports=require("koa-cash")},function(e,n){e.exports=require("koa-compose")},function(e,n){e.exports=require("koa-compress")},function(e,n){e.exports=require("koa-convert")},function(e,n){e.exports=require("koa-logger")},function(e,n){e.exports=require("koa-mount")},function(e,n){e.exports=require("koa-static-cache")},function(e,n){e.exports=require("lru-cache")},function(e,n){e.exports=require("react-server-renderer")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("pug")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(2),s=t.n(r),o=t(21),a=t.n(o),i=t(22),u=t.n(i),c=t(1),l=t.n(c),p=t(0),d=t(23),f=t(28),m=s()("1stg:server:dev");n.default=function(e){var n,t,r,s,o=new Promise(function(e){n=e}),i=function(){n(),e.apply(void 0,arguments)},c=l()(d.a),b=a()({compiler:c,dev:{stats:{colors:!0}}});c.plugin("done",function(e){(e=e.toJson()).errors.forEach(m),e.warnings.forEach(m),e.errors.length||(s=b.dev.fileSystem,t=JSON.parse(s.readFileSync(Object(p.d)("dist/ssr-client-manifest.json"))),r&&i({bundle:r,clientManifest:t,fs:s}))});var g=new u.a,h=l()(f.a);return h.outputFileSystem=g,h.watch({},function(e,n){if(e)throw e;(n=n.toJson()).errors.length||(r=JSON.parse(g.readFileSync(Object(p.d)("dist/ssr-server-bundle.json"))),t&&i({bundle:r,clientManifest:t,fs:s}))}),{readyPromise:o,webpackMiddleware:b}}},function(e,n){e.exports=require("koa-webpack")},function(e,n){e.exports=require("memory-fs")},function(e,n,t){"use strict";var r=t(1),s=t.n(r),o=t(3),a=t.n(o),i=t(4),u=(t.n(i),t(24)),c=t.n(u),l=t(0),p=t(5),d=a.a.smart(p.b,{entry:{app:Object(l.d)("src/entry-client.js")},resolve:{alias:{"create-api":"./create-api-client.js"}},output:{publicPath:l.c,path:Object(l.d)("dist/static"),filename:"[name].[".concat(l.b?"hash":"chunkhash","].js")},module:{rules:[Object(p.a)()]},plugins:[new s.a.DefinePlugin({"process.env.REACT_ENV":'"client"',__SERVER__:!1}),new s.a.optimize.CommonsChunkPlugin({name:"vendors",minChunks:function(e){var n=e.context,t=e.request;return/node_modules/.test(n)&&!/\.css$/.test(t)}}),new s.a.optimize.CommonsChunkPlugin({name:"manifest"}),new i.SSRClientPlugin({filename:"../ssr-client-manifest.json"})]});l.b||d.plugins.push(new c.a({cacheId:"react-hn",filename:"service-worker.js",minify:!0,dontCacheBustUrlsMatching:/./,staticFileGlobsIgnorePatterns:[/\.map$/,/\.json$/],runtimeCaching:[{urlPattern:"/",handler:"networkFirst"},{urlPattern:/\/(top|new|show|ask|jobs)/,handler:"networkFirst"},{urlPattern:"/item/:id",handler:"networkFirst"},{urlPattern:"/user/:id",handler:"networkFirst"}]})),n.a=d},function(e,n){e.exports=require("sw-precache-webpack-plugin")},function(e,n){e.exports=require("extract-text-webpack-plugin")},function(e,n){e.exports=require("friendly-errors-webpack-plugin")},function(e,n){e.exports=require("uglifyjs-webpack-plugin")},function(e,n,t){"use strict";var r=t(1),s=t.n(r),o=t(3),a=t.n(o),i=t(29),u=t.n(i),c=t(4),l=(t.n(c),t(0)),p=t(5);n.a=a.a.smart(p.b,{entry:Object(l.d)("src/entry-server.js"),resolve:{alias:{"create-api":"./create-api-server.js"}},target:"node",output:{path:Object(l.d)("dist"),filename:"[name].[chunkhash].js",libraryTarget:"commonjs2"},externals:u()({whitelist:/\.s?css$/}),module:{rules:[Object(p.a)(!0)]},plugins:[new s.a.DefinePlugin({"process.env.REACT_ENV":'"server"',__SERVER__:!0}),new c.SSRServerPlugin]})},function(e,n){e.exports=require("webpack-node-externals")}]);