import{_ as k,o,c as a,a as t,F as m,h as p,i as T,n as w,t as n,j as b,f,m as g,g as y,b as u,w as _,d as c,k as I,v as E,r as x}from"./index-DMgmO0yw.js";import{u as N}from"./cartStore-4Ubni4Xw.js";import{p as S}from"./productStore-jT0qqR_j.js";import{f as V}from"./formatNumberMixin-IlVSA5eF.js";import"./axios-L6U4YIEh.js";const P={data(){return{tabs:[{name:"商品介紹"},{name:"規格說明"},{name:"運送方式"}],selectedTab:{name:"商品介紹"}}},props:["content"],computed:{formattedContent(){return this.content?this.content.split(`
`).map(h=>h.trim()).join(`

`):""}},methods:{}},R={class:"container my-4"},U={class:"row"},F={class:"col-12 nav nav-tabs"},B=["onClick"],L={key:0},M=t("h5",{class:"text-primary mt-3 fw-bold"},"商品介紹",-1),j={class:"fs-6",style:{"line-height":"1.25em"}},A={key:1},D=f('<h5 class="text-primary mt-3 fw-bold">規格說明</h5><p> 我們的甜點以精選優質原料製作，秉承手工製作的傳統工藝，為您帶來最純粹的味覺體驗。以下是我們甜點的基本規格： </p><ul><li><strong class="text-secondary">尺寸：</strong>所有甜點均提供標準尺寸，適合單人或多人分享。詳細尺寸信息請參見各個甜點的具體頁面。 </li><li><strong class="text-secondary">包裝：</strong>我們採用環保材料進行精美包裝，旨在保證甜點在運輸過程中的新鮮與完整，同時也便於您送禮。 </li><li><strong class="text-secondary">保存方法：</strong>為保持甜點的最佳風味，請依照包裝上的指示進行保存。大多數甜點需要冷藏保存，開封後請盡快食用。 </li></ul><h5 class="text-primary mt-3 border-primary-bottom">注意事項</h5><ul><li> 由於全部手工製作，每一份甜點的外觀可能略有不同，這是手工產品的獨特魅力。 </li><li>若有食物過敏史，請在下單前仔細閱讀產品成分信息。</li><li> 我們致力於提供最優質的甜點，若您對產品有任何疑問或不滿，請及時與我們聯繫，我們將竭誠為您服務。 </li></ul>',5),q=[D],z={key:2},Q=f('<h5 class="text-primary mt-3 fw-bold">運送方式</h5><ul><li><strong class="text-secondary">標準運送：</strong>我們提供全國範圍內的標準運送服務，運送時間一般為下單後3-5個工作日。所有標準運送的訂單將通過我們的物流合作夥伴進行配送。 </li><li><strong class="text-secondary">快速運送：</strong>為了滿足您的急需，我們還提供快速運送選項，使您的訂單可以在1-2個工作日內到達。請注意，快速運送服務將收取額外的運費。 </li><li><strong class="text-secondary">自取服務：</strong>如果您希望親自提取您的訂單，我們在特定地點設有自取點。下單時，請選擇「自取」選項並查看最近的自取點地址。 </li></ul><h5 class="text-primary mt-3 border-primary-bottom">注意事項</h5><ul><li> 所有運送時間均為預計時間，實際到達時間可能因天氣、交通等不可抗因素而有所變動。 </li><li> 快速運送服務僅限於特定地區，下單前請確認您的地區是否支持此服務。 </li><li>自取時，請攜帶有效身份證件和訂單確認信息</li></ul>',4),G=[Q];function H(e,r,h,C,l,d){return o(),a("div",R,[t("div",U,[t("ul",F,[(o(!0),a(m,null,p(l.tabs,i=>(o(),a("li",{class:"nav-item",key:i.name,onClick:T(v=>l.selectedTab=i,["prevent"])},[t("a",{class:w(["nav-link text-primary",{active:l.selectedTab.name===i.name}]),href:"#"},n(i.name),3)],8,B))),128))])]),l.selectedTab.name==="商品介紹"?(o(),a("div",L,[M,t("pre",j,n(d.formattedContent),1)])):b("",!0),l.selectedTab.name==="規格說明"?(o(),a("div",A,q)):b("",!0),l.selectedTab.name==="運送方式"?(o(),a("div",z,G)):b("",!0)])}const J=k(P,[["render",H]]),K={data(){return{tempProduct:{},tempNum:1}},components:{FrontShipNavComponent:J},mixins:[V],computed:{...g(N,["carts"]),...g(S,["productSelect","pagination"])},methods:{...y(N,["getCart","changeCartQty","removeCartItem","removeAllCart","addToCart"]),...y(S,["getProduct"]),changeNum(e){this.tempNum+=e}},mounted(){const e=this.$route.params.id;this.getProduct(e),this.getCart()}},O={class:"container px-5"},W=t("h2",{class:"my-4 text-primary border-primary-left ps-3"},"查看商品",-1),X={class:"row align-items-center"},Y={class:"col-lg-5"},Z={"aria-label":"breadcrumb"},tt={class:"breadcrumb bg-white px-0 mb-0 py-3"},et={class:"breadcrumb-item"},st={class:"breadcrumb-item"},ot={class:"breadcrumb-item active","aria-current":"page"},at={class:"fw-bold text-secondary-emphasis h4 mb-1"},nt={class:"h5 mb-0 text-muted text-end"},lt={class:"h5 text-end"},rt={class:"d-xl-flex align-items-xl-center"},it={class:"input-group my-3 bg-light rounded-2 d-flex align-items-center"},ct={class:"input-group-prepend"},dt=["disabled"],ut=t("i",{class:"fas fa-minus"},null,-1),mt=[ut],pt={class:"input-group-append"},bt=t("i",{class:"fas fa-plus"},null,-1),ht=[bt],_t={class:"text-end text-xl-center"},ft={class:"fs-6"},vt={class:"col-lg-7"},gt={id:"carouselExampleIndicators",class:"carousel slide"},yt={key:0,class:"carousel-indicators"},xt=t("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"},null,-1),Nt=["data-bs-slide-to","aria-label"],St={class:"carousel-inner"},kt={class:"carousel-item active h-75vh"},wt=["src","alt"],Ct=["src","alt"],$t=f('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2),Tt={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel"},It=t("div",{class:"offcanvas-header"},[t("h5",{class:"h5 offcanvas-title text-secondary fw-bold",id:"offcanvasRightLabel"}," 購物車內容 "),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),Et={class:"offcanvas-body"},Vt={class:"scrollable-div"},Pt={class:"d-block fw-bold mb-2"},Rt={class:"border-bottom-info"},Ut={class:"me-3"},Ft={class:"d-block"};function Bt(e,r,h,C,l,d){const i=x("router-link"),v=x("front-ship-nav-component");return o(),a("div",O,[W,t("div",X,[t("div",Y,[t("nav",Z,[t("ol",tt,[t("li",et,[u(i,{class:"text-muted",to:"/"},{default:_(()=>[c("首頁")]),_:1})]),t("li",st,[u(i,{class:"text-muted",to:"/products"},{default:_(()=>[c("甜點列表")]),_:1})]),t("li",ot,n(e.productSelect.category),1)])]),t("h2",at,n(e.productSelect.title),1),t("p",nt,[t("del",null,"NT$"+n(e.formatNumber(e.productSelect.origin_price)),1)]),t("p",lt,[c("NT$"+n(e.formatNumber(e.productSelect.price))+" / ",1),t("span",null,n(e.productSelect.unit),1)]),t("div",rt,[t("div",null,[t("div",it,[t("div",ct,[t("button",{class:"btn btn-outline-info border-0 py-2",type:"button",id:"button-addon1",onClick:r[0]||(r[0]=s=>d.changeNum(-1)),disabled:l.tempNum===1},mt,8,dt)]),I(t("input",{type:"number",class:"form-control border-0 text-center my-auto shadow-none bg-light w-50","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":r[1]||(r[1]=s=>l.tempNum=s),readonly:""},null,512),[[E,l.tempNum]]),t("div",pt,[t("button",{class:"btn btn-outline-info border-0 py-2",type:"button",id:"button-addon2",onClick:r[2]||(r[2]=s=>d.changeNum(1))},ht)])])]),t("div",_t,[t("button",{class:"btn btn-primary text-nowrap py-2 text-center",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight",onClick:r[3]||(r[3]=s=>e.addToCart(e.productSelect.id,l.tempNum))}," 加入購物車 ")])]),t("p",ft,n(e.productSelect.description),1)]),t("div",vt,[t("div",gt,[e.productSelect&&e.productSelect.imagesUrl?(o(),a("div",yt,[xt,(o(!0),a(m,null,p(e.productSelect.imagesUrl.length,s=>(o(),a("button",{key:s,type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":s,"aria-label":"Slide "+(s+1),class:w({active:s===0})},null,10,Nt))),128))])):b("",!0),t("div",St,[t("div",kt,[t("img",{src:e.productSelect.imageUrl,class:"d-block h-100 w-100 carousel-img",alt:e.productSelect.title},null,8,wt)]),(o(!0),a(m,null,p(e.productSelect.imagesUrl,(s,$)=>(o(),a("div",{class:"carousel-item h-75vh",key:$+1},[t("img",{src:s,class:"d-block h-100 w-100 carousel-img",alt:e.productSelect.title},null,8,Ct)]))),128))]),$t])])]),t("div",null,[t("div",Tt,[It,t("div",Et,[t("ul",Vt,[(o(!0),a(m,null,p(e.carts.carts,s=>(o(),a("li",{key:s.id,class:"my-3"},[t("span",Pt,[c("甜點名稱 : "),t("span",Rt,n(s.product.title),1)]),t("span",Ut,"售價 : NT$ "+n(e.formatNumber(s.product.price)),1),t("span",null,"數量: "+n(s.qty),1),t("span",Ft,"總價 : NT$ "+n(e.formatNumber(s.final_total)),1)]))),128))]),u(i,{class:"btn btn-secondary w-100 mt-4",to:"/cart"},{default:_(()=>[c("直接結帳")]),_:1})])])]),u(v,{content:e.productSelect.content},null,8,["content"])])}const qt=k(K,[["render",Bt]]);export{qt as default};
