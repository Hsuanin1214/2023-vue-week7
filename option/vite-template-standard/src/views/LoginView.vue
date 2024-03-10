<template>
  <div class="container bg-background">
    <div class="row justify-content-center" style="margin:20px;">
      <div class="col-lg-6 col-md-8 login-box p-5">
        <div class="col-lg-12 login-title">
          登入後台
        </div>
        <div class="col-lg-12 login-form">
          <v-form id="form" v-slot="{meta,errors}" ref="form" class="form-signin" @submit="submitLogin">
            <div class="form-group">
              <label class="form-control-label">帳號</label>
              <v-field
              id="username"
              name="帳號"
              type="email"
              class="form-control form-control-login input-login-password"
              :class="{ 'is-invalid': errors['帳號'] }"
              placeholder="請輸入帳號"
              v-model="user.username"
              rules="required"
              ></v-field>
              <error-message name="帳號" class="invalid-feedback"></error-message>
            </div>
            <div class="form-group">
              <label class="form-control-label">  密碼
              </label>
              <v-field
              id="password"
              name="密碼"
              type="password"
              class="form-control form-control-login input-login-password"
              :class="{ 'is-invalid': errors['密碼'] }"
              placeholder="請輸入密碼"
              v-model="user.password"
              rules="required"
            ></v-field>
            <error-message name="密碼" class="invalid-feedback"></error-message>
            </div>
            <div class="col-12 login-btn justify-content-center d-flex">
              <button class="btn btn-outline-primary-login" type="submit" :disabled="!meta.valid">登入</button>
            </div>
            </v-form>
          </div>
        </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2021~∞ - 六角學院</p>
  </div>
</template>

<script>
import axios from 'axios'
const { VITE_API } = import.meta.env

export default {
  data () {
    return {
      url: VITE_API,
      path: 'hsuanin-vue2024',
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitLogin () {
      axios
        .post(`${this.url}/admin/signin`, this.user)
        // 成功的結果
        .then((res) => {
          console.log(res)
          // unix timestamp
          // 解構
          const { token, expired } = res.data // 解構
          console.log(token, expired)
          // window.location = 'products.html'
          this.$router.push('/admin/product')
          // document.cookie = `someCookieName = true; expires = Fri,31 Dec 9999 23:59 GMT;`;
          document.cookie = `hexToken= ${token}; expires=${new Date(
            expired
          )}; path=/`
        })
        // 失敗結果
        .catch((error) => {
          console.dir(error.response.data.message) // 用dir可以展開資訊
        })
    }
  },
  mounted () {}
}
</script>
<style scoped>
.invalid-feedback {
    color: #baeaff;
}
.form-control.is-invalid {
    border-bottom: 2px solid #baeaff; /* 紅色底線 */
}
</style>
