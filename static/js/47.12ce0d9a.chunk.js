(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[47],{796:function(e,t,n){!function(e){"use strict";e.defineMode("ecl",(function(e){function t(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}var n,r=e.indentUnit,a=t("abs acos allnodes ascii asin asstring atan atan2 ave case choose choosen choosesets clustersize combine correlation cos cosh count covariance cron dataset dedup define denormalize distribute distributed distribution ebcdic enth error evaluate event eventextra eventname exists exp failcode failmessage fetch fromunicode getisvalid global graph group hash hash32 hash64 hashcrc hashmd5 having if index intformat isvalid iterate join keyunicode length library limit ln local log loop map matched matchlength matchposition matchtext matchunicode max merge mergejoin min nolocal nonempty normalize parse pipe power preload process project pull random range rank ranked realformat recordof regexfind regexreplace regroup rejected rollup round roundup row rowdiff sample set sin sinh sizeof soapcall sort sorted sqrt stepped stored sum table tan tanh thisnode topn tounicode transfer trim truncate typeof ungroup unicodeorder variance which workunit xmldecode xmlencode xmltext xmlunicode"),i=t("apply assert build buildindex evaluate fail keydiff keypatch loadxml nothor notify output parallel sequential soapcall wait"),o=t("__compressed__ all and any as atmost before beginc++ best between case const counter csv descend encrypt end endc++ endmacro except exclusive expire export extend false few first flat from full function group header heading hole ifblock import in interface joined keep keyed last left limit load local locale lookup macro many maxcount maxlength min skew module named nocase noroot noscan nosort not of only opt or outer overwrite packed partition penalty physicallength pipe quote record relationship repeat return right scan self separator service shared skew skip sql store terminator thor threshold token transform trim true type unicodeorder unsorted validate virtual whole wild within xml xpath"),l=t("ascii big_endian boolean data decimal ebcdic integer pattern qstring real record rule set of string token udecimal unicode unsigned varstring varunicode"),s=t("checkpoint deprecated failcode failmessage failure global independent onwarning persist priority recovery stored success wait when"),c=t("catch class do else finally for if switch try while"),u=t("true false null"),p={"#":function(e,t){return!!t.startOfLine&&(e.skipToEnd(),"meta")}},d=/[+\-*&%=<>!?|\/]/;function f(e,t){var r,h=e.next();if(p[h]){var y=p[h](e,t);if(!1!==y)return y}if('"'==h||"'"==h)return t.tokenize=(r=h,function(e,t){for(var n,a=!1,i=!1;null!=(n=e.next());){if(n==r&&!a){i=!0;break}a=!a&&"\\"==n}return!i&&a||(t.tokenize=f),"string"}),t.tokenize(e,t);if(/[\[\]{}\(\),;\:\.]/.test(h))return n=h,null;if(/\d/.test(h))return e.eatWhile(/[\w\.]/),"number";if("/"==h){if(e.eat("*"))return t.tokenize=m,m(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(d.test(h))return e.eatWhile(d),"operator";e.eatWhile(/[\w\$_]/);var b=e.current().toLowerCase();if(a.propertyIsEnumerable(b))return c.propertyIsEnumerable(b)&&(n="newstatement"),"keyword";if(i.propertyIsEnumerable(b))return c.propertyIsEnumerable(b)&&(n="newstatement"),"variable";if(o.propertyIsEnumerable(b))return c.propertyIsEnumerable(b)&&(n="newstatement"),"variable-2";if(l.propertyIsEnumerable(b))return c.propertyIsEnumerable(b)&&(n="newstatement"),"variable-3";if(s.propertyIsEnumerable(b))return c.propertyIsEnumerable(b)&&(n="newstatement"),"builtin";for(var v=b.length-1;v>=0&&(!isNaN(b[v])||"_"==b[v]);)--v;if(v>0){var g=b.substr(0,v+1);if(l.propertyIsEnumerable(g))return c.propertyIsEnumerable(g)&&(n="newstatement"),"variable-3"}return u.propertyIsEnumerable(b)?"atom":null}function m(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=f;break}r="*"==n}return"comment"}function h(e,t,n,r,a){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=a}function y(e,t,n){return e.context=new h(e.indented,t,n,null,e.context)}function b(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}return{startState:function(e){return{tokenize:null,context:new h((e||0)-r,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var r=t.context;if(e.sol()&&(null==r.align&&(r.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;n=null;var a=(t.tokenize||f)(e,t);if("comment"==a||"meta"==a)return a;if(null==r.align&&(r.align=!0),";"!=n&&":"!=n||"statement"!=r.type)if("{"==n)y(t,e.column(),"}");else if("["==n)y(t,e.column(),"]");else if("("==n)y(t,e.column(),")");else if("}"==n){for(;"statement"==r.type;)r=b(t);for("}"==r.type&&(r=b(t));"statement"==r.type;)r=b(t)}else n==r.type?b(t):("}"==r.type||"top"==r.type||"statement"==r.type&&"newstatement"==n)&&y(t,e.column(),"statement");else b(t);return t.startOfLine=!1,a},indent:function(e,t){if(e.tokenize!=f&&null!=e.tokenize)return 0;var n=e.context,a=t&&t.charAt(0);"statement"==n.type&&"}"==a&&(n=n.prev);var i=a==n.type;return"statement"==n.type?n.indented+("{"==a?0:r):n.align?n.column+(i?0:1):n.indented+(i?0:r)},electricChars:"{}"}})),e.defineMIME("text/x-ecl","ecl")}(n(37))}}]);
//# sourceMappingURL=47.12ce0d9a.chunk.js.map