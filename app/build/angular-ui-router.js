!function(e){function t(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=p.p+""+e+"."+w+".hot-update.js",t.appendChild(r)}function r(e){if("undefined"==typeof XMLHttpRequest)return e(new Error("No browser support"));try{var t=new XMLHttpRequest,r=p.p+""+w+".hot-update.json";t.open("GET",r,!0),t.timeout=1e4,t.send(null)}catch(n){return e(n)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)e(new Error("Manifest request to "+r+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)e(new Error("Manifest request to "+r+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(a){return void e(a)}e(null,n)}}}function n(e){function t(e,t){"ready"===S&&i("prepare"),O++,p.e(e,function(){function r(){O--,"prepare"===S&&(P[e]||l(e),0===O&&0===j&&c())}try{t.call(null,n)}finally{r()}})}var r=q[e];if(!r)return p;var n=function(t){return r.hot.active?q[t]?(q[t].parents.indexOf(e)<0&&q[t].parents.push(e),r.children.indexOf(t)<0&&r.children.push(t)):x=[e]:(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),x=[]),p(t)};for(var a in p)Object.prototype.hasOwnProperty.call(p,a)&&(d?Object.defineProperty(n,a,function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(t){p[e]=t}}}(a)):n[a]=p[a]);return d?Object.defineProperty(n,"e",{enumerable:!0,value:t}):n.e=t,n}function a(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],active:!0,accept:function(e,r){if("undefined"==typeof e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r;else t._acceptedDependencies[e]=r},decline:function(e){if("undefined"==typeof e)t._selfDeclined=!0;else if("number"==typeof e)t._declinedDependencies[e]=!0;else for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:u,apply:f,status:function(e){return e?void E.push(e):S},addStatusHandler:function(e){E.push(e)},removeStatusHandler:function(e){var t=E.indexOf(e);t>=0&&E.splice(t,1)},data:b[e]};return t}function i(e){S=e;for(var t=0;t<E.length;t++)E[t].call(null,e)}function o(e){var t=+e+""===e;return t?+e:e}function u(e,t){if("idle"!==S)throw new Error("check() is only allowed in idle status");"function"==typeof e?(g=!1,t=e):(g=e,t=t||function(e){if(e)throw e}),i("check"),r(function(e,r){if(e)return t(e);if(!r)return i("idle"),void t(null,null);A={},k={},P={};for(var n=0;n<r.c.length;n++)k[r.c[n]]=!0;y=r.h,i("prepare"),$=t,m={};var a=2;l(a),"prepare"===S&&0===O&&0===j&&c()})}function s(e,t){if(k[e]&&A[e]){A[e]=!1;for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(m[r]=t[r]);0===--j&&0===O&&c()}}function l(e){k[e]?(A[e]=!0,j++,t(e)):P[e]=!0}function c(){i("ready");var e=$;if($=null,e)if(g)f(g,e);else{var t=[];for(var r in m)Object.prototype.hasOwnProperty.call(m,r)&&t.push(o(r));e(null,t)}}function f(t,r){function n(e){for(var t=[e],r={},n=t.slice();n.length>0;){var i=n.pop(),e=q[i];if(e&&!e.hot._selfAccepted){if(e.hot._selfDeclined)return new Error("Aborted because of self decline: "+i);if(0===i)return;for(var o=0;o<e.parents.length;o++){var u=e.parents[o],s=q[u];if(s.hot._declinedDependencies[i])return new Error("Aborted because of declined dependency: "+i+" in "+u);t.indexOf(u)>=0||(s.hot._acceptedDependencies[i]?(r[u]||(r[u]=[]),a(r[u],[i])):(delete r[u],t.push(u),n.push(u)))}}}return[t,r]}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];e.indexOf(n)<0&&e.push(n)}}if("ready"!==S)throw new Error("apply() is only allowed in ready status");"function"==typeof t?(r=t,t={}):t&&"object"==typeof t?r=r||function(e){if(e)throw e}:(t={},r=r||function(e){if(e)throw e});var u={},s=[],l={};for(var c in m)if(Object.prototype.hasOwnProperty.call(m,c)){var f=o(c),h=n(f);if(!h){if(t.ignoreUnaccepted)continue;return i("abort"),r(new Error("Aborted because "+f+" is not accepted"))}if(h instanceof Error)return i("abort"),r(h);l[f]=m[f],a(s,h[0]);for(var f in h[1])Object.prototype.hasOwnProperty.call(h[1],f)&&(u[f]||(u[f]=[]),a(u[f],h[1][f]))}for(var d=[],v=0;v<s.length;v++){var f=s[v];q[f]&&q[f].hot._selfAccepted&&d.push({module:f,errorHandler:q[f].hot._selfAccepted})}i("dispose");for(var $=s.slice();$.length>0;){var f=$.pop(),g=q[f];if(g){for(var E={},j=g.hot._disposeHandlers,O=0;O<j.length;O++){var P=j[O];P(E)}b[f]=E,g.hot.active=!1,delete q[f];for(var O=0;O<g.children.length;O++){var A=q[g.children[O]];if(A){var k=A.parents.indexOf(f);k>=0&&A.parents.splice(k,1)}}}}for(var f in u)if(Object.prototype.hasOwnProperty.call(u,f))for(var g=q[f],C=u[f],O=0;O<C.length;O++){var I=C[O],k=g.children.indexOf(I);k>=0&&g.children.splice(k,1)}i("apply"),w=y;for(var f in l)Object.prototype.hasOwnProperty.call(l,f)&&(e[f]=l[f]);var D=null;for(var f in u)if(Object.prototype.hasOwnProperty.call(u,f)){for(var g=q[f],C=u[f],_=[],v=0;v<C.length;v++){var I=C[v],P=g.hot._acceptedDependencies[I];_.indexOf(P)>=0||_.push(P)}for(var v=0;v<_.length;v++){var P=_[v];try{P(u)}catch(V){D||(D=V)}}}for(var v=0;v<d.length;v++){var M=d[v],f=M.module;x=[f];try{p(f)}catch(V){if("function"==typeof M.errorHandler)try{M.errorHandler(V)}catch(V){D||(D=V)}else D||(D=V)}}return D?(i("fail"),r(D)):(i("idle"),void r(null,s))}function p(t){if(q[t])return q[t].exports;var r=q[t]={exports:{},id:t,loaded:!1,hot:a(t),parents:x,children:[]};return e[t].call(r.exports,r,r.exports,n(t)),r.loaded=!0,r.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){s(e,t),h&&h(e,t)};var d=!1;try{Object.defineProperty({},"x",{get:function(){}}),d=!0}catch(v){}var $,m,y,g=!0,w="b64876f052bd49c9c7d3",b={},x=[],E=[],S="idle",j=0,O=0,P={},A={},k={},q={};return p.m=e,p.c=q,p.p="/build/",p.h=function(){return w},n(0)(0)}([function(e,t){/**
	 * State-based routing for AngularJS
	 * @version v0.3.1
	 * @link http://angular-ui.github.com/
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */
"undefined"!=typeof e&&"undefined"!=typeof t&&e.exports===t&&(e.exports="ui.router"),function(e,t,r){"use strict";function n(e,t){return L(new(L(function(){},{prototype:e})),t)}function a(e){return T(arguments,function(t){t!==e&&T(t,function(t,r){e.hasOwnProperty(r)||(e[r]=t)})}),e}function i(e,t){var r=[];for(var n in e.path){if(e.path[n]!==t.path[n])break;r.push(e.path[n])}return r}function o(e){if(Object.keys)return Object.keys(e);var t=[];return T(e,function(e,r){t.push(r)}),t}function u(e,t){if(Array.prototype.indexOf)return e.indexOf(t,Number(arguments[2])||0);var r=e.length>>>0,n=Number(arguments[2])||0;for(n=0>n?Math.ceil(n):Math.floor(n),0>n&&(n+=r);r>n;n++)if(n in e&&e[n]===t)return n;return-1}function s(e,t,r,n){var a,s=i(r,n),l={},c=[];for(var f in s)if(s[f]&&s[f].params&&(a=o(s[f].params),a.length))for(var p in a)u(c,a[p])>=0||(c.push(a[p]),l[a[p]]=e[a[p]]);return L({},l,t)}function l(e,t,r){if(!r){r=[];for(var n in e)r.push(n)}for(var a=0;a<r.length;a++){var i=r[a];if(e[i]!=t[i])return!1}return!0}function c(e,t){var r={};return T(e,function(e){r[e]=t[e]}),r}function f(e){var t={},r=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return T(r,function(r){r in e&&(t[r]=e[r])}),t}function p(e){var t={},r=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var n in e)-1==u(r,n)&&(t[n]=e[n]);return t}function h(e,t){var r=F(e),n=r?[]:{};return T(e,function(e,a){t(e,a)&&(n[r?n.length:a]=e)}),n}function d(e,t){var r=F(e)?[]:{};return T(e,function(e,n){r[n]=t(e,n)}),r}function v(e,t){var n=1,i=2,s={},l=[],c=s,f=L(e.when(s),{$$promises:s,$$values:s});this.study=function(s){function h(e,r){if(y[r]!==i){if(m.push(r),y[r]===n)throw m.splice(0,u(m,r)),new Error("Cyclic dependency: "+m.join(" -> "));if(y[r]=n,R(e))$.push(r,[function(){return t.get(e)}],l);else{var a=t.annotate(e);T(a,function(e){e!==r&&s.hasOwnProperty(e)&&h(s[e],e)}),$.push(r,e,a)}m.pop(),y[r]=i}}function d(e){return U(e)&&e.then&&e.$$promises}if(!U(s))throw new Error("'invocables' must be an object");var v=o(s||{}),$=[],m=[],y={};return T(s,h),s=m=y=null,function(n,i,o){function u(){--w||(b||a(g,i.$$values),m.$$values=g,m.$$promises=m.$$promises||!0,delete m.$$inheritedValues,h.resolve(g))}function s(e){m.$$failure=e,h.reject(e)}function l(r,a,i){function l(e){f.reject(e),s(e)}function c(){if(!H(m.$$failure))try{f.resolve(t.invoke(a,o,g)),f.promise.then(function(e){g[r]=e,u()},l)}catch(e){l(e)}}var f=e.defer(),p=0;T(i,function(e){y.hasOwnProperty(e)&&!n.hasOwnProperty(e)&&(p++,y[e].then(function(t){g[e]=t,--p||c()},l))}),p||c(),y[r]=f.promise}if(d(n)&&o===r&&(o=i,i=n,n=null),n){if(!U(n))throw new Error("'locals' must be an object")}else n=c;if(i){if(!d(i))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else i=f;var h=e.defer(),m=h.promise,y=m.$$promises={},g=L({},n),w=1+$.length/3,b=!1;if(H(i.$$failure))return s(i.$$failure),m;i.$$inheritedValues&&a(g,p(i.$$inheritedValues,v)),L(y,i.$$promises),i.$$values?(b=a(g,p(i.$$values,v)),m.$$inheritedValues=p(i.$$values,v),u()):(i.$$inheritedValues&&(m.$$inheritedValues=p(i.$$inheritedValues,v)),i.then(u,s));for(var x=0,E=$.length;E>x;x+=3)n.hasOwnProperty($[x])?u():l($[x],$[x+1],$[x+2]);return m}},this.resolve=function(e,t,r,n){return this.study(e)(t,r,n)}}function $(e,t,r){this.fromConfig=function(e,t,r){return H(e.template)?this.fromString(e.template,t):H(e.templateUrl)?this.fromUrl(e.templateUrl,t):H(e.templateProvider)?this.fromProvider(e.templateProvider,t,r):null},this.fromString=function(e,t){return N(e)?e(t):e},this.fromUrl=function(r,n){return N(r)&&(r=r(n)),null==r?null:e.get(r,{cache:t,headers:{Accept:"text/html"}}).then(function(e){return e.data})},this.fromProvider=function(e,t,n){return r.invoke(e,null,n||{params:t})}}function m(e,t,a){function i(t,r,n,a){if($.push(t),d[t])return d[t];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(t))throw new Error("Invalid parameter name '"+t+"' in pattern '"+e+"'");if(v[t])throw new Error("Duplicate parameter name '"+t+"' in pattern '"+e+"'");return v[t]=new K.Param(t,r,n,a),v[t]}function o(e,t,r,n){var a=["",""],i=e.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!t)return i;switch(r){case!1:a=["(",")"+(n?"?":"")];break;case!0:i=i.replace(/\/$/,""),a=["(?:/(",")|/)?"];break;default:a=["("+r+"|",")?"]}return i+a[0]+t+a[1]}function u(a,i){var o,u,s,l,c;return o=a[2]||a[3],c=t.params[o],s=e.substring(p,a.index),u=i?a[4]:a[4]||("*"==a[1]?".*":null),u&&(l=K.type(u)||n(K.type("string"),{pattern:new RegExp(u,t.caseInsensitive?"i":r)})),{id:o,regexp:u,segment:s,type:l,cfg:c}}t=L({params:{}},U(t)?t:{});var s,l=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,c=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f="^",p=0,h=this.segments=[],d=a?a.params:{},v=this.params=a?a.params.$$new():new K.ParamSet,$=[];this.source=e;for(var m,y,g;(s=l.exec(e))&&(m=u(s,!1),!(m.segment.indexOf("?")>=0));)y=i(m.id,m.type,m.cfg,"path"),f+=o(m.segment,y.type.pattern.source,y.squash,y.isOptional),h.push(m.segment),p=l.lastIndex;g=e.substring(p);var w=g.indexOf("?");if(w>=0){var b=this.sourceSearch=g.substring(w);if(g=g.substring(0,w),this.sourcePath=e.substring(0,p+w),b.length>0)for(p=0;s=c.exec(b);)m=u(s,!0),y=i(m.id,m.type,m.cfg,"search"),p=l.lastIndex}else this.sourcePath=e,this.sourceSearch="";f+=o(g)+(t.strict===!1?"/?":"")+"$",h.push(g),this.regexp=new RegExp(f,t.caseInsensitive?"i":r),this.prefix=h[0],this.$$paramNames=$}function y(e){L(this,e)}function g(){function e(e){return null!=e?e.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):e}function a(e){return null!=e?e.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):e}function i(){return{strict:v,caseInsensitive:p}}function s(e){return N(e)||F(e)&&N(e[e.length-1])}function l(){for(;x.length;){var e=x.shift();if(e.pattern)throw new Error("You cannot override a type's .pattern at runtime.");t.extend(w[e.name],f.invoke(e.def))}}function c(e){L(this,e||{})}K=this;var f,p=!1,v=!0,$=!1,w={},b=!0,x=[],E={string:{encode:e,decode:a,is:function(e){return null==e||!H(e)||"string"==typeof e},pattern:/[^\/]*/},"int":{encode:e,decode:function(e){return parseInt(e,10)},is:function(e){return H(e)&&this.decode(e.toString())===e},pattern:/\d+/},bool:{encode:function(e){return e?1:0},decode:function(e){return 0!==parseInt(e,10)},is:function(e){return e===!0||e===!1},pattern:/0|1/},date:{encode:function(e){return this.is(e)?[e.getFullYear(),("0"+(e.getMonth()+1)).slice(-2),("0"+e.getDate()).slice(-2)].join("-"):r},decode:function(e){if(this.is(e))return e;var t=this.capture.exec(e);return t?new Date(t[1],t[2]-1,t[3]):r},is:function(e){return e instanceof Date&&!isNaN(e.valueOf())},equals:function(e,t){return this.is(e)&&this.is(t)&&e.toISOString()===t.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:t.toJson,decode:t.fromJson,is:t.isObject,equals:t.equals,pattern:/[^\/]*/},any:{encode:t.identity,decode:t.identity,equals:t.equals,pattern:/.*/}};g.$$getDefaultValue=function(e){if(!s(e.value))return e.value;if(!f)throw new Error("Injectable functions cannot be called at configuration time");return f.invoke(e.value)},this.caseInsensitive=function(e){return H(e)&&(p=e),p},this.strictMode=function(e){return H(e)&&(v=e),v},this.defaultSquashPolicy=function(e){if(!H(e))return $;if(e!==!0&&e!==!1&&!R(e))throw new Error("Invalid squash policy: "+e+". Valid policies: false, true, arbitrary-string");return $=e,e},this.compile=function(e,t){return new m(e,L(i(),t))},this.isMatcher=function(e){if(!U(e))return!1;var t=!0;return T(m.prototype,function(r,n){N(r)&&(t=t&&H(e[n])&&N(e[n]))}),t},this.type=function(e,t,r){if(!H(t))return w[e];if(w.hasOwnProperty(e))throw new Error("A type named '"+e+"' has already been defined.");return w[e]=new y(L({name:e},t)),r&&(x.push({name:e,def:r}),b||l()),this},T(E,function(e,t){w[t]=new y(L({name:t},e))}),w=n(w,{}),this.$get=["$injector",function(e){return f=e,b=!1,l(),T(E,function(e,t){w[t]||(w[t]=new y(e))}),this}],this.Param=function(e,n,a,i){function l(e){var t=U(e)?o(e):[],r=-1===u(t,"value")&&-1===u(t,"type")&&-1===u(t,"squash")&&-1===u(t,"array");return r&&(e={value:e}),e.$$fn=s(e.value)?e.value:function(){return e.value},e}function c(r,n,a){if(r.type&&n)throw new Error("Param '"+e+"' has two type configurations.");return n?n:r.type?t.isString(r.type)?w[r.type]:r.type instanceof y?r.type:new y(r.type):"config"===a?w.any:w.string}function p(){var t={array:"search"===i?"auto":!1},r=e.match(/\[\]$/)?{array:!0}:{};return L(t,r,a).array}function v(e,t){var r=e.squash;if(!t||r===!1)return!1;if(!H(r)||null==r)return $;if(r===!0||R(r))return r;throw new Error("Invalid squash policy: '"+r+"'. Valid policies: false, true, or arbitrary string")}function m(e,t,n,a){var i,o,s=[{from:"",to:n||t?r:""},{from:null,to:n||t?r:""}];return i=F(e.replace)?e.replace:[],R(a)&&i.push({from:a,to:r}),o=d(i,function(e){return e.from}),h(s,function(e){return-1===u(o,e.from)}).concat(i)}function g(){if(!f)throw new Error("Injectable functions cannot be called at configuration time");var e=f.invoke(a.$$fn);if(null!==e&&e!==r&&!E.type.is(e))throw new Error("Default value ("+e+") for parameter '"+E.id+"' is not an instance of Type ("+E.type.name+")");return e}function b(e){function t(e){return function(t){return t.from===e}}function r(e){var r=d(h(E.replace,t(e)),function(e){return e.to});return r.length?r[0]:e}return e=r(e),H(e)?E.type.$normalize(e):g()}function x(){return"{Param:"+e+" "+n+" squash: '"+O+"' optional: "+j+"}"}var E=this;a=l(a),n=c(a,n,i);var S=p();n=S?n.$asArray(S,"search"===i):n,"string"!==n.name||S||"path"!==i||a.value!==r||(a.value="");var j=a.value!==r,O=v(a,j),P=m(a,S,j,O);L(this,{id:e,type:n,location:i,array:S,squash:O,replace:P,isOptional:j,value:b,dynamic:r,config:a,toString:x})},c.prototype={$$new:function(){return n(this,L(new c,{$$parent:this}))},$$keys:function(){for(var e=[],t=[],r=this,n=o(c.prototype);r;)t.push(r),r=r.$$parent;return t.reverse(),T(t,function(t){T(o(t),function(t){-1===u(e,t)&&-1===u(n,t)&&e.push(t)})}),e},$$values:function(e){var t={},r=this;return T(r.$$keys(),function(n){t[n]=r[n].value(e&&e[n])}),t},$$equals:function(e,t){var r=!0,n=this;return T(n.$$keys(),function(a){var i=e&&e[a],o=t&&t[a];n[a].type.equals(i,o)||(r=!1)}),r},$$validates:function(e){var n,a,i,o,u,s=this.$$keys();for(n=0;n<s.length&&(a=this[s[n]],i=e[s[n]],i!==r&&null!==i||!a.isOptional);n++){if(o=a.type.$normalize(i),!a.type.is(o))return!1;if(u=a.type.encode(o),t.isString(u)&&!a.type.pattern.exec(u))return!1}return!0},$$parent:r},this.ParamSet=c}function w(e,n){function a(e){var t=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);return null!=t?t[1].replace(/\\(.)/g,"$1"):""}function i(e,t){return e.replace(/\$(\$|\d{1,2})/,function(e,r){return t["$"===r?0:Number(r)]})}function o(e,t,r){if(!r)return!1;var n=e.invoke(t,t,{$match:r});return H(n)?n:!0}function u(n,a,i,o,u){function p(e,t,r){return"/"===$?e:t?$.slice(0,-1)+e:r?$.slice(1)+e:e}function h(e){function t(e){var t=e(i,n);return t?(R(t)&&n.replace().url(t),!0):!1}if(!e||!e.defaultPrevented){v&&n.url()===v;v=r;var a,o=l.length;for(a=0;o>a;a++)if(t(l[a]))return;c&&t(c)}}function d(){return s=s||a.$on("$locationChangeSuccess",h)}var v,$=o.baseHref(),m=n.url();return f||d(),{sync:function(){h()},listen:function(){return d()},update:function(e){return e?void(m=n.url()):void(n.url()!==m&&(n.url(m),n.replace()))},push:function(e,t,a){var i=e.format(t||{});null!==i&&t&&t["#"]&&(i+="#"+t["#"]),n.url(i),v=a&&a.$$avoidResync?n.url():r,a&&a.replace&&n.replace()},href:function(r,a,i){if(!r.validates(a))return null;var o=e.html5Mode();t.isObject(o)&&(o=o.enabled),o=o&&u.history;var s=r.format(a);if(i=i||{},o||null===s||(s="#"+e.hashPrefix()+s),null!==s&&a&&a["#"]&&(s+="#"+a["#"]),s=p(s,o,i.absolute),!i.absolute||!s)return s;var l=!o&&s?"/":"",c=n.port();return c=80===c||443===c?"":":"+c,[n.protocol(),"://",n.host(),c,l,s].join("")}}}var s,l=[],c=null,f=!1;this.rule=function(e){if(!N(e))throw new Error("'rule' must be a function");return l.push(e),this},this.otherwise=function(e){if(R(e)){var t=e;e=function(){return t}}else if(!N(e))throw new Error("'rule' must be a function");return c=e,this},this.when=function(e,t){var r,u=R(t);if(R(e)&&(e=n.compile(e)),!u&&!N(t)&&!F(t))throw new Error("invalid 'handler' in when()");var s={matcher:function(e,t){return u&&(r=n.compile(t),t=["$match",function(e){return r.format(e)}]),L(function(r,n){return o(r,t,e.exec(n.path(),n.search()))},{prefix:R(e.prefix)?e.prefix:""})},regex:function(e,t){if(e.global||e.sticky)throw new Error("when() RegExp must not be global or sticky");return u&&(r=t,t=["$match",function(e){return i(r,e)}]),L(function(r,n){return o(r,t,e.exec(n.path()))},{prefix:a(e)})}},l={matcher:n.isMatcher(e),regex:e instanceof RegExp};for(var c in l)if(l[c])return this.rule(s[c](e,t));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(e){e===r&&(e=!0),f=e},this.$get=u,u.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function b(e,a){function i(e){return 0===e.indexOf(".")||0===e.indexOf("^")}function p(e,t){if(!e)return r;var n=R(e),a=n?e:e.name,o=i(a);if(o){if(!t)throw new Error("No reference point given for path '"+a+"'");t=p(t);for(var u=a.split("."),s=0,l=u.length,c=t;l>s;s++)if(""!==u[s]||0!==s){if("^"!==u[s])break;if(!c.parent)throw new Error("Path '"+a+"' not valid for state '"+t.name+"'");c=c.parent}else c=t;u=u.slice(s).join("."),a=c.name+(c.name&&u?".":"")+u}var f=j[a];return!f||!n&&(n||f!==e&&f.self!==e)?r:f}function h(e,t){O[e]||(O[e]=[]),O[e].push(t)}function v(e){for(var t=O[e]||[];t.length;)$(t.shift())}function $(t){t=n(t,{self:t,resolve:t.resolve||{},toString:function(){return this.name}});var r=t.name;if(!R(r)||r.indexOf("@")>=0)throw new Error("State must have a valid name");if(j.hasOwnProperty(r))throw new Error("State '"+r+"' is already defined");var a=-1!==r.indexOf(".")?r.substring(0,r.lastIndexOf(".")):R(t.parent)?t.parent:U(t.parent)&&R(t.parent.name)?t.parent.name:"";if(a&&!j[a])return h(a,t.self);for(var i in A)N(A[i])&&(t[i]=A[i](t,A.$delegates[i]));return j[r]=t,!t[P]&&t.url&&e.when(t.url,["$match","$stateParams",function(e,r){S.$current.navigable==t&&l(e,r)||S.transitionTo(t,e,{inherit:!0,location:!1})}]),v(r),t}function m(e){return e.indexOf("*")>-1}function y(e){for(var t=e.split("."),r=S.$current.name.split("."),n=0,a=t.length;a>n;n++)"*"===t[n]&&(r[n]="*");return"**"===t[0]&&(r=r.slice(u(r,t[1])),r.unshift("**")),"**"===t[t.length-1]&&(r.splice(u(r,t[t.length-2])+1,Number.MAX_VALUE),r.push("**")),t.length!=r.length?!1:r.join("")===t.join("")}function g(e,t){return R(e)&&!H(t)?A[e]:N(t)&&R(e)?(A[e]&&!A.$delegates[e]&&(A.$delegates[e]=A[e]),A[e]=t,this):this}function w(e,t){return U(e)?t=e:t.name=e,$(t),this}function b(e,a,i,u,f,h,v,$,g){function w(t,r,n,i){var o=e.$broadcast("$stateNotFound",t,r,n);if(o.defaultPrevented)return v.update(),k;if(!o.retry)return null;if(i.$retry)return v.update(),q;var u=S.transition=a.when(o.retry);return u.then(function(){return u!==S.transition?O:(t.options.$retry=!0,S.transitionTo(t.to,t.toParams,t.options))},function(){return k}),v.update(),u}function b(e,r,n,o,s,l){function p(){var r=[];return T(e.views,function(n,a){var o=n.resolve&&n.resolve!==e.resolve?n.resolve:{};o.$template=[function(){return i.load(a,{view:n,locals:s.globals,params:h,notify:l.notify})||""}],r.push(f.resolve(o,s.globals,s.resolve,e).then(function(r){if(N(n.controllerProvider)||F(n.controllerProvider)){var i=t.extend({},o,s.globals);r.$$controller=u.invoke(n.controllerProvider,null,i)}else r.$$controller=n.controller;r.$$state=e,r.$$controllerAs=n.controllerAs,r.$$resolveAs=n.resolveAs,s[a]=r}))}),a.all(r).then(function(){return s.globals})}var h=n?r:c(e.params.$$keys(),r),d={$stateParams:h};s.resolve=f.resolve(e.resolve,d,s.resolve,e);var v=[s.resolve.then(function(e){s.globals=e})];return o&&v.push(o),a.all(v).then(p).then(function(e){return s})}var O=a.reject(new Error("transition superseded")),A=a.reject(new Error("transition prevented")),k=a.reject(new Error("transition aborted")),q=a.reject(new Error("transition failed"));return E.locals={resolve:null,globals:{$stateParams:{}}},S={params:{},current:E.self,$current:E,transition:null},S.reload=function(e){return S.transitionTo(S.current,h,{reload:e||!0,inherit:!1,notify:!0})},S.go=function(e,t,r){return S.transitionTo(e,t,L({inherit:!0,relative:S.$current},r))},S.transitionTo=function(t,r,i){r=r||{},i=L({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},i||{});var o,l=S.$current,f=S.params,d=l.path,$=p(t,i.relative),m=r["#"];if(!H($)){var y={to:t,toParams:r,options:i},g=w(y,l.self,f,i);if(g)return g;if(t=y.to,r=y.toParams,i=y.options,$=p(t,i.relative),!H($)){if(!i.relative)throw new Error("No such state '"+t+"'");throw new Error("Could not resolve '"+t+"' from state '"+i.relative+"'")}}if($[P])throw new Error("Cannot transition to abstract state '"+t+"'");if(i.inherit&&(r=s(h,r||{},S.$current,$)),!$.params.$$validates(r))return q;r=$.params.$$values(r),t=$;var j=t.path,k=0,C=j[k],I=E.locals,D=[];if(i.reload){if(R(i.reload)||U(i.reload)){if(U(i.reload)&&!i.reload.name)throw new Error("Invalid reload state object");var _=i.reload===!0?d[0]:p(i.reload);if(i.reload&&!_)throw new Error("No such reload state '"+(R(i.reload)?i.reload:i.reload.name)+"'");for(;C&&C===d[k]&&C!==_;)I=D[k]=C.locals,k++,C=j[k]}}else for(;C&&C===d[k]&&C.ownParams.$$equals(r,f);)I=D[k]=C.locals,k++,C=j[k];if(x(t,r,l,f,I,i))return m&&(r["#"]=m),S.params=r,z(S.params,h),z(c(t.params.$$keys(),h),t.locals.globals.$stateParams),i.location&&t.navigable&&t.navigable.url&&(v.push(t.navigable.url,r,{$$avoidResync:!0,replace:"replace"===i.location}),v.update(!0)),S.transition=null,a.when(S.current);if(r=c(t.params.$$keys(),r||{}),m&&(r["#"]=m),i.notify&&e.$broadcast("$stateChangeStart",t.self,r,l.self,f,i).defaultPrevented)return e.$broadcast("$stateChangeCancel",t.self,r,l.self,f),null==S.transition&&v.update(),A;for(var V=a.when(I),M=k;M<j.length;M++,C=j[M])I=D[M]=n(I),V=b(C,r,C===t,V,I,i);var N=S.transition=V.then(function(){var n,a,o;if(S.transition!==N)return O;for(n=d.length-1;n>=k;n--)o=d[n],o.self.onExit&&u.invoke(o.self.onExit,o.self,o.locals.globals),o.locals=null;for(n=k;n<j.length;n++)a=j[n],a.locals=D[n],a.self.onEnter&&u.invoke(a.self.onEnter,a.self,a.locals.globals);return S.transition!==N?O:(S.$current=t,S.current=t.self,S.params=r,z(S.params,h),S.transition=null,i.location&&t.navigable&&v.push(t.navigable.url,t.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===i.location}),i.notify&&e.$broadcast("$stateChangeSuccess",t.self,r,l.self,f),v.update(!0),S.current)}).then(null,function(n){return S.transition!==N?O:(S.transition=null,o=e.$broadcast("$stateChangeError",t.self,r,l.self,f,n),o.defaultPrevented||v.update(),a.reject(n))});return N},S.is=function(e,t,n){n=L({relative:S.$current},n||{});var a=p(e,n.relative);return H(a)?S.$current!==a?!1:t?l(a.params.$$values(t),h):!0:r},S.includes=function(e,t,n){if(n=L({relative:S.$current},n||{}),R(e)&&m(e)){if(!y(e))return!1;e=S.$current.name}var a=p(e,n.relative);return H(a)?H(S.$current.includes[a.name])?t?l(a.params.$$values(t),h,o(t)):!0:!1:r},S.href=function(e,t,n){n=L({lossy:!0,inherit:!0,absolute:!1,relative:S.$current},n||{});var a=p(e,n.relative);if(!H(a))return null;n.inherit&&(t=s(h,t||{},S.$current,a));var i=a&&n.lossy?a.navigable:a;return i&&i.url!==r&&null!==i.url?v.href(i.url,c(a.params.$$keys().concat("#"),t||{}),{absolute:n.absolute}):null},S.get=function(e,t){if(0===arguments.length)return d(o(j),function(e){return j[e].self});var r=p(e,t||S.$current);return r&&r.self?r.self:null},S}function x(e,t,r,n,a,i){function o(e,t,r){function n(t){return"search"!=e.params[t].location}var a=e.params.$$keys().filter(n),i=f.apply({},[e.params].concat(a)),o=new K.ParamSet(i);return o.$$equals(t,r)}return!i.reload&&e===r&&(a===r.locals||e.self.reloadOnSearch===!1&&o(r,n,t))?!0:void 0}var E,S,j={},O={},P="abstract",A={parent:function(e){if(H(e.parent)&&e.parent)return p(e.parent);var t=/^(.+)\.[^.]+$/.exec(e.name);return t?p(t[1]):E},data:function(e){return e.parent&&e.parent.data&&(e.data=e.self.data=n(e.parent.data,e.data)),e.data},url:function(e){var t=e.url,r={params:e.params||{}};if(R(t))return"^"==t.charAt(0)?a.compile(t.substring(1),r):(e.parent.navigable||E).url.concat(t,r);if(!t||a.isMatcher(t))return t;throw new Error("Invalid url '"+t+"' in state '"+e+"'")},navigable:function(e){return e.url?e:e.parent?e.parent.navigable:null},ownParams:function(e){var t=e.url&&e.url.params||new K.ParamSet;return T(e.params||{},function(e,r){t[r]||(t[r]=new K.Param(r,null,e,"config"))}),t},params:function(e){var t=f(e.ownParams,e.ownParams.$$keys());return e.parent&&e.parent.params?L(e.parent.params.$$new(),t):new K.ParamSet},views:function(e){var t={};return T(H(e.views)?e.views:{"":e},function(r,n){n.indexOf("@")<0&&(n+="@"+e.parent.name),r.resolveAs=r.resolveAs||e.resolveAs||"$resolve",t[n]=r}),t},path:function(e){return e.parent?e.parent.path.concat(e):[]},includes:function(e){var t=e.parent?L({},e.parent.includes):{};return t[e.name]=!0,t},$delegates:{}};E=$({name:"",url:"^",views:null,"abstract":!0}),E.navigable=null,this.decorator=g,this.state=w,this.$get=b,b.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function x(){function e(e,t){return{load:function(e,r){var n,a={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return r=L(a,r),r.view&&(n=t.fromConfig(r.view,r.params,r.locals)),n}}}this.$get=e,e.$inject=["$rootScope","$templateFactory"]}function E(){var e=!1;this.useAnchorScroll=function(){e=!0},this.$get=["$anchorScroll","$timeout",function(t,r){return e?t:function(e){return r(function(){e[0].scrollIntoView()},0,!1)}}]}function S(e,r,n,a,i){function o(){return r.has?function(e){return r.has(e)?r.get(e):null}:function(e){try{return r.get(e)}catch(t){return null}}}function u(e,r){var n=function(){return{enter:function(e,t,r){t.after(e),r()},leave:function(e,t){e.remove(),t()}}};if(c)return{enter:function(e,r,n){t.version.minor>2?c.enter(e,null,r).then(n):c.enter(e,null,r,n)},leave:function(e,r){t.version.minor>2?c.leave(e).then(r):c.leave(e,r)}};if(l){var a=l&&l(r,e);return{enter:function(e,t,r){a.enter(e,null,t),r()},leave:function(e,t){a.leave(e),t()}}}return n()}var s=o(),l=s("$animator"),c=s("$animate"),f={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(r,o,s){return function(r,o,l){function c(){if(p&&(p.remove(),p=null),d&&(d.$destroy(),d=null),h){var e=h.data("$uiViewAnim");y.leave(h,function(){e.$$animLeave.resolve(),p=null}),p=h,h=null}}function f(u){var f,p=O(r,l,o,a),g=p&&e.$current&&e.$current.locals[p];if(u||g!==v){f=r.$new(),v=e.$current.locals[p],f.$emit("$viewContentLoading",p);var w=s(f,function(e){var a=i.defer(),u=i.defer(),s={$animEnter:a.promise,$animLeave:u.promise,$$animLeave:u};e.data("$uiViewAnim",s),y.enter(e,o,function(){a.resolve(),d&&d.$emit("$viewContentAnimationEnded"),(t.isDefined(m)&&!m||r.$eval(m))&&n(e)}),c()});h=w,d=f,d.$emit("$viewContentLoaded",p),d.$eval($)}}var p,h,d,v,$=l.onload||"",m=l.autoscroll,y=u(l,r);o.inheritedData("$uiView");r.$on("$stateChangeSuccess",function(){f(!1)}),f(!0)}}};return f}function j(e,r,n,a){return{restrict:"ECA",priority:-400,compile:function(i){var o=i.html();return function(i,u,s){var l=n.$current,c=O(i,s,u,a),f=l&&l.locals[c];if(f){u.data("$uiView",{name:c,state:f.$$state}),u.html(f.$template?f.$template:o);var p=t.extend({},f);i[f.$$resolveAs]=p;var h=e(u.contents());if(f.$$controller){f.$scope=i,f.$element=u;var d=r(f.$$controller,f);f.$$controllerAs&&(i[f.$$controllerAs]=d,i[f.$$controllerAs][f.$$resolveAs]=p),N(d.$onInit)&&d.$onInit(),u.data("$ngControllerController",d),u.children().data("$ngControllerController",d)}h(i)}}}}}function O(e,t,r,n){var a=n(t.uiView||t.name||"")(e),i=r.inheritedData("$uiView");return a.indexOf("@")>=0?a:a+"@"+(i?i.state.name:"")}function P(e,t){var r,n=e.match(/^\s*({[^}]*})\s*$/);if(n&&(e=t+"("+n[1]+")"),r=e.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!r||4!==r.length)throw new Error("Invalid state ref '"+e+"'");return{state:r[1],paramExpr:r[3]||null}}function A(e){var t=e.parent().inheritedData("$uiView");return t&&t.state&&t.state.name?t.state:void 0}function k(e){var t="[object SVGAnimatedString]"===Object.prototype.toString.call(e.prop("href")),r="FORM"===e[0].nodeName;return{attr:r?"action":t?"xlink:href":"href",isAnchor:"A"===e.prop("tagName").toUpperCase(),clickable:!r}}function q(e,t,r,n,a){return function(i){var o=i.which||i.button,u=a();if(!(o>1||i.ctrlKey||i.metaKey||i.shiftKey||e.attr("target"))){var s=r(function(){t.go(u.state,u.params,u.options)});i.preventDefault();var l=n.isAnchor&&!u.href?1:0;i.preventDefault=function(){l--<=0&&r.cancel(s)}}}}function C(e,t){return{relative:A(e)||t.$current,inherit:!0}}function I(e,r){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,a,i,o){var u,s=P(i.uiSref,e.current.name),l={state:s.state,href:null,params:null},c=k(a),f=o[1]||o[0],p=null;l.options=L(C(a,e),i.uiSrefOpts?n.$eval(i.uiSrefOpts):{});var h=function(r){r&&(l.params=t.copy(r)),l.href=e.href(s.state,l.params,l.options),p&&p(),f&&(p=f.$$addStateInfo(s.state,l.params)),null!==l.href&&i.$set(c.attr,l.href)};s.paramExpr&&(n.$watch(s.paramExpr,function(e){e!==l.params&&h(e)},!0),l.params=t.copy(n.$eval(s.paramExpr))),h(),c.clickable&&(u=q(a,e,r,c,function(){return l}),a.bind("click",u),n.$on("$destroy",function(){a.unbind("click",u)}))}}}function D(e,t){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(r,n,a,i){function o(t){p.state=t[0],p.params=t[1],p.options=t[2],p.href=e.href(p.state,p.params,p.options),h&&h(),l&&(h=l.$$addStateInfo(p.state,p.params)),p.href&&a.$set(s.attr,p.href)}var u,s=k(n),l=i[1]||i[0],c=[a.uiState,a.uiStateParams||null,a.uiStateOpts||null],f="["+c.map(function(e){return e||"null"}).join(", ")+"]",p={state:null,params:null,options:null,href:null},h=null;r.$watch(f,o,!0),o(r.$eval(f)),s.clickable&&(u=q(n,e,t,s,function(){return p}),n.bind("click",u),r.$on("$destroy",function(){n.unbind("click",u)}))}}}function _(e,t,r){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(t,n,a,i){function o(t,r,a){var i=e.get(t,A(n)),o=u(t,r),s={state:i||{name:t},params:r,hash:o};return v.push(s),$[o]=a,function(){var e=v.indexOf(s);-1!==e&&v.splice(e,1)}}function u(e,r){if(!R(e))throw new Error("state should be a string");return U(r)?e+J(r):(r=t.$eval(r),U(r)?e+J(r):e)}function s(){for(var e=0;e<v.length;e++)f(v[e].state,v[e].params)?l(n,$[v[e].hash]):c(n,$[v[e].hash]),p(v[e].state,v[e].params)?l(n,h):c(n,h)}function l(e,t){i(function(){e.addClass(t)})}function c(e,t){e.removeClass(t)}function f(t,r){return e.includes(t.name,r)}function p(t,r){return e.is(t.name,r)}var h,d,v=[],$={};h=r(a.uiSrefActiveEq||"",!1)(t);try{d=t.$eval(a.uiSrefActive)}catch(m){}d=d||r(a.uiSrefActive||"",!1)(t),U(d)&&T(d,function(r,n){if(R(r)){var a=P(r,e.current.name);o(a.state,t.$eval(a.paramExpr),n)}}),this.$$addStateInfo=function(e,t){if(!(U(d)&&v.length>0)){var r=o(e,t,d);return s(),r}},t.$on("$stateChangeSuccess",s),s()}]}}function V(e){var t=function(t,r){return e.is(t,r)};return t.$stateful=!0,t}function M(e){var t=function(t,r,n){return e.includes(t,r,n)};return t.$stateful=!0,t}var H=t.isDefined,N=t.isFunction,R=t.isString,U=t.isObject,F=t.isArray,T=t.forEach,L=t.extend,z=t.copy,J=t.toJson;t.module("ui.router.util",["ng"]),t.module("ui.router.router",["ui.router.util"]),t.module("ui.router.state",["ui.router.router","ui.router.util"]),t.module("ui.router",["ui.router.state"]),t.module("ui.router.compat",["ui.router"]),v.$inject=["$q","$injector"],t.module("ui.router.util").service("$resolve",v),$.$inject=["$http","$templateCache","$injector"],t.module("ui.router.util").service("$templateFactory",$);var K;m.prototype.concat=function(e,t){var r={caseInsensitive:K.caseInsensitive(),strict:K.strictMode(),squash:K.defaultSquashPolicy()};return new m(this.sourcePath+e+this.sourceSearch,L(r,t),this)},m.prototype.toString=function(){return this.source},m.prototype.exec=function(e,t){function r(e){function t(e){return e.split("").reverse().join("")}function r(e){return e.replace(/\\-/g,"-")}var n=t(e).split(/-(?!\\)/),a=d(n,t);return d(a,r).reverse()}var n=this.regexp.exec(e);if(!n)return null;t=t||{};var a,i,o,u=this.parameters(),s=u.length,l=this.segments.length-1,c={};if(l!==n.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var f,p;for(a=0;l>a;a++){for(o=u[a],f=this.params[o],p=n[a+1],i=0;i<f.replace.length;i++)f.replace[i].from===p&&(p=f.replace[i].to);p&&f.array===!0&&(p=r(p)),H(p)&&(p=f.type.decode(p)),c[o]=f.value(p)}for(;s>a;a++){for(o=u[a],c[o]=this.params[o].value(t[o]),f=this.params[o],p=t[o],i=0;i<f.replace.length;i++)f.replace[i].from===p&&(p=f.replace[i].to);H(p)&&(p=f.type.decode(p)),c[o]=f.value(p)}return c},m.prototype.parameters=function(e){return H(e)?this.params[e]||null:this.$$paramNames},m.prototype.validates=function(e){return this.params.$$validates(e)},m.prototype.format=function(e){function t(e){return encodeURIComponent(e).replace(/-/g,function(e){return"%5C%"+e.charCodeAt(0).toString(16).toUpperCase()})}e=e||{};var r=this.segments,n=this.parameters(),a=this.params;if(!this.validates(e))return null;var i,o=!1,u=r.length-1,s=n.length,l=r[0];for(i=0;s>i;i++){var c=u>i,f=n[i],p=a[f],h=p.value(e[f]),v=p.isOptional&&p.type.equals(p.value(),h),$=v?p.squash:!1,m=p.type.encode(h);if(c){var y=r[i+1],g=i+1===u;if($===!1)null!=m&&(l+=F(m)?d(m,t).join("-"):encodeURIComponent(m)),l+=y;else if($===!0){var w=l.match(/\/$/)?/\/?(.*)/:/(.*)/;l+=y.match(w)[1]}else R($)&&(l+=$+y);g&&p.squash===!0&&"/"===l.slice(-1)&&(l=l.slice(0,-1))}else{if(null==m||v&&$!==!1)continue;if(F(m)||(m=[m]),0===m.length)continue;m=d(m,encodeURIComponent).join("&"+f+"="),l+=(o?"&":"?")+(f+"="+m),o=!0}}return l},y.prototype.is=function(e,t){return!0},y.prototype.encode=function(e,t){return e},y.prototype.decode=function(e,t){return e},y.prototype.equals=function(e,t){return e==t},y.prototype.$subPattern=function(){var e=this.pattern.toString();return e.substr(1,e.length-2)},y.prototype.pattern=/.*/,y.prototype.toString=function(){return"{Type:"+this.name+"}"},y.prototype.$normalize=function(e){return this.is(e)?e:this.decode(e)},y.prototype.$asArray=function(e,t){function n(e,t){function n(e,t){return function(){return e[t].apply(e,arguments)}}function a(e){return F(e)?e:H(e)?[e]:[]}function i(e){switch(e.length){case 0:return r;case 1:return"auto"===t?e[0]:e;default:return e}}function o(e){return!e}function u(e,t){return function(r){if(F(r)&&0===r.length)return r;r=a(r);var n=d(r,e);return t===!0?0===h(n,o).length:i(n)}}function s(e){return function(t,r){var n=a(t),i=a(r);if(n.length!==i.length)return!1;for(var o=0;o<n.length;o++)if(!e(n[o],i[o]))return!1;return!0}}this.encode=u(n(e,"encode")),this.decode=u(n(e,"decode")),this.is=u(n(e,"is"),!0),this.equals=s(n(e,"equals")),this.pattern=e.pattern,this.$normalize=u(n(e,"$normalize")),this.name=e.name,this.$arrayMode=t}if(!e)return this;if("auto"===e&&!t)throw new Error("'auto' array mode is for query parameters only");return new n(this,e)},t.module("ui.router.util").provider("$urlMatcherFactory",g),t.module("ui.router.util").run(["$urlMatcherFactory",function(e){}]),w.$inject=["$locationProvider","$urlMatcherFactoryProvider"],t.module("ui.router.router").provider("$urlRouter",w),b.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],t.module("ui.router.state").factory("$stateParams",function(){return{}}).constant("$state.runtime",{autoinject:!0}).provider("$state",b).run(["$injector",function(e){e.get("$state.runtime").autoinject&&e.get("$state");
}]),x.$inject=[],t.module("ui.router.state").provider("$view",x),t.module("ui.router.state").provider("$uiViewScroll",E),S.$inject=["$state","$injector","$uiViewScroll","$interpolate","$q"],j.$inject=["$compile","$controller","$state","$interpolate"],t.module("ui.router.state").directive("uiView",S),t.module("ui.router.state").directive("uiView",j),I.$inject=["$state","$timeout"],D.$inject=["$state","$timeout"],_.$inject=["$state","$stateParams","$interpolate"],t.module("ui.router.state").directive("uiSref",I).directive("uiSrefActive",_).directive("uiSrefActiveEq",_).directive("uiState",D),V.$inject=["$state"],M.$inject=["$state"],t.module("ui.router.state").filter("isState",V).filter("includedByState",M)}(window,window.angular)}]);