(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[113],{343:function(e,a){var s;(s=Prism).languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:s.languages.javascript}},s.hooks.add("before-tokenize",(function(e){s.languages["markup-templating"].buildPlaceholders(e,"ejs",/<%(?!%)[\s\S]+?%>/g)})),s.hooks.add("after-tokenize",(function(e){s.languages["markup-templating"].tokenizePlaceholders(e,"ejs")})),s.languages.eta=s.languages.ejs}}]);
//# sourceMappingURL=113.5e62a6ae.chunk.js.map