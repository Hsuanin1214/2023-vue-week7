<template>
  <div class="container px-5">
    <h2 class="my-4 text-primary border-primary-left ps-3">我的購物</h2>
    <div class="mt-3">
      <div class="row">
        <div class="col-12 text-end">
          <button class="btn btn-outline-primary" type="button" @click="removeAllCart()">
              清空購物車
          </button>
        </div>
        <div class="col-12">
          <table class="table">
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
                  <p class="mb-0 ms-auto">NT${{cart.final_total}}</p>
                </td>
                <td class="border-0 align-middle">
                  <i class="fas fa-times"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="input-group w-50 mb-3">
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
                @click="removeCartItem(cart.id)"
              >
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="border p-4 mb-4">
            <h4 class="fw-bold mb-4">Order Detail</h4>
            <table class="table text-muted border-bottom">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">
                    Subtotal
                  </th>
                  <td class="text-end border-0 px-0 pt-4">NT${{carts.total}}</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="border-0 px-0 pt-0 pb-4 font-weight-normal"
                  >
                    優惠券折扣
                  </th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">－NT${{carts.total}}</td>
                </tr>
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
              <p class="mb-0 h4 fw-bold">Total</p>
              <p class="mb-0 h4 fw-bold">NT${{carts.total}}</p>
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
      <!-- <div class="my-5">
        <h3 class="fw-bold">Lorem ipsum dolor sit amet</h3>
        <div class="swiper-container mt-4 mb-5">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080
                    <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080
                    <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080
                    <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080
                    <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080
                    <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
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
import cartStore from '../../stores/cartStore.js'
import productStore from '../../stores/productStore.js'
// import PaginationComponent from '../../components/PaginationComponent.vue'
export default {
  // components: {
  // PaginationComponent
  // LoadingComponent
  // },
  data () {
    return {

    }
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'changeCartQty', 'removeCartItem', 'removeAllCart']),
    ...mapActions(productStore, ['getProducts'])
  },
  mounted () {
    this.getProducts()
    this.getCart()
  }
}
</script>

<style scoped></style>
