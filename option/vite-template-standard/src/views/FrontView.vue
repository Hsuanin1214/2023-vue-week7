<template>
  <div class="home">
    <h1>前台首頁</h1>
    <RouterLink to="/home">首頁</RouterLink> |
    <RouterLink to="/about">關於</RouterLink> |
    <RouterLink to="/login">登入</RouterLink> |
    <RouterLink to="/admin">前往後台</RouterLink>
  </div>
  <hr />
  <RouterView></RouterView>
</template>

<script></script>

<style scoped></style>
