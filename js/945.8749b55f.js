(self["webpackChunki_sea"]=self["webpackChunki_sea"]||[]).push([[945],{8803:function(t,e,s){
/*!
  * Bootstrap toast.js v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){t.exports=n(s(1884),s(4130),s(9069),s(1437))})(0,(function(t,e,s,n){"use strict";const a="toast",i="bs.toast",o=`.${i}`,r=`mouseover${o}`,c=`mouseout${o}`,l=`focusin${o}`,u=`focusout${o}`,h=`hide${o}`,d=`hidden${o}`,m=`show${o}`,g=`shown${o}`,f="fade",_="hide",p="show",v="showing",b={animation:"boolean",autohide:"boolean",delay:"number"},w={animation:!0,autohide:!0,delay:5e3};class y extends t{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return w}static get DefaultType(){return b}static get NAME(){return a}show(){const t=e.trigger(this._element,m);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(f);const s=()=>{this._element.classList.remove(v),e.trigger(this._element,g),this._maybeScheduleHide()};this._element.classList.remove(_),n.reflow(this._element),this._element.classList.add(p,v),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=e.trigger(this._element,h);if(t.defaultPrevented)return;const s=()=>{this._element.classList.add(_),this._element.classList.remove(v,p),e.trigger(this._element,d)};this._element.classList.add(v),this._queueCallback(s,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(p),super.dispose()}isShown(){return this._element.classList.contains(p)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){e.on(this._element,r,(t=>this._onInteraction(t,!0))),e.on(this._element,c,(t=>this._onInteraction(t,!1))),e.on(this._element,l,(t=>this._onInteraction(t,!0))),e.on(this._element,u,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=y.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return s.enableDismissTrigger(y),n.defineJQueryPlugin(y),y}))},8557:function(t,e,s){"use strict";s.d(e,{Z:function(){return i}});s(7658);function n(t){return{all:t=t||new Map,on:function(e,s){var n=t.get(e);n?n.push(s):t.set(e,[s])},off:function(e,s){var n=t.get(e);n&&(s?n.splice(n.indexOf(s)>>>0,1):t.set(e,[]))},emit:function(e,s){var n=t.get(e);n&&n.slice().map((function(t){t(s)})),(n=t.get("*"))&&n.slice().map((function(t){t(e,s)}))}}}const a=n();var i=a},2809:function(t,e,s){"use strict";var n=s(8557);const a=(t,e="更新")=>{if(t.data.success)n.Z.emit("push-msg",{style:"success",title:`${e}成功`,content:t.content});else{const s="string"===typeof t.data.message?[t.data.message]:t.data.message;n.Z.emit("push-msg",{style:"danger",title:`${e}失敗`,content:s.join("、")})}};e.Z=a},705:function(t,e,s){"use strict";s.d(e,{Z:function(){return w}});var n=s(3396);const a={class:"toast-container pe-3 toast-pos"};function i(t,e,s,i,o,r){const c=(0,n.up)("ToastMsg");return(0,n.wg)(),(0,n.iD)("div",a,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.messages,((t,e)=>((0,n.wg)(),(0,n.j4)(c,{key:e,msg:t},null,8,["msg"])))),128))])}s(7658);var o=s(7139);const r={class:"toast-header"},c={class:"me-auto"},l=(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),u={key:0,class:"toast-body text-white"};function h(t,e,s,a,i,h){return(0,n.wg)(),(0,n.iD)("div",{class:(0,o.C_)(["toast",`bg-${s.msg.style}`]),role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},[(0,n._)("div",r,[(0,n._)("strong",c,(0,o.zw)(s.msg.title),1),l]),s.msg.content?((0,n.wg)(),(0,n.iD)("div",u,(0,o.zw)(s.msg.content),1)):(0,n.kq)("",!0)],2)}var d=s(8803),m=s.n(d),g={name:"ToastMsg",props:["msg"],mounted(){const t=new(m())(this.$refs.toast,{delay:5e3});t.show()}},f=s(89);const _=(0,f.Z)(g,[["render",h]]);var p=_,v={components:{ToastMsg:p},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-msg",(t=>{const{style:e="success",title:s,content:n}=t;this.messages.push({style:e,title:s,content:n})}))}};const b=(0,f.Z)(v,[["render",i]]);var w=b},6945:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return C}});var n=s(3396);const a={class:"container mt-3 position-relative"};function i(t,e,s,i,o,r){const c=(0,n.up)("Navbar"),l=(0,n.up)("ToastList"),u=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(c),(0,n._)("div",a,[(0,n.Wm)(l),(0,n.Wm)(u)])],64)}s(7658);var o=s(8557),r=s(2809),c=s(705),l=s(9242);const u={class:"navbar navbar-expand-lg navbar-light bg-light"},h={class:"container-fluid"},d=(0,n._)("a",{class:"navbar-brand font-cherry text-primary",href:"#"},"ISEA",-1),m=(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),g={class:"collapse navbar-collapse justify-content-between",id:"navbarNav",ref:"dashboardNavbar"},f={class:"navbar-nav fw-bold"},_={class:"navbar-nav fw-bold"};function p(t,e,s,a,i,o){const r=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",u,[(0,n._)("div",h,[d,m,(0,n._)("div",g,[(0,n._)("div",f,[(0,n.Wm)(r,{to:"/dashboard/products",class:"nav-link px-3",onClick:o.toggleCollapse},{default:(0,n.w5)((()=>[(0,n.Uk)("產品")])),_:1},8,["onClick"]),(0,n.Wm)(r,{to:"/dashboard/orders",class:"nav-link px-3",onClick:o.toggleCollapse},{default:(0,n.w5)((()=>[(0,n.Uk)("訂單")])),_:1},8,["onClick"]),(0,n.Wm)(r,{to:"/dashboard/coupons",class:"nav-link px-3",onClick:o.toggleCollapse},{default:(0,n.w5)((()=>[(0,n.Uk)("優惠券")])),_:1},8,["onClick"])]),(0,n._)("div",_,[(0,n._)("a",{href:"#",onClick:e[0]||(e[0]=(0,l.iM)(((...t)=>o.logout&&o.logout(...t)),["prevent"])),class:"nav-link px-3"},"登出")])],512)])])}var v={methods:{logout(){const t="https://vue3-course-api.hexschool.io/logout";this.$http.post(t,this.user).then((t=>{t.data.success&&this.$router.push("/login")}))},toggleCollapse(){this.$refs.dashboardNavbar.classList.remove("show")}}},b=s(89);const w=(0,b.Z)(v,[["render",p]]);var y=w,k={components:{Navbar:y,ToastList:c.Z},provide(){return{emitter:o.Z,pushMsgState:r.Z}},created(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=`${t}`;const e="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(e,this.user).then((t=>{t.data.success||this.$router.push("/login")}))}};const $=(0,b.Z)(k,[["render",i]]);var C=$}}]);
//# sourceMappingURL=945.8749b55f.js.map