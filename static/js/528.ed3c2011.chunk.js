(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[528],{1142:function(t,e,n){!function(t){"use strict";t.defineMode("troff",(function(){var t={};function e(e){if(e.eatSpace())return null;var n=e.sol(),r=e.next();if("\\"===r)return e.match("fB")||e.match("fR")||e.match("fI")||e.match("u")||e.match("d")||e.match("%")||e.match("&")?"string":e.match("m[")?(e.skipTo("]"),e.next(),"string"):e.match("s+")||e.match("s-")?(e.eatWhile(/[\d-]/),"string"):e.match("(")||e.match("*(")?(e.eatWhile(/[\w-]/),"string"):"string";if(n&&("."===r||"'"===r)&&e.eat("\\")&&e.eat('"'))return e.skipToEnd(),"comment";if(n&&"."===r){if(e.match("B ")||e.match("I ")||e.match("R "))return"attribute";if(e.match("TH ")||e.match("SH ")||e.match("SS ")||e.match("HP "))return e.skipToEnd(),"quote";if(e.match(/[A-Z]/)&&e.match(/[A-Z]/)||e.match(/[a-z]/)&&e.match(/[a-z]/))return"attribute"}e.eatWhile(/[\w-]/);var a=e.current();return t.hasOwnProperty(a)?t[a]:null}function n(t,n){return(n.tokens[0]||e)(t,n)}return{startState:function(){return{tokens:[]}},token:function(t,e){return n(t,e)}}})),t.defineMIME("text/troff","troff"),t.defineMIME("text/x-troff","troff"),t.defineMIME("application/x-troff","troff")}(n(48))}}]);
//# sourceMappingURL=528.ed3c2011.chunk.js.map