(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[235],{448:function(e,n){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"==typeof o&&!o(e))return e;for(var r,i=c.length;-1!==t.code.indexOf(r=n(a,i));)++i;return c[i]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function c(i){for(var u=0;u<i.length&&!(r>=o.length);u++){var p=i[u];if("string"==typeof p||p.content&&"string"==typeof p.content){var s=o[r],g=t.tokenStack[s],l="string"==typeof p?p:p.content,f=n(a,s),k=l.indexOf(f);if(-1<k){++r;var h=l.substring(0,k),d=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),v=l.substring(k+f.length),m=[];h&&m.push.apply(m,c([h])),m.push(d),v&&m.push.apply(m,c([v])),"string"==typeof p?i.splice.apply(i,[u,1].concat(m)):p.content=m}}else p.content&&c(p.content)}return i}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=235.473e195e.chunk.js.map