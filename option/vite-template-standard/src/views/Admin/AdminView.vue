<template>
  <div class="home">
    <h1>後台</h1>
    <RouterLink to="/admin">後台首頁</RouterLink> |
    <RouterLink to="/admin/product">產品</RouterLink> |
    <RouterLink to="/admin/order">訂單</RouterLink> |
    <RouterLink to="/admin/cupon">優惠券</RouterLink> |
    <RouterLink to="/admin/post">貼文</RouterLink> |
    <RouterLink to="/">登出</RouterLink> |
    <RouterLink to="/admin/blog">Blog</RouterLink> |
    <RouterLink to="/admin/cart">購物車</RouterLink> |
  </div>
  <hr />
  <RouterView></RouterView>
</template>

<script></script>

<style scoped></style>
