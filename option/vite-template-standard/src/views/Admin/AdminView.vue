<template>
  <div class="container-fluid h-100 bg-primary">
    <div class="row h-100">
      <div class="col-md-3">
        <nav class="sticky-top h-100 px-2 py-4 bg-primary" style="max-height: 100vh;">
          <NavbarComponent/>
        </nav>
      </div>
      <div class="col-md-9">
            <div class="h-100 container py-4">
            <router-view />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import NavbarComponent from '../../components/NavbarComponent.vue'
const { VITE_API } = import.meta.env
export default {
  components: { NavbarComponent },
  data () {
    return {
      url: VITE_API
    }
  },
  methods: {
    checkLogin (params) { // 驗證可以寫這邊，子路由都可以被驗證
      console.log(this.url)
      axios
        .post(`${this.url}/api/user/check`)
        // 成功的結果
        .then((res) => {
          console.log(res)
          // this.getProduct()
        })
        // 失敗結果
        .catch((error) => {
          console.dir(error) // 用dir可以展開資訊
          alert('未登入')
          this.$router.push('/')
        })
    },
    logout () {
      axios
        .post(`${this.url}/logout`)// 成功的結果
        .then((res) => {
          console.log(res)
          alert('登出成功')
          document.cookie = 'hexToken=; expires=; path=/' // 清除cookie
          this.$router.push('/')
        })
        // 失敗結果
        .catch((error) => {
          console.dir(error.response.data.message) // 用dir可以展開資訊
        })
    }
  },
  mounted () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // console.log(token);
    axios.defaults.headers.common.Authorization = token
    this.checkLogin()
  }
}
</script>

<style scoped></style>
