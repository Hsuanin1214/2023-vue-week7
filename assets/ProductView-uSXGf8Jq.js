import{a as x}from"./axios-L6U4YIEh.js";import{P as S}from"./PaginationComponent-K0n5ehbO.js";import{B as $}from"./modal-BarFWhKM.js";import{_ as k,o as n,c as a,a as e,b as i,w as A,k as v,v as C,F as U,h as w,j as D,n as _,H as E,r as h,f as q,I as T,t as b,p as B,e as F}from"./index-DxbqFczb.js";import{L as H}from"./LoadingComponent-5TChf7rR.js";const O={props:["tempProduct","updateProduct","confirmUpdate","isNew"],data(){return{productModal:null,editProduct:{imagesUrl:[]}}},watch:{tempProduct:{handler(d){d&&!d.imagesUrl&&(d.imagesUrl=[]),this.editProduct=d},immediate:!0}},methods:{openModal(){this.productModal.show()},closeModal(){this.productModal.hide()}},mounted(){this.productModal=new $(this.$refs.productModal)}},R={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},j={class:"modal-dialog modal-xl"},z={class:"modal-content border-0"},Q={class:"modal-header bg-primary text-light fw-bolder"},G={id:"productModalLabel",class:"modal-title"},J={key:0},K={key:1},W=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),X={class:"modal-body"},Y={class:"row"},Z={class:"col-sm-4"},ee={class:"mb-2"},te={class:"mb-3"},oe=["src"],se=e("h3",{class:"mb-3"},"新增相關照片",-1),le={key:0},de={class:"mb-3"},ie=["onUpdate:modelValue"],ne=["src"],ae={key:2},ce={class:"col-sm-8"},re={class:"mb-3"},ue=e("label",{for:"title",class:"form-label"},"甜點名稱",-1),me={class:"row"},pe={class:"mb-3 col-md-6"},_e=e("label",{for:"category",class:"form-label"},"甜點類型",-1),he={class:"mb-3 col-md-6"},be=e("label",{for:"price",class:"form-label"},"甜點單位",-1),fe={class:"row"},ge={class:"mb-3 col-md-6"},ve=e("label",{for:"origin_price",class:"form-label"},"甜點原價",-1),Pe={class:"mb-3 col-md-6"},ye=e("label",{for:"price",class:"form-label"},"甜點售價",-1),Me=e("hr",null,null,-1),xe={class:"mb-3"},Ue=e("label",{for:"description",class:"form-label"},"甜點介紹",-1),we={class:"mb-3"},ke=e("label",{for:"content",class:"form-label"},"原料介紹",-1),Ve={class:"mb-3"},Ce={class:"form-check"},$e=e("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Le={class:"modal-footer"},Ie=e("button",{type:"button",class:"btn btn-outline-info","data-bs-dismiss":"modal"}," 取消 ",-1),Ne=["disabled"];function Se(d,t,r,p,o,c){const u=h("v-field"),m=h("error-message"),P=h("v-form");return n(),a("div",R,[e("div",j,[e("div",z,[e("div",Q,[e("h5",G,[r.isNew?(n(),a("span",J,"新增產品")):(n(),a("span",K,"編輯產品"))]),W]),i(P,{onSubmit:r.confirmUpdate,ref:"form"},{default:A(({meta:y,errors:s})=>[e("div",X,[e("div",Y,[e("div",Z,[e("div",ee,[e("div",te,[v(e("input",{type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結","onUpdate:modelValue":t[0]||(t[0]=l=>o.editProduct.imageUrl=l)},null,512),[[C,o.editProduct.imageUrl]])]),e("img",{class:"img-fluid",src:o.editProduct.imageUrl,alt:""},null,8,oe)]),se,Array.isArray(o.editProduct.imagesUrl)?(n(),a("div",le,[(n(!0),a(U,null,w(o.editProduct.imagesUrl,(l,M)=>(n(),a("div",{class:"mb-1",key:M+123},[e("div",de,[v(e("input",{"onUpdate:modelValue":N=>o.editProduct.imagesUrl[M]=N,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,ie),[[C,o.editProduct.imagesUrl[M]]])]),e("img",{class:"img-fluid",src:l,alt:""},null,8,ne)]))),128))])):D("",!0),o.editProduct.imagesUrl.length==0||o.editProduct.imagesUrl[o.editProduct.imagesUrl.length-1]?(n(),a("button",{key:1,class:"btn btn-outline-success btn-sm d-block w-100",onClick:t[1]||(t[1]=l=>o.editProduct.imagesUrl.push(""))}," 新增 ")):(n(),a("div",ae,[e("button",{class:"btn btn-outline-info btn-sm d-block w-100",onClick:t[2]||(t[2]=l=>o.editProduct.imagesUrl.pop())}," 刪除 ")]))]),e("div",ce,[e("div",re,[ue,i(u,{id:"title",name:"甜點名稱",type:"text",class:_(["form-control",{"is-invalid":s.甜點名稱}]),placeholder:"請輸入甜點名稱",modelValue:o.editProduct.title,"onUpdate:modelValue":t[3]||(t[3]=l=>o.editProduct.title=l),rules:"required"},null,8,["class","modelValue"]),i(m,{name:"甜點名稱",class:"invalid-feedback"})]),e("div",me,[e("div",pe,[_e,i(u,{id:"category",name:"甜點類型",type:"text",class:_(["form-control",{"is-invalid":s.甜點類型}]),placeholder:"請輸入甜點類型",modelValue:o.editProduct.category,"onUpdate:modelValue":t[4]||(t[4]=l=>o.editProduct.category=l),rules:"required"},null,8,["class","modelValue"]),i(m,{name:"甜點類型",class:"invalid-feedback"})]),e("div",he,[be,i(u,{id:"unit",name:"甜點單位",type:"text",class:_(["form-control",{"is-invalid":s.甜點單位}]),placeholder:"請輸入甜點單位",modelValue:o.editProduct.unit,"onUpdate:modelValue":t[5]||(t[5]=l=>o.editProduct.unit=l),rules:"required"},null,8,["class","modelValue"]),i(m,{name:"甜點單位",class:"invalid-feedback"})])]),e("div",fe,[e("div",ge,[ve,i(u,{id:"origin_price",name:"甜點原價",type:"number",class:_(["form-control",{"is-invalid":s.甜點原價}]),placeholder:"請輸入甜點原價",modelValue:o.editProduct.origin_price,"onUpdate:modelValue":t[6]||(t[6]=l=>o.editProduct.origin_price=l),rules:"required|integer|min_value:1"},null,8,["class","modelValue"]),i(m,{name:"甜點原價,必須是大於零的整數",class:"invalid-feedback"})]),e("div",Pe,[ye,i(u,{id:"price",name:"甜點售價",type:"number",class:_(["form-control",{"is-invalid":s.甜點售價}]),placeholder:"請輸入甜點售價，必須是大於零的整數",modelValue:o.editProduct.price,"onUpdate:modelValue":t[7]||(t[7]=l=>o.editProduct.price=l),rules:"required|integer|min_value:1"},null,8,["class","modelValue"]),i(m,{name:"甜點售價",class:"invalid-feedback"})])]),Me,e("div",xe,[Ue,i(u,{id:"description",rows:"10",name:"甜點介紹",type:"text",class:_(["form-control",{"is-invalid":s.甜點介紹}]),placeholder:"請輸入甜點介紹",modelValue:o.editProduct.description,"onUpdate:modelValue":t[8]||(t[8]=l=>o.editProduct.description=l),rules:"required",as:"textarea"},null,8,["class","modelValue"]),i(m,{name:"甜點介紹",class:"invalid-feedback"})]),e("div",we,[ke,i(u,{id:"description",rows:"10",name:"原料介紹",type:"text",class:_(["form-control",{"is-invalid":s.原料介紹}]),placeholder:"請輸入原料介紹",modelValue:o.editProduct.content,"onUpdate:modelValue":t[9]||(t[9]=l=>o.editProduct.content=l),rules:"required",as:"textarea"},null,8,["class","modelValue"]),i(m,{name:"原料介紹",class:"invalid-feedback"})]),e("div",Ve,[e("div",Ce,[v(e("input",{id:"is_enabled","onUpdate:modelValue":t[10]||(t[10]=l=>o.editProduct.is_enabled=l),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[E,o.editProduct.is_enabled]]),$e])])])])]),e("div",Le,[Ie,e("button",{type:"submit",class:"btn btn-outline-success",disabled:!y.valid}," 確認 ",8,Ne)])]),_:1},8,["onSubmit"])])])],512)}const Ae=k(O,[["render",Se]]),De={props:["delProduct"],data(){return{delProductModal:null}},methods:{openModal(){this.delProductModal.show()},closeModal(){this.delProductModal.hide()}},mounted(){this.delProductModal=new $(this.$refs.delProductModal)}},Ee={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},qe={class:"modal-dialog"},Te={class:"modal-content border-0"},Be=q('<div class="modal-header bg-warning text-primary"><h5 id="delProductModalLabel" class="modal-title"><span>刪除產品</span></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"> 是否刪除 <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。 </div>',2),Fe={class:"modal-footer"},He=e("button",{type:"button",class:"btn btn-outline-info","data-bs-dismiss":"modal"}," 取消 ",-1);function Oe(d,t,r,p,o,c){return n(),a("div",Ee,[e("div",qe,[e("div",Te,[Be,e("div",Fe,[He,e("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...u)=>r.delProduct&&r.delProduct(...u))}," 確認刪除 ")])])])],512)}const Re=k(De,[["render",Oe]]);var je={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hsuanin-vue2024",BASE_URL:"/2023-vue-week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:L,VITE_PATH:I}=je,f=L,g=I,ze={components:{PaginationComponent:S,ProductModalComponent:Ae,DeleteModalComponent:Re,LoadingComponent:H},data(){return{isNew:!1,products:[],tempProduct:{imagesUrl:[]},modal:{editModal:"",dModal:""},pagination:{},url:L,path:I,isLoading:!1,isFullPage:!0,filter:"蛋糕",categories:["慕斯","法式點心","蛋糕","塔類","奶酪","甜甜圈"]}},methods:{openModal(d,t){console.log(t),d==="new"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.pModal.openModal()):d==="edit"?(this.tempProduct={...t},this.isNew=!1,this.$refs.pModal.openModal()):d==="delete"&&(this.tempProduct={...t},Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.isNew=!1,this.$refs.dModal.openModal())},filterProduct(){this.getProducts()},getProducts(d=1){this.isLoading=!this.isLoading;const t=this.filter!=="全部"?this.filter:"",r=`${f}/api/${g}/admin/products?page=${d}&category=${t}`;console.log(r),x.get(r).then(p=>{console.log(p.data);const{products:o,pagination:c}=p.data;this.products=o,this.pagination=c,this.isLoading=!this.isLoading,console.log(this.products)}).catch(p=>{alert(p.response.data.message),console.log(p),this.$router.push("/")})},confirmUpdate(){this.tempProduct.id&&this.updateProduct()},updateProduct(){let d=`${f}/api/${g}/admin/product/${this.tempProduct.id}`,t="put";this.isNew&&(d=`${f}/api/${g}/admin/product`,t="post"),x[t](d,{data:this.tempProduct}).then(r=>{alert(r.data.message),this.$refs.pModal.closeModal(),this.getProducts()}).catch(r=>{alert(r.response.data.message)})},delProduct(){const d=`${f}/api/${g}/admin/product/${this.tempProduct.id}`;x.delete(d).then(t=>{alert(t.data.message),this.$refs.dModal.closeModal(),this.getProducts()}).catch(t=>{alert(t.response.data.message)})},createImages(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")}},mounted(){this.getProducts()}},V=d=>(B("data-v-460a4ab1"),d=d(),F(),d),Qe={class:"row bg-background rounded-3 py-3"},Ge=V(()=>e("h2",{class:"col-12 pt-3 text-primary fw-bolder"},"產品管理",-1)),Je={class:"d-flex justify-content-between"},Ke=V(()=>e("option",{value:"全部"},"全部",-1)),We=["value"],Xe={class:"text-end mt-4"},Ye={class:"col-12"},Ze={class:"table mt-4"},et=V(()=>e("thead",null,[e("tr",null,[e("th",{class:"fw-bolder text-center"},"分類"),e("th",{class:"fw-bolder text-center"},"產品名稱"),e("th",{class:"fw-bolder text-center"},"原價"),e("th",{class:"fw-bolder text-center"},"售價"),e("th",{class:"fw-bolder text-center"},"是否啟用"),e("th",{class:"fw-bolder text-center"},"編輯")])],-1)),tt={class:"text-center"},ot={class:"text-center"},st={class:"text-end"},lt={class:"text-end"},dt={class:"text-primary text-center"},it={key:0},nt={key:1},at={class:"text-center"},ct={class:"btn-group"},rt=["onClick"],ut=["onClick"];function mt(d,t,r,p,o,c){const u=h("loading-component"),m=h("pagination-component"),P=h("product-modal-component"),y=h("delete-modal-component");return n(),a("div",Qe,[Ge,e("div",Je,[v(e("select",{class:"w-25 form-select text-start mt-4","onUpdate:modelValue":t[0]||(t[0]=s=>o.filter=s),onChange:t[1]||(t[1]=(...s)=>c.filterProduct&&c.filterProduct(...s))},[Ke,(n(!0),a(U,null,w(o.categories,s=>(n(),a("option",{key:s+1,value:s},b(s),9,We))),128))],544),[[T,o.filter]]),e("div",Xe,[e("button",{class:"btn btn-secondary",onClick:t[2]||(t[2]=s=>c.openModal("new"))}," 增加新品項 ")])]),e("div",Ye,[e("table",Ze,[et,e("tbody",null,[i(u,{isLoading:o.isLoading},null,8,["isLoading"]),(n(!0),a(U,null,w(o.products,s=>(n(),a("tr",{key:s.id+1},[e("td",tt,b(s.category),1),e("td",ot,b(s.title),1),e("td",st,b(s.origin_price),1),e("td",lt,b(s.price),1),e("td",dt,[s.is_enabled?(n(),a("span",it,"啟用")):(n(),a("span",nt,"未啟用"))]),e("td",at,[e("div",ct,[e("button",{type:"button",class:"btn btn-outline-success btn-sm",onClick:l=>c.openModal("edit",s)}," 編輯 ",8,rt),e("button",{type:"button",class:"btn btn-outline-info btn-sm",onClick:l=>c.openModal("delete",s)}," 刪除 ",8,ut)])])]))),128))])])]),i(m,{pages:o.pagination,"get-items":c.getProducts},null,8,["pages","get-items"]),i(P,{"is-new":o.isNew,"temp-product":o.tempProduct,"update-product":c.updateProduct,"confirm-update":c.confirmUpdate,ref:"pModal"},null,8,["is-new","temp-product","update-product","confirm-update"]),i(y,{"del-product":c.delProduct,ref:"dModal",onDelItem:c.delProduct},null,8,["del-product","onDelItem"])])}const gt=k(ze,[["render",mt],["__scopeId","data-v-460a4ab1"]]);export{gt as default};