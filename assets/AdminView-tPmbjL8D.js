import{a as i}from"./axios-L6U4YIEh.js";import{_ as l,o as p,c as d,a as n,b as t,w as r,d as s,r as c}from"./index-By1fUj-F.js";const _={},h={class:"bg-primary",id:"sidebar-wrapper"},g=n("div",{class:"sidebar-heading text-center py-4 text-light fs-4 fw-bold text-uppercase border-bottom"},[n("img",{src:"https://imgur.com/lPLeMxl.png",alt:"logo",width:"30",height:"30"}),s(" 後台 ")],-1),f={class:"list-group list-group-flush my-3"};function x(e,a){const o=c("RouterLink");return p(),d("div",h,[g,n("div",f,[t(o,{to:"/admin/product",class:"list-group-item list-group-item-action bg-transparent text-center"},{default:r(()=>[s("產品管理")]),_:1}),t(o,{to:"/admin/order",class:"list-group-item list-group-item-action bg-transparent text-center"},{default:r(()=>[s("訂單管理")]),_:1}),t(o,{to:"/admin/cupon",class:"list-group-item list-group-item-action bg-transparent text-center"},{default:r(()=>[s("優惠券管理")]),_:1}),t(o,{to:"/admin/post",class:"list-group-item list-group-item-action bg-transparent text-center"},{default:r(()=>[s("貼文管理")]),_:1}),t(o,{to:"/admin/blog",class:"list-group-item list-group-item-action bg-transparent text-center"},{default:r(()=>[s("Blog")]),_:1}),t(o,{to:"/admin/login",class:"list-group-item list-group-item-action bg-transparent text-center"},{default:r(()=>[s("登出")]),_:1}),t(o,{to:"/",class:"list-group-item list-group-item-action bg-transparent text-center"},{default:r(()=>[s("返回首頁")]),_:1})])])}const v=l(_,[["render",x]]);var b={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hsuanin-vue2024",BASE_URL:"/2023-vue-week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:$}=b,k={components:{NavbarComponent:v},data(){return{url:$}},methods:{checkLogin(e){console.log(this.url),i.post(`${this.url}/api/user/check`).then(a=>{console.log(a)}).catch(a=>{console.dir(a),alert("未登入"),this.$router.push("/")})},logout(){i.post(`${this.url}/logout`).then(e=>{console.log(e),alert("登出成功"),document.cookie="hexToken=; expires=; path=/",this.$router.push("/")}).catch(e=>{console.dir(e.response.data.message)})}},mounted(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");i.defaults.headers.common.Authorization=e,this.checkLogin()}},w={class:"container-fluid h-100 bg-primary"},y={class:"row h-100"},V={class:"col-md-3"},E={class:"sticky-top h-100 px-2 py-4 bg-primary",style:{"max-height":"100vh"}},T={class:"col-md-9"},A={class:"h-100 container py-4"};function L(e,a,o,N,B,C){const u=c("NavbarComponent"),m=c("router-view");return p(),d("div",w,[n("div",y,[n("div",V,[n("nav",E,[t(u)])]),n("div",T,[n("div",A,[t(m)])])])])}const R=l(k,[["render",L]]);export{R as default};