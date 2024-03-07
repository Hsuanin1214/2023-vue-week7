<template>
  <div class="container">
    <div class="row justify-content-center align-items-center w-50 rounded-4 py-3 my-3 bg-warning">
      <h3 class="h3 mb-3 fw-bolder text-center text-secondary">請先登入</h3>
      <div class="col-8">
        <v-form id="form" v-slot="{meta,errors}" ref="form" class="form-signin" @submit="submitLogin">
          <div class="form-floating mb-3">
            <label for="username">帳號</label>
            <v-field
              id="username"
              name="帳號"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['帳號'] }"
              placeholder="請輸入帳號"
              autofocus
              v-model="user.username"
              rules="required"
            ></v-field>
            <error-message name="帳號" class="invalid-feedback"></error-message>
          </div>
          <div class="form-floating">
            <label for="password">密碼</label>
            <v-field
              id="password"
              name="密碼"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errors['密碼'] }"
              placeholder="請輸入密碼"
              v-model="user.password"
              rules="required"
            ></v-field>
            <error-message name="密碼" class="invalid-feedback"></error-message>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit" :disabled="!meta.valid">
            登入
          </button>
        </v-form>
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
