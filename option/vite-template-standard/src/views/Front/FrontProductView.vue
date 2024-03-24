<template>
  <div class="container px-5">
    <h2 class="my-4 text-primary border-primary-left ps-3">查看商品</h2>
    <div class="row align-items-center">
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
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
        <p class="h5 mb-0 text-muted text-end"><del>NT${{productSelect.origin_price}}</del></p>
        <p class="h5 text-end">NT${{productSelect.price}} / <span>{{ productSelect.unit }}</span></p>
        <div class="row align-items-center">
          <div class="col-8">
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
          <div class="col-4">
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
      <div class="col-md-7">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators" v-if="productSelect && productSelect.imagesUrl">
            <!-- Always show the first indicator for the first image -->
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <!-- Dynamically generate indicators for the rest of the images -->
            <button v-for="index in productSelect.imagesUrl.length" :key="index" type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" :aria-label="'Slide ' + (index + 1)" :class="{ 'active': index === 0 }"></button>
          </div>
          <div class="carousel-inner">
            <!-- Display the first image -->
            <div class="carousel-item active h-75vh">
              <img :src="productSelect.imageUrl" class="d-block h-100 w-100 carousel-img" :alt="productSelect.title">
            </div>
            <!-- Dynamically display the rest of the images -->
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
    <!-- <div class="row my-5">
      <div class="col-md-5">
        <p class="fs-6">
          {{productSelect.description}}
        </p>
      </div>
    </div> -->
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
              <span class="d-block fw-bold mb-2">甜點名稱 : <span class="border-bottom-info">
                {{ cart.product.title }}</span></span>
              <span class="me-3">售價 : NT$ {{ cart.product.price }}</span>
              <span>數量: {{ cart.qty }}</span>
              <span class="d-block">總價 : NT$ {{cart.final_total}}</span>
            </li>
          </ul>
          <router-link
            class="btn btn-secondary w-100 mt-4"
            to="/cart"
            >直接結帳</router-link
          >
        </div>
      </div>
    </div>
    <!-- 保存方式、預留甜點 -->
    <front-ship-nav-component :content="productSelect.content"></front-ship-nav-component>
    <h3 class="fw-bold">更多甜點</h3>
    <!-- <div class="swiper-container mt-4 mb-5">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
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
import FrontShipNavComponent from '../../components/FrontShipNavComponent.vue'
export default {
  data () {
    return {
      tempProduct: {},
      tempNum: 1
    }
  },
  components: {
    FrontShipNavComponent
  },
  computed: {
    ...mapState(useCartStore, ['carts']),
    ...mapState(productStore, ['productSelect', 'pagination'])
  },
  methods: {
    ...mapActions(useCartStore, ['getCart', 'changeCartQty', 'removeCartItem', 'removeAllCart', 'addToCart']),
    ...mapActions(productStore, ['getProduct']),
    changeNum (step) {
      this.tempNum += step
    }
  },
  mounted () {
    const productId = this.$route.params.id
    this.getProduct(productId)
    this.getCart()
  }
}
</script>

<style scoped>
</style>
