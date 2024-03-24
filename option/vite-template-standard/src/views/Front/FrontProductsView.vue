<template>
  <div class="container px-5">
    <h2 class="my-4 text-primary border-primary-left ps-3">所有甜點</h2>
    <div class="row my-2">
      <div class="col-6">
        <div class="dropdown">
          <!-- <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul> -->
          <!-- rwd -->
          <!-- <ul class="dropdown-menu dropdown-menu-dark">
            <li v-for="tab in tabs" :key="tab"><a class="dropdown-item" :class="{ active: selectedTab === tab }" href="#">tab</a></li> -->
            <!-- <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li> -->
          <!-- </ul> -->
        </div>
        <pagination-component :pages="pagination" :get-items="getProducts" class="mt-2"></pagination-component>
      </div>
      <!-- <div class="col-6">
        <label for="" class="me-3">搜尋 : </label>
        <input type="text" />
      </div> -->
    </div>
    <div class="row">
      <div class="col-md-6" v-for="product in products" :key="product.id">
        <div class="card border-0 mb-4 position-relative">
          <div class="h-75vh">
            <img
              :src="product.imageUrl"
              class="card-img-top rounded-2 h-100 w-100 img-fluid"
              :alt="product.title"
            />
          </div>
          <a href="#" class="text-dark">
            <i
              class="far fa-heart position-absolute"
              style="right: 16px; top: 16px"
            ></i>
          </a>
          <div class="card-body p-0">
            <h4 class="mb-0 mt-3"><router-link :to="`product/${product.id}`">{{ product.title }}</router-link></h4>
            <p class="card-text mb-0">
              NT${{product.origin_price}} <span class="text-muted"><del>NT$1,{{product.price}}</del></span>
            </p>
            <p class="text-muted mt-3">{{ product.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import productStore from '../../stores/productStore.js'
import PaginationComponent from '../../components/PaginationComponent.vue'
// import LoadingComponent from '../../components/LoadingComponent.vue'
export default {
  components: {
    PaginationComponent
    // LoadingComponent
  },
  data () {
    return {
      tempProduct: {},
      selectedTab: '蛋糕'
      // status: '',
      // isNoClick: true
    }
  },
  computed: {
    ...mapState(productStore, ['products', 'pagination', 'tabs'])
  },
  methods: {
    ...mapActions(productStore, ['getProducts', 'getAllProducts'])
  },
  mounted () {
    this.getProducts()
    this.getAllProducts()
    console.log(this.tabs)
  }
}
</script>
<style scoped>
</style>
