"use strict";(self["webpackChunki_sea"]=self["webpackChunki_sea"]||[]).push([[901],{3901:function(t,e,o){o.r(e),o.d(e,{default:function(){return F}});var n=o(3396),l=o(7139);const a={class:"text-end mt-4"},s={class:"table mt-4"},p=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"名稱"),(0,n._)("th",null,"優惠碼"),(0,n._)("th",null,"折扣百分比"),(0,n._)("th",null,"到期日"),(0,n._)("th",null,"是否啟用"),(0,n._)("th",null,"編輯")])],-1),u={key:0,class:"text-success"},d={key:1,class:"text-muted"},i={class:"btn-group"},c=["onClick"],r=["onClick"],m={key:0},h=(0,n._)("td",{colspan:"5",class:"text-center py-3"},"目前尚無優惠券",-1),_=[h];function b(t,e,o,h,b,C){const f=(0,n.up)("LoadingComp"),g=(0,n.up)("CouponModal"),v=(0,n.up)("DelModal");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(f,{active:b.isLoading},null,8,["active"]),(0,n._)("div",null,[(0,n._)("div",a,[(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=t=>C.openModal(!0))}," 建立新的優惠券 ")]),(0,n._)("table",s,[p,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(b.coupons,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.code},[(0,n._)("td",null,(0,l.zw)(e.title),1),(0,n._)("td",null,(0,l.zw)(e.code),1),(0,n._)("td",null,(0,l.zw)(e.percent)+"%",1),(0,n._)("td",null,(0,l.zw)(t.$filters.date(e.due_date)),1),(0,n._)("td",null,[1===e.is_enabled?((0,n.wg)(),(0,n.iD)("span",u,"啟用")):((0,n.wg)(),(0,n.iD)("span",d,"未啟用"))]),(0,n._)("td",null,[(0,n._)("div",i,[(0,n._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:t=>C.openModal(!1,e)},"編輯",8,c),(0,n._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:t=>C.openDelModal(e)},"刪除",8,r)])])])))),128)),b.coupons.length?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("tr",m,_))])]),(0,n.Wm)(g,{ref:"couponModal",coupon:b.tempCoupon,onUpdateCoupon:C.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,n.Wm)(v,{ref:"delModal",delItem:b.tempCoupon,onDelItem:C.deleteCoupon},null,8,["delItem","onDelItem"])])],64)}var C=o(9858),f=o(9242);const g={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},v={class:"modal-dialog",role:"document"},w={class:"modal-content"},y={class:"modal-header bg-primary"},M={class:"modal-title text-white"},k=(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),D={class:"modal-body"},x={class:"mb-3"},$={for:"title"},U={class:"mb-3"},L={for:"coupon_code"},z={class:"mb-3"},S={for:"due_date"},V={class:"mb-3"},I={for:"price"},N={class:"mb-3"},Z={class:"form-check"},T={class:"form-check-label",for:"is_enabled"},W={class:"modal-footer"},j=(0,n._)("button",{type:"button",class:"btn btn-outline-light","data-bs-dismiss":"modal"},"取消",-1);function H(t,e,o,a,s,p){return(0,n.wg)(),(0,n.iD)("div",g,[(0,n._)("div",v,[(0,n._)("div",w,[(0,n._)("div",y,[(0,n._)("h5",M,(0,l.zw)(s.tempCoupon.modalTitle)+"優惠券",1),k]),(0,n._)("div",D,[(0,n._)("div",x,[(0,n._)("label",$,[(0,n.Uk)("標題 "),(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempCoupon.title=t),placeholder:"請輸入標題"},null,512),[[f.nr,s.tempCoupon.title]])])]),(0,n._)("div",U,[(0,n._)("label",L,[(0,n.Uk)("優惠碼 "),(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":e[1]||(e[1]=t=>s.tempCoupon.code=t),placeholder:"請輸入優惠碼"},null,512),[[f.nr,s.tempCoupon.code]])])]),(0,n._)("div",z,[(0,n._)("label",S,[(0,n.Uk)("到期日 "),(0,n.wy)((0,n._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[2]||(e[2]=t=>s.due_date=t)},null,512),[[f.nr,s.due_date]])])]),(0,n._)("div",V,[(0,n._)("label",I,[(0,n.Uk)("折扣百分比 "),(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempCoupon.percent=t),placeholder:"請輸入折扣百分比"},null,512),[[f.nr,s.tempCoupon.percent,void 0,{number:!0}]])])]),(0,n._)("div",N,[(0,n._)("div",Z,[(0,n._)("label",T,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=t=>s.tempCoupon.is_enabled=t),id:"is_enabled"},null,512),[[f.e8,s.tempCoupon.is_enabled]]),(0,n.Uk)(" 是否啟用 ")])])])]),(0,n._)("div",W,[j,(0,n._)("button",{type:"button",class:"btn btn-outline-primary",onClick:e[5]||(e[5]=e=>t.$emit("update-coupon",s.tempCoupon))},"確定 ")])])])],512)}var Y=o(1339),q={name:"couponModal",data(){return{tempCoupon:{},due_date:""}},props:{coupon:{type:Object,default(){return{}}}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const t=new Date(1e3*this.tempCoupon.due_date).toLocaleDateString("en-CA");this.due_date=t},due_date(){const t=new Date(this.due_date),e=Math.floor(t/1e3);this.tempCoupon.due_date=e}},mixins:[Y.Z]},A=o(89);const K=(0,A.Z)(q,[["render",H]]);var O=K,B={data(){return{isLoading:!1,tempCoupon:{},coupons:[]}},components:{CouponModal:O,DelModal:C.Z},inject:["pushMsgState"],methods:{getCoupons(){const t="https://vue3-course-api.hexschool.io/api/7rong-api/admin/coupons";this.isLoading=!0,this.$http.get(t).then((t=>{this.coupons=t.data.coupons,this.isLoading=!1}))},openModal(t,e){t?(this.isNew=t,this.tempCoupon={modalTitle:"新增"}):(this.isNew=t,this.tempCoupon={...e,modalTitle:"編輯"}),this.$refs.couponModal.showModal()},updateCoupon(t){this.tempCoupon=t;let e="https://vue3-course-api.hexschool.io/api/7rong-api/admin/coupon",o="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/7rong-api/admin/coupon/${t.id}`,o="put"),this.$http[o](e,{data:this.tempCoupon}).then((e=>{if(this.getCoupons(),this.$refs.couponModal.hideModal(),this.isNew){const o=e;o.content=`已將「${t.title}」加入優惠券`,this.pushMsgState(o,"新增")}else{const o=e;o.content=`已儲存「${t.title}」內容變更`,this.pushMsgState(o,"編輯")}}))},openDelModal(t){this.tempCoupon={...t},this.$refs.delModal.showModal()},deleteCoupon(){const t=`https://vue3-course-api.hexschool.io/api/7rong-api/admin/coupon/${this.tempCoupon.id}`;this.$http.delete(t).then((t=>{this.getCoupons(),this.$refs.delModal.hideModal();const e=t;e.content=`已移除優惠券「${this.tempCoupon.title}」`,this.pushMsgState(e,"刪除")}))}},created(){this.getCoupons()}};const E=(0,A.Z)(B,[["render",b]]);var F=E}}]);
//# sourceMappingURL=901.0f54bbaa.js.map