(this.webpackJsonpwidgets=this.webpackJsonpwidgets||[]).push([[0],{40:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l(1),c=l.n(n),i=l(16),s=l.n(i),u=[{label:"The colour red",value:"red",hex:"#e63c3cde"},{label:"A kind of green",value:"green",hex:"#46e469de"},{label:"The shade of blue",value:"blue",hex:"#20a7a1"}],r=[{label:"Afrikaans",value:"af"},{label:"Albanian",value:"sq"},{label:"Amharic",value:"am"},{label:"Arabic",value:"ar"},{label:"Armenian",value:"hy"},{label:"Azerbaijani",value:"az"},{label:"Basque",value:"eu"},{label:"Belarusian",value:"be"},{label:"Bengali",value:"bn"},{label:"Bosnian",value:"bs"},{label:"Bulgarian",value:"bg"},{label:"Catalan",value:"ca"},{label:"Cebuano",value:"ceb"},{label:"Chinese (Simplified)",value:"zh"},{label:"Chinese (Traditional)",value:"zh-TW"},{label:"Corsican",value:"co"},{label:"Croatian",value:"hr"},{label:"Czech",value:"cs"},{label:"Danish",value:"da"},{label:"Dutch",value:"nl"},{label:"English",value:"en"},{label:"Esperanto",value:"eo"},{label:"Estonian",value:"et"},{label:"Finnish",value:"fi"},{label:"French",value:"fr"},{label:"Frisian",value:"fy"},{label:"Galician",value:"gl"},{label:"Georgian",value:"ka"},{label:"German",value:"de"},{label:"Greek",value:"el"},{label:"Gujarati",value:"gu"},{label:"Haitian Creole",value:"ht"},{label:"Hausa",value:"ha"},{label:"Hawaiian",value:"haw"},{label:"Hebrew",value:"he"},{label:"Hindi",value:"hi"},{label:"Hmong",value:"hmn"},{label:"Hungarian",value:"hu"},{label:"Icelandic",value:"is"},{label:"Igbo",value:"ig"},{label:"Indonesian",value:"id"},{label:"Irish",value:"ga"},{label:"Italian",value:"it"},{label:"Japanese",value:"ja"},{label:"Javanese",value:"jv"},{label:"Kannada",value:"kn"},{label:"Kazakh",value:"kk"},{label:"Khmer",value:"km"},{label:"Kinyarwanda",value:"rw"},{label:"Korean",value:"ko"},{label:"Kurdish",value:"ku"},{label:"Kyrgyz",value:"ky"},{label:"Lao",value:"lo"},{label:"Latin",value:"la"},{label:"Latvian",value:"lv"},{label:"Lithuanian",value:"lt"},{label:"Luxembourgish",value:"lb"},{label:"Macedonian",value:"mk"},{label:"Malagasy",value:"mg"},{label:"Malay",value:"ms"},{label:"Malayalam",value:"ml"},{label:"Maltese",value:"mt"},{label:"Maori",value:"mi"},{label:"Marathi",value:"mr"},{label:"Mongolian",value:"mn"},{label:"Myanmar (Burmese)",value:"my"},{label:"Nepali",value:"ne"},{label:"Norwegian",value:"no"},{label:"Nyanja (Chichewa)",value:"ny"},{label:"Odia (Oriya)",value:"or"},{label:"Pashto",value:"ps"},{label:"Persian",value:"fa"},{label:"Polish",value:"pl"},{label:"Portuguese (Portugal, Brazil)",value:"pt"},{label:"Punjabi",value:"pa"},{label:"Romanian",value:"ro"},{label:"Russian",value:"ru"},{label:"Samoan",value:"sm"},{label:"Scots Gaelic",value:"gd"},{label:"Serbian",value:"sr"},{label:"Sesotho",value:"st"},{label:"Shona",value:"sn"},{label:"Sindhi",value:"sd"},{label:"Sinhala (Sinhalese)",value:"si"},{label:"Slovak",value:"sk"},{label:"Slovenian",value:"sl"},{label:"Somali",value:"so"},{label:"Spanish",value:"es"},{label:"Sundanese",value:"su"},{label:"Swahili",value:"sw"},{label:"Swedish",value:"sv"},{label:"Tagalog (Filipino)",value:"tl"},{label:"Tajik",value:"tg"},{label:"Tamil",value:"ta"},{label:"Tatar",value:"tt"},{label:"Telugu",value:"te"},{label:"Thai",value:"th"},{label:"Turkish",value:"tr"},{label:"Turkmen",value:"tk"},{label:"Ukrainian",value:"uk"},{label:"Urdu",value:"ur"},{label:"Uyghur",value:"ug"},{label:"Uzbek",value:"uz"},{label:"Vietnamese",value:"vi"},{label:"Welsh",value:"cy"},{label:"Xhosa",value:"xh"},{label:"Yiddish",value:"yi"},{label:"Yoruba",value:"yo"},{label:"Zulu",value:"zu"}],b=[{title:"What is React?",content:"React is a frontend javascript library"},{title:"Why use React?",content:"React is a favourite JS library amongst engineers"},{title:"How do you use React?",content:"You use React by creating components"}],o=l(2),v=function(e){var a=e.items,l=Object(n.useState)(null),i=Object(o.a)(l,2),s=i[0],u=i[1],r=a.map((function(e,a){var l=a===s?"active":"";return Object(t.jsxs)(c.a.Fragment,{children:[Object(t.jsxs)("div",{onClick:function(){u(a)},className:"title ".concat(l),children:[Object(t.jsx)("i",{className:"dropdown icon"}),e.title]}),Object(t.jsx)("div",{className:"content ".concat(l),children:Object(t.jsx)("p",{children:e.content})})]},a)}));return Object(t.jsx)("div",{className:"ui styled accordion",children:r})},j=l(4),d=l.n(j),h=l(5),m=l(6),f=l.n(m),O=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),l=a[0],c=a[1],i=Object(n.useState)(l),s=Object(o.a)(i,2),u=s[0],r=s[1],b=Object(n.useState)([]),v=Object(o.a)(b,2),j=v[0],m=v[1];Object(n.useEffect)((function(){var e=setTimeout((function(){r(l)}),500);return function(){clearTimeout(e)}}),[l]),Object(n.useEffect)((function(){u&&function(){var e=Object(h.a)(d.a.mark((function e(){var a,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://en.wikipedia.org/w/api.php",{params:{action:"query",list:"search",origin:"*",format:"json",srsearch:u}});case 2:a=e.sent,l=a.data,m(l.query.search);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[u]);var O=j.map((function(e){return Object(t.jsxs)("div",{className:"item",children:[Object(t.jsx)("div",{className:"right floated content",children:Object(t.jsx)("a",{href:"https://en.wikipedia.org?curid=".concat(e.pageid),className:"ui button",children:"Go"})}),Object(t.jsxs)("div",{className:"content",children:[Object(t.jsx)("div",{className:"header",children:e.title}),Object(t.jsx)("span",{dangerouslySetInnerHTML:{__html:e.snippet}})]})]},e.pageid)}));return Object(t.jsxs)("div",{children:[Object(t.jsx)("div",{className:"ui form",children:Object(t.jsxs)("div",{className:"field",children:[Object(t.jsx)("label",{children:"Enter Search Term"}),Object(t.jsx)("input",{className:"input",type:"search",value:l,onChange:function(e){return c(e.target.value)}})]})}),Object(t.jsx)("div",{className:"ui celled list",children:O})]})},p=function(e){var a=e.options,l=e.selected,c=e.onSelectedChange,i=e.label,s=e.resultText,u=Object(n.useState)(!1),r=Object(o.a)(u,2),b=r[0],v=r[1],j=Object(n.useRef)();Object(n.useEffect)((function(){document.body.addEventListener("click",(function(e){j.current&&j.current.contains(e.target)||v(!1)}))}),[]);var d=a.map((function(e,a){return e.value===l.value?null:Object(t.jsx)("div",{className:"item",onClick:function(){return c(e)},children:e.label},a)}));return Object(t.jsxs)("section",{children:[Object(t.jsx)("form",{className:"ui form",ref:j,children:Object(t.jsxs)("div",{className:"field",children:[Object(t.jsx)("label",{className:"label",children:i}),Object(t.jsxs)("div",{onClick:function(){return v(!b)},className:"ui selection dropdown ".concat(b?"visible active":""),children:[Object(t.jsx)("i",{className:"dropdown icon"}),Object(t.jsx)("div",{className:"text",children:l.label}),Object(t.jsx)("div",{className:"menu ".concat(b?"visible transition":""),children:d})]})]})}),Object(t.jsx)("p",{style:{fontSize:"2rem",color:l.hex?l.hex:"#ef79df"},children:s?"".concat(s," ").concat(l.value):null})]})},x=function(){var e=Object(n.useState)(u[0]),a=Object(o.a)(e,2),l=a[0],c=a[1];return Object(t.jsx)(p,{selected:l,onSelectedChange:c,options:u,label:"Select a Colour",resultText:"The text is"})},g=function(e){var a=e.language,l=e.text,c=Object(n.useState)(""),i=Object(o.a)(c,2),s=i[0],u=i[1],r=Object(n.useState)(l),b=Object(o.a)(r,2),v=b[0],j=b[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){j(l)}),500);return function(){clearTimeout(e)}}),[l]),Object(n.useEffect)((function(){(function(){var e=Object(h.a)(d.a.mark((function e(){var l,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("https://translation.googleapis.com/language/translate/v2",{},{params:{q:v,target:a.value,key:"AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"}});case 2:l=e.sent,t=l.data,u(t.data.translations[0].translatedText);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,v]),Object(t.jsx)("div",{children:Object(t.jsx)("p",{className:"ui",children:s})})},w=function(){var e=Object(n.useState)(r[20]),a=Object(o.a)(e,2),l=a[0],c=a[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),u=s[0],b=s[1];return Object(t.jsxs)("section",{children:[Object(t.jsx)("form",{className:"ui form",children:Object(t.jsxs)("div",{className:"field",children:[Object(t.jsx)("label",{className:"label",children:"Input text"})," ",Object(t.jsx)("textarea",{value:u,onChange:function(e){return b(e.currentTarget.value)}})]})}),Object(t.jsx)(p,{options:r,selected:l,onSelectedChange:c,label:"Select a Language"}),Object(t.jsxs)("section",{children:[Object(t.jsx)("h3",{children:"Translation:"}),Object(t.jsx)(g,{language:l,text:u})]})]})},y=function(e){var a=e.path,l=e.children,t=Object(n.useState)(window.location.pathname),c=Object(o.a)(t,2),i=c[0],s=c[1];return Object(n.useEffect)((function(){var e=function(){s(window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),i===a?l:null},S=function(e){var a=e.className,l=e.children,n=e.href;return Object(t.jsx)("a",{onClick:function(e){return function(e){if(!e.metaKey&&!e.ctrlKey){e.preventDefault(),window.history.pushState({},"",n);var a=new PopStateEvent("popstate");window.dispatchEvent(a)}}(e)},className:a,href:n,children:l})},k=function(){return Object(t.jsxs)("div",{className:"ui secondary pointing menu",children:[Object(t.jsx)(S,{className:"item",href:"/",children:"Accordion"}),Object(t.jsx)(S,{className:"item",href:"/list",children:"Wiki Search"}),Object(t.jsx)(S,{className:"item",href:"/dropdown",children:"Dropdown Menu"}),Object(t.jsx)(S,{className:"item",href:"/translate",children:"Google Translate"})]})},N=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)(k,{}),Object(t.jsx)(y,{path:"/",children:Object(t.jsx)(v,{items:b})}),Object(t.jsx)(y,{path:"/translate",children:Object(t.jsx)(w,{})}),Object(t.jsx)(y,{path:"/dropdown",children:Object(t.jsx)(x,{})}),Object(t.jsx)(y,{path:"/list",children:Object(t.jsx)(O,{})})]})};s.a.render(Object(t.jsx)(N,{}),document.querySelector("#root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e1f64663.chunk.js.map