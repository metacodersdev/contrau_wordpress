var D=Object.defineProperty;var f=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var b=(t,e,o)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,v=(t,e)=>{for(var o in e||(e={}))M.call(e,o)&&b(t,o,e[o]);if(f)for(var o of f(e))x.call(e,o)&&b(t,o,e[o]);return t};import{n as E,V as $}from"./js/vueComponentNormalizer.87056a83.js";import{d,S as k}from"./js/index.460e1b4b.js";import{b as O,T as q}from"./js/index.c457d65c.js";import{a as p}from"./js/index.01898232.js";import{B as A,u as T}from"./js/helpers.e80a64dc.js";import{i as P}from"./js/isEqual.d3730f65.js";import{A as R}from"./js/App.fc349665.js";import"./js/client.93f15631.js";/* empty css                */import"./js/params.bea1a08d.js";import"./js/ToolsSettings.cc636f56.js";import"./js/JsonValues.08065e69.js";import"./js/Index.c7d3532f.js";import"./js/SettingsRow.eb71f07b.js";import"./js/Row.13b6f3f1.js";import"./js/Checkbox.5873a8d2.js";import"./js/Checkmark.e7547654.js";import"./js/Tabs.23386ef9.js";import"./js/TruSeoScore.a520926e.js";import"./js/Information.f4b75b56.js";import"./js/Slide.f5d21606.js";import"./js/Modal.a1dd4f63.js";import"./js/MaxCounts.3eed5286.js";import"./js/RadioToggle.98e1e7ec.js";import"./js/GoogleSearchPreview.bf413128.js";import"./js/HtmlTagsEditor.45568624.js";import"./js/Editor.97935a18.js";import"./js/UnfilteredHtml.13ff0800.js";import"./js/Tooltip.674a9fb4.js";import"./js/QuestionMark.83ebd18e.js";import"./js/Pencil.d547ebca.js";import"./js/Trash.214b5744.js";import"./js/Plus.a9b9ba75.js";import"./js/Close.5e7bcb70.js";import"./js/popup.25df8419.js";import"./js/Blur.8490ecd2.js";import"./js/Index.17df93e8.js";import"./js/Table.523a0249.js";import"./js/InternalOutbound.0e3ee7df.js";import"./js/Img.f20cb7b5.js";import"./js/FacebookPreview.d0469b54.js";import"./js/dannie-profile.41545edf.js";import"./js/TwitterPreview.1bf54672.js";import"./js/Book.b6a9040c.js";import"./js/Build.1297b1bd.js";import"./js/Redirects.62d4fed2.js";import"./js/ProBadge.7c0de2f7.js";import"./js/External.8868c638.js";import"./js/Exclamation.356738ce.js";import"./js/Gear.c974e953.js";import"./js/Card.77d72357.js";import"./js/LicenseKeyBar.0d9de81d.js";import"./js/LogoGear.0c3dd5e3.js";function _(t,e,o){return t==null?t:O(t,e,o)}const w=t=>t.parentElement.removeChild(t),B=()=>{const t=u();document.body.classList.toggle("aioseo-settings-bar-is-active",t),document.body.classList.toggle("aioseo-settings-bar-is-inactive",!t)},F=()=>{const t=m();r(document.body,"aioseo-settings-bar-is"),document.body.classList.add(`aioseo-settings-bar-is-${t}`),g(t)},U=()=>{l.addEventListener("change",()=>{C(),g(m())}),j.observe(document.querySelector(".et-fb-page-settings-bar"),{attributeFilter:["class"]}),document.body.addEventListener("click",Y),s.addEventListener("click",()=>{const t=new Event("aioseo-divi-toggle-modal");document.dispatchEvent(t)})},N=()=>{const t=m();r(document.body,"aioseo-settings-bar-is"),document.body.classList.add(`aioseo-settings-bar-is-${t}`),B(),C(),V()||g(t)},C=()=>{!L()||(s=w(s))},g=t=>{if(L())return;const e=document.querySelector(".et-fb-page-settings-bar"),o=e.querySelector(".et-fb-page-settings-bar__toggle-button"),n=e.querySelectorAll(".et-fb-page-settings-bar__column");if(X(t),u())if(l.matches){const i=[...n].filter(c=>c.classList.contains("et-fb-page-settings-bar__column--main"));i.length&&i[0].appendChild(s)}else{const i=[...n].filter(c=>c.classList.contains("et-fb-page-settings-bar__column--left"));i.length&&i[0].insertBefore(s)}else o.insertAdjacentElement("afterend",s)},X=t=>{r(s,"aioseo-settings-bar-root"),s.classList.add(`aioseo-settings-bar-root-${t}`),r(s,"aioseo-settings-bar-root-is-mobile"),["aioseo-settings-bar-root-is-mobile",`aioseo-settings-bar-root-is-mobile-${t}`].forEach(n=>{s.classList.toggle(n,!l.matches)}),r(s,"aioseo-settings-bar-root-is-desktop"),["aioseo-settings-bar-root-is-desktop",`aioseo-settings-bar-root-is-desktop-${t}`].forEach(n=>{s.classList.toggle(n,l.matches)})},r=(t,e)=>{const o=[`${e}-left`,`${e}-right`,`${e}-top`,`${e}-top-left`,`${e}-top-right`,`${e}-bottom`,`${e}-bottom-left`,`${e}-bottom-right`];t.classList.remove(...o)},m=()=>{const t=document.querySelector(".et-fb-page-settings-bar").classList;return t.contains("et-fb-page-settings-bar--horizontal")&&!t.contains("et-fb-page-settings-bar--top")?"bottom":t.contains("et-fb-page-settings-bar--top")&&!t.contains("et-fb-page-settings-bar--corner")?"top":t.contains("et-fb-page-settings-bar--bottom-corner")?t.contains("et-fb-page-settings-bar--left-corner")?"bottom-left":"bottom-right":t.contains("et-fb-page-settings-bar--top-corner")?t.contains("et-fb-page-settings-bar--left-corner")?"top-left":"top-right":t.contains("et-fb-page-settings-bar--vertical--right")?"right":t.contains("et-fb-page-settings-bar--vertical--left")?"left":""},Y=t=>{if(!z())return;const e=t.target,o=".aioseo-modal",n=".aioseo-app.post-settings-modal";if(!e.closest(o)&&!e.closest(n)&&!(e!==document.querySelector(o)&&e.contains(document.querySelector(o)))&&e!==s){const i=new Event("aioseo-divi-toggle-modal",{open:!1});document.dispatchEvent(i)}},z=()=>!document.querySelector(".aioseo-modal").classList.contains("aioseo-modal-is-closed"),L=()=>document.documentElement!==s&&document.documentElement.contains(s),u=()=>document.querySelector(".et-fb-page-settings-bar").classList.contains("et-fb-page-settings-bar--active"),V=()=>document.querySelector(".et-fb-page-settings-bar").classList.contains("et-fb-page-settings-bar--dragged")&&!u(),l=window.matchMedia("(min-width: 768px)"),j=new MutationObserver(N),Q="#aioseo-settings";let s=document.querySelector(Q);s=w(s);var W=()=>{B(),F(),U()};let h={};const a=()=>{const t=v({},h),e=A();P(t,e)||(h=e,T())},G=()=>{p.dispatch("saveCurrentPost",p.state.currentPost)};var H=()=>{a(),window.addEventListener("message",t=>{t.data.eventType==="et_fb_section_content_change"&&d(a,1e3)}),window.wp&&window.wp.hooks.addFilter("et.builder.store.setting.update","aioseo",(t,e)=>{if(t)switch(e){case"et_pb_post_settings_title":_(ETBuilderBackendDynamic,"postTitle",t),d(a,1e3);break;case"et_pb_post_settings_excerpt":_(ETBuilderBackendDynamic,"postMeta.post_excerpt",t),d(a,1e3);break}return t}),document.querySelector(".et-fb-button--save-draft, .et-fb-button--publish").addEventListener("click",G)},I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"aioseo-draggable"},[t.completelyDraggable?o("div",{on:{dragMouseDown:t.dragMouseDown}},[t._t("default")],2):t._e(),t.completelyDraggable?t._e():o("div",[t._t("default")],2)])},J=[];const K={props:{completelyDraggable:{type:Boolean,default(){return!0}}},data(){return{position1:0,position2:0,position3:0,position4:0}},methods:{dragMouseDown(t){t=t||window.event,t.preventDefault(),this.position3=t.clientX,this.position4=t.clientY,document.onmousemove=this.elementDrag,document.onmouseup=this.closeDragElement},elementDrag(t){t=t||window.event,t.preventDefault(),this.position1=this.position3-t.clientX,this.position2=this.position4-t.clientY,this.position3=t.clientX,this.position4=t.clientY,this.$el.style.top=this.$el.offsetTop-this.position2+"px",this.$el.style.left=this.$el.offsetLeft-this.position1+"px"},closeDragElement(){document.onmouseup=null,document.onmousemove=null}}},y={};var Z=E(K,I,J,!1,tt,null,null,null);function tt(t){for(let e in y)this[e]=y[e]}var et=function(){return Z.exports}(),ot=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("util-draggable",{ref:"modal-container",attrs:{completelyDraggable:!1}},[o("div",{staticClass:"aioseo-modal",class:{"aioseo-modal-is-closed":!t.isOpen}},[o("div",{staticClass:"aioseo-modal-header",on:{mousedown:function(n){return n.preventDefault(),function(i){return t.$refs["modal-container"].dragMouseDown(i)}.apply(null,arguments)}}},[o("div",{staticClass:"aioseo-modal-header-title"},[t._v(t._s(t.strings.header))]),o("div",{staticClass:"aioseo-modal-header-close",on:{click:function(n){t.isOpen=!1}}},[o("svg-close")],1)]),o("div",{staticClass:"aioseo-modal-body edit-post-sidebar"},[o("PostSettings")],1)])])},st=[];const nt={components:{PostSettings:R,SvgClose:k,UtilDraggable:et},data(){return{isOpen:!1,strings:{header:this.$t.sprintf("%1$s settings","All in One SEO")}}},methods:{toggleModal(){this.isOpen=!this.isOpen}},beforeUnmount(){document.removeEventListener("aioseo-divi-toggle-modal",this.toggleModal)},mounted(){this.$nextTick(function(){document.addEventListener("aioseo-divi-toggle-modal",this.toggleModal)})}},S={};var it=E(nt,ot,st,!1,rt,null,null,null);function rt(t){for(let e in S)this[e]=S[e]}var at=function(){return it.exports}();$.prototype.$truSEO=new q;const lt=()=>{new $({store:p,data:{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"},render:t=>t(at)}).$mount("#aioseo-app-modal > div")},ct=()=>{W(),lt(),H()};window.addEventListener("message",function(t){t.data.eventType==="et_builder_api_ready"&&ct()});
