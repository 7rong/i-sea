"use strict";(self["webpackChunki_sea"]=self["webpackChunki_sea"]||[]).push([[672],{2672:function(t,e,s){s.r(e),s.d(e,{default:function(){return P}});var a=s(3396),i=s(7139),o=s(9242);const c={class:"container pt-3 pb-5"},r={class:"row gy-3 mt-3"},l=(0,a._)("div",{class:"col-md-8 mx-auto"},[(0,a._)("div",{class:"position-relative m-4"},[(0,a._)("div",{class:"progress",style:{height:"3px"}},[(0,a._)("div",{class:"progress-bar",role:"progressbar",style:{width:"0%"},"aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"})]),(0,a._)("div",{class:"position-absolute top-0 start-0 translate-middle rounded-pill text-center bg-muted border border-3 border-primary",style:{width:"3rem",height:"3rem"}},[(0,a._)("i",{class:"bi bi-cart-check fs-3 text-primary",style:{"line-height":"2.7rem"}})]),(0,a._)("div",{class:"position-absolute top-0 start-50 translate-middle rounded-pill text-center bg-muted border border-2 border-muted",style:{width:"3rem",height:"3rem"}},[(0,a._)("i",{class:"bi bi-pencil-square fs-3 text-muted",style:{"line-height":"2.8rem"}})]),(0,a._)("div",{class:"position-absolute top-0 start-100 translate-middle rounded-pill text-center bg-muted border border-2 border-muted",style:{width:"3rem",height:"3rem"}},[(0,a._)("i",{class:"bi bi-cash-coin fs-3 text-muted",style:{"line-height":"3rem"}})])])],-1),d={class:"col-md-10 mx-auto border py-3 border-1 rounded-3 mt-5 bg-white"},n={key:0,class:"table align-middle mb-0"},u=(0,a._)("thead",{class:"sticky-top"},[(0,a._)("tr",null,[(0,a._)("th",{colspan:"5"},"選購行程")])],-1),p={style:{width:"60px"}},h=["onClick"],g=(0,a._)("i",{class:"bi bi-trash3"},null,-1),m=[g],_={class:"d-md-table-cell d-none",style:{width:"150px"}},b={class:"row gy-2"},y={class:"col-12"},w={class:"text-secondary h6 mb-0"},k={class:"text-light"},f={class:"col-lg-3 col-5 mt-auto"},v={for:"cart_unit",class:"d-flex align-items-center"},x=(0,a._)("small",{style:{"word-break":"keep-all"},class:"me-2"},"人數：",-1),C=["onUpdate:modelValue","onChange","disabled"],D={class:"col-lg-9 col-7 d-flex align-items-center justify-content-end"},$={key:0,class:"mb-0 fs-6"},q={class:"text-primary h6"},U={key:1,class:"row cols-row-2 text-end"},L={class:"text-muted mb-0 fs-6"},z={class:"mb-0 fs-6"},M={class:"text-danger h5"},S={colspan:"5",class:"text-end"},W={key:0,class:"text-muted me-3 fs-6"},I={key:1,class:"m-0"},T={class:"h4 text-danger"},j={key:2,class:"m-0"},V={class:"h4"},H={for:"cart_coupon"},Y={class:"input-group input-group-sm mt-2"},K={class:"text-center"},Z={colspan:"5",class:"border-0"},A={key:1,class:"text-center py-3"},B={class:"fw-bold h5 text-muted mb-3"},E={key:0},F={key:1};function G(t,e,s,g,G,J){const N=(0,a.up)("LoadingComp"),O=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(N,{active:G.isLoading},null,8,["active"]),(0,a._)("div",c,[(0,a._)("div",r,[l,(0,a._)("div",d,[G.carts.length?((0,a.wg)(),(0,a.iD)("table",n,[u,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(G.carts,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",p,[(0,a._)("button",{type:"button",class:"btn btn-outline-danger btn-sm link-hover-white",onClick:t=>J.delCart(e)},m,8,h)]),(0,a._)("td",_,[(0,a._)("div",{style:(0,i.j5)([{"background-size":"cover","background-position":"center",padding:"30% 0"},{backgroundImage:`url(${e.product.imgUrl})`}])},null,4)]),(0,a._)("td",null,[(0,a._)("div",b,[(0,a._)("div",y,[(0,a._)("p",w,(0,i.zw)(e.product.title),1),(0,a._)("small",k,(0,i.zw)(e.dateChosen),1)]),(0,a._)("div",f,[(0,a._)("label",v,[x,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control border-0 p-0",id:"cart_unit","onUpdate:modelValue":t=>e.qty=t,min:"1",onChange:t=>J.updateCart(e),disabled:e.id===G.state.isLoadingItem},null,40,C),[[o.nr,e.qty,void 0,{number:!0}]])])]),(0,a._)("div",D,[e.product.price===e.product.origin_price?((0,a.wg)(),(0,a.iD)("p",$,[(0,a.Uk)(" TWD "),(0,a._)("span",q,(0,i.zw)(t.$filters.currency(e.product.origin_price)),1)])):(0,a.kq)("",!0),e.product.price!==e.product.origin_price?((0,a.wg)(),(0,a.iD)("div",U,[(0,a._)("del",L,(0,i.zw)(t.$filters.currency(e.product.origin_price))+"元 ",1),(0,a._)("p",z,[(0,a.Uk)(" TWD "),(0,a._)("span",M,(0,i.zw)(t.$filters.currency(e.product.price)),1)])])):(0,a.kq)("",!0)])])])])))),128)),(0,a._)("tr",null,[(0,a._)("td",S,[G.hasDiscord?((0,a.wg)(),(0,a.iD)("del",W,[(0,a.Uk)("折扣前 "),(0,a._)("span",null,(0,i.zw)(t.$filters.currency(G.total))+"元",1)])):(0,a.kq)("",!0),G.hasDiscord?((0,a.wg)(),(0,a.iD)("p",I,[(0,a.Uk)("TWD "),(0,a._)("span",T,(0,i.zw)(t.$filters.currency(G.final_total)),1)])):(0,a.kq)("",!0),G.hasDiscord?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",j,[(0,a.Uk)("TWD "),(0,a._)("span",V,(0,i.zw)(t.$filters.currency(G.final_total)),1)])),(0,a._)("label",H,[(0,a._)("div",Y,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control border-bottom",placeholder:"請輸入優惠碼",id:"cart_coupon","onUpdate:modelValue":e[0]||(e[0]=t=>G.coupon_code=t)},null,512),[[o.nr,G.coupon_code]]),(0,a._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[1]||(e[1]=(...t)=>J.addCouponCode&&J.addCouponCode(...t))}," 套用 ")])])])])]),(0,a._)("tfoot",null,[(0,a._)("tr",K,[(0,a._)("td",Z,[(0,a.Wm)(O,{to:"/cart/order",class:"btn btn-secondary mt-3 w-100"},{default:(0,a.w5)((()=>[(0,a.Uk)(" 確認訂單 ")])),_:1})])])])])):((0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("p",B,[G.cartCatch?((0,a.wg)(),(0,a.iD)("span",E,"購物車載入錯誤，請稍後再試")):((0,a.wg)(),(0,a.iD)("span",F,"目前無行程，快來跟我們一起下潛吧！"))]),(0,a.Wm)(O,{to:"/products",class:"btn btn-outline-secondary btn-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)(" 前往選購 ")])),_:1})]))])])])],64)}var J={data(){return{carts:[],total:"",final_total:"",isLoading:!1,coupon_code:"",hasDiscord:!1,state:{isLoadingItem:""},cartCatch:!1}},inject:["pushMsgState","emitter"],methods:{getCart(){const t="https://vue3-course-api.hexschool.io/api/7rong-api/cart";this.isLoading=!0,this.$http.get(t).then((t=>{this.carts=t.data.data.carts,this.total=t.data.data.total,this.final_total=t.data.data.final_total,this.isLoading=!1})).catch((t=>{this.isLoading=!1,this.cartCatch=!t.response.data.success}))},updateCart(t){const e=`https://vue3-course-api.hexschool.io/api/7rong-api/cart/${t.id}`,s={product_id:t.product_id,qty:t.qty};this.state.isLoadingItem=t.id,this.$http.put(e,{data:s}).then((e=>{const s=e;s.content=`已將人數改為「${t.qty}」`,this.pushMsgState(s,"更新購物車"),this.getCart(),this.state.isLoadingItem=""})).catch((t=>{const e={data:{}};e.data.success=t.response.data.success,e.data.message="系統錯誤，請稍後再試",this.pushMsgState(e,"更新購物車")}))},delCart(t){const e=`https://vue3-course-api.hexschool.io/api/7rong-api/cart/${t.id}`;this.$http.delete(e).then((e=>{this.emitter.emit("update-cart",t.id);const s=e;s.content=`已將「${t.product.title}」移除購物車`,this.pushMsgState(s,"刪除品項"),this.getCart()})).catch((t=>{const e={data:{}};e.data.success=t.response.data.success,e.data.message="系統錯誤，請稍後再試",this.pushMsgState(e,"刪除品項")}))},addCouponCode(){const t="https://vue3-course-api.hexschool.io/api/7rong-api/coupon",e={code:this.coupon_code};this.$http.post(t,{data:e}).then((t=>{if(t.data.success)this.hasDiscord=!0,this.getCart();else{const e={data:{}};e.data.success=t.data.success,e.data.message=t.data.message,this.pushMsgState(e,"使用優惠券")}})).catch((t=>{const e={data:{}};e.data.success=t.response.data.success,e.data.message="系統錯誤，請稍後再試",this.pushMsgState(e,"使用優惠券")}))}},created(){this.getCart()}},N=s(89);const O=(0,N.Z)(J,[["render",G]]);var P=O}}]);
//# sourceMappingURL=672.3f871440.js.map