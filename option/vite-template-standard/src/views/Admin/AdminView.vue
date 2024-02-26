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
// const { VITE_API } = import.meta.env
export default {
  data () {
    return {
      // url: VITE_API
    }
  },
  methods: {
    logout () {
      axios
        .post(`${import.meta.env.VITE_API}/logout`)
        // 成功的結果
        .then((res) => {
          console.log(res)
          alert('登出成功')
          document.cookie = 'hexToken=; expires=; path=/'
          this.$router.push('/')
        })
        // 失敗結果
        .catch((error) => {
          console.dir(error.response.data.message) // 用dir可以展開資訊
        })
    }
  }
}
</script>

<style scoped></style>
