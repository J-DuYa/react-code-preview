(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[529],{1127:function(e,t,T){!function(e){"use strict";function t(e){for(var t={},T=e.split(" "),n=0;n<T.length;++n)t[T[n]]=!0;return t}e.defineMode("ttcn-cfg",(function(e,t){var T,n=e.indentUnit,E=t.keywords||{},C=t.fileNCtrlMaskOptions||{},i=t.externalCommands||{},N=t.multiLineStrings,r=!1!==t.indentStatements,o=/[\|]/;function I(e,t){var n,r=e.next();if('"'==r||"'"==r)return t.tokenize=(n=r,function(e,t){for(var T,E=!1,C=!1;null!=(T=e.next());){if(T==n&&!E){var i=e.peek();i&&("b"!=(i=i.toLowerCase())&&"h"!=i&&"o"!=i||e.next()),C=!0;break}E=!E&&"\\"==T}return(C||!E&&!N)&&(t.tokenize=null),"string"}),t.tokenize(e,t);if(/[:=]/.test(r))return T=r,"punctuation";if("#"==r)return e.skipToEnd(),"comment";if(/\d/.test(r))return e.eatWhile(/[\w\.]/),"number";if(o.test(r))return e.eatWhile(o),"operator";if("["==r)return e.eatWhile(/[\w_\]]/),"number sectionTitle";e.eatWhile(/[\w\$_]/);var I=e.current();return E.propertyIsEnumerable(I)?"keyword":C.propertyIsEnumerable(I)?"negative fileNCtrlMaskOptions":i.propertyIsEnumerable(I)?"negative externalCommands":"variable"}function _(e,t,T,n,E){this.indented=e,this.column=t,this.type=T,this.align=n,this.prev=E}function A(e,t,T){var n=e.indented;return e.context&&"statement"==e.context.type&&(n=e.context.indented),e.context=new _(n,t,T,null,e.context)}function U(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}return{startState:function(e){return{tokenize:null,context:new _((e||0)-n,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;T=null;var E=(t.tokenize||I)(e,t);if("comment"==E)return E;if(null==n.align&&(n.align=!0),";"!=T&&":"!=T&&","!=T||"statement"!=n.type)if("{"==T)A(t,e.column(),"}");else if("["==T)A(t,e.column(),"]");else if("("==T)A(t,e.column(),")");else if("}"==T){for(;"statement"==n.type;)n=U(t);for("}"==n.type&&(n=U(t));"statement"==n.type;)n=U(t)}else T==n.type?U(t):r&&(("}"==n.type||"top"==n.type)&&";"!=T||"statement"==n.type&&"newstatement"==T)&&A(t,e.column(),"statement");else U(t);return t.startOfLine=!1,E},electricChars:"{}",lineComment:"#",fold:"brace"}})),e.defineMIME("text/x-ttcn-cfg",{name:"ttcn-cfg",keywords:t("Yes No LogFile FileMask ConsoleMask AppendFile TimeStampFormat LogEventTypes SourceInfoFormat LogEntityName LogSourceInfo DiskFullAction LogFileNumber LogFileSize MatchingHints Detailed Compact SubCategories Stack Single None Seconds DateTime Time Stop Error Retry Delete TCPPort KillTimer NumHCs UnixSocketsEnabled LocalAddress"),fileNCtrlMaskOptions:t("TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION TTCN_USER TTCN_FUNCTION TTCN_STATISTICS TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG EXECUTOR ERROR WARNING PORTEVENT TIMEROP VERDICTOP DEFAULTOP TESTCASE ACTION USER FUNCTION STATISTICS PARALLEL MATCHING DEBUG LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED DEBUG_ENCDEC DEBUG_TESTPORT DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED FUNCTION_RND FUNCTION_UNQUALIFIED MATCHING_DONE MATCHING_MCSUCCESS MATCHING_MCUNSUCC MATCHING_MMSUCCESS MATCHING_MMUNSUCC MATCHING_PCSUCCESS MATCHING_PCUNSUCC MATCHING_PMSUCCESS MATCHING_PMUNSUCC MATCHING_PROBLEM MATCHING_TIMEOUT MATCHING_UNQUALIFIED PARALLEL_PORTCONN PARALLEL_PORTMAP PARALLEL_PTC PARALLEL_UNQUALIFIED PORTEVENT_DUALRECV PORTEVENT_DUALSEND PORTEVENT_MCRECV PORTEVENT_MCSEND PORTEVENT_MMRECV PORTEVENT_MMSEND PORTEVENT_MQUEUE PORTEVENT_PCIN PORTEVENT_PCOUT PORTEVENT_PMIN PORTEVENT_PMOUT PORTEVENT_PQUEUE PORTEVENT_STATE PORTEVENT_UNQUALIFIED STATISTICS_UNQUALIFIED STATISTICS_VERDICT TESTCASE_FINISH TESTCASE_START TESTCASE_UNQUALIFIED TIMEROP_GUARD TIMEROP_READ TIMEROP_START TIMEROP_STOP TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED USER_UNQUALIFIED VERDICTOP_FINAL VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED"),externalCommands:t("BeginControlPart EndControlPart BeginTestCase EndTestCase"),multiLineStrings:!0})}(T(46))}}]);
//# sourceMappingURL=529.d8adb065.chunk.js.map