(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[448,541],{1050:function(t,e,n){!function(t){"use strict";t.defineMode("yaml",(function(){var t=new RegExp("\\b(("+["true","false","on","off","yes","no"].join(")|(")+"))$","i");return{token:function(e,n){var i=e.peek(),r=n.escaped;if(n.escaped=!1,"#"==i&&(0==e.pos||/\s/.test(e.string.charAt(e.pos-1))))return e.skipToEnd(),"comment";if(e.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(n.literal&&e.indentation()>n.keyCol)return e.skipToEnd(),"string";if(n.literal&&(n.literal=!1),e.sol()){if(n.keyCol=0,n.pair=!1,n.pairStart=!1,e.match(/---/))return"def";if(e.match(/\.\.\./))return"def";if(e.match(/\s*-\s+/))return"meta"}if(e.match(/^(\{|\}|\[|\])/))return"{"==i?n.inlinePairs++:"}"==i?n.inlinePairs--:"["==i?n.inlineList++:n.inlineList--,"meta";if(n.inlineList>0&&!r&&","==i)return e.next(),"meta";if(n.inlinePairs>0&&!r&&","==i)return n.keyCol=0,n.pair=!1,n.pairStart=!1,e.next(),"meta";if(n.pairStart){if(e.match(/^\s*(\||\>)\s*/))return n.literal=!0,"meta";if(e.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2";if(0==n.inlinePairs&&e.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(n.inlinePairs>0&&e.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(e.match(t))return"keyword"}return!n.pair&&e.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(n.pair=!0,n.keyCol=e.indentation(),"atom"):n.pair&&e.match(/^:\s*/)?(n.pairStart=!0,"meta"):(n.pairStart=!1,n.escaped="\\"==i,e.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}})),t.defineMIME("text/x-yaml","yaml"),t.defineMIME("text/yaml","yaml")}(n(48))},1157:function(t,e,n){!function(t){var e;e=n(48),n(1050),e.defineMode("yaml-frontmatter",(function(t,n){var i=e.getMode(t,"yaml"),r=e.getMode(t,n&&n.base||"gfm");function a(t){return 2==t.state?r:i}return{startState:function(){return{state:0,inner:e.startState(i)}},copyState:function(t){return{state:t.state,inner:e.copyState(a(t),t.inner)}},token:function(t,n){if(0==n.state)return t.match(/---/,!1)?(n.state=1,i.token(t,n.inner)):(n.state=2,n.inner=e.startState(r),r.token(t,n.inner));if(1==n.state){var a=t.sol()&&t.match(/(---|\.\.\.)/,!1),s=i.token(t,n.inner);return a&&(n.state=2,n.inner=e.startState(r)),s}return r.token(t,n.inner)},innerMode:function(t){return{mode:a(t),state:t.inner}},blankLine:function(t){var e=a(t);if(e.blankLine)return e.blankLine(t.inner)}}}))}()}}]);
//# sourceMappingURL=448.eef67421.chunk.js.map