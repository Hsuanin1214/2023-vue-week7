<template>
  <div class="home">
    <h1>後台</h1>
    <!-- <div class="collapse navbar-collapse"> -->
      <div class="navbar-nav">
        <RouterLink to="/admin">後台首頁</RouterLink> |
        <RouterLink to="/admin/product">產品管理</RouterLink> |
        <RouterLink to="/admin/order">訂單管理</RouterLink> |
        <RouterLink to="/admin/cupon">優惠券管理</RouterLink> |
        <RouterLink to="/admin/post">貼文管理</RouterLink>
        <a href="#" @click.prevent="logout" class="nav-link">登出</a>
      </div>
      <div class="navbar-nav ms-auto">
        <RouterLink to="/admin/blog">Blog</RouterLink> |
        <RouterLink to="/admin/cart">購物車</RouterLink>
      </div>
    </div>
  <!-- </div> -->
  <hr />
  <RouterView></RouterView>
</template>

<script>
import axios from 'axios'
const { VITE_API } = import.meta.env
export default {
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
        .post(`${this.url}/logout`)
        // 成功的結果
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
