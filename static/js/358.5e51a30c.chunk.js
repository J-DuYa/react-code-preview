(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[358],{571:function(n,e){!function(n){var e={pattern:/\{[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}\}/i,alias:"constant",inside:{punctuation:/[{}]/}};n.languages["solution-file"]={comment:{pattern:/#.*/,greedy:!0},string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,greedy:!0,inside:{guid:e}},object:{pattern:/^([ \t]*)(?:([A-Z]\w*)\b(?=.*(?:\r\n?|\n)(?:\1[ \t].*(?:\r\n?|\n))*\1End\2(?=[ \t]*$))|End[A-Z]\w*(?=[ \t]*$))/m,lookbehind:!0,greedy:!0,alias:"keyword"},property:{pattern:/^([ \t]*)[^\r\n"#=()]*[^\s"#=()](?=\s*=)/m,lookbehind:!0,inside:{guid:e}},guid:e,number:/\b\d+(?:\.\d+)*\b/,boolean:/\b(?:FALSE|TRUE)\b/,operator:/=/,punctuation:/[(),]/},n.languages.sln=n.languages["solution-file"]}(Prism)}}]);
//# sourceMappingURL=358.5e51a30c.chunk.js.map