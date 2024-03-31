<template>
  <!-- 加入購物車 -->
  <div>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5
          class="h5 offcanvas-title text-secondary fw-bold"
          id="offcanvasRightLabel"
        >
          購物車內容
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="scrollable-div">
          <li v-for="cart in carts.carts" :key="cart.id" class="my-3">
            <span class="d-block fw-bold mb-2"
              >甜點名稱 :
              <span class="border-bottom-info">
                {{ cart.product.title }}</span
              ></span
            >
            <span class="me-3"
              >售價 : NT$ {{ formatNumber(cart.product.price) }}</span
            >
            <span>數量: {{ cart.qty }}</span>
            <span class="d-block"
              >總價 : NT$ {{ formatNumber(cart.final_total) }}</span
            >
          </li>
        </ul>
        <router-link class="btn btn-secondary w-100 mt-4" to="/cart"
          >直接結帳</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { formatNumberMixin } from '../mixins/formatNumberMixin.js'
export default {
  data () {
    return {}
  },
  props: ['carts'],
  mixins: [formatNumberMixin]
}
</script>
