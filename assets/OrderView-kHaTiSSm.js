import{a as p}from"./axios-L6U4YIEh.js";import{B as C}from"./modal-BarFWhKM.js";import{d as O}from"./dateMixin-rxM5WT6e.js";import{_ as f,o as l,c as d,a as t,t as s,j as m,F as _,h as b,k as v,H as k,d as y,b as $,r as g,n as w}from"./index-DxbqFczb.js";const x={methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new C(this.$refs.modal)}},D={props:{order:{type:Object,default(){return{}}}},data(){return{modal:"",tempOrder:{},isPaid:!1}},emits:["update-paid"],mixins:[x,O],watch:{order(){this.tempOrder=this.order}}},P={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},V={class:"modal-dialog modal-xl",role:"document"},E={class:"modal-content border-0"},I=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),T={class:"modal-body"},B={class:"row"},L={class:"col-md-4"},S=t("h3",null,"用戶資料",-1),U={class:"table"},A={key:0},j=t("th",{style:{width:"100px"}},"姓名",-1),N=t("th",null,"Email",-1),H=t("th",null,"電話",-1),R=t("th",null,"地址",-1),q={class:"col-md-8"},F=t("h3",null,"訂單細節",-1),z={class:"table"},G=t("th",{style:{width:"100px"}},"訂單編號",-1),J=t("th",null,"下單時間",-1),K=t("th",null,"付款狀態",-1),Q={key:0,class:"text-success"},W={key:1,class:"text-muted"},X=t("th",null,"總金額",-1),Y=t("h3",null,"選購商品",-1),Z={class:"table"},tt=t("thead",null,[t("tr")],-1),et={class:"text-end"},st={class:"d-flex justify-content-end"},ot={class:"form-check"},lt={class:"form-check-label",for:"flexCheckDefault"},dt={key:0},nt={key:1},at={class:"modal-footer"},rt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function it(o,n,r,h,e,u){return l(),d("div",P,[t("div",V,[t("div",E,[I,t("div",T,[t("div",B,[t("div",L,[S,t("table",U,[e.tempOrder.user?(l(),d("tbody",A,[t("tr",null,[j,t("td",null,s(e.tempOrder.user.name),1)]),t("tr",null,[N,t("td",null,s(e.tempOrder.user.email),1)]),t("tr",null,[H,t("td",null,s(e.tempOrder.user.tel),1)]),t("tr",null,[R,t("td",null,s(e.tempOrder.user.address),1)])])):m("",!0)])]),t("div",q,[F,t("table",z,[t("tbody",null,[t("tr",null,[G,t("td",null,s(e.tempOrder.id),1)]),t("tr",null,[J,t("td",null,s(o.formatDate(e.tempOrder.create_at)),1)]),t("tr",null,[K,t("td",null,[e.tempOrder.is_paid?(l(),d("strong",Q,"已付款")):(l(),d("span",W,"尚未付款"))])]),t("tr",null,[X,t("td",null,s(e.tempOrder.total),1)])])]),Y,t("table",Z,[tt,t("tbody",null,[(l(!0),d(_,null,b(e.tempOrder.products,i=>(l(),d("tr",{key:i.id},[t("th",null,s(i.product.title),1),t("td",null,s(i.qty)+" / "+s(i.product.unit),1),t("td",et,s(i.final_total),1)]))),128))])]),t("div",st,[t("div",ot,[v(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":n[0]||(n[0]=i=>e.tempOrder.is_paid=i)},null,512),[[k,e.tempOrder.is_paid]]),t("label",lt,[e.tempOrder.is_paid?(l(),d("span",dt,"已付款")):(l(),d("span",nt,"未付款"))])])])])])]),t("div",at,[rt,t("button",{type:"button",class:"btn btn-primary",onClick:n[1]||(n[1]=i=>o.$emit("update-paid",e.tempOrder))}," 修改付款狀態 ")])])])],512)}const ct=f(D,[["render",it]]),ut={props:{item:Object},emits:["del-item"],mixins:[x]},ht={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},_t={class:"modal-dialog",role:"document"},pt={class:"modal-content border-0"},mt={class:"modal-header bg-warning text-primary"},bt={class:"modal-title"},ft=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),yt={class:"modal-body"},$t={class:"text-danger"},gt={class:"modal-footer"},Ot=t("button",{type:"button",class:"btn btn-outline-info","data-bs-dismiss":"modal"}," 取消 ",-1);function vt(o,n,r,h,e,u){return l(),d("div",ht,[t("div",_t,[t("div",pt,[t("div",mt,[t("h5",bt,[t("span",null,"刪除 "+s(r.item.title),1)]),ft]),t("div",yt,[y(" 是否刪除 "),t("strong",$t,s(r.item.title),1),y(" (刪除後將無法恢復)。 ")]),t("div",gt,[Ot,t("button",{type:"button",class:"btn btn-danger",onClick:n[0]||(n[0]=i=>o.$emit("del-item"))}," 確認刪除 ")])])])],512)}const kt=f(ut,[["render",vt]]);var xt={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hsuanin-vue2024",BASE_URL:"/2023-vue-week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:Mt,VITE_PATH:Ct}=xt,wt={data(){return{orders:{},tempOrder:{},currentPage:1,url:Mt,path:Ct}},components:{OrderModal:ct,DelModal:kt},mixins:[O],methods:{getOrders(o=1){this.currentPage=o;const n=`${this.url}/api/${this.path}/admin/orders?page=${o}`;this.isLoading=!0,p.get(n).then(r=>{console.log(r),this.orders=r.data.orders,this.pagination=r.data.pagination}).catch(r=>{console.log(r.response.data.message),alert(r)})},openModal(o){this.tempOrder={...o},this.$refs.orderModal.openModal()},openDelOrderModal(o){this.tempOrder={...o},this.$refs.delModal.openModal()},updatePaid(o){const n=`${this.url}/api/${this.path}/admin/order/${o.id}`,r={is_paid:o.is_paid};p.put(n,{data:r}).then(h=>{console.log(h),this.$refs.orderModal.hideModal(),this.getOrders(this.currentPage)}).catch(h=>{console.log(h.response.data.message),alert("未成功更新訂單資料")})},delOrder(){const o=`${this.url}/api/${this.path}/admin/order/${this.tempOrder.id}`;p.delete(o).then(()=>{this.$refs.delModal.hideModal(),this.getOrders(this.currentPage)}).catch(n=>{alert(n.response.data.message)})}},created(){this.getOrders()}},Dt={class:"row bg-background rounded-3 py-3"},Pt=t("h2",{class:"pt-3 text-primary fw-bolder"},"訂單",-1),Vt={class:"col-12"},Et={class:"table mt-4"},It=t("thead",null,[t("tr",{class:"fw-bolder"},[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),Tt=["textContent"],Bt={class:"list-unstyled"},Lt={class:"text-right"},St={class:"form-check form-switch"},Ut=["id","onUpdate:modelValue","onChange"],At=["for"],jt={key:0},Nt={key:1},Ht={class:"btn-group"},Rt=["onClick"],qt=["onClick"];function Ft(o,n,r,h,e,u){const i=g("OrderModal"),M=g("DelModal");return l(),d("div",Dt,[Pt,t("div",Vt,[t("table",Et,[It,t("tbody",null,[(l(!0),d(_,null,b(e.orders,a=>(l(),d(_,{key:a.id+1},[e.orders.length?(l(),d("tr",{key:0,class:w({"text-secondary":!a.is_paid})},[t("td",null,s(o.formatDate(a.create_at)),1),t("td",null,[a.user?(l(),d("span",{key:0,textContent:s(a.user.email)},null,8,Tt)):m("",!0)]),t("td",null,[t("ul",Bt,[(l(!0),d(_,null,b(a.products,c=>(l(),d("li",{key:c.id},s(c.product.title)+" 數量："+s(c.qty)+" "+s(c.product.unit),1))),128))])]),t("td",Lt,s(a.total),1),t("td",null,[t("div",St,[v(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${a.id}`,"onUpdate:modelValue":c=>a.is_paid=c,onChange:c=>u.updatePaid(a)},null,40,Ut),[[k,a.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${a.id}`},[a.is_paid?(l(),d("span",jt,"已付款")):(l(),d("span",Nt,"未付款"))],8,At)])]),t("td",null,[t("div",Ht,[t("button",{class:"btn btn-outline-success btn-sm",type:"button",onClick:c=>u.openModal(a)}," 檢視 ",8,Rt),t("button",{class:"btn btn-outline-info btn-sm",type:"button",onClick:c=>u.openDelOrderModal(a)}," 刪除 ",8,qt)])])],2)):m("",!0)],64))),128))])])]),$(i,{ref:"orderModal",order:e.tempOrder,onUpdatePaid:u.updatePaid},null,8,["order","onUpdatePaid"]),$(M,{ref:"delModal",item:e.tempOrder,onDelItem:u.delOrder},null,8,["item","onDelItem"])])}const Qt=f(wt,[["render",Ft]]);export{Qt as default};
