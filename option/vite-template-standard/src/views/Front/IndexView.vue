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
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <!-- <div class="carousel-inner">
                <div v-for="(item, index) in items" :key="index" :class="['carousel-item', { active: index === 0 }]">
                  <img :src="item.src" class="d-block w-100" :alt="`Slide ${index + 1}`">
                </div>
              </div> -->
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
                      <h3>創造甜點就像繪畫一幅畫，每一筆都充滿愛。</h3>
                      <p class="my-5 en-text">“Creating desserts is like painting a picture, each stroke filled with love.”</p>
                      <p><small>— 嗜甜闆娘-木子 —</small></p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row justify-content-center py-7">
                    <div class="col-md-6 text-center">
                      <h3>甜點的魔力在於，最平凡的日子，也能創造出不平凡的快樂。</h3>
                      <p class="my-5 en-text">“The magic of desserts lies in turning an ordinary day into an extraordinary moment of joy”</p>
                      <p><small>— 嗜甜副廚-宣宣 —</small></p>
                    </div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      <section class="container mb-5">
        <h4 class="fs-2 mb-1 fw-bolder text-secondary">甜點介紹</h4>
        <div class="row">
          <div class="col-md-6 py-3 p-4">
            <div class="row justify-content-center align-items-center rounded-2 border border-primary border-3 px-3 py-5">
              <div class="col-12 col-md-6">
                <h4 class="mt-4 fs-4 text-primary fw-bold">蛋糕類</h4>
                <p class="text-primary fs-6">戚風蛋糕、乳酪蛋糕、慶生蛋糕、海綿蛋糕</p>
                <router-link class="btn btn-secondary rounded-4 px-4 fs-7 fw-light" to="/products">看更多</router-link>
              </div>
              <div class="col-12 col-md-6 w-100 w-md-50 mt-3 mt-md-0 img-fluid-test">
                <img src="https://imgur.com/0c3DFrq.jpg" alt="蛋糕類" class="img-fluid rounded-2">
              </div>
            </div>
          </div>
          <div class="col-md-6 py-3 p-4">
            <div class="row justify-content-center align-items-center rounded-2 bg-primary border border-primary border-3 px-3 py-5">
              <div class="col-12 col-md-6">
                <h4 class="mt-4 fs-4 text-light fw-bold">慕斯類</h4>
                <p class="text-light fs-6">巧克力慕斯、草莓立方慕斯、焦糖起司慕斯</p>
                <router-link class="btn btn-outline-warning rounded-4 px-4 fw-light fs-7" to="/products">看更多</router-link>
              </div>
              <div class="col-12 col-md-6 w-100 w-md-50 mt-3 mt-md-0 img-fluid-test">
                <img src="https://imgur.com/Czk6ihe.jpg" alt="法式慕斯" class="img-fluid rounded-2">
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 py-3 p-4">
            <div class="row justify-content-center align-items-center rounded-2 bg-primary border border-primary border-3 px-3 py-5">
              <div class="col-12 col-md-6">
                <h4 class="mt-4 fs-4 text-light fw-bold">法式小點</h4>
                <p class="text-light fs-6">費南雪、馬卡龍、瑪德蓮</p>
                <router-link class="btn btn-outline-warning rounded-4 px-4 fw-light fs-7" to="/products">看更多</router-link>
              </div>
              <div class="col-12 col-md-6 w-100 w-md-50 mt-3 mt-md-0 img-fluid-test">
                <img src="https://imgur.com/gakeQvo.jpg" alt="法式小點" class="img-fluid rounded-2">
              </div>
            </div>
          </div>
          <div class="col-md-6 py-3 p-4">
            <div class="row justify-content-center align-items-center rounded-2 border border-primary border-3 px-3 py-5">
              <div class="col-12 col-md-6">
                <h4 class="mt-4 fs-4 text-primary fw-bold">塔類</h4>
                <p class="text-primary fs-6">草莓塔、檸檬塔、抹茶塔</p>
                <router-link class="btn btn-secondary rounded-4 px-4 fs-7 fw-light" to="/products">看更多</router-link>
              </div>
              <div class="col-12 col-md-6 w-100 w-md-50 mt-3 mt-md-0 img-fluid-test">
                <img src="https://imgur.com/bEO0eg4.jpg" alt="草莓塔類" class="img-fluid rounded-2">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container mb-5">
        <div class="row px-2 rounded-2">
          <div class="col-md-4 p-4 bg-primary-subtle">
            <h4 class="fs-2 mb-1 fw-bolder text-secondary">最新消息</h4>
            <h5 class="fs-6 mb-3 fw-bolder text-secondary">更多嗜甜最新消息、甜點小知識</h5>
            <p  class="fs-6 mb-3">
              本店更新的最新產品、活動資訊、營業時間等，或是關於甜點的小知識。
            </p>
            <router-link class="btn btn-primary rounded-2 mt-4 px-3 fs-7" to="/news">了解更多</router-link>
          </div>
          <div class="col-md-8 py-4 bg-primary-subtle">
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-4">
                <div class="card border-0 mb-4">
                  <div class="mt-3 mt-xxl-0 img-container">
                    <img
                      src="https://imgur.com/56i4iC2.jpg"
                      class="card-img-top rounded-0 h-100 w-100"
                      alt="歡慶母親節"
                    />
                  </div>
                  <div class="card-body text-center">
                    <h4>歡慶母親節限時折扣</h4>
                    <div class="d-flex justify-content-between">
                      <p class="card-text text-muted mb-0">
                        歡慶母親節，獻上至誠至愛的祝福！
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card border-0 mb-4">
                  <div class="mt-3 mt-xxl-0 img-container">
                    <img
                      src="https://imgur.com/Y9ySCn9.jpg"
                      class="card-img-top rounded-0 h-100 w-100"
                      alt="櫻花祭禮盒"
                    />
                  </div>
                  <div class="card-body text-center">
                    <h4>櫻花祭禮盒限定開賣</h4>
                    <div class="d-flex justify-content-between">
                      <p class="card-text text-muted mb-0">
                        人氣櫻花祭禮盒開賣，限量100盒！
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2"></div>
            </div>
          </div>
        </div>
      </section>
      <!-- <div class="bg-light py-4">
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
      </div> -->
  </div>
</template>

<style scoped>
.text-vertical {
  writing-mode: vertical-lr;
  /* transform: rotate(180deg); */
}
.intro{
  left: 22%;
}
.img-fluid-test {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center; /* 使內部元素居中 */
}
.img-container {
  width: 25vw; /* 根據視口寬度設定容器的寬度 */
  height: 25vw; /* 使高度等於寬度，保持正方形 */
  max-width: 178px; /* 設定最大寬度，避免在大屏幕上過大 */
  max-height: 120px; /* 設定最大高度，與最大寬度一致 */
  /* overflow: hidden; */
  margin: auto; /* 自動計算上下左右邊距以居中 */
  display: flex; /* 使用flex來容納圖片 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.info-container {
  flex-grow: 1;
  /* width:70vw;
  max-width: 70%; */
}
@media (max-width: 1200px) {
  .intro {
    left: 23%;
  }
  .img-container {
    width: 25vh; /* 根據視口寬度設定容器的寬度 */
    height: 25vh; /* 使高度等於寬度，保持正方形 */
    margin: auto; /* 自動計算上下左右邊距以居中 */
    display: flex; /* 使用flex來容納圖片 */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
  }
}
@media (max-width: 1024px) {
  .intro {
    left: 24%;
  }
  .img-container {
    width: 15vh;
    height: 15vh;
  }
}

@media (max-width: 992px) {
  .img-container {
    width: 50vh;
    height:50vh;
  }
}

@media (max-width: 768px) {
  .intro {
    left: 30%;
  }
}
</style>
