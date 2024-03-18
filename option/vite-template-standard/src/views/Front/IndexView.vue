<template>
  <div>
    <div class="position-relative mb-5" style="height: 100vh;margin-left: -1vw; margin-right: -1vw;">
      <div class="position-absolute rounded-top-2" style="top: 0; bottom: 0; left: 0; right: 0; background-image: url(https://imgur.com/5pKQflA.jpg); background-position: center center; background-size: cover; opacity: 1;"></div>
      <div class="position-absolute bg-light text-vertical py-2 rounded-2" style="top:25%; left: 15%; transform: translate(-50%, -50%); writing-mode: vertical-rl; text-orientation: mixed;">
        <h2 class="text-secondary fw-bolder fs-1 mx-3">甜蜜匠心，</h2>
      </div>
      <div class="position-absolute bg-light text-vertical py-2 intro rounded-2" style="top:37%; transform: translate(-50%, -50%); writing-mode: vertical-rl; text-orientation: mixed;">
        <h2 class="text-secondary fw-bolder fs-1 mx-3">藝術與味蕾之旅</h2>
      </div>
      <div class="position-absolute" style="bottom: 5%; right: 3%;">
        <div class="intro text-end pe-1 d-flex flex-column align-items-end">
          <p class="text-light mb-0 fs-5 text-end border-2 border-warning">匠心製作，法日融合，每一口都是不可複製的藝術品</p>
          <!-- <button class="btn btn-outline-warning rounded-3 mt-4 px-3">更多甜點</button> -->
          <router-link class="btn btn-outline-warning rounded-3 mt-4 px-3" to="/products">更多甜點</router-link>
        </div>
      </div>
    </div>
    <section class="container mb-5">
        <div class="row">
          <div class="col-md-6">
            <img src="https://imgur.com/Rne3G2K.jpg" alt="馬卡龍經典照" class="img-fluid rounded-2">
          </div>
          <div class="col-md-4 m-auto text-center">
            <h4 class="mt-4 fs-4 color-primary fw-bolder">匠心獨運，創意與傳統的甜蜜交融</h4>
            <p class="text-dark">在這家別具一格的甜點店中，每一件作品都是對經典傳統手藝的深情致敬，同時融入了前衛的創意思維。匠人們以細膩的工藝精心打造，將傳統甜點轉化為一件件藝術品，每一口都讓人驚喜連連。透過創新與傳統的完美結合，我們致力於帶給顧客獨一無二的味覺體驗。</p>
          </div>
        </div>
        <div class="row flex-row-reverse justify-content-between mt-4">
          <div class="col-md-6">
            <img src="https://imgur.com/kwPJbJY.jpg" alt="新鮮食材照片" class="img-fluid rounded-2">
          </div>
          <div class="col-md-4 m-auto text-center">
            <h4 class="mt-4 fs-4 color-primary fw-bolder">精選食材，細膩製作的甜蜜滋味</h4>
            <p class="text-dark">本甜點店秉持著對品質的堅持，從全各地嚴選新鮮食材，每一款甜點都是我們對美味的承諾。無論是綿密的奶油、香醇的巧克力，還是新鮮的水果，每一口都能感受到食材原始的鮮味與細膩的層次。每一份甜點都不僅僅是味蕾的享受，更是一場視覺與味覺的盛宴。</p>
          </div>
        </div>
      </section>
      <div class="bg-light mb-5">
        <div class="container">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row justify-content-center py-7">
                  <div class="col-md-6 text-center">
                    <h3>鹹食養人，甜食悅人。</h3>
                    <p class="my-5 en-text">“Le sale nous nourrit, le sucre nous rejouit”</p>
                    <p><small>— Pierre Hermé —</small></p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row justify-content-center py-7">
                  <div class="col-md-6 text-center">
                    <h3>鹹食養人，甜食悅人。</h3>
                    <p class="my-5 en-text">“Le sale nous nourrit, le sucre nous rejouit”</p>
                    <p><small>— Pierre Hermé —</small></p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row justify-content-center py-7">
                  <div class="col-md-6 text-center">
                    <h3>鹹食養人，甜食悅人。</h3>
                    <p class="my-5 en-text">“Le sale nous nourrit, le sucre nous rejouit”</p>
                    <p><small>— Pierre Hermé —</small></p>
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls"  role="button" data-slide="prev">
              <span class="carousel-control-prev-icon text-primary rounded-5 " aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon text-primary rounded-5" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <section class="container mb-5">
        <h4 class="fs-2 mb-1 fw-bolder text-secondary">甜點介紹</h4>
        <div class="row">
          <div class="col-md-6 py-3 p-4">
            <div class="row justify-content-center align-items-center rounded-2 border border-primary border-3 px-3 py-5">
              <div class="col-6">
                <h4 class="mt-4 fs-4 text-primary fw-bold">蛋糕類</h4>
                <p class="text-primary fs-6">戚風蛋糕、乳酪蛋糕、慶生蛋糕、海綿蛋糕</p>
                <!-- <button class="btn btn-secondary rounded-4 px-4 fs-7 fw-light">看更多</button> -->
                <router-link class="btn btn-secondary rounded-4 px-4 fs-7 fw-light" to="/products">看更多</router-link>
              </div>
              <div class="col-6 w-50 img-fluid-test">
                <img src="https://imgur.com/0c3DFrq.jpg" alt="蛋糕類" class="img-fluid rounded-2">
              </div>
            </div>
          </div>
          <div class="col-md-6 py-3 p-4">
            <div class="row justify-content-center align-items-center rounded-2 bg-primary border border-primary border-3 px-3 py-5">
              <div class="col-6">
                <h4 class="mt-4 fs-4 text-light fw-bold">慕斯類</h4>
                <p class="text-light fs-6">巧克力慕斯、草莓立方慕斯、焦糖起司慕斯</p>
                <!-- <button class="btn btn-outline-warning rounded-4 px-4 fw-light fs-7">看更多</button> -->
                <router-link class="btn btn-outline-warning rounded-4 px-4 fw-light fs-7" to="/products">看更多</router-link>
              </div>
              <div class="col-6 w-50 img-fluid-test">
                <img src="https://imgur.com/Czk6ihe.jpg" alt="法式慕斯" class="img-fluid rounded-2">
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 py-3 p-4">
            <div class="row justify-content-center align-items-center rounded-2 bg-primary border border-primary border-3 px-3 py-5">
              <div class="col-6">
                <h4 class="mt-4 fs-4 text-light fw-bold">法式小點</h4>
                <p class="text-light fs-6">費南雪、馬卡龍、瑪德蓮</p>
                <!-- <button class="btn btn-outline-warning rounded-4 px-4 fw-light fs-7">看更多</button> -->
                <router-link class="btn btn-outline-warning rounded-4 px-4 fw-light fs-7" to="/products">看更多</router-link>
              </div>
              <div class="col-6 w-50 img-fluid-test">
                <img src="https://imgur.com/gakeQvo.jpg" alt="法式小點" class="img-fluid rounded-2">
              </div>
            </div>
          </div>
          <div class="col-md-6 py-3 p-4">
            <div class="row justify-content-center align-items-center rounded-2 border border-primary border-3 px-3 py-5">
              <div class="col-6">
                <h4 class="mt-4 fs-4 text-primary fw-bold">塔類</h4>
                <p class="text-primary fs-6">草莓塔、檸檬塔、抹茶塔</p>
                <!-- <button class="btn btn-secondary rounded-4 px-4 fs-7 fw-light">看更多</button> -->
                <router-link class="btn btn-secondary rounded-4 px-4 fs-7 fw-light" to="/products">看更多</router-link>
              </div>
              <div class="col-6 w-50 img-fluid-test">
                <img src="https://imgur.com/bEO0eg4.jpg" alt="草莓塔類" class="img-fluid rounded-2">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container mb-5">
        <div class="row px-2 rounded-2">
          <div class="col-4 p-4 bg-primary-subtle">
            <h4 class="fs-2 mb-1 fw-bolder text-secondary">最新消息</h4>
            <h5 class="fs-6 mb-3 fw-bolder text-secondary">更多嗜甜最新消息、甜點小知識</h5>
            <p  class="fs-6 mb-3">
              本店更新的最新產品、活動資訊、營業時間等，或是關於甜點的小知識。
            </p>
            <router-link class="btn btn-primary rounded-2 mt-4 px-3 fs-7" to="/news">了解更多</router-link>
          </div>
          <div class="col-8 py-4 bg-primary-subtle">
            <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-4">
                <div class="card border-0 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                    class="card-img-top rounded-0"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h4>歡慶母親節活動</h4>
                    <div class="d-flex justify-content-between">
                      <p class="card-text text-muted mb-0">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card border-0 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                    class="card-img-top rounded-0"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h4>Lorem ipsum</h4>
                    <div class="d-flex justify-content-between">
                      <p class="card-text text-muted mb-0">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2"></div>
            </div>
          </div>
        </div>
      </section>
      <div class="bg-light py-4">
        <div class="container">
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start">
            <p class="mb-0 fw-bold">Lorem ipsum dolor sit amet.</p>
            <div class="input-group w-md-50 mt-md-0 mt-3">
              <input type="text" class="form-control rounded-0" placeholder="" />
              <div class="input-group-append">
                <button class="btn btn-dark rounded-0" type="button" id="search">
                  Lorem ipsum
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
</script>

<style scoped>
.text-vertical {
  writing-mode: vertical-lr;
  /* transform: rotate(180deg); */
}
.intro{
  left: 22%;
}
.img-fluid-test {
  width: 100%;       /* 設定圖片寬度為容器的100% */
  height: 100%;      /* 設定圖片高度為指定的值，依據div大小調整 */
  object-fit: cover; /* 保持比例且完全覆蓋div，多餘的部分會被裁剪 */
}
@media (max-width: 1200px) {
  .intro {
    left: 23%;
  }
}
@media (max-width: 1024px) {
  .intro {
    left: 24%;
  }
}

@media (max-width: 768px) {
  .intro {
    left: 30%;
  }
}
</style>
