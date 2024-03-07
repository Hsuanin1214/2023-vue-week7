<template>
  <div class="text-bg-secondary" id="sidebar-wrapper">
    <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
      <img src="https://imgur.com/a6LRmbN.jpg" alt="logo" width="30" height="24"> 後台
    </div>
    <div class="list-group list-group-flush my-3">
      <RouterLink to="/admin/product" class="list-group-item list-group-item-action bg-transparent text-center">產品管理</RouterLink>
      <RouterLink to="/admin/order" class="list-group-item list-group-item-action bg-transparent text-center">訂單管理</RouterLink>
      <RouterLink to="/admin/cupon" class="list-group-item list-group-item-action bg-transparent text-center">優惠券管理</RouterLink>
      <RouterLink to="/admin/post" class="list-group-item list-group-item-action bg-transparent text-center">貼文管理</RouterLink>
      <RouterLink to="/admin/blog" class="list-group-item list-group-item-action bg-transparent text-center">Blog</RouterLink>
      <RouterLink to="/admin/cart" class="list-group-item list-group-item-action bg-transparent text-center">購物車</RouterLink>
      <a href="#" @click.prevent="logout" class="list-group-item list-group-item-action bg-transparent text-center">登出</a>
    </div>
  </div>
</template>
