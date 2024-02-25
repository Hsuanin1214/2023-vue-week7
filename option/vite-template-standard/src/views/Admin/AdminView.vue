<template>
  <div class="home">
    <h1>後台</h1>
    <!-- <div class="collapse navbar-collapse"> -->
      <div class="navbar-nav">
        <RouterLink to="/admin">後台首頁</RouterLink> |
        <RouterLink to="/admin/product">產品</RouterLink> |
        <RouterLink to="/admin/order">訂單</RouterLink> |
        <RouterLink to="/admin/cupon">優惠券</RouterLink> |
        <RouterLink to="/admin/post">貼文</RouterLink>
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
    logout () {
      axios
        .post(`${this.url}/logout`)
        // 成功的結果
        .then((res) => {
          console.log(res)
          alert('登出成功')
          this.$router.push('/')
        })
        // 失敗結果
        .catch((error) => {
          console.dir(error) // 用dir可以展開資訊
        })
    }
  }
}
</script>

<style scoped></style>
