<template>
  <div class="container px-5">
    <h2 class="my-4 text-primary border-primary-left ps-3">我的購物</h2>
    <div class="mt-3">
      <div class="row justify-content-center align-items-md-center">
      <div class="col-md-6">
        <h3 class="fw-bold mb-4 pt-3 h4 text-primary">訂購人資訊</h3>
      </div>
      <div class="col-md-6">
          <ul
            class="list-unstyled mb-0 ms-md-auto d-flex flex-wrap align-items-center justify-content-start justify-content-md-end w-100 mt-md-0 mt-4"
          >
            <li class="me-md-6 me-3 position-relative custom-step-line d-flex justify-content-center align-items-center">
              <i
                class="fas fa-check-circle d-md-inline d-block text-center me-2 text-secondary"
              ></i>
              <span class="text-nowrap text-secondary">商品確認</span>
            </li>
            <li class="me-md-6 me-3 position-relative custom-step-line d-flex justify-content-center align-items-center">
              <i
                class="fas fa-dot-circle d-md-inline d-block text-center me-2"
              ></i>
              <span class="text-nowrap">訂購人填寫</span>
            </li>
            <li class="me-md-6 me-3 position-relative d-flex justify-content-center align-items-center">
              <i class="fas fa-dot-circle d-md-inline d-block text-center me-2"></i>
              <span class="text-nowrap">訂單完成</span>
            </li>
          </ul>
      </div>
    </div>
      <div class="row mt-2 mt-md-0">
        <div class="col-12 text-start text-md-end">
          <button class="btn btn-outline-primary" type="button" @click="removeAllCart()">
              清空購物車
          </button>
        </div>
        <div class="col-12">
          <div class="table-container">
            <table class="table table-cart-product">
              <thead>
                <tr>
                  <th scope="col" class="border-0 ps-0">商品項目</th>
                  <th scope="col" class="border-0">商品數量</th>
                  <th scope="col" class="border-0">商品售價</th>
                  <th scope="col" class="border-0"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-bottom border-top" v-for="cart in carts.carts" :key="cart.id">
                  <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                    <img
                      :src="cart.product.imageUrl"
                      alt=""
                      style="width: 72px; height: 72px; object-fit: cover"
                    />
                    <p class="mb-0 fw-bold ms-3 d-inline-block">{{cart.product.title}}</p>
                  </th>
                  <td class="border-0 align-middle" style="max-width: 160px">
                    <div class="input-group pe-5">
                      <div class="input-group-prepend">
                        <button
                          class="btn btn-outline-dark border-0 py-2"
                          type="button"
                          id="button-addon1"
                          @click="cart.qty--; changeCartQty(cart,cart.qty)" :disabled="cart.qty === 1"
                        >
                          <i class="fas fa-minus"></i>
                        </button>
                      </div>
                      <input
                      min="1"
                        type="number"
                        class="form-control border-0 text-center my-auto shadow-none"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                        v-model="cart.qty"
                        value="1"
                        readonly
                      />
                        <!-- :disabled="cart.id === status.cartQtyLoading" -->
                      <div class="input-group-append">
                        <button
                          class="btn btn-outline-dark border-0 py-2"
                          type="button"
                          id="button-addon2"
                          @click="cart.qty++; changeCartQty(cart,cart.qty)"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="border-0 align-middle">
                    <p class="mb-0 ms-auto">NT${{formatNumber(cart.final_total)}}</p>
                  </td>
                  <td class="border-0 align-middle">
                    <button
                      class="btn btn-outline-dark border-0 py-2"
                      type="button"
                      id="button-addon2"
                      @click="removeCartItem(cart.id)"
                    >
                      <i class="fas fa-times"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- <div class="input-group w-50 mb-3">
            <input
              type="text"
              class="form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none"
              placeholder="Coupon Code"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0"
                type="button"
                id="button-addon2"
              >
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </div> -->
        </div>
        <div class="col-12">
          <div class="border p-4 mb-4">
            <h4 class="fw-bold mb-4 fs-md-4 text-primary">訂單明細</h4>
            <table class="table text-muted border-bottom">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">
                    小計
                  </th>
                  <td class="text-end border-0 px-0 pt-4">NT${{formatNumber(carts.total)}}</td>
                </tr>
                <!-- <tr>
                  <th
                    scope="row"
                    class="border-0 px-0 pt-0 pb-4 font-weight-normal"
                  >
                    優惠券折扣
                  </th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">－NT${{formatNumber(carts.total)}}</td>
                </tr> -->
                <tr>
                  <th
                    scope="row"
                    class="border-0 px-0 pt-0 pb-4 font-weight-normal"
                  >
                    支付方式
                  </th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">本店目前只提供自取或貨到付款</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 fs-md-4 fw-bold">總金額 : </p>
              <p class="mb-0 fs-md-4 fw-bold">NT${{formatNumber(carts.total)}}</p>
            </div>
            <!-- <a href="./checkout.html" class="btn btn-secondary w-100 mt-4"
              >立即結帳</a> -->
              <router-link
            class="btn btn-secondary w-100 mt-4"
            to="/checkout"
            >立即結帳</router-link
          >
          </div>
        </div>
      </div>
      <div class="my-5">
        <h4 class="text-primary fs-md-4 mb-4">其他相關甜點商品</h4>
        <div>
          <swiper
            :modules="modules"
            :slidesPerView="3"
            :centeredSlides="false"
            :spaceBetween="30"
            :pagination="{
              type: 'fraction',
            }"
            :navigation="true"
            :virtual="true"
            class="mySwiper"
            ref="swiperRef"
            @swiper="setSwiperRef"
            :breakpoints="{
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }"
          >
            <swiper-slide
              v-for="(product, index) in products"
              :key="index"
              :virtualIndex="index"
              >
                <div class="card border-0 mb-4 position-relative">
                  <router-link :to="`product/${product.id}`">
                    <div class="h-25vh scroll-img-container">
                        <img :src="product.imageUrl" class="card-img-top rounded-0 w-100 h-100 img-fluid" :alt="product.title">
                    </div>
                    <div class="card-body p-0">
                      <h5 class="mb-0 mt-3 fs-6 fs-md-5">{{ product.title }}</h5>
                      <p class="card-text mb-0">
                        NT${{ product.price }}
                        <span class="text-info" v-if="product.originalPrice"><del>NT${{ product.originalPrice }}</del></span>
                      </p>
                    </div>
                  </router-link>
            </div>
          </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- <div class="bg-light py-4">
      <div class="container">
        <div
          class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start"
        >
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

<script>
import { mapActions, mapState } from 'pinia'
import { useCartStore } from '../../stores/cartStore.js'
import productStore from '../../stores/productStore.js'
import { formatNumberMixin } from '../../mixins/formatNumberMixin.js'
// import PaginationComponent from '../../components/PaginationComponent.vue'
// 導入Swiper core和所需模塊
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Virtual } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/virtual'

export default {
  // components: {
  // PaginationComponent
  // LoadingComponent
  // },
  components: {
    Swiper,
    SwiperSlide
  },
  mixins: [formatNumberMixin],
  data () {
    return {
      slides: Array.from({ length: 5 }).map((_, index) => `Slide ${index + 1}`),
      swiperRef: null,
      appendNumber: 5,
      prependNumber: 1,
      modules: [Pagination, Navigation, Virtual]
    }
  },
  computed: {
    ...mapState(useCartStore, ['carts']),
    ...mapState(productStore, ['products'])
  },
  methods: {
    ...mapActions(useCartStore, ['getCart', 'changeCartQty', 'removeCartItem', 'removeAllCart']),
    ...mapActions(productStore, ['getProducts']),
    setSwiperRef (swiper) {
      this.swiperRef = swiper
    },
    slideTo (index) {
      this.swiperRef.slideTo(index - 1, 0)
    },
    append () {
      this.slides.push(`Slide ${++this.appendNumber}`)
    },
    prepend () {
      this.slides.unshift(`Slide ${this.prependNumber -= 2}`, `Slide ${this.prependNumber - 1}`)
      this.swiperRef.slideTo(this.swiperRef.activeIndex + 2, 0)
    }
  },
  mounted () {
    this.getProducts()
    this.getCart()
  }
}
</script>

<style scoped>
.h-25vh{
  height: 25vh;
}
.table-container {
    overflow-x: auto; /* 啟用橫向滾動條 */
    width: 100%; /* 或者其他指定的寬度 */
    /* margin: 0 auto; */
}
.table-cart-product {
    width: 100%; /* 讓表格寬度適應容器寬度 */
    /* 或者設置具體的最小寬度，例如 min-width: 600px; 以確保表格在較窄的螢幕上也能正常顯示 */
}
@media (max-width: 992px) {
    .table-container {
        /* 在螢幕寬度小於或等於375px時，可能需要設置容器的最小寬度來保持表格內部元素的一致性 */
        min-width: 200px; /* 這將確保容器有足夠的寬度來顯示表格，即使在較小的螢幕上也能通過滾動條查看 */
    }
    .table-cart-product {
        min-width: 800px; /* 或根據你的表格設計設定一個合適的最小寬度 */
        /* 這確保了表格即使在狹窄的視窗中也不會壓縮其內容 */
    }
}

/* @media (min-width: 992px) {
  .custom-flex-desktop-remove {
    display: block !important;
    align-items: unset !important;
    justify-content: unset !important;
    flex-direction: row !important;
  }
} */
/* @media (min-width: 992px) {
  .scroll-img-container{
    height: 60vh;
  }
}
@media (max-width: 991px) {
  .scroll-img-container{
    height: 40vh;
  }
}
@media (max-width: 767px) {
  .scroll-img-container{
    height: 40vh;
  }
}
@media (max-width: 575px) {
  .scroll-img-container{
    height: 25vm;
  }
} */
@media (max-width: 375px) {
  .scroll-img-container{
    height: 40vm;
  }
}
</style>
