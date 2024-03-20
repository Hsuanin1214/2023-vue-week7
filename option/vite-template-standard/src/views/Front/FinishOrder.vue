<template>
  <div class="container px-5">
    <h2 class="my-4 text-primary border-primary-left ps-3">訂單完成</h2>
    <div class="row justify-content-center align-items-md-center">
      <div class="col-md-6">
        <h3 class="fw-bold mb-4 pt-3 h4 text-primary">付款成功，訂單已成立！</h3>
      </div>
      <div class="col-md-6">
          <ul
            class="list-unstyled mb-0 ms-md-auto d-flex align-items-center justify-content-between justify-content-md-end w-100 mt-md-0 mt-4"
          >
            <li class="me-md-6 me-3 position-relative custom-step-line">
              <i
                class="fas fa-check-circle d-md-inline d-block text-center me-2 text-secondary"
              ></i>
              <span class="text-nowrap text-secondary">商品確認</span>
            </li>
            <li class="me-md-6 me-3 position-relative custom-step-line">
              <i
                class="fas fa-check-circle d-md-inline d-block text-center me-2 text-secondary"
              ></i>
              <span class="text-nowrap text-secondary">訂購人填寫</span>
            </li>
            <li>
              <i class="fas fa-check-circle d-md-inline d-block text-center me-2 text-secondary"></i>
              <span class="text-nowrap text-secondary  border-bottom-primary-light">訂單完成</span>
            </li>
          </ul>
      </div>
    </div>
    <p>嗜甜感謝您的信任，請等待我們用心製作的甜點，祝您有個愉快的一天。</p>
    <p>若有商品相關問題，請洽本店服務人員。</p>
    <router-link class="btn btn-outline-primary py-3 px-7 my-3" to="/">返回首頁</router-link>
  </div>
</template>
