<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      <div class="col-8">
        <form id="form" class="form-signin" @submit.prevent="submitLogin">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="信箱"
              required
              autofocus
              v-model="user.username"
            />
            <label for="username">請輸入帳號</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="密碼"
              v-model="user.password"
              required
            />
            <label for="password">請輸入密碼</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
        </form>
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
          console.dir(error) // 用dir可以展開資訊
        })
    }
  },
  mounted () {}
}
</script>
