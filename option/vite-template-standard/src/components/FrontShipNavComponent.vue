<template>
  <div class="container">
    <div class="row my-4">
      <ul class=" col-12 nav nav-tabs">
        <li
          class="nav-item"
          v-for="tab in tabs"
          :key="tab.name"
          @click.prevent="selectedTab = tab"
        >
          <a
            class="nav-link text-primary"
            href="#"
            :class="{ active: selectedTab.name === tab.name }"
            >{{ tab.name }}</a
          >
        </li>
      </ul>
    </div>
    <div v-if="selectedTab.name === '商品介紹'">
      <h5 class="text-primary mt-3 fw-bold">商品介紹</h5>
      <p>請見上方商品說明。</p>
    </div>
    <div v-if="selectedTab.name === '規格說明'">
      <h5 class="text-primary mt-3 fw-bold">規格說明</h5>
      <p>
        我們的甜點以精選優質原料製作，秉承手工製作的傳統工藝，為您帶來最純粹的味覺體驗。以下是我們甜點的基本規格：
      </p>
      <ul>
        <li>
          <strong class="text-secondary">尺寸：</strong
          >所有甜點均提供標準尺寸，適合單人或多人分享。詳細尺寸信息請參見各個甜點的具體頁面。
        </li>
        <li>
          <strong class="text-secondary">包裝：</strong
          >我們採用環保材料進行精美包裝，旨在保證甜點在運輸過程中的新鮮與完整，同時也便於您送禮。
        </li>
        <li>
          <strong class="text-secondary">保存方法：</strong
          >為保持甜點的最佳風味，請依照包裝上的指示進行保存。大多數甜點需要冷藏保存，開封後請盡快食用。
        </li>
      </ul>
      <h5 class="text-primary mt-3 border-primary-bottom">注意事項</h5>
      <ul>
        <li>
          由於全部手工製作，每一份甜點的外觀可能略有不同，這是手工產品的獨特魅力。
        </li>
        <li>若有食物過敏史，請在下單前仔細閱讀產品成分信息。</li>
        <li>
          我們致力於提供最優質的甜點，若您對產品有任何疑問或不滿，請及時與我們聯繫，我們將竭誠為您服務。
        </li>
      </ul>
    </div>
    <div v-if="selectedTab.name === '運送方式'">
      <h5 class="text-primary mt-3 fw-bold">運送方式</h5>
      <ul>
        <li>
          <strong class="text-secondary">標準運送：</strong
          >我們提供全國範圍內的標準運送服務，運送時間一般為下單後3-5個工作日。所有標準運送的訂單將通過我們的物流合作夥伴進行配送。
        </li>
        <li>
          <strong class="text-secondary">快速運送：</strong
          >為了滿足您的急需，我們還提供快速運送選項，使您的訂單可以在1-2個工作日內到達。請注意，快速運送服務將收取額外的運費。
        </li>
        <li>
          <strong class="text-secondary">自取服務：</strong
          >如果您希望親自提取您的訂單，我們在特定地點設有自取點。下單時，請選擇「自取」選項並查看最近的自取點地址。
        </li>
      </ul>
      <h5 class="text-primary mt-3 border-primary-bottom">注意事項</h5>
      <ul>
        <li>
          所有運送時間均為預計時間，實際到達時間可能因天氣、交通等不可抗因素而有所變動。
        </li>
        <li>
          快速運送服務僅限於特定地區，下單前請確認您的地區是否支持此服務。
        </li>
        <li>自取時，請攜帶有效身份證件和訂單確認信息</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabs: [{ name: '商品介紹' }, { name: '規格說明' }, { name: '運送方式' }],
      selectedTab: { name: '商品介紹' } // 預設選中的標籤
    }
  },
  components: {},
  methods: {},
  created () {}
}
</script>

<style scoped></style>
