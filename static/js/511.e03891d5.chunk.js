(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[511],{1032:function(e,r,t){!function(e){"use strict";e.defineMode("sass",(function(r){var t,n=e.mimeModes["text/css"],o=n.propertyKeywords||{},i=n.colorKeywords||{},a=n.valueKeywords||{},u=n.fontProperties||{},s=new RegExp("^"+["true","false","null","auto"].join("|")),f=new RegExp("^"+["\\(","\\)","=",">","<","==",">=","<=","\\+","-","\\!=","/","\\*","%","and","or","not",";","\\{","\\}",":"].join("|")),c=/^::?[a-zA-Z_][\w\-]*/;function p(e){return!e.peek()||e.match(/\s+$/,!1)}function l(e,r){var t=e.peek();return")"===t?(e.next(),r.tokenizer=x,"operator"):"("===t?(e.next(),e.eatSpace(),"operator"):"'"===t||'"'===t?(r.tokenizer=m(e.next()),"string"):(r.tokenizer=m(")",!1),"string")}function h(e,r){return function(t,n){return t.sol()&&t.indentation()<=e?(n.tokenizer=x,x(t,n)):(r&&t.skipTo("*/")?(t.next(),t.next(),n.tokenizer=x):t.skipToEnd(),"comment")}}function m(e,r){return null==r&&(r=!0),function t(n,o){var i=n.next(),a=n.peek(),u=n.string.charAt(n.pos-2);return"\\"!==i&&a===e||i===e&&"\\"!==u?(i!==e&&r&&n.next(),p(n)&&(o.cursorHalf=0),o.tokenizer=x,"string"):"#"===i&&"{"===a?(o.tokenizer=w(t),n.next(),"operator"):"string"}}function w(e){return function(r,t){return"}"===r.peek()?(r.next(),t.tokenizer=e,"operator"):x(r,t)}}function k(e){if(0==e.indentCount){e.indentCount++;var t=e.scopes[0].offset+r.indentUnit;e.scopes.unshift({offset:t})}}function d(e){1!=e.scopes.length&&e.scopes.shift()}function x(e,r){var n=e.peek();if(e.match("/*"))return r.tokenizer=h(e.indentation(),!0),r.tokenizer(e,r);if(e.match("//"))return r.tokenizer=h(e.indentation(),!1),r.tokenizer(e,r);if(e.match("#{"))return r.tokenizer=w(x),"operator";if('"'===n||"'"===n)return e.next(),r.tokenizer=m(n),"string";if(r.cursorHalf){if("#"===n&&(e.next(),e.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/)))return p(e)&&(r.cursorHalf=0),"number";if(e.match(/^-?[0-9\.]+/))return p(e)&&(r.cursorHalf=0),"number";if(e.match(/^(px|em|in)\b/))return p(e)&&(r.cursorHalf=0),"unit";if(e.match(s))return p(e)&&(r.cursorHalf=0),"keyword";if(e.match(/^url/)&&"("===e.peek())return r.tokenizer=l,p(e)&&(r.cursorHalf=0),"atom";if("$"===n)return e.next(),e.eatWhile(/[\w-]/),p(e)&&(r.cursorHalf=0),"variable-2";if("!"===n)return e.next(),r.cursorHalf=0,e.match(/^[\w]+/)?"keyword":"operator";if(e.match(f))return p(e)&&(r.cursorHalf=0),"operator";if(e.eatWhile(/[\w-]/))return p(e)&&(r.cursorHalf=0),t=e.current().toLowerCase(),a.hasOwnProperty(t)?"atom":i.hasOwnProperty(t)?"keyword":o.hasOwnProperty(t)?(r.prevProp=e.current().toLowerCase(),"property"):"tag";if(p(e))return r.cursorHalf=0,null}else{if("-"===n&&e.match(/^-\w+-/))return"meta";if("."===n){if(e.next(),e.match(/^[\w-]+/))return k(r),"qualifier";if("#"===e.peek())return k(r),"tag"}if("#"===n){if(e.next(),e.match(/^[\w-]+/))return k(r),"builtin";if("#"===e.peek())return k(r),"tag"}if("$"===n)return e.next(),e.eatWhile(/[\w-]/),"variable-2";if(e.match(/^-?[0-9\.]+/))return"number";if(e.match(/^(px|em|in)\b/))return"unit";if(e.match(s))return"keyword";if(e.match(/^url/)&&"("===e.peek())return r.tokenizer=l,"atom";if("="===n&&e.match(/^=[\w-]+/))return k(r),"meta";if("+"===n&&e.match(/^\+[\w-]+/))return"variable-3";if("@"===n&&e.match(/@extend/)&&(e.match(/\s*[\w]/)||d(r)),e.match(/^@(else if|if|media|else|for|each|while|mixin|function)/))return k(r),"def";if("@"===n)return e.next(),e.eatWhile(/[\w-]/),"def";if(e.eatWhile(/[\w-]/)){if(e.match(/ *: *[\w-\+\$#!\("']/,!1)){t=e.current().toLowerCase();var v=r.prevProp+"-"+t;return o.hasOwnProperty(v)?"property":o.hasOwnProperty(t)?(r.prevProp=t,"property"):u.hasOwnProperty(t)?"property":"tag"}return e.match(/ *:/,!1)?(k(r),r.cursorHalf=1,r.prevProp=e.current().toLowerCase(),"property"):(e.match(/ *,/,!1)||k(r),"tag")}if(":"===n)return e.match(c)?"variable-3":(e.next(),r.cursorHalf=1,"operator")}return e.match(f)?"operator":(e.next(),null)}return{startState:function(){return{tokenizer:x,scopes:[{offset:0,type:"sass"}],indentCount:0,cursorHalf:0,definedVars:[],definedMixins:[]}},token:function(e,t){var n=function(e,t){e.sol()&&(t.indentCount=0);var n=t.tokenizer(e,t),o=e.current();if("@return"!==o&&"}"!==o||d(t),null!==n){for(var i=e.pos-o.length+r.indentUnit*t.indentCount,a=[],u=0;u<t.scopes.length;u++){var s=t.scopes[u];s.offset<=i&&a.push(s)}t.scopes=a}return n}(e,t);return t.lastToken={style:n,content:e.current()},n},indent:function(e){return e.scopes[0].offset}}}),"css"),e.defineMIME("text/x-sass","sass")}(t(46),t(1023))}}]);
//# sourceMappingURL=511.e03891d5.chunk.js.map