<template>
  <div class="bg-primary" id="sidebar-wrapper">
    <div class="sidebar-heading text-center py-4 text-light fs-4 fw-bold text-uppercase border-bottom">
      <img src="https://imgur.com/lPLeMxl.png" alt="logo" width="30" height="30"> 後台
    </div>
    <div class="list-group list-group-flush my-3">
      <RouterLink to="/admin/product" class="list-group-item list-group-item-action bg-transparent text-center">產品管理</RouterLink>
      <RouterLink to="/admin/order" class="list-group-item list-group-item-action bg-transparent text-center">訂單管理</RouterLink>
      <RouterLink to="/admin/cupon" class="list-group-item list-group-item-action bg-transparent text-center">優惠券管理</RouterLink>
      <RouterLink to="/admin/post" class="list-group-item list-group-item-action bg-transparent text-center">貼文管理</RouterLink>
      <RouterLink to="/admin/blog" class="list-group-item list-group-item-action bg-transparent text-center">Blog</RouterLink>
      <RouterLink to="/admin/login" class="list-group-item list-group-item-action bg-transparent text-center">登出</RouterLink>
      <RouterLink to="/" class="list-group-item list-group-item-action bg-transparent text-center">返回首頁</RouterLink>
    </div>
  </div>
</template>
