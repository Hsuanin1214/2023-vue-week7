// import 'bootstrap/scss/bootstrap.scss'
import './assets/all.scss'
//
// core version + navigation, pagination modules:
// import Swiper from 'swiper'
// import { Swiper, SwiperSlide, Navigation, Pagination, Virtual } from 'swiper'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'

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

// 定義必選規則
// defineRule('required', value => {
//   if (!value || value.length === 0) {
//     return '請選擇一個取貨方式'
//   }
//   return true
// })

// 特別的規則，可以添加
defineRule('agreeToTerms', value => {
  return value || '請閱讀後確認打勾' // 直接返回自訂錯誤訊息
})

defineRule('takeTypeSelected', value => {
  if (value === 'selfTake' || value === 'shipTake') {
    return true
  }
  return '請選擇一個取貨方式'
})

configure({
  generateMessage: (context) => {
    // 預設錯誤訊息
    const defaultMessage = `${context.field}為必填`

    // 自訂錯誤訊息
    const customMessages = {
      required: '必填',
      name: '請填寫姓名',
      email: '請輸入有效的電子郵件地址',
      phone: '請填寫正確的手機號碼',
      agreeToTerms: '請閱讀後確認打勾',
      takeTypeSelected: '請選擇一個取貨方式'
    }

    // 從自訂訊息中找到匹配，找不到則使用預設訊息(需要將自訂訊息放在前面  EX.rules="takeTypeSelected|required")
    return customMessages[context.field] || defaultMessage
  }
})

const app = createApp(App)
const pinia = createPinia()

app.component('v-form', Form)
app.component('v-field', Field)
app.component('error-message', ErrorMessage)

app.use(pinia)
app.use(router)
//

app.mount('#app')
