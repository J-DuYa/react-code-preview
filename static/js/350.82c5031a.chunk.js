(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[350],{572:function(n,s){!function(n){var s=["([\"'])(?:\\\\[\\s\\S]|\\$\\([^)]+\\)|`[^`]+`|(?!\\1)[^\\\\])*\\1","<<-?\\s*(\\w+?)\\s*(?:\r?\n|\r)[\\s\\S]*?(?:\r?\n|\r)\\2","<<-?\\s*([\"'])(\\w+)\\3\\s*(?:\r?\n|\r)[\\s\\S]*?(?:\r?\n|\r)\\4"].join("|");n.languages["shell-session"]={info:{pattern:/^[^\r\n$#*!]+(?=[$#])/m,alias:"punctuation",inside:{path:{pattern:/(:)[\s\S]+/,lookbehind:!0},user:/^[^\s@:$#*!/\\]+@[^\s@:$#*!/\\]+(?=:|$)/,punctuation:/:/}},command:{pattern:RegExp("[$#](?:[^\\\\\r\n'\"<]|\\\\.|<<str>>)+".replace(/<<str>>/g,(function(){return s}))),greedy:!0,inside:{bash:{pattern:/(^[$#]\s*)[\s\S]+/,lookbehind:!0,alias:"language-bash",inside:n.languages.bash},"shell-symbol":{pattern:/^[$#]/,alias:"important"}}},output:/.(?:.*(?:\r\n?|\n|.$))*/}}(Prism)}}]);
//# sourceMappingURL=350.82c5031a.chunk.js.map