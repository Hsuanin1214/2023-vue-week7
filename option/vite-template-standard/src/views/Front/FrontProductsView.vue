<template>
  <div class="container px-5">
    <h2 class="my-4 text-primary border-primary-left fs-3 ps-3">所有甜點</h2>
    <div class="row my-2">
      <div class="col-12 col-xl-8">
        <ul class="nav div-md-block">
          <li class="nav-item" v-for="tab in tabs" :key="tab">
            <a class="nav-link nav-link-product" aria-current="page" :class="{ active: selectedTab === tab }" @click.prevent="getTabProduct(tab)">{{tab}}</a>
          </li>
        </ul>
        <!-- rwd -->
        <div class="dropdown d-md-none">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            選擇分類
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li v-for="tab in tabs" :key="tab">
              <a class="dropdown-item" :class="{ active: selectedTab === tab }" @click.prevent="getProducts(1,tab)">{{tab}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-xl-4 mt-4 mt-xl-0 d-flex justify-content-start justify-content-xl-center align-items-center">
        <label for="searchBar" class="me-3 text-primary fs-6 text-nowrap px-3 px-xl-0 fw-bold">搜尋：</label>
        <input class="w-70 w-lg-75" id="searchBar" type="text" v-model="searchQuery" placeholder="搜尋商品"/>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4" v-if="filteredList.length > 0">
      <div class="col my-2" v-for="product in filteredList" :key="product.id">
        <div class="card border-0 my-3 position-relative h-100">
          <div class="products-img-container">
            <router-link :to="`product/${product.id}`" class="text-decoration-none">
            <img
              :src="product.imageUrl"
              class="card-img-top rounded-0 h-100 w-100 img-fluid"
              :alt="product.title"
            />
          </router-link>
          </div>
          <a href="#" class="text-dark">
            <i
              class="far fa-heart position-absolute"
              style="right: 16px; top: 16px"
            ></i>
          </a>
          <div class="card-body p-0 text-center bg-light">
            <router-link :to="`product/${product.id}`" class="text-decoration-none">
              <h5 class="mb-0 mt-3 fs-6">{{ product.title }}</h5>
            </router-link>
            <p class="card-text mb-0 fs-6 mt-2">
              <span class="text-muted fs-6 me-3"><del>NT${{formatNumber(product.origin_price)}}</del></span><span>NT${{formatNumber(product.price)}}</span>
            </p>
          </div>
          <div class="card-footer bg-light d-flex justify-content-center border-top-0">
            <button class="btn btn-outline-primary rounded-1 px-xl-3 py-2"              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight" @click="addToCart(product.id , 1)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <p class="col text-center fw-bold fs-5 text-primary">沒有查詢到相關產品</p>
    </div>
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center mt-4 mb-1">
        <pagination-component :pages="pagination" :get-items="getProducts"></pagination-component>
      </div>
    </div>
    <front-side-cart-component :carts="carts"></front-side-cart-component>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import productStore from '../../stores/productStore.js'
import { useCartStore } from '../../stores/cartStore.js'
import PaginationComponent from '../../components/PaginationComponent.vue'
import FrontSideCartComponent from '../../components/FrontSideCartComponent.vue'
import { formatNumberMixin } from '../../mixins/formatNumberMixin.js'
// import LoadingComponent from '../../components/LoadingComponent.vue'
export default {
  components: {
    PaginationComponent,
    FrontSideCartComponent
    // LoadingComponent
  },
  data () {
    return {
      tempProduct: {},
      selectedTab: '全部',
      searchQuery: ''
      // status: '',
      // isNoClick: true
    }
  },
  mixins: [formatNumberMixin],
  computed: {
    ...mapState(useCartStore, ['carts']),
    ...mapState(productStore, ['products', 'pagination', 'tabs']),
    filteredList () {
      if (!this.searchQuery) { // 如果沒有搜尋條件，返回全部產品
        return this.products
      }
      return this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  methods: {
    ...mapActions(useCartStore, ['addToCart']),
    ...mapActions(productStore, ['getProducts', 'getAllProducts']),
    getTabProduct (tab) {
      this.selectedTab = tab
      this.getProducts(1, tab)
    }
  },
  mounted () {
    this.getProducts()
    this.getAllProducts()
  }
}
</script>
<style scoped>
@media (min-width: 992px) {
  .products-img-container{
    height: 35vh;
  }
}
@media (max-width: 991px) {
  .products-img-container{
    height: 40vh;
  }
}
@media (max-width: 767px) {
  .products-img-container{
    height: 40vh;
  }
}
@media (max-width: 575px) {
  .products-img-container{
    height: 25vm;
  }
}
@media (max-width: 399px) {
  .products-img-container{
    height: 25vm;
  }
}
</style>
