<template>
  <div class="container px-5">
    <div class="row mt-4">
      <div class="col-12 mb-3">
        <div
          class="rounded-2 border-info-subtle border border-1 newsDiv position-relative p-md-7"
        >
          <div
            class="new-tag position-absolute top-0 end-0 text-secondary-custom px-2 py-1 fw-bolder fs-4 position-absolute"
          >
            NEW
          </div>
          <div class="d-flex flex-column align-items-center">
            <div class="info-container">
              <nav
                style="
                  --bs-breadcrumb-divider: url(
                    &#34;data:image/svg + xml,
                    %3Csvgxmlns='http://www.w3.org/2000/svg'width='8'height='8'%3E%3Cpathd='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z'fill='%236c757d'/%3E%3C/svg%3E&#34;
                  );
                "
                aria-label="breadcrumb"
              >
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">本店消息</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    近期優惠
                  </li>
                </ol>
              </nav>
              <header
                class="d-md-flex justify-content-between align-items-center border-bottom border-2 border-dark px-2"
              >
                <h3 class="text-dark fs-4 fw-bold my-2 me-3 text-start">
                  歡慶母親節!慶生蛋糕系列打95折!
                </h3>
                <span
                  class="fw-bold fs-7 text-primary"
                  style="text-align: center"
                  >2024.03.09</span
                >
              </header>
              <article class="mt-5 ms-2">
                <p class="my-2">歡慶母親節，獻上至誠至愛的祝福！</p>
                <p class="my-2">
                  在這個特別的日子裡，讓我們用一份精緻慶生蛋糕，為媽媽帶來甜蜜的驚喜與愛的滋味。
                </p>
                <p class="my-2">
                  現凡購買任一款慶生蛋糕系列，即享<strong>95折</strong>優惠。讓這份心意，成為母親節最美的禮物，傳達您滿滿的感激與愛意。不容錯過的優惠，快來選購一份獨特的甜蜜，共同為世上最偉大的媽媽慶生！
                </p>
              </article>
              <footer class="mt-5 ms-2">
                <h5 class="fs-6 fw-bold">【優惠時間】</h5>
                <p class="ms-4">5／6－5／20 店內營業時間，線上為 24:00 前。</p>
                <h5 class="fs-6 fw-bold">【優惠券】</h5>
                <p class="ms-4">來店洽店員，線上請至＂優惠券＂頁面領取。</p>
                <h5 class="fs-6 fw-bold">【領取方式】</h5>
                <p class="ms-4">
                  來店自取，未提供外送服務，避免蛋糕寄送過程中損毀。
                </p>
              </footer>
            </div>
            <div class="me-2 my-4 img-container rounded-2">
              <img
                src="https://imgur.com/laO97zD.png"
                alt="母親節優惠"
                class="img-fluid h-100 w-100"
              />
            </div>
            <button
              class="btn btn-outline-info mt-5 fs-7 fw-bold px-4"
              type="button"
            >
              返回列表
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.p-md-7 {
  padding: 5rem !important;
}
.new-tag {
  top: 0;
  right: 10;
  transform: translate(-20%, -50%); /* 將標籤向右上角外移，使其部分位於外面 */
  z-index: 10; /* 確保標籤位於最上層 */
  text-shadow: 2px 2px 0 #85736d;
}
.img-container {
  width: 60vw; /* 根據視口寬度設定容器的寬度 */
  height: 60vw; /* 使高度等於寬度，保持正方形 */
  max-width: 200px; /* 設定最大寬度，避免在大屏幕上過大 */
  max-height: 200px; /* 設定最大高度，與最大寬度一致 */
  overflow: hidden;
}
.info-container {
  flex-grow: 1;
  /* width:70vw;
  max-width: 70%; */
}
@media (max-width: 768px) {
  .img-container {
    width: 50vw; /* 在小屏幕上調整寬度和高度為視口寬度的50% */
    height: 50vw;
    max-width: 75px; /* 在小屏幕上調整最大尺寸 */
    max-height: 75px;
  }
  .p-md-7 {
    padding: 2rem !important;
  }
}
</style>
