(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[70],{283:function(e,n,t){(function(n){var t=function(e){var n=/\blang(?:uage)?-([\w-]+)\b/i,t=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof a?new a(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var a,i,l=r.util.type(n);switch(t=t||{},l){case"Object":if(i=r.util.objId(n),t[i])return t[i];for(var o in a={},t[i]=a,n)n.hasOwnProperty(o)&&(a[o]=e(n[o],t));return a;case"Array":return i=r.util.objId(n),t[i]?t[i]:(a=[],t[i]=a,n.forEach((function(n,r){a[r]=e(n,t)})),a);default:return n}},getLanguage:function(e){for(;e&&!n.test(e.className);)e=e.parentElement;return e?(e.className.match(n)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}}},languages:{extend:function(e,n){var t=r.util.clone(r.languages[e]);for(var a in n)t[a]=n[a];return t},insertBefore:function(e,n,t,a){var i=(a=a||r.languages)[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(o)||(l[o]=i[o])}var u=a[e];return a[e]=l,r.languages.DFS(r.languages,(function(n,t){t===u&&n!=e&&(this[n]=l)})),l},DFS:function e(n,t,a,i){i=i||{};var l=r.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],a||o);var s=n[o],u=r.util.type(s);"Object"!==u||i[l(s)]?"Array"!==u||i[l(s)]||(i[l(s)]=!0,e(s,t,o,i)):(i[l(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){r.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var a={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var i,l=0;i=a.elements[l++];)r.highlightElement(i,!0===n,a.callback)},highlightElement:function(t,a,i){var l=r.util.getLanguage(t),o=r.languages[l];t.className=t.className.replace(n,"").replace(/\s+/g," ")+" language-"+l;var s=t.parentNode;s&&"pre"===s.nodeName.toLowerCase()&&(s.className=s.className.replace(n,"").replace(/\s+/g," ")+" language-"+l);var u={element:t,language:l,grammar:o,code:t.textContent};function c(e){u.highlightedCode=e,r.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r.hooks.run("after-highlight",u),r.hooks.run("complete",u),i&&i.call(u.element)}if(r.hooks.run("before-sanity-check",u),!u.code)return r.hooks.run("complete",u),void(i&&i.call(u.element));if(r.hooks.run("before-highlight",u),u.grammar)if(a&&e.Worker){var g=new Worker(r.filename);g.onmessage=function(e){c(e.data)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(r.highlight(u.code,u.grammar,u.language));else c(r.util.encode(u.code))},highlight:function(e,n,t){var i={code:e,grammar:n,language:t};return r.hooks.run("before-tokenize",i),i.tokens=r.tokenize(i.code,i.grammar),r.hooks.run("after-tokenize",i),a.stringify(r.util.encode(i.tokens),i.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var s in t)n[s]=t[s];delete n.rest}var u=new i;return l(u,u.head,e),function e(n,t,i,s,u,c,g){for(var h in i)if(i.hasOwnProperty(h)&&i[h]){var f=i[h];f=Array.isArray(f)?f:[f];for(var d=0;d<f.length;++d){if(g&&g==h+","+d)return;var p=f[d],v=p.inside,m=!!p.lookbehind,y=!!p.greedy,k=0,b=p.alias;if(y&&!p.pattern.global){var w=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,w+"g")}p=p.pattern||p;for(var x=s.next,A=u;x!==t.tail;A+=x.value.length,x=x.next){var S=x.value;if(t.length>n.length)return;if(!(S instanceof a)){var O=1;if(y&&x!=t.tail.prev){if(p.lastIndex=A,!(L=p.exec(n)))break;var P=L.index+(m&&L[1]?L[1].length:0),E=L.index+L[0].length,N=A;for(N+=x.value.length;P>=N;)x=x.next,N+=x.value.length;if(N-=x.value.length,A=N,x.value instanceof a)continue;for(var j=x;j!==t.tail&&(N<E||"string"===typeof j.value&&!j.prev.value.greedy);j=j.next)O++,N+=j.value.length;O--,S=n.slice(A,N),L.index-=A}else{p.lastIndex=0;var L=p.exec(S)}if(L){m&&(k=L[1]?L[1].length:0);P=L.index+k,L=L[0].slice(k),E=P+L.length;var C=S.slice(0,P),M=S.slice(E),W=x.prev;C&&(W=l(t,W,C),A+=C.length),o(t,W,O);var I=new a(h,v?r.tokenize(L,v):L,b,L,y);if(x=l(t,W,I),M&&l(t,x,M),O>1&&e(n,t,i,x.prev,A,!0,h+","+d),c)break}else if(c)break}}}}}(e,u,n,u.head,0),function(e){var n=[],t=e.head.next;for(;t!==e.tail;)n.push(t.value),t=t.next;return n}(u)},hooks:{all:{},add:function(e,n){var t=r.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=r.hooks.all[e];if(t&&t.length)for(var a,i=0;a=t[i++];)a(n)}},Token:a};function a(e,n,t,r,a){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length,this.greedy=!!a}function i(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function l(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function o(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=r,a.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var a="";return n.forEach((function(n){a+=e(n,t)})),a}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),r.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),a=t.language,i=t.code,l=t.immediateClose;e.postMessage(r.highlight(i,r.languages[a],a)),l&&e.close()}),!1),r):r;var s=r.util.currentScript();function u(){r.manual||r.highlightAll()}if(s&&(r.filename=s.src,s.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var c=document.readyState;"loading"===c||"interactive"===c&&s&&s.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return r}("undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),"undefined"!==typeof n&&(n.Prism=t)}).call(this,t(40))}}]);
//# sourceMappingURL=70.401c3a72.chunk.js.map