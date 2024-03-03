import 'bootstrap/scss/bootstrap.scss'
//
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import {

  defineRule, configure,
  Form, Field, ErrorMessage

} from 'vee-validate'
import * as rules from '@vee-validate/rules'

import { setLocale, localize } from '@vee-validate/i18n'

import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

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

app.component('v-form', Form)

app.component('v-field', Field)

app.component('error-message', ErrorMessage)

app.use(createPinia())
app.use(router)

app.mount('#app')
