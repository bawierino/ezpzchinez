(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(n,e,i){},14:function(n,e,i){},15:function(n,e,i){"use strict";i.r(e);var a,t=i(0),r=i.n(t),o=i(4),c=i.n(o),m=(i(13),i(14),i(1)),g=function(){var n=function(){var n=r.a.useState(),e=Object(m.a)(n,2)[1];return Object(t.useCallback)(function(){return e({})},[])}();r.a.useEffect(function(){return window.addEventListener("popstate",n),function(){return window.removeEventListener("popstate",n)}},[])},s=i(5),l=i(6),u=new(function(){function n(){Object(s.a)(this,n),this.firstPathParameter="ching-chong"}return Object(l.a)(n,[{key:"initialize",value:function(){document.location.pathname.startsWith("/".concat(this.firstPathParameter))||window.history.replaceState(void 0,"","/".concat(this.firstPathParameter))}},{key:"navigateToPath",value:function(n){window.history.pushState(void 0,"","/".concat(this.firstPathParameter,"/").concat(n)),window.dispatchEvent(new Event("popstate"))}},{key:"navigateBack",value:function(){window.history.back()}},{key:"hasPath",value:function(){return document.location.pathname.replace("/".concat(this.firstPathParameter),"").length>1}},{key:"getPath",value:function(){if(this.hasPath())return document.location.pathname.split("/")[2]}}]),n}());function p(n){return Array.isArray(n)?n.join(", "):n}function d(n){var e=n.characters,i=n.onClick,a=n.hideMeaning,r=n.hidePinYin;return t.createElement("div",{className:"word",onClick:function(){i(n.id)}},t.createElement("div",{className:"characters"},e.map(function(n){return t.createElement("div",{key:n.id,className:"character"},n.logogram)})),!r&&t.createElement("div",null,e.map(function(n){return n.pinyin})),!a&&t.createElement("div",{className:"word-meaning"},p(n.meaning)))}function y(n){return t.createElement("div",{className:"loudspeaker",onClick:n.onClick},t.createElement("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"})))}function h(){a=speechSynthesis.getVoices().reverse().find(function(n){return n.lang.includes("zh")&&n.lang.includes("CN")})}h(),speechSynthesis.onvoiceschanged=function(n){h(),speechSynthesis.onvoiceschanged=null};var f=function(n){if(v()){var e=new SpeechSynthesisUtterance(n);e.voice=a,speechSynthesis.speak(e)}},v=function(){return"speechSynthesis"in window&&void 0!==a};function w(n){var e=n.word,i=n.onSubCharacterClick,a=e.characters,r=e.meaning,o=e.remarks,c=a.map(function(n){return n.logogram}).join("");function m(){return a.length>1}return t.createElement(t.Fragment,null,t.createElement("div",{className:"word detailed ".concat(m()?"multi-character":"")},v()&&t.createElement(y,{onClick:function(){f(c)}}),t.createElement(t.Fragment,null,t.createElement("div",{className:"detailed-word-word"},c),t.createElement("div",{className:"detailed-word-pinyin"},a.map(function(n){return n.pinyin})),r&&t.createElement("div",{className:"detailed-word-meaning"},t.createElement("strong",null,"Meaning: "),p(r)),o&&t.createElement("div",{className:"detailed-word-remarks"},t.createElement("strong",null,"Remarks: "),p(o)))),m()&&t.createElement("div",{className:"words"},a.map(function(n){return t.createElement(d,{id:n.id,onClick:i,characters:[n],meaning:n.meaning,remarks:n.remarks,key:n.id,hideMeaning:!1,hidePinYin:!1})})))}var k=function(n){var e=n.words,i=n.onClickCard,a=n.hideMeaning,t=n.hidePinYin;return r.a.createElement(r.a.Fragment,null,e.map(function(n){return r.a.createElement(d,Object.assign({id:n.id,onClick:i},n,{key:n.id,hidePinYin:t,hideMeaning:a}))}))},b=function(n){var e=t.useState(n),i=Object(m.a)(e,2),a=i[0],r=i[1];return{checked:a,onChange:function(n){return r(n.target.checked)},type:"checkbox",setChecked:r}},E=function(n){var e=t.useState(n),i=Object(m.a)(e,2),a=i[0],r=i[1];return{value:a,onChange:function(n){return r(n.target.value)},type:"text",setValue:r}};function C(n){var e=0;if(0===n.length)return e.toString();for(var i=0;i<n.length;i++){e=(e<<5)-e+n.charCodeAt(i),e&=e}return e.toString()}var j=function(n,e,i,a,r){var o=t.useState(n),c=Object(m.a)(o,2),g=c[0],s=c[1];return t.useEffect(function(){var n=e;if(i){var t=i.toLowerCase().replace(/ /g,"");n=n.filter(function(n){return(p(n.meaning)||"").toLowerCase().replace(/ /g,"").includes(t)})}if(a){var o=a.replace(/ /g,"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");n=n.filter(function(n){var e=n.characters.map(function(n){return n.pinyin}).join("").replace(/ /g,"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();return r?e===o:e.includes(o)})}s(n)},[g,r,i,a,e]),{results:g,resultsHash:C(JSON.stringify(g))}},P=function(n,e,i){var a=n.onResultsChanged,t=n.results,o=n.resultsHash;r.a.useEffect(function(){a(t)},[o]),r.a.useEffect(function(){e.onHideMeaningChanged(e.checked)},[e.checked]),r.a.useEffect(function(){i.onHidePinYinChanged(i.checked)},[i.checked])};function S(n){var e=n.isBackButtonMode,i=n.words,a=n.onResultsChanged,r=n.onHideMeaningChanged,o=n.onHidePinYinChanged,c=E(""),m=E(""),g=b(!1),s=b(!1),l=b(!1),p=j([],i,c.value,m.value,g.checked),d=p.results,y=p.resultsHash;function h(){return!!c.value||!!m.value||!!g.checked||!!l.checked||!!s.checked}return P({onResultsChanged:a,results:d,resultsHash:y},{checked:l.checked,onHideMeaningChanged:r},{checked:s.checked,onHidePinYinChanged:o}),t.createElement("div",{className:"filter-bar"},e?t.createElement("button",{onClick:u.navigateBack},"\u2190"):t.createElement(t.Fragment,null,t.createElement("button",{disabled:!h(),onClick:function(){h()&&(c.setValue(""),m.setValue(""),g.setChecked(!1),s.setChecked(!1),l.setChecked(!1))}},"Reset filters"),t.createElement("input",{placeholder:"Filter by meaning",onChange:c.onChange,value:c.value,type:c.type}),t.createElement("input",{placeholder:"Filter by pin yin",onChange:m.onChange,value:m.value,type:m.type}),t.createElement("input",{checked:g.checked,type:g.type,onChange:g.onChange,title:"Enable exact pinyin filtering. Ignores tones."}),t.createElement("input",{checked:s.checked,type:s.type,onChange:s.onChange,title:"Hide pinyin"}),t.createElement("input",{checked:l.checked,type:l.type,onChange:l.onChange,title:"Hide meaning"})))}var x=function(n){var e=t.useRef(0);return t.useLayoutEffect(function(){n&&(document.documentElement.scrollTop=e.current)},[n]),{saveScrollTop:function(){e.current=document.documentElement.scrollTop}}},N=function(n){return t.useLayoutEffect(function(){n||(document.documentElement.scrollTop=0)},[n]),{saveScrollTop:x(n).saveScrollTop}};function O(n){g();var e=u.hasPath(),i=N(!e).saveScrollTop,a=t.useState(n),r=Object(m.a)(a,2),o=r[0],c=r[1],s=t.useState(!1),l=Object(m.a)(s,2),p=l[0],d=l[1],y=t.useState(!1),h=Object(m.a)(y,2),f=h[0],v=h[1];function b(e){var i=o.find(function(n){return n.id===e});if(i)return i;var a=n.find(function(n){return n.id===e});if(a)return a;throw new Error("Word for id ".concat(e," not found"))}function E(n){u.navigateToPath(n)}return t.createElement(t.Fragment,null,t.createElement("div",{className:"filter-page"},t.createElement(S,{isBackButtonMode:e,words:n,onResultsChanged:c,onHideMeaningChanged:v,onHidePinYinChanged:d}),t.createElement("div",{className:"words"},e?function(){if(e){var n=function(){if(e)return u.getPath()}();return t.createElement(w,{word:b(n),id:n,onSubCharacterClick:E})}}():t.createElement(k,{onClickCard:function(n){i(),E(n)},words:o,hideMeaning:f,hidePinYin:p}))))}var z=i(2);var H=function(n){var e={};return Object.entries(n).forEach(function(n){return e[n[0]]=Object(z.a)({logogram:n[0],id:C(n[0])},n[1])}),e}({"\u4f60":{meaning:"you",pinyin:"n\u01d0"},"\u597d":{meaning:"good",pinyin:"h\u01ceo"},"\u518d":{pinyin:"z\xe0i",meaning:["again","once more"]},"\u89c1":{pinyin:"ji\xe0n",remarks:["to meet"]},"\u96f6":{meaning:"0",pinyin:"l\xedng"},"\u4e00":{meaning:"1",pinyin:"y\u012b"},"\u4e8c":{meaning:"2",pinyin:"\xe8r"},"\u4e09":{meaning:"3",pinyin:"s\u0101n"},"\u56db":{meaning:"4",pinyin:"s\xec"},"\u4e94":{meaning:"5",pinyin:"w\u01d4"},"\u516d":{meaning:"6",pinyin:"li\xf9"},"\u4e03":{meaning:"7",pinyin:"q\u012b"},"\u516b":{meaning:"8",pinyin:"b\u0101"},"\u4e5d":{meaning:"9",pinyin:"ji\u01d4"},"\u5341":{meaning:"10",pinyin:"sh\xed"},"\u767e":{meaning:"100",pinyin:"b\u01cei"},"\u5143":{meaning:["yuan","\xa5"],pinyin:"yu\xe1n"},"\u540d":{meaning:"name",pinyin:"m\xedng"},"\u59d3":{meaning:["to be called (family-name)","to be called (last-name)"],pinyin:"x\xecng"},"\u4ec0":{pinyin:"sh\xe9n",meaning:"what"},"\u4e48":{pinyin:"me",meaning:"suffix, used to form interrogative"},"\u5462":{pinyin:"ne",remarks:"Binding word used after answering a questions to direct the question to someone else"},"\u53eb":{meaning:"to be called",pinyin:"ji\xe0o"},"\u4eba":{meaning:"person",pinyin:"r\xe9n"},"\u5927":{meaning:["big","large","great"],pinyin:"d\xe0"},"\u592b":{meaning:["male adult","husband"],pinyin:"f\u016b"},"\u5c0f":{meaning:["small","few","young"],pinyin:"xi\u01ceo"},"\u65e5":{meaning:["sun","day"],pinyin:"r\xec"},"\u6708":{meaning:["moon","month","monthly"],pinyin:"yu\xe8"},"\u660e":{meaning:["bright","of clear meaning","to understand","wise"],pinyin:"m\xedng"},"\u65e6":{meaning:["dawn","morning","daybreak"],pinyin:"d\xe0n"},"\u5915":{meaning:["dusk","dawn"],pinyin:"x\u012b"},"\u5154":{meaning:["rabbit"],pinyin:"t\xf9"},"\u72d7":{meaning:["dog"],pinyin:"g\u01d2u"},"\u732b":{meaning:["cat"],pinyin:"m\u0101o"},"\u9a6c":{meaning:["horse"],pinyin:"m\u01ce"},"\u706b":{meaning:["fire","urgent","ammunition"],pinyin:"hu\u01d2"},"\u6728":{meaning:["tree","wood","wooden","coffin","simple"],pinyin:"m\xf9"},"\u5c71":{meaning:["mountain","hill"],pinyin:"sh\u0101n"},"\u77f3":{meaning:["stone"],pinyin:"sh\xed"},"\u6c34":{meaning:["water","river","liquid","beverage"],pinyin:"shu\u01d0"},"\u96e8":{meaning:["rain"],pinyin:"y\u01d4"},"\u51b0":{meaning:["ice"],pinyin:"b\u012bng"},"\u96ea":{meaning:["snow","snowfall"],pinyin:"xu\u011b"},"\u98ce":{meaning:["wind","news"],pinyin:"f\u0113ng"},"\u4ece":{meaning:["from"],pinyin:"c\xf3ng"},"\u708e":{meaning:["flame","inflammation"],pinyin:"y\xe1n"},"\u6797":{meaning:["woods","forest"],pinyin:"l\xedn"},"\u51fa":{meaning:["to go out"],pinyin:"ch\u016b"},"\u5ca9":{meaning:["rock","cliff"],pinyin:"y\xe1n"},"\u5b50":{meaning:["son","child","seed","egg"],pinyin:"z\u01d0",remarks:["Often pronounced with no tone as a suffix to emphasize smallness"]},"\u5973":{meaning:["female","woman","daughter"],pinyin:"n\u01da"},"\u7236":{meaning:["father"],pinyin:"f\xf9"},"\u6bcd":{meaning:["mother","elderly female relative","origin"],pinyin:"m\u01d4"},"\u5bb6":{meaning:["home","family"],pinyin:"ji\u0101"},"\u4f17":{meaning:["crowd","many","numerous"],pinyin:"zh\xf2ng"},"\u7131":{meaning:["flame"],pinyin:"y\xe0n"},"\u6676":{meaning:["crystal"],pinyin:"j\u012bng"},"\u68ee":{meaning:["forest"],pinyin:"s\u0113n"},"\u53e3":{meaning:["mouth"],pinyin:"k\u01d2u"},"\u5fc3":{meaning:["heart","mind"],pinyin:"x\u012bn"},"\u76ee":{meaning:["eye"],pinyin:"m\xf9"},"\u8033":{meaning:["ear"],pinyin:"\u011br"},"\u624b":{meaning:["hand"],pinyin:"sh\u01d2u"},"\u56de":{meaning:["to circle","to go back"],pinyin:"hu\xed"},"\u4e0d":{meaning:["not"],pinyin:"b\xf9"},"\u8001":{meaning:["old","experienced","always"],pinyin:"l\u01ceo"},"\u5e73":{meaning:["flat","equal","fair"],pinyin:"p\xedng"},"\u9ad8":{meaning:["high","tall","above average","loud"],pinyin:"g\u0101o"},"\u957f":{meaning:["length","long","forever","always"],pinyin:"ch\xe1ng"},"\u95e8":{meaning:["gate","door"],pinyin:"m\xe9n"},"\u95f4":{meaning:["between","among","room"],pinyin:"ji\u0101n"},"\u738b":{meaning:["king","monarch"],pinyin:"w\xe1ng",remarks:'Pronounced "w\xe0ng" it means "to rule" or "to reign"'},"\u4e3b":{meaning:["master","owner","host"],pinyin:"zh\u01d4"},"\u540e":{meaning:["queen","empress","back","behind","after","later"],pinyin:"h\xf2u"},"\u7389":{meaning:["jade"],pinyin:"y\xf9"},"\u725b":{meaning:["bull","cow","ox"],pinyin:"ni\xfa"},"\u7f8a":{meaning:["sheep"],pinyin:"y\xe1ng"},"\u9e1f":{meaning:["bird"],pinyin:"ni\u01ceo"},"\u9c7c":{meaning:["fish"],pinyin:"y\xfa"},"\u56fd":{meaning:["country","nation","state","national"],pinyin:"gu\xf3"},"\u4e2d":{meaning:["within","among","in","middle"],pinyin:"zh\u014dng"},"\u7f8e":{meaning:["beautiful","very satisfactory"],pinyin:"m\u011bi"},"\u767d":{meaning:["white","snowy","pure","bright"],pinyin:"b\xe1i"},"\u91d1":{meaning:["gold","golden","money","highly respected"],pinyin:"j\u012bn"},"\u73c0":{meaning:["amber"],pinyin:"p\xf2"},"\u6de1":{meaning:["plain","tasteless","mild"],pinyin:"d\xe0n"},"\u7530":{meaning:["field","farm"],pinyin:"ti\xe1n"},"\u7af9":{meaning:["bamboo"],pinyin:"zh\xfa"},"\u51ac":{meaning:["winter"],pinyin:"d\u014dng"},"\u8349":{meaning:["grass","straw","manuscript"],pinyin:"c\u01ceo"},"\u82d7":{meaning:["sprout","bud"],pinyin:"mi\xe1o"},"\u5403":{meaning:["to eat"],pinyin:"ch\u012b"},"\u559d":{meaning:["to drink"],pinyin:"h\u0113"},"\u74dc":{meaning:["melon"],pinyin:"gu\u0101"},"\u679c":{meaning:["fruit","nut"],pinyin:"gu\u01d2"},"\u6cb9":{meaning:["oil","fat","greasy","oily"],pinyin:"y\xf3u"},"\u5446":{meaning:["foolish","stupid","idiot"],pinyin:"d\u0101i"},"\u672a":{meaning:["not yet"],pinyin:"w\xe8i"},"\u672b":{meaning:["final","end"],pinyin:"m\xf2"},"\u6765":{meaning:["to come","to arrive","ever since"],pinyin:"l\xe1i"},"\u7238":{meaning:["father","dad"],pinyin:"b\xe0"},"\u5988":{meaning:["mama"],pinyin:"m\u0101"},"\u59b9":{meaning:["younger sister"],pinyin:"m\xe8i"},"\u4f4f":{meaning:["to stay","to stay","to reside"],pinyin:"zh\xf9"},"\u4fdd":{meaning:["to protect","to defend"],pinyin:"b\u01ceo"},"\u4f11":{meaning:["to rest"],pinyin:"xi\u016b"},"\u95ea":{meaning:["to dodge"],pinyin:"sh\u01cen"},"\u76bf":{meaning:["dish","vessel"],pinyin:"m\u01d0n"},"\u5200":{meaning:["knife","blade","(single-edged) sword"],pinyin:"d\u0101o"},"\u9149":{meaning:["vessel"],pinyin:"y\u01d2u"},"\u70b9":{meaning:["o'clock","point","dot","drop"],pinyin:"di\u01cen"},"\u534a":{meaning:["half","semi","incomplete"],pinyin:"b\xe0n"},"\u8eab":{meaning:["body","life","personally"],pinyin:"sh\u0113n"},"\u4f53":{meaning:["body","form","system"],pinyin:"t\u01d0"},"\u661f":{meaning:["star","heavenly body","satellite"],pinyin:"x\u012bng"},"\u6d77":{meaning:["ocean","sea"],pinyin:"h\u01cei"},"\u6d0b":{meaning:["ocean","vast","foreign"],pinyin:"y\xe1ng"},"\u4e1c":{meaning:["east"],pinyin:"d\u014dng"},"\u897f":{meaning:["west"],pinyin:"x\u012b"},"\u5357":{meaning:["south"],pinyin:"n\xe1n"},"\u5317":{meaning:["north"],pinyin:"b\u011bi"},"\u5de5":{meaning:["work","skill","profession"],pinyin:"g\u014dng"},"\u58eb":{meaning:["scholar"],pinyin:"sh\xec"},"\u8d1d":{meaning:["cowrie","shellfish"],pinyin:"b\xe8i"},"\u86d9":{meaning:["frog"],pinyin:"w\u0101"},"\u9f9f":{meaning:["turtle","tortoise"],pinyin:"gu\u012b"},"\u4e11":{meaning:["clown","shameful","ugly","disgraceful"],pinyin:"ch\u01d2u"},"\u5deb":{meaning:["witch","wizard","shaman"],pinyin:"w\u016b"},"\u7537":{meaning:["male"],pinyin:"n\xe1n"},"\u6709":{meaning:["to have","there is"],pinyin:"y\u01d2u"},"\u98de":{meaning:["to fly"],pinyin:"f\u0113i"},"\u53bb":{meaning:["to go"],pinyin:"q\xf9"},"\u5929":{meaning:["day","sky","heaven"],pinyin:"ti\u0101n"},"\u4e91":{meaning:["cloud"],pinyin:"y\xfan"},"\u5149":{meaning:["light","ray"],pinyin:"gu\u0101ng"},"\u6c14":{meaning:["gas","air","smell"],pinyin:"q\xec"},"\u96f7":{meaning:["thunder"],pinyin:"l\xe9i"},"\u5f13":{meaning:["bow"],pinyin:"g\u014dng"},"\u7f51":{meaning:["net","network"],pinyin:"w\u01ceng"},"\u7403":{meaning:["ball","sphere","globe"],pinyin:"qi\xfa"},"\u8db3":{meaning:["foot"],pinyin:"z\xfa"},"\u670b":{meaning:["friend"],pinyin:"p\xe9ng"},"\u53cb":{meaning:["friend"],pinyin:"y\u01d2u"},"\u4e0a":{meaning:["on top","upon","above","to climb","to get onto"],pinyin:"sh\xe0ng"},"\u4e0b":{meaning:["down","downwards","below","lower","to go down"],pinyin:"xi\xe0"},"\u8f66":{meaning:["car","vehicle"],pinyin:"ch\u0113"},"\u6237":{meaning:["household"],pinyin:"h\xf9"},"\u5b59":{meaning:["grandchild"],pinyin:"s\u016bn"},"\u751f":{meaning:["to be born","to give birth","life","to grow"],pinyin:"sh\u0113ng"},"\u5b89":{meaning:["content","calm","still","quiet","safe"],pinyin:"\u0101n"},"\u707e":{meaning:["disaster"],pinyin:"z\u0101i"},"\u54c1":{meaning:["article","commodity","product","goods","quality"],pinyin:"p\u01d0n"},"\u5473":{meaning:["taste","smell"],pinyin:"w\xe8i"},"\u674f":{meaning:["apricot","almond"],pinyin:"x\xecng"},"\u8336":{meaning:["tea","tea plant"],pinyin:"ch\xe1"},"\u7c73":{meaning:["rice"],pinyin:"m\u01d0",remarks:"Refers to uncooked rice"},"\u6b20":{meaning:["to owe","to lack"],pinyin:"qi\xe0n"},"\u8a00":{meaning:["words","speech","to say","to talk"],pinyin:"y\xe1n"},"\u5439":{meaning:["to blow"],pinyin:"chu\u012b"},"\u708a":{meaning:["to cook food"],pinyin:"chu\u012b"},"\u4fe1":{meaning:["letter","mail"],pinyin:"x\xecn"},"\u4ed9":{meaning:["immortal"],pinyin:"xi\u0101n"},"\u4f19":{meaning:["companion","partner","group"],pinyin:"hu\u01d2"},"\u4f5b":{meaning:["Buddha","Buddhism"],pinyin:"f\xf3"}});var M=function(n){var e={};return Object.entries(H).forEach(function(n){e[n[0]]=Object(z.a)({characters:[n[1]]},n[1])}),Object.entries(n).forEach(function(n){e[n[0]]=Object(z.a)({},n[1],{characters:n[0].split("").map(function(n){return H[n]}),id:C(n[0])})}),e}({"\u4f60\u597d":{meaning:"hello"},"\u518d\u89c1":{meaning:["bye","goodbye"]},"\u4ec0\u4e48":{meaning:"what",remarks:"replace with word you are asking for"},"\u4e00\u4e8c\u4e09\u56db":{meaning:"1, 2, 3, 4",remarks:"IH AH SEN TZ\xdc\xdc\xdc"}}),q=function(){var n=t.useRef(!1);n.current||(u.initialize(),n.current=!0)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(function(){return q(),r.a.createElement("div",{className:"app"},O(Object.values(M).map(function(n){return n})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},7:function(n,e,i){n.exports=i(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.56de2312.chunk.js.map