(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[457],{1044:function(e,t,n){!function(e){"use strict";e.defineMode("coffeescript",(function(e,t){function n(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var r=/^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,o=/^(?:[()\[\]{},:`=;]|\.\.?\.?)/,i=/^[_A-Za-z$][_A-Za-z$0-9]*/,c=/^@[_A-Za-z$][_A-Za-z$0-9]*/,f=n(["and","or","not","is","isnt","in","instanceof","typeof"]),p=["for","while","loop","if","unless","else","switch","try","catch","finally","class"],a=n(p.concat(["break","by","continue","debugger","delete","do","in","of","new","return","then","this","@","throw","when","until","extends"]));p=n(p);var s=/^('{3}|\"{3}|['\"])/,u=/^(\/{3}|\/)/,l=n(["Infinity","NaN","undefined","null","true","false","on","off","yes","no"]);function d(e,t){if(e.sol()){null===t.scope.align&&(t.scope.align=!1);var n=t.scope.offset;if(e.eatSpace()){var p=e.indentation();return p>n&&"coffee"==t.scope.type?"indent":p<n?"dedent":null}n>0&&k(e,t)}if(e.eatSpace())return null;var d=e.peek();if(e.match("####"))return e.skipToEnd(),"comment";if(e.match("###"))return t.tokenize=m,t.tokenize(e,t);if("#"===d)return e.skipToEnd(),"comment";if(e.match(/^-?[0-9\.]/,!1)){var v=!1;if(e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)&&(v=!0),e.match(/^-?\d+\.\d*/)&&(v=!0),e.match(/^-?\.\d+/)&&(v=!0),v)return"."==e.peek()&&e.backUp(1),"number";var g=!1;if(e.match(/^-?0x[0-9a-f]+/i)&&(g=!0),e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)&&(g=!0),e.match(/^-?0(?![\dx])/i)&&(g=!0),g)return"number"}if(e.match(s))return t.tokenize=h(e.current(),!1,"string"),t.tokenize(e,t);if(e.match(u)){if("/"!=e.current()||e.match(/^.*\//,!1))return t.tokenize=h(e.current(),!0,"string-2"),t.tokenize(e,t);e.backUp(1)}return e.match(r)||e.match(f)?"operator":e.match(o)?"punctuation":e.match(l)?"atom":e.match(c)||t.prop&&e.match(i)?"property":e.match(a)?"keyword":e.match(i)?"variable":(e.next(),"error")}function h(e,n,r){return function(o,i){for(;!o.eol();)if(o.eatWhile(/[^'"\/\\]/),o.eat("\\")){if(o.next(),n&&o.eol())return r}else{if(o.match(e))return i.tokenize=d,r;o.eat(/['"\/]/)}return n&&(t.singleLineStringErrors?r="error":i.tokenize=d),r}}function m(e,t){for(;!e.eol();){if(e.eatWhile(/[^#]/),e.match("###")){t.tokenize=d;break}e.eatWhile("#")}return"comment"}function v(t,n,r){r=r||"coffee";for(var o=0,i=!1,c=null,f=n.scope;f;f=f.prev)if("coffee"===f.type||"}"==f.type){o=f.offset+e.indentUnit;break}"coffee"!==r?(i=null,c=t.column()+t.current().length):n.scope.align&&(n.scope.align=!1),n.scope={offset:o,type:r,prev:n.scope,align:i,alignOffset:c}}function k(e,t){if(t.scope.prev){if("coffee"===t.scope.type){for(var n=e.indentation(),r=!1,o=t.scope;o;o=o.prev)if(n===o.offset){r=!0;break}if(!r)return!0;for(;t.scope.prev&&t.scope.offset!==n;)t.scope=t.scope.prev;return!1}return t.scope=t.scope.prev,!1}}return{startState:function(e){return{tokenize:d,scope:{offset:e||0,type:"coffee",prev:null,align:!1},prop:!1,dedent:0}},token:function(e,t){var n=null===t.scope.align&&t.scope;n&&e.sol()&&(n.align=!1);var r=function(e,t){var n=t.tokenize(e,t),r=e.current();"return"===r&&(t.dedent=!0),(("->"===r||"=>"===r)&&e.eol()||"indent"===n)&&v(e,t);var o="[({".indexOf(r);if(-1!==o&&v(e,t,"])}".slice(o,o+1)),p.exec(r)&&v(e,t),"then"==r&&k(e,t),"dedent"===n&&k(e,t))return"error";if(-1!==(o="])}".indexOf(r))){for(;"coffee"==t.scope.type&&t.scope.prev;)t.scope=t.scope.prev;t.scope.type==r&&(t.scope=t.scope.prev)}return t.dedent&&e.eol()&&("coffee"==t.scope.type&&t.scope.prev&&(t.scope=t.scope.prev),t.dedent=!1),n}(e,t);return r&&"comment"!=r&&(n&&(n.align=!0),t.prop="punctuation"==r&&"."==e.current()),r},indent:function(e,t){if(e.tokenize!=d)return 0;var n=e.scope,r=t&&"])}".indexOf(t.charAt(0))>-1;if(r)for(;"coffee"==n.type&&n.prev;)n=n.prev;var o=r&&n.type===t.charAt(0);return n.align?n.alignOffset-(o?1:0):(o?n.prev:n).offset},lineComment:"#",fold:"indent"}})),e.defineMIME("application/vnd.coffeescript","coffeescript"),e.defineMIME("text/x-coffeescript","coffeescript"),e.defineMIME("text/coffeescript","coffeescript")}(n(48))}}]);
//# sourceMappingURL=457.b89ef311.chunk.js.map