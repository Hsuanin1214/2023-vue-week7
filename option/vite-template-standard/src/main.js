// import 'bootstrap/scss/bootstrap.scss'
import './assets/all.scss'
//
import Swiper from 'swiper'
// 導入Swiper樣式
// import VueSwiper from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/virtual'
// import 'swiper/swiper-bundlez.css'
// 引入Swiper core和所需模塊
// import SwiperCore, { Pagination, Navigation, Virtual } from 'swiper/core'
// 註冊Swiper模塊
// SwiperCore.use([Pagination, Navigation, Virtual])
//
import { createApp } from 'vue'
import { createPinia } from 'pinia'
//
import {

  defineRule, configure,
  Form, Field, ErrorMessage

} from 'vee-validate'
import * as rules from '@vee-validate/rules'

import { setLocale, localize } from '@vee-validate/i18n'

import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
//

import App from './App.vue'
import router from './router'
//

Object.keys(rules).forEach((rule) => defineRule(rule, rules[rule]))

configure({

  generateMessage: localize({ zhTW }),
  validateOnInput: true

})

setLocale('zhTW')

//

const app = createApp(App)
const pinia = createPinia()
// app.config.globalProperties.$Swiper = Swiper

app.component('v-form', Form)
app.component('v-field', Field)
app.component('error-message', ErrorMessage)

app.use(pinia)
app.use(router)

app.component('Swiper', VueSwiper.Swiper)
app.component('SwiperSlide', VueSwiper.SwiperSlide)
//

app.mount('#app')
