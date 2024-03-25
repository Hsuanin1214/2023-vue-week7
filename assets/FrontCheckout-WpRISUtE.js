import{a as k}from"./axios-L6U4YIEh.js";import{E as V,_ as E,m as N,g as T,c as _,a as e,F as S,h as I,t as m,b as a,w as g,f as O,r as h,o as f,n as p,k as u,v as P,G as b,d as U}from"./index-sckXRQPA.js";import{u as v}from"./cartStore-0ynJV03x.js";import{f as A}from"./formatNumberMixin-IlVSA5eF.js";var M={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hsuanin-vue2024",BASE_URL:"/2023-vue-week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:j,VITE_PATH:C}=M,D=V("orderStore",{state:()=>({products:[],selectedProduct:[],carts:{},status:{addCartLoading:"",cartQtyLoading:""},form:{user:{name:"",email:"",tel:"",address:""},message:""}}),actions:{isPhone(t){return/^(09)[0-9]{8}$/.test(t)?!0:"需要正確的電話號碼"},addOrder(){const t=v(),s=`${j}/api/${C}/order`,n=this.form;console.log(s,n),k.post(s,{data:n}).then(r=>{console.log(r),alert(r.data.message),this.$refs.form.resetForm(),t.getCart()}).catch(r=>{alert(r.response.data.message),console.dir(r)})}}});var q={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hsuanin-vue2024",BASE_URL:"/2023-vue-week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:R,VITE_PATH:H}=q,B={data(){return{originalMessage:"",form:{user:{name:"",email:"",tel:"",address:""},message:""},takeType:"selfTake",takeTime:""}},watch:{originalMessage(t){this.combineMessage()},takeType(){this.combineMessage()},takeTime(){this.combineMessage()}},mixins:[A],computed:{...N(v,["carts"])},methods:{...T(v,["getCart"]),...T(D,["isPhone"]),combineMessage(){let t="";(this.takeType||this.takeTime)&&(console.log(this.takeTime),t=`取貨方式：${this.takeType==="selfTake"?"自取":"宅配"}，時間：${this.takeTime}`),this.form.message=`${this.originalMessage}${this.originalMessage?"。":""}${t}`},async addOrder(){try{console.log("addOrder method called");const t=`${R}/api/${H}/order`,s=this.form;console.log(t,s);const n=await k.post(t,{data:s});console.log(n),alert(n.data.message),this.$refs.form.resetForm(),this.getCart(),this.$router.push("/checkOrder")}catch(t){alert(t.response?t.response.data.message:"提交訂單時發生錯誤"),console.error(t)}}},mounted(){this.getCart()}},F={class:"container px-5"},L=O('<h2 class="my-4 text-primary border-primary-left ps-3">訂單進度</h2><div class="row justify-content-center align-items-md-center"><div class="col-md-6"><h3 class="fw-bold mb-4 pt-3 h4 text-primary">訂購人資訊</h3></div><div class="col-md-6"><ul class="list-unstyled mb-0 ms-md-auto d-flex align-items-center justify-content-between justify-content-md-end w-100 mt-md-0 mt-4"><li class="me-md-6 me-3 position-relative custom-step-line"><i class="fas fa-check-circle d-md-inline d-block text-center me-2 text-secondary"></i><span class="text-nowrap text-secondary">商品確認</span></li><li class="me-md-6 me-3 position-relative custom-step-line"><i class="fas fa-check-circle d-md-inline d-block text-center me-2 text-secondary"></i><span class="text-nowrap text-secondary">訂購人填寫</span></li><li><i class="fas fa-dot-circle d-md-inline d-block text-center me-2"></i><span class="text-nowrap">訂單確認</span></li></ul></div></div>',2),z={class:"row flex-row-reverse justify-content-center pb-5"},G={class:"col-md-6"},Q={class:"border p-4 mb-4 scrollable-div-500"},J=["src","alt"],K={class:"w-100"},W={class:"d-flex justify-content-between"},X={class:"mb-0 fw-bold"},Y={class:"mb-0"},Z={class:"mb-0 fw-bold"},$={class:"table mt-4 border-top border-bottom text-muted"},ee=e("th",{scope:"row",class:"border-0 px-0 pt-4"}," 小計 ",-1),se={class:"text-end border-0 px-0 pt-4"},le=e("tr",null,[e("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 fw-normal"}," 支付方式 "),e("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"本店目前只提供自取或貨到付款 ")],-1),te={class:"d-flex justify-content-between mt-4"},oe=e("p",{class:"mb-0 h4 fw-bold"},"總金額",-1),ae={class:"mb-0 h4 fw-bold"},ie={class:"col-md-6"},de={class:"mb-2"},ne=e("label",{for:"name",class:"form-label text-info mb-0"},"收貨人姓名",-1),re={class:"mb-3 mt-4"},ce=e("label",{for:"email",class:"form-label text-muted mb-0"},"信箱",-1),me={class:"mb-3 mt-4"},pe=e("label",{for:"address",class:"form-label"},"收件人地址",-1),ue={class:"mb-2"},he=e("label",{for:"phone",class:"form-label text-muted mb-0"},"聯絡手機",-1),be={class:"mb-2"},_e=e("label",{for:"message",class:"text-muted mb-0"},"備註",-1),fe=e("label",{for:"text",class:"form-label text-muted mb-0"},"取貨方式",-1),ve={class:"accordion",id:"accordionExample"},Te={class:"card rounded-0"},ge={class:"card-header bg-light border-0 py-3 d-flex justify-content-between align-items-center",id:"headingOne","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},ke=e("label",{for:"selfTake",class:"mb-0 position-relative custom-checkout-label"},"自取",-1),ye=e("i",{class:"fas fa-chevron-down"},null,-1),xe={id:"collapseOne",class:"collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},we={class:"card-body bg-light ps-5 py-4"},Ve={class:"mb-2"},Ee=["disabled"],Ne=e("label",{for:"selfTakeNoon",class:"text-dark mb-0"},"12：00前",-1),Se={class:"mb-0"},Ie=["disabled"],Oe=e("label",{for:"selfTakeNight",class:"text-dark mb-0"},"20：00 店面關店前",-1),Pe={class:"card rounded-0"},Ue={class:"card-header bg-light border-0 py-3 collapsed d-flex justify-content-between align-items-center",id:"headingTwo","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"true","aria-controls":"collapseTwo"},Ae=e("label",{for:"shipTake",class:"mb-0 position-relative custom-checkout-label"},"宅配",-1),Me=e("i",{class:"fas fa-chevron-down"},null,-1),je={id:"collapseTwo",class:"collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},Ce={class:"card-body bg-light ps-5 py-4"},De={class:"mb-2"},qe=["disabled"],Re=e("label",{for:"shipTakeNoon",class:"text-dark mb-0"},"中午12：00前",-1),He={class:"mb-0"},Be=["disabled"],Fe=e("label",{for:"shipTakeNight",class:"text-dark mb-0"},"中午12：00後",-1),Le={class:"card rounded-0"},ze=e("div",{class:"card-header bg-light d-flex justify-content-between align-items-center border-0 py-3 collapsed",id:"headingThree","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"true","aria-controls":"collapseThree"},[e("label",{class:"mb-0 position-relative custom-checkout-label fw-bold me-1"},"點開詳閱以下訊息，確認無誤後請打勾"),e("i",{class:"fas fa-chevron-down"})],-1),Ge={id:"collapseThree",class:"collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},Qe={class:"card-body bg-light ps-3 py-2"},Je=e("h4",null,"訂購須知",-1),Ke=e("div",{class:"scrollable-div p-3"},[e("div",null,[e("h6",null,"商品訂購與出貨"),e("p",null,"訂單確認：訂單一經確認，將於1-2個工作天內處理並出貨。"),e("p",null,"出貨時間：正常情況下，商品將於訂單確認後的3-5個工作天內送達。"),e("p",null,"配送範圍：目前僅限台灣本島地區，離島或偏遠地區可能需額外運費，詳情請見運費說明。")]),e("div",null,[e("h6",null,"退換貨政策"),e("p",null,"七天猶豫期：依據消保法規定，除特殊商品外，消費者享有商品到貨後七天猶豫期權益，期間內可申請退換貨。"),e("p",null,"食品類商品：由於衛生考量，食品類商品一經開封，除非產品本身存在瑕疵或送達時已過期，否則不予退換。"),e("p",null,"瑕疵品處理：若商品在運送過程中受損或有其他非人為因素導致的瑕疵，請於收貨後七天內聯繫我們，我們將提供退換服務。")]),e("div",null,[e("h6",null,"無法辦理退換貨之商品"),e("ul",null,[e("li",null,"商品一經使用或開封。"),e("li",null,"商品銷售頁面已明確說明不接受退換的情況。"),e("li",null,"未依照正確流程或未事先聯繫即自行寄回的商品。")])]),e("div",null,[e("h6",null,"退款流程"),e("p",null,"退款時間：確認收到退貨商品後，我們將在14個工作天內完成退款，退款將通過原付款方式退回。")]),e("div",null,[e("h6",null,"客戶服務"),e("p",null,"如有任何訂購、商品或服務上的問題，歡迎隨時聯繫我們的客戶服務中心，我們將竭誠為您服務。"),e("p",null,"客服時間為週一至週日，上午10:00至晚上8:00。"),e("p",null,"客服專線：02－1234－5678")]),e("div",null,[e("h6",null,"特別聲明"),e("p",null,"本公司保留隨時修改訂購須知的權利，任何修改將於本網站公布，恕不另行通知。"),e("p",null,"若消費者因不當行為對本公司或本網站服務造成損害，本公司有權取消其購買資格，並追究法律責任。"),e("p",null,"再次感謝您的支持與理解，我們期待為您提供優質的產品與服務。")])],-1),We={class:"my-2"},Xe=e("label",{for:"agreeToTerms",class:"text-muted mb-0 ms-3"},"我已閱讀並同意訂購須知！",-1),Ye={class:"d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100"},Ze=e("i",{class:"fas fa-chevron-left me-2"},null,-1),$e=e("button",{type:"submit",class:"text-muted btn btn-secondary py-3 px-7"},"確認結帳",-1);function es(t,s,n,r,l,y){const d=h("v-field"),c=h("error-message"),x=h("router-link"),w=h("v-form");return f(),_("div",F,[L,e("div",z,[e("div",G,[e("div",Q,[(f(!0),_(S,null,I(t.carts.carts,i=>(f(),_("div",{class:"d-flex mt-2",key:i.id},[e("img",{src:i.product.imageUrl,alt:i.product.title,class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,8,J),e("div",K,[e("div",W,[e("p",X,m(i.product.title),1),e("p",Y,"NT$"+m(t.formatNumber(i.final_total)),1)]),e("p",Z,"x"+m(i.qty),1)])]))),128)),e("table",$,[e("tbody",null,[e("tr",null,[ee,e("td",se,"NT$"+m(t.formatNumber(t.carts.total)),1)]),le])]),e("div",te,[oe,e("p",ae,"NT$"+m(t.formatNumber(t.carts.total)),1)])])]),e("div",ie,[a(w,{ref:"form",onSubmit:y.addOrder},{default:g(({errors:i})=>[e("div",de,[ne,a(d,{id:"name",name:"姓名",type:"text",class:p(["form-control",{"is-invalid":i.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":s[0]||(s[0]=o=>l.form.user.name=o)},null,8,["class","modelValue"]),a(c,{name:"姓名",class:"invalid-feedback"})]),e("div",re,[ce,a(d,{id:"email",name:"email",type:"email",class:p(["form-control",{"is-invalid":i.email}]),placeholder:"請輸入 Email",rules:"email|required","aria-describedby":"emailHelp",modelValue:l.form.user.email,"onUpdate:modelValue":s[1]||(s[1]=o=>l.form.user.email=o)},null,8,["class","modelValue"]),a(c,{name:"email",class:"invalid-feedback"})]),e("div",me,[pe,a(d,{id:"address",name:"地址",type:"text",class:p(["form-control",{"is-invalid":i.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":s[2]||(s[2]=o=>l.form.user.address=o)},null,8,["class","modelValue"]),a(c,{name:"地址",class:"invalid-feedback"})]),e("div",ue,[he,a(d,{id:"phone",name:"手機",type:"tel",class:p(["form-control",{"is-invalid":i.手機}]),placeholder:"請輸入手機，開頭須為09",rules:t.isPhone,modelValue:l.form.user.tel,"onUpdate:modelValue":s[3]||(s[3]=o=>l.form.user.tel=o)},null,8,["class","rules","modelValue"]),a(c,{name:"手機",class:"invalid-feedback"})]),e("div",be,[_e,u(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"5","onUpdate:modelValue":s[4]||(s[4]=o=>l.form.message=o),placeholder:"甜點相關備註或有甚麼悄悄話想跟我們說"},null,512),[[P,l.form.message]])]),fe,e("div",ve,[e("div",Te,[e("div",ge,[e("div",null,[a(d,{type:"radio",id:"selfTake",name:"takeType",class:"me-2",value:"selfTake",modelValue:l.takeType,"onUpdate:modelValue":s[5]||(s[5]=o=>l.takeType=o),rules:"takeTypeSelected|required"},null,8,["modelValue"]),ke]),ye]),e("div",xe,[e("div",we,[e("div",Ve,[u(e("input",{type:"radio",id:"selfTakeNoon",name:"selfTakeTime",class:"me-2","onUpdate:modelValue":s[6]||(s[6]=o=>l.takeTime=o),value:"12：00前",disabled:l.takeType!=="selfTake"},null,8,Ee),[[b,l.takeTime]]),Ne]),e("div",Se,[u(e("input",{type:"radio",id:"selfTakeNight",name:"selfTakeTime",class:"me-2","onUpdate:modelValue":s[7]||(s[7]=o=>l.takeTime=o),value:"20：00 店面關店前",disabled:l.takeType!=="selfTake"},null,8,Ie),[[b,l.takeTime]]),Oe])])])]),e("div",Pe,[e("div",Ue,[e("div",null,[a(d,{type:"radio",id:"shipTake",name:"takeType",class:"me-2",value:"shipTake",modelValue:l.takeType,"onUpdate:modelValue":s[8]||(s[8]=o=>l.takeType=o),rules:"takeTypeSelected|required"},null,8,["modelValue"]),Ae]),Me]),e("div",je,[e("div",Ce,[e("div",De,[u(e("input",{type:"radio",id:"shipTakeNoon",name:"shipTakeTime",class:"me-2","onUpdate:modelValue":s[9]||(s[9]=o=>l.takeTime=o),value:"中午12：00前",disabled:l.takeType!=="shipTake"},null,8,qe),[[b,l.takeTime]]),Re]),e("div",He,[u(e("input",{type:"radio",id:"shipTakeNight",name:"shipTakeTime",class:"me-2","onUpdate:modelValue":s[10]||(s[10]=o=>l.takeTime=o),value:"中午12：00後",disabled:l.takeType!=="shipTake"},null,8,Be),[[b,l.takeTime]]),Fe])])])]),e("div",Le,[ze,e("div",Ge,[e("div",Qe,[Je,Ke,e("div",We,[a(d,{id:"agreeToTerms",type:"checkbox",name:"請閱讀後確認打勾",value:!0,class:p({"is-invalid":i.請閱讀後確認打勾}),rules:"agreeToTerms|required"},null,8,["class"]),Xe,a(c,{message:"",name:"請閱讀後確認打勾",class:"invalid-feedback d-block"})])])])])]),e("div",Ye,[a(x,{class:"text-dark mt-md-0 mt-3",to:"/cart"},{default:g(()=>[Ze,U("返回購物車")]),_:1}),$e])]),_:1},8,["onSubmit"])])])])}const as=E(B,[["render",es]]);export{as as default};
