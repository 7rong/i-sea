"use strict";(self["webpackChunki_sea"]=self["webpackChunki_sea"]||[]).push([[800],{8707:function(e,t,l){l.d(t,{Z:function(){return w}});var a=l(3396),r=l(7139),n=l(9242);const d={"aria-label":"Page navigation"},s={class:"pagination justify-content-center"},i=(0,a._)("span",{"aria-hidden":"true"},"«",-1),o=[i],u=["onClick"],p=(0,a._)("span",{"aria-hidden":"true"},"»",-1),c=[p];function _(e,t,l,i,p,_){return(0,a.wg)(),(0,a.iD)("nav",d,[(0,a._)("ul",s,[(0,a._)("li",{class:(0,r.C_)(["page-item",{disabled:!l.pages.has_pre}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,n.iM)((e=>_.updatePage(l.pages.current_page-1)),["prevent"]))},o)],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(e=>((0,a.wg)(),(0,a.iD)("li",{class:"page-item",key:e},[(0,a._)("a",{class:(0,r.C_)(["page-link",{active:e===l.pages.current_page}]),href:"#",onClick:(0,n.iM)((t=>_.updatePage(e)),["prevent"])},(0,r.zw)(e),11,u)])))),128)),(0,a._)("li",{class:(0,r.C_)(["page-item",{disabled:!l.pages.has_next}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,n.iM)((e=>_.updatePage(l.pages.current_page+1)),["prevent"]))},c)],2)])])}var h={props:["pages"],methods:{updatePage(e){this.$emit("emit-page",e)}}},g=l(89);const m=(0,g.Z)(h,[["render",_]]);var w=m},4800:function(e,t,l){l.r(t),l.d(t,{default:function(){return ue}});var a=l(3396),r=l(7139),n=l(9242);const d={class:"table mt-4"},s=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"購買時間"),(0,a._)("th",null,"Email"),(0,a._)("th",null,"購買款項"),(0,a._)("th",null,"應付金額"),(0,a._)("th",null,"是否付款"),(0,a._)("th",null,"編輯")])],-1),i=["textContent"],o={class:"list-unstyled"},u={class:"text-right"},p={class:"form-check form-switch"},c=["for"],_=["id","onUpdate:modelValue"],h={class:"d-none d-md-block"},g={key:0},m={key:1},w={class:"btn-group"},b=["onClick"],k=["onClick"],y={key:0},f=(0,a._)("td",{colspan:"6",class:"text-center py-3"},"目前尚無訂單",-1),O=[f];function v(e,t,l,f,v,D){const M=(0,a.up)("LoadingComp"),x=(0,a.up)("OrderModal"),z=(0,a.up)("DelModal"),C=(0,a.up)("Pagination");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(M,{active:v.isLoading},null,8,["active"]),(0,a._)("table",d,[s,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(v.orders,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.create_at,class:(0,r.C_)({"text-secondary":!t.is_paid})},[(0,a._)("td",null,(0,r.zw)(e.$filters.date(t.create_at)),1),(0,a._)("td",null,[t.user?((0,a.wg)(),(0,a.iD)("span",{key:0,textContent:(0,r.zw)(t.user.email)},null,8,i)):(0,a.kq)("",!0)]),(0,a._)("td",null,[(0,a._)("ul",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.products,(t=>((0,a.wg)(),(0,a.iD)("li",{key:t.id},(0,r.zw)(e.product.product.title)+" 數量："+(0,r.zw)(e.product.qty)+" "+(0,r.zw)(e.product.product.unit),1)))),128))])]),(0,a._)("td",u,(0,r.zw)(e.$filters.currency(t.total)),1),(0,a._)("td",null,[(0,a._)("div",p,[(0,a._)("label",{class:"form-check-label",for:`paidSwitch${t.id}`},[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${t.id}`,"onUpdate:modelValue":e=>t.is_paid=e},null,8,_),[[n.e8,t.is_paid]]),(0,a._)("div",h,[t.is_paid?((0,a.wg)(),(0,a.iD)("span",g,"已付款")):((0,a.wg)(),(0,a.iD)("span",m,"未付款"))])],8,c)])]),(0,a._)("td",null,[(0,a._)("div",w,[(0,a._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:e=>D.openOrderModal(t)},"檢視",8,b),(0,a._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>D.openDelModal(t)},"刪除",8,k)])])],2)))),128)),v.orders.length?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("tr",y,O))])]),(0,a.Wm)(x,{order:v.tempOrder,ref:"orderModal"},null,8,["order"]),(0,a.Wm)(z,{delItem:v.tempOrder,ref:"delModal",onDelItem:D.delOrder},null,8,["delItem","onDelItem"]),v.orders.length?((0,a.wg)(),(0,a.j4)(C,{key:0,pages:v.pagination,onEmitPage:D.getOrders},null,8,["pages","onEmitPage"])):(0,a.kq)("",!0)],64)}var D=l(8707);const M={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},x={class:"modal-dialog modal-xl",role:"document"},z={class:"modal-content border-0"},C=(0,a._)("div",{class:"modal-header bg-dark text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"訂單細節")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),$={class:"modal-body"},P={class:"row"},L={class:"col-md-4"},Z=(0,a._)("h3",null,"用戶資料",-1),q={class:"table"},H={key:0},Y=(0,a._)("th",{style:{width:"100px"}},"姓名",-1),j=(0,a._)("th",null,"Email",-1),E=(0,a._)("th",null,"電話",-1),I=(0,a._)("th",null,"地址",-1),K={class:"col-md-8"},S=(0,a._)("h3",null,"訂單細節",-1),W={class:"table"},U=(0,a._)("th",{style:{width:"100px"}},"訂單編號",-1),V=(0,a._)("th",null,"下單時間",-1),N=(0,a._)("th",null,"付款時間",-1),A={key:0},B={key:1},F=(0,a._)("th",null,"付款狀態",-1),G={key:0,class:"text-success"},J={key:1,class:"text-muted"},Q=(0,a._)("th",null,"總金額",-1),R=(0,a._)("h3",null,"選購商品",-1),T={class:"table"},X=(0,a._)("thead",null,[(0,a._)("tr")],-1),ee={class:"text-end"};function te(e,t,l,n,d,s){return(0,a.wg)(),(0,a.iD)("div",M,[(0,a._)("div",x,[(0,a._)("div",z,[C,(0,a._)("div",$,[(0,a._)("div",P,[(0,a._)("div",L,[Z,(0,a._)("table",q,[d.tempOrder.user?((0,a.wg)(),(0,a.iD)("tbody",H,[(0,a._)("tr",null,[Y,(0,a._)("td",null,(0,r.zw)(d.tempOrder.user.name),1)]),(0,a._)("tr",null,[j,(0,a._)("td",null,(0,r.zw)(d.tempOrder.user.email),1)]),(0,a._)("tr",null,[E,(0,a._)("td",null,(0,r.zw)(d.tempOrder.user.tel),1)]),(0,a._)("tr",null,[I,(0,a._)("td",null,(0,r.zw)(d.tempOrder.user.address),1)])])):(0,a.kq)("",!0)])]),(0,a._)("div",K,[S,(0,a._)("table",W,[(0,a._)("tbody",null,[(0,a._)("tr",null,[U,(0,a._)("td",null,(0,r.zw)(d.tempOrder.id),1)]),(0,a._)("tr",null,[V,(0,a._)("td",null,(0,r.zw)(e.$filters.date(d.tempOrder.create_at)),1)]),(0,a._)("tr",null,[N,(0,a._)("td",null,[d.tempOrder.paid_date?((0,a.wg)(),(0,a.iD)("span",A,(0,r.zw)(e.$filters.date(d.tempOrder.paid_date)),1)):((0,a.wg)(),(0,a.iD)("span",B,"時間不正確"))])]),(0,a._)("tr",null,[F,(0,a._)("td",null,[d.tempOrder.is_paid?((0,a.wg)(),(0,a.iD)("strong",G,"已付款")):((0,a.wg)(),(0,a.iD)("span",J,"尚未付款"))])]),(0,a._)("tr",null,[Q,(0,a._)("td",null,(0,r.zw)(e.$filters.currency(d.tempOrder.total)),1)])])]),R,(0,a._)("table",T,[X,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.tempOrder.products,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("th",null,(0,r.zw)(t.product.title),1),(0,a._)("td",null,(0,r.zw)(t.qty)+" / "+(0,r.zw)(t.product.unit),1),(0,a._)("td",ee,(0,r.zw)(e.$filters.currency(t.final_total)),1)])))),128))])])])])])])])],512)}var le=l(1339),ae={data(){return{tempOrder:{}}},props:{order:{type:Object,default(){return{}}}},watch:{order(){this.tempOrder=this.order}},mixins:[le.Z]},re=l(89);const ne=(0,re.Z)(ae,[["render",te]]);var de=ne,se=l(9858),ie={data(){return{isLoading:!1,orders:[],tempOrder:{},pagination:{},currentPage:1}},components:{Pagination:D.Z,OrderModal:de,DelModal:se.Z},inject:["pushMsgState"],methods:{getOrders(e=1){this.currentPage=e;const t=`https://vue3-course-api.hexschool.io/api/7rong-api/admin/orders?page=${e}`;this.isLoading=!0,this.$http.get(t).then((e=>{this.orders=e.data.orders,this.pagination=e.data.pagination,this.isLoading=!1}))},openOrderModal(e){this.tempOrder={...e},this.$refs.orderModal.showModal()},openDelModal(e){this.tempOrder={...e},this.$refs.delModal.showModal()},delOrder(){const e=`https://vue3-course-api.hexschool.io/api/7rong-api/admin/order/${this.tempOrder.id}`;this.$http.delete(e).then((e=>{const t=e;t.content=`已移除訂單「${this.tempOrder.id}」`,this.pushMsgState(t,"刪除"),this.getOrders(),this.$refs.delModal.hideModal()}))}},created(){this.getOrders()}};const oe=(0,re.Z)(ie,[["render",v]]);var ue=oe}}]);
//# sourceMappingURL=800.d54257e4.js.map