/*! Retype v1.11.1 | retype.com | Copyright 2021. Object.NET, Inc. All rights reserved. */

window.Prism=window.Prism||{manual:true};
/*! For license information please see prism.js.LICENSE.txt */
(()=>{var e={7193:()=>{"undefined"!=typeof Prism&&Prism.hooks.add("wrap",(function(e){"keyword"===e.type&&e.classes.push("keyword-"+e.content)}))},5660:(e,t,n)=>{var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={},r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof s?new s(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var a,s;switch(n=n||{},r.util.type(t)){case"Object":if(s=r.util.objId(t),n[s])return n[s];for(var i in a={},n[s]=a,t)t.hasOwnProperty(i)&&(a[i]=e(t[i],n));return a;case"Array":return s=r.util.objId(t),n[s]?n[s]:(a=[],n[s]=a,t.forEach((function(t,r){a[r]=e(t,n)})),a);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var s=(a=a||r.languages)[e],i={};for(var o in s)if(s.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);n.hasOwnProperty(o)||(i[o]=s[o])}var u=a[e];return a[e]=i,r.languages.DFS(r.languages,(function(t,n){n===u&&t!=e&&(this[t]=i)})),i},DFS:function e(t,n,a,s){s=s||{};var i=r.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],a||o);var l=t[o],u=r.util.type(l);"Object"!==u||s[i(l)]?"Array"!==u||s[i(l)]||(s[i(l)]=!0,e(l,n,o,s)):(s[i(l)]=!0,e(l,n,null,s))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var s,i=0;s=a.elements[i++];)r.highlightElement(s,!0===t,a.callback)},highlightElement:function(n,a,s){var i=r.util.getLanguage(n),o=r.languages[i];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+i;var l=n.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+i);var u={element:n,language:i,grammar:o,code:n.textContent};function c(e){u.highlightedCode=e,r.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r.hooks.run("after-highlight",u),r.hooks.run("complete",u),s&&s.call(u.element)}if(r.hooks.run("before-sanity-check",u),(l=u.element.parentElement)&&"pre"===l.nodeName.toLowerCase()&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!u.code)return r.hooks.run("complete",u),void(s&&s.call(u.element));if(r.hooks.run("before-highlight",u),u.grammar)if(a&&e.Worker){var g=new Worker(r.filename);g.onmessage=function(e){c(e.data)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(r.highlight(u.code,u.grammar,u.language));else c(r.util.encode(u.code))},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};return r.hooks.run("before-tokenize",a),a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),s.stringify(r.util.encode(a.tokens),a.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var r=new l;return u(r,r.head,e),o(e,r,t,r.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(r)},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var a,s=0;a=n[s++];)a(t)}},Token:s};function s(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function i(e,t,n,a){e.lastIndex=t;var r=e.exec(n);if(r&&a&&r[1]){var s=r[1].length;r.index+=s,r[0]=r[0].slice(s)}return r}function o(e,t,n,a,l,g){for(var d in n)if(n.hasOwnProperty(d)&&n[d]){var p=n[d];p=Array.isArray(p)?p:[p];for(var h=0;h<p.length;++h){if(g&&g.cause==d+","+h)return;var f=p[h],m=f.inside,v=!!f.lookbehind,b=!!f.greedy,y=f.alias;if(b&&!f.pattern.global){var F=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,F+"g")}for(var k=f.pattern||f,x=a.next,w=l;x!==t.tail&&!(g&&w>=g.reach);w+=x.value.length,x=x.next){var A=x.value;if(t.length>e.length)return;if(!(A instanceof s)){var S,$=1;if(b){if(!(S=i(k,w,e,v)))break;var _=S.index,E=S.index+S[0].length,j=w;for(j+=x.value.length;_>=j;)j+=(x=x.next).value.length;if(w=j-=x.value.length,x.value instanceof s)continue;for(var P=x;P!==t.tail&&(j<E||"string"==typeof P.value);P=P.next)$++,j+=P.value.length;$--,A=e.slice(w,j),S.index-=w}else if(!(S=i(k,0,A,v)))continue;_=S.index;var O=S[0],C=A.slice(0,_),T=A.slice(_+O.length),z=w+A.length;g&&z>g.reach&&(g.reach=z);var L=x.prev;if(C&&(L=u(t,L,C),w+=C.length),c(t,L,$),x=u(t,L,new s(d,m?r.tokenize(O,m):O,y,O)),T&&u(t,x,T),$>1){var N={cause:d+","+h,reach:z};o(e,t,n,x.prev,w,N),g&&N.reach>g.reach&&(g.reach=N.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function u(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function c(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}if(e.Prism=r,s.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach((function(t){a+=e(t,n)})),a}var s={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},i=t.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(s.classes,i):s.classes.push(i)),r.hooks.run("wrap",s);var o="";for(var l in s.attributes)o+=" "+l+'="'+(s.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+o+">"+s.content+"</"+s.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,s=n.code,i=n.immediateClose;e.postMessage(r.highlight(s,r.languages[a],a)),i&&e.close()}),!1),r):r;var g=r.util.currentScript();function d(){r.manual||r.highlightAll()}if(g&&(r.filename=g.src,g.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var p=document.readyState;"loading"===p||"interactive"===p&&g&&g.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==n.g&&(n.g.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var s={};s[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},a.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(e,t){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:a.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(void 0!==a&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",n='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',r=/\blang(?:uage)?-([\w-]+)\b/i;a.hooks.add("before-highlightall",(function(e){e.selector+=", "+n})),a.hooks.add("before-sanity-check",(function(r){var s=r.element;if(s.matches(n)){r.code="",s.setAttribute(t,"loading");var o=s.appendChild(document.createElement("CODE"));o.textContent="Loading…";var l=s.getAttribute("data-src"),u=r.language;if("none"===u){var c=(/\.(\w+)$/.exec(l)||[,"none"])[1];u=e[c]||c}i(o,u),i(s,u);var g=a.plugins.autoloader;g&&g.loadLanguages(u);var d=new XMLHttpRequest;d.open("GET",l,!0),d.onreadystatechange=function(){4==d.readyState&&(d.status<400&&d.responseText?(s.setAttribute(t,"loaded"),o.textContent=d.responseText,a.highlightElement(o)):(s.setAttribute(t,"failed"),d.status>=400?o.textContent="✖ Error "+d.status+" while fetching file: "+d.statusText:o.textContent="✖ Error: File does not exist or is empty"))},d.send(null)}})),a.plugins.fileHighlight={highlight:function(e){for(var t,r=(e||document).querySelectorAll(n),s=0;t=r[s++];)a.highlightElement(t)}};var s=!1;a.fileHighlight=function(){s||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),s=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}function i(e,t){var n=e.className;n=n.replace(r," ")+" language-"+t,e.className=n.replace(/\s+/g," ").trim()}}()}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(()=>{"use strict";n.r(a),n.d(a,{default:()=>r});var e=n(5660),t=n.n(e);n(7193);const r={initPrism:function(){t().highlightAllUnder(document),document.querySelectorAll(".pluggable").forEach((function(e){return e.addEventListener("onPluginReady",(function(){t().highlightAllUnder(e)}))}))}}})(),window.__DOCS_PRISM__=a})();Prism.languages.renpy={comment:{pattern:/(^|[^\\])#.+/,lookbehind:!0},string:{pattern:/("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2|(?:^#?(?:[0-9a-fA-F]{6}|(?:[0-9a-fA-F]){3})$)/m,greedy:!0},function:/\b[a-z_]\w*(?=\()/i,property:/\b(?:insensitive|idle|hover|selected_idle|selected_hover|background|position|alt|xpos|ypos|pos|xanchor|yanchor|anchor|xalign|yalign|align|xcenter|ycenter|xofsset|yoffset|ymaximum|maximum|xmaximum|xminimum|yminimum|minimum|xsize|ysizexysize|xfill|yfill|area|antialias|black_color|bold|caret|color|first_indent|font|size|italic|justify|kerning|language|layout|line_leading|line_overlap_split|line_spacing|min_width|newline_indent|outlines|rest_indent|ruby_style|slow_cps|slow_cps_multiplier|strikethrough|text_align|underline|hyperlink_functions|vertical|hinting|foreground|left_margin|xmargin|top_margin|bottom_margin|ymargin|left_padding|right_padding|xpadding|top_padding|bottom_padding|ypadding|size_group|child|hover_sound|activate_sound|mouse|focus_mask|keyboard_focus|bar_vertical|bar_invert|bar_resizing|left_gutter|right_gutter|top_gutter|bottom_gutter|left_bar|right_bar|top_bar|bottom_bar|thumb|thumb_shadow|thumb_offset|unscrollable|spacing|first_spacing|box_reverse|box_wrap|order_reverse|fit_first|ysize|thumbnail_width|thumbnail_height|help|text_ypos|text_xpos|idle_color|hover_color|selected_idle_color|selected_hover_color|insensitive_color|alpha|insensitive_background|hover_background|zorder|value|width|xadjustment|xanchoraround|xaround|xinitial|xoffset|xzoom|yadjustment|yanchoraround|yaround|yinitial|yzoom|zoom|ground|height|text_style|text_y_fudge|selected_insensitive|has_sound|has_music|has_voice|focus|hovered|image_style|length|minwidth|mousewheel|offset|prefix|radius|range|right_margin|rotate|rotate_pad|developer|screen_width|screen_height|window_title|name|version|windows_icon|default_fullscreen|default_text_cps|default_afm_time|main_menu_music|sample_sound|enter_sound|exit_sound|save_directory|enter_transition|exit_transition|intra_transition|main_game_transition|game_main_transition|end_splash_transition|end_game_transition|after_load_transition|window_show_transition|window_hide_transition|adv_nvl_transition|nvl_adv_transition|enter_yesno_transition|exit_yesno_transition|enter_replay_transition|exit_replay_transition|say_attribute_transition|directory_name|executable_name|include_update|window_icon|modal|google_play_key|google_play_salt|drag_name|drag_handle|draggable|dragged|droppable|dropped|narrator_menu|action|default_afm_enable|version_name|version_tuple|inside|fadeout|fadein|layers|layer_clipping|linear|scrollbars|side_xpos|side_ypos|side_spacing|edgescroll|drag_joined|drag_raise|drop_shadow|drop_shadow_color|subpixel|easein|easeout|time|crop|auto|update|get_installed_packages|can_update|UpdateVersion|Update|overlay_functions|translations|window_left_padding|show_side_image|show_two_window)\b/,tag:/\b(?:label|image|menu|[hv]box|frame|text|imagemap|imagebutton|bar|vbar|screen|textbutton|buttoscreenn|fixed|grid|input|key|mousearea|side|timer|viewport|window|hotspot|hotbar|self|button|drag|draggroup|tag|mm_menu_frame|nvl|block|parallel)\b|\$/,keyword:/\b(?:as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|yield|adjustment|alignaround|allow|angle|around|box_layout|cache|changed|child_size|clicked|clipping|corner1|corner2|default|delay|exclude|scope|slow|slow_abortable|slow_done|sound|style_group|substitute|suffix|transform_anchor|transpose|unhovered|config|theme|mm_root|gm_root|rounded_window|build|disabled_text|disabled|widget_selected|widget_text|widget_hover|widget|updater|behind|call|expression|hide|init|jump|onlayer|python|renpy|scene|set|show|transform|play|queue|stop|pause|define|window|repeat|contains|choice|on|function|event|animation|clockwise|counterclockwise|circles|knot|null|None|random|has|add|use|fade|dissolve|style|store|id|voice|center|left|right|less_rounded|music|movie|clear|persistent|ui)\b/,boolean:/\b(?:[Tt]rue|[Ff]alse)\b/,number:/(?:\b(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?)|\B\.\d+)(?:e[+-]?\d+)?j?/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not|with|at)\b/,punctuation:/[{}[\];(),.:]/},Prism.languages.rpy=Prism.languages.renpy;