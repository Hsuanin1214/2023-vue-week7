<template>
  <div class="container px-5">
    <h2 class="my-4 text-primary border-primary-left ps-3">最新消息</h2>
    <div class="row">
      <div class="col-12">
        <ul class="nav nav-underline">
          <li
            class="nav-item"
            v-for="tab in tabs"
            :key="tab.name"
            @click.prevent="selectedTab = tab"
          >
            <a
              class="nav-link"
              aria-current="page"
              href="#"
              :class="{ active: selectedTab.name === tab.name }"
              >{{ tab.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div v-if="selectedTab.name === '近期優惠'">
      <div class="row mt-4">
        <div class="col-12 col-md-6 mb-3">
          <div class="d-flex rounded-2 p-3 border-info-subtle border border-1 newsDiv position-relative">
            <div class="new-tag position-absolute top-0 end-0 text-secondary-custom px-2 py-1 fw-bolder fs-6 position-absolute">NEW</div>
            <div class="me-2 img-container">
              <img src="https://imgur.com/56i4iC2.jpg" alt="母親節優惠" class="img-fluid h-100 w-100" />
            </div>
            <div class="info-container">
              <div class="d-flex align-items-center">
                <div class="bg-primary me-2 px-2 py-1 fw-bold text-light fs-7">近期優惠</div>
                <span class="fw-bold fs-7">2024.03.09</span>
              </div>
              <h5 class="text-info fs-6 mt-4" style="overflow: hidden;">歡慶母親節!慶生蛋糕系列打95折!</h5>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mb-3">
          <div class="d-flex rounded-2 p-3 border-info-subtle border border-1 newsDiv">
            <div class="me-2 img-container">
              <img src="https://imgur.com/56i4iC2.jpg" alt="母親節優惠" class="img-fluid h-100 w-100" />
            </div>
            <div class="info-container">
              <div class="d-flex align-items-center">
                <div class="bg-primary me-2 px-2 py-1 fw-bold text-light fs-7">近期優惠</div>
                <span class="fw-bold fs-7">2024.03.09</span>
              </div>
              <h5 class="text-info fs-6 mt-4" style="overflow: hidden;">歡慶母親節!慶生蛋糕系列打95折!</h5>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mb-3">
          <div class="d-flex rounded-2 p-3 border-info-subtle border border-1 newsDiv">
            <div class="me-2 img-container">
              <img src="https://imgur.com/56i4iC2.jpg" alt="母親節優惠" class="img-fluid h-100 w-100" />
            </div>
            <div class="info-container">
              <div class="d-flex align-items-center">
                <div class="bg-primary me-2 px-2 py-1 fw-bold text-light fs-7">近期優惠</div>
                <span class="fw-bold fs-7">2024.03.09</span>
              </div>
              <h5 class="text-info fs-6 mt-4" style="overflow: hidden;">歡慶母親節!慶生蛋糕系列打95折!</h5>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mb-3">
          <div class="d-flex rounded-2 p-3 border-info-subtle border border-1 newsDiv">
            <div class="me-2 img-container">
              <img src="https://imgur.com/56i4iC2.jpg" alt="母親節優惠" class="img-fluid h-100 w-100" />
            </div>
            <div class="info-container">
              <div class="d-flex align-items-center">
                <div class="bg-primary me-2 px-2 py-1 fw-bold text-light fs-7">近期優惠</div>
                <span class="fw-bold fs-7">2024.03.09</span>
              </div>
              <h5 class="text-info fs-6 mt-4" style="overflow: hidden;">歡慶母親節!慶生蛋糕系列打95折!</h5>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mb-3">
          <div class="d-flex rounded-2 p-3 border-info-subtle border border-1 newsDiv">
            <div class="me-2 img-container">
              <img src="https://imgur.com/56i4iC2.jpg" alt="母親節優惠" class="img-fluid h-100 w-100" />
            </div>
            <div class="info-container">
              <div class="d-flex align-items-center">
                <div class="bg-primary me-2 px-2 py-1 fw-bold text-light fs-7">近期優惠</div>
                <span class="fw-bold fs-7">2024.03.09</span>
              </div>
              <h5 class="text-info fs-6 mt-4" style="overflow: hidden;">歡慶母親節!慶生蛋糕系列打95折!</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="selectedTab.name === '本店消息'">
      <p class="my-4 text-center">近期無本店相關新消息</p>
    </div>
    <div v-if="selectedTab.name === '甜點知識'">
      <p class="my-4 text-center">敬請期待分享新甜點知識，也歡迎與我們交流。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [{ name: '近期優惠' }, { name: '本店消息' }, { name: '甜點知識' }],
      selectedTab: { name: '近期優惠' } // 預設選中的標籤
    }
  },
  methods: {}
}
</script>

<style scoped>
.newsDiv:hover {
  transition: box-shadow 0.2s ease-out, transform 0.2s ease-out;
  box-shadow: 2px 2px 0 #e6e6e6;
}
.new-tag {
  top: 0;
  right: 10;
  transform: translate(0%, -50%); /* 將標籤向右上角外移，使其部分位於外面 */
  z-index: 10; /* 確保標籤位於最上層 */
  text-shadow: 2px 2px 0 #85736d;
}
.img-container {
  width: 25vw; /* 根據視口寬度設定容器的寬度 */
  height: 25vw; /* 使高度等於寬度，保持正方形 */
  max-width: 100px; /* 設定最大寬度，避免在大屏幕上過大 */
  max-height: 100px; /* 設定最大高度，與最大寬度一致 */
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
}
</style>
