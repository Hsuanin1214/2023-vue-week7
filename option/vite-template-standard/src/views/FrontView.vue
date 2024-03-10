<template>
  <!-- <div class="home">
    <h1>前台首頁</h1>
    <RouterLink to="/index">首頁</RouterLink> |
    <RouterLink to="/about">關於</RouterLink> |
    <RouterLink to="/login">登入</RouterLink> |
    <RouterLink to="/admin">前往後台</RouterLink>
  </div>
  <hr />
  <RouterView></RouterView> -->
  <div class="container">
    <div class="h-100 row py-3">
      <div class="col-2">
        <front-nav-component />
      </div>
      <div class="col-10 rounded-3 bg-light">
        <router-view></router-view>
        <front-footer-component />
      </div>
    </div>
  </div>
</template>

<script>
import FrontNavComponent from '../components/FrontNavComponent.vue'
import FrontFooterComponent from '../components/FrontFooterComponent.vue'
export default {
  components: { FrontNavComponent, FrontFooterComponent }
}
</script>

<style scoped>
</style>
