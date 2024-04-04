<template>
  <div class="container px-5">
    <h2 class="my-4 text-primary border-primary-left fs-3 ps-3">查看商品</h2>
    <div class="row align-items-start">
      <div class="col-lg-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 pb-3">
            <li class="breadcrumb-item">
              <router-link class="text-muted" to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link class="text-muted" to="/products">甜點列表</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{productSelect.category}}</li>
          </ol>
        </nav>
        <h2 class="fw-bold text-secondary-emphasis h4 mb-1">{{productSelect.title}}</h2>
        <p class="h5 mb-0 text-muted text-end"><del>NT${{formatNumber(productSelect.origin_price)}}</del></p>
        <p class="h5 text-end">NT${{formatNumber(productSelect.price)}} / <span>{{ productSelect.unit }}</span></p>
        <div class="d-xl-flex align-items-xl-center">
          <div>
            <div class="input-group my-3 bg-light rounded-2 d-flex align-items-center">
              <div class="input-group-prepend">
                <button
                  class="btn btn-outline-info border-0 py-2"
                  type="button"
                  id="button-addon1"
                  @click="changeNum(-1)"
                  :disabled="tempNum === 1"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
                <input
                  type="number"
                  class="form-control border-0 text-center my-auto shadow-none bg-light w-50"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  v-model="tempNum"
                  readonly
                />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-info border-0 py-2"
                  type="button"
                  id="button-addon2"
                  @click="changeNum(1)"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="text-end text-xl-center">
            <button
              class="btn btn-primary text-nowrap py-2 text-center"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              @click="addToCart(productSelect.id , tempNum)"
            >
              加入購物車
            </button>
          </div>
        </div>
        <p class="fs-6">
          {{productSelect.description}}
        </p>
      </div>
      <div class="col-lg-7">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators" v-if="productSelect && productSelect.imagesUrl">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button v-for="index in productSelect.imagesUrl.length" :key="index" type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" :aria-label="'Slide ' + (index + 1)" :class="{ 'active': index === 0 }"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active h-75vh">
              <img :src="productSelect.imageUrl" class="d-block h-100 w-100 carousel-img" :alt="productSelect.title">
            </div>
            <div class="carousel-item h-75vh" v-for="(image, index) in productSelect.imagesUrl" :key="index+1">
              <img :src="image" class="d-block h-100 w-100 carousel-img" :alt="productSelect.title">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <front-side-cart-component :carts="carts"></front-side-cart-component>
    <front-ship-nav-component :content="productSelect.content"></front-ship-nav-component>
    <div class="my-5">
      <h4 class="text-primary fs-md-4 mb-4">相關商品</h4>
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
              <router-link class="text-decoration-none" :to="`${product.id}`">
                <div class="h-25vh scroll-img-container">
                    <img :src="product.imageUrl" class="card-img-top rounded-0 w-100 h-100 img-fluid" :alt="product.title">
                </div>
                <div class="card-body p-0 text-center mb-2">
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
</template>

<script>
import { mapActions, mapState } from 'pinia'
import productStore from '../../stores/productStore.js'
import { useCartStore } from '../../stores/cartStore.js'
import FrontShipNavComponent from '../../components/FrontShipNavComponent.vue'
import FrontSideCartComponent from '../../components/FrontSideCartComponent.vue'
import { formatNumberMixin } from '../../mixins/formatNumberMixin.js'
// 導入Swiper core和所需模塊
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Virtual } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/virtual'
export default {
  data () {
    return {
      tempProduct: {},
      tempNum: 1,
      slides: Array.from({ length: 5 }).map((_, index) => `Slide ${index + 1}`),
      swiperRef: null,
      appendNumber: 5,
      prependNumber: 1,
      modules: [Pagination, Navigation, Virtual]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    FrontShipNavComponent,
    FrontSideCartComponent
  },
  mixins: [formatNumberMixin],
  watch: {
    '$route' (to, from) {
      // 路由變化時的邏輯，比如重新初始化 Swiper
      this.initializePage()
    }
  },
  computed: {
    ...mapState(useCartStore, ['carts']),
    ...mapState(productStore, ['products', 'productSelect', 'pagination'])
  },
  methods: {
    ...mapActions(useCartStore, ['getCart', 'changeCartQty', 'removeCartItem', 'removeAllCart', 'addToCart']),
    ...mapActions(productStore, ['getProduct', 'getProducts']),
    changeNum (step) {
      this.tempNum += step
    },
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
    },
    initializePage () {
      const productId = this.$route.params.id
      this.getProduct(productId)
    }
  },
  mounted () {
    this.initializePage()
    this.getProducts()
    this.getCart()
  }
}
</script>
<style scoped>
@media (max-width: 375px) {
  .scroll-img-container{
    height: 40vm;
  }
}
</style>
