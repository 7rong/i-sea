"use strict";(self["webpackChunki_sea"]=self["webpackChunki_sea"]||[]).push([[771],{4226:function(t,e){e.Z={setFavorite(t){const e=JSON.stringify(t);localStorage.setItem("favoriteList",e)},getFavorite(){return JSON.parse(localStorage.getItem("favoriteList"))}}},3771:function(t,e,s){s.r(e),s.d(e,{default:function(){return it}});var i=s(3396),c=s(7139),a=s(9242);const r={class:"products-banner bg-style d-flex justify-content-center align-items-center"},o={class:"text-white border border-3 border-white px-4 py-2"},l={class:"container-fluid py-5 cus-bg-patterns"},n={class:"row justify-content-center g-4"},d={class:"col-lg-3 col-12"},u={class:"input-group mb-3"},p=(0,i._)("i",{class:"bi bi-search",id:"search"},null,-1),h=(0,i._)("span",{class:"visually-hidden"},"search",-1),g=[p,h],m={class:"list-unstyled d-flex justify-content-around flex-lg-column"},y={class:"bg-transparent"},v=(0,i._)("p",{class:"d-md-inline"},"行程",-1),_={class:"bg-transparent"},f=(0,i._)("p",{class:"d-md-inline"},"潛旅",-1),b={class:"bg-transparent"},k=(0,i._)("p",{class:"d-md-inline"},"潛旅",-1),w={class:"bg-transparent"},I=(0,i._)("p",{class:"d-md-inline"},"玩水",-1),x={class:"bg-transparent"},C=(0,i._)("p",{class:"d-md-inline"},"最愛",-1),L={key:0,class:"col-lg-8"},M=(0,i._)("p",{class:"text-center text-muted fw-bold pt-4"},"暫無行程，繼續看看吧！",-1),S=[M],D={key:1,class:"col-lg-8"},F={class:"row row-cols-1 gy-3"},U={class:"card product-card position-relative"},z={class:"row gx-0"},$={class:"col-md-4"},j=(0,i._)("i",{class:"bi bi-search fs-2 product-search-icon position-absolute text-white text-center translate-middle top-50 start-50"},null,-1),P=[j],q={class:"col-md-8"},W={class:"card-body h-100 text-secondary d-flex flex-column justify-content-between"},Z={class:"card-title mb-1"},O=(0,i._)("i",{class:"bi bi-geo-alt-fill"},null,-1),H={class:"card-text mt-2 d-block text-muted"},J={class:"d-flex justify-content-end"},N={key:0,class:"h6 mb-0"},T={class:"text-primary h5"},Y={key:1,class:"h6 text-muted mt-1 me-2 mb-0"},K={key:2,class:"h6 mb-0"},V={class:"text-danger h5"},A=(0,i._)("span",{class:"visually-hidden product-hover"},"查看更多",-1),B=["onClick"],E=(0,i._)("i",{class:"bi bi-suit-heart"},null,-1),G=[E],Q={key:0,class:"text-center p-5 text-muted fw-bold"};function R(t,e,s,p,h,M){const j=(0,i.up)("LoadingComp"),E=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(j,{active:h.isLoading},null,8,["active"]),(0,i._)("div",r,[(0,i._)("h2",o,(0,c.zw)(h.categoryItem),1)]),(0,i._)("div",l,[(0,i._)("div",n,[(0,i._)("div",d,[(0,i._)("div",u,[(0,i.wy)((0,i._)("input",{type:"search",class:"form-control","aria-label":"search","aria-describedby":"search","onUpdate:modelValue":e[0]||(e[0]=t=>h.cacheSearch=t),placeholder:"海豚、綠島..."},null,512),[[a.nr,h.cacheSearch]]),(0,i._)("a",{href:"#",class:"input-group-text link-secondary",onClick:e[1]||(e[1]=(0,a.iM)(((...t)=>M.searchProducts&&M.searchProducts(...t)),["prevent"]))},g)]),(0,i._)("ul",m,[(0,i._)("li",y,[(0,i._)("a",{href:"#",class:(0,c.C_)(["category-item text-decoration-none py-2",{active:"所有行程"===h.categoryItem}]),onClick:e[2]||(e[2]=(0,a.iM)((t=>h.categoryItem="所有行程"),["prevent"]))},[(0,i.Uk)("所有"),v],2)]),(0,i._)("li",_,[(0,i._)("a",{href:"#",class:(0,c.C_)(["category-item text-decoration-none py-2",{active:"國外潛旅"===h.categoryItem}]),onClick:e[3]||(e[3]=(0,a.iM)((t=>h.categoryItem="國外潛旅"),["prevent"]))},[(0,i.Uk)("國外"),f],2)]),(0,i._)("li",b,[(0,i._)("a",{href:"#",class:(0,c.C_)(["category-item text-decoration-none py-2",{active:"國內潛旅"===h.categoryItem}]),onClick:e[4]||(e[4]=(0,a.iM)((t=>h.categoryItem="國內潛旅"),["prevent"]))},[(0,i.Uk)("國內"),k],2)]),(0,i._)("li",w,[(0,i._)("a",{href:"#",class:(0,c.C_)(["category-item text-decoration-none py-2",{active:"一日玩水"===h.categoryItem}]),onClick:e[5]||(e[5]=(0,a.iM)((t=>h.categoryItem="一日玩水"),["prevent"]))},[(0,i.Uk)("一日"),I],2)]),(0,i._)("li",x,[(0,i._)("a",{href:"#",class:(0,c.C_)(["category-item text-decoration-none py-2",{active:"我的最愛"===h.categoryItem}]),onClick:e[6]||(e[6]=(0,a.iM)((t=>h.categoryItem="我的最愛"),["prevent"]))},[(0,i.Uk)(" 我的"),C],2)])])]),M.productsFilter.length?((0,i.wg)(),(0,i.iD)("div",D,[(0,i._)("div",F,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(M.productsFilter,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"col",key:e.id},[(0,i._)("div",U,[(0,i._)("div",z,[(0,i._)("div",$,[(0,i._)("div",{class:"product-img bg-style position-relative",style:(0,c.j5)({backgroundImage:`url(${e.imgUrl})`})},P,4)]),(0,i._)("div",q,[(0,i._)("div",W,[(0,i._)("div",null,[(0,i._)("h5",Z,(0,c.zw)(e.title),1),(0,i._)("small",null,[O,(0,i.Uk)(" "+(0,c.zw)(e.location),1)]),(0,i._)("small",H,(0,c.zw)(e.description),1)]),(0,i._)("div",J,[e.price===e.origin_price?((0,i.wg)(),(0,i.iD)("div",N,[(0,i.Uk)(" TWD "),(0,i._)("span",T,(0,c.zw)(t.$filters.currency(e.origin_price)),1)])):(0,i.kq)("",!0),e.price!==e.origin_price?((0,i.wg)(),(0,i.iD)("del",Y," 原價 "+(0,c.zw)(t.$filters.currency(e.origin_price))+" 元 ",1)):(0,i.kq)("",!0),e.price!==e.origin_price?((0,i.wg)(),(0,i.iD)("div",K,[(0,i.Uk)(" TWD "),(0,i._)("span",V,(0,c.zw)(t.$filters.currency(e.price)),1)])):(0,i.kq)("",!0)])]),(0,i.Wm)(E,{to:`/product/${e.id}`,class:"stretched-link"},{default:(0,i.w5)((()=>[A])),_:2},1032,["to"]),(0,i._)("button",{type:"button",class:(0,c.C_)(["btn btn-outline-primary rounded-circle fs-4 position-absolute fav-btn",{active:h.favoriteIdList.includes(e.id)}]),onClick:(0,a.iM)((t=>M.toggleFavorite(e)),["prevent","stop"])},G,10,B)])])])])))),128)),h.productsCatch?((0,i.wg)(),(0,i.iD)("p",Q,(0,c.zw)(h.productsCatchMsg)+" 請稍後重試！ ",1)):(0,i.kq)("",!0)])])):((0,i.wg)(),(0,i.iD)("div",L,S))])])],64)}s(7658);var X=s(4226),tt={data(){return{isLoading:!1,products:[],status:{loadingItemId:""},favoriteIdList:X.Z.getFavorite()||[],categoryItem:localStorage.getItem("categoryItem"),cacheSearch:"",productsCatch:!1,productsCatchMsg:""}},inject:["pushMsgState","emitter"],methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/7rong-api/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,t.data.success&&(this.products=t.data.products)})).catch((t=>{this.isLoading=!1,this.productsCatch=!0,this.productsCatchMsg=t.response.data.message}))},searchProducts(){this.categoryItem="我的搜尋";const t=this.products.filter((t=>{const e=t.title+t.location+t.description;return e.match(this.cacheSearch)}));this.productsFilter=t,this.cacheSearch=""},toggleFavorite(t){this.favoriteIdList.includes(t.id)?(this.favoriteIdList.splice(this.favoriteIdList.indexOf(t.id),1),this.pushMsgState({data:{success:!0},content:`將「${t.title}」移除我的最愛`},"移除")):(this.favoriteIdList.push(t.id),this.pushMsgState({data:{success:!0},content:`將「${t.title}」加入我的最愛`},"加入")),X.Z.setFavorite(this.favoriteIdList),this.emitter.emit("update-favorite")}},computed:{productsFilter(){let t=[];if("所有行程"===this.categoryItem)t=this.products;else if("我的最愛"===this.categoryItem){const e=this.products.filter((t=>this.favoriteIdList.includes(t.id)));t=e}else{const e=this.products.filter((t=>t.category===this.categoryItem));t=e}return t}},created(){this.getProducts()}},et=s(89);const st=(0,et.Z)(tt,[["render",R]]);var it=st}}]);
//# sourceMappingURL=771.368bffda.js.map