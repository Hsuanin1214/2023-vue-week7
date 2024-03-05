<template>
  <div>
    <div class="container">
      <div class="text-end mt-4">
        <button class="btn btn-primary" @click="openModal('new')">
          建立新的產品
        </button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否啟用</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-if="isLoading"> -->
            <!-- <td colspan="100%"> 使用 colspan="100%" 以確保遮罩可以覆蓋所有列 -->
              <loading-component :isLoading="isLoading"></loading-component>
            <!-- </td> -->
          <!-- </tr> -->
          <tr v-for="product in products" :key="product.id + 1">
            <td>{{ product.category }}</td>
            <td>{{ product.title }}</td>
            <td class="text-end">{{ product.origin_price }}</td>
            <td class="text-end">{{ product.price }}</td>
            <td>
              <span class="text-success" v-if="product.is_enabled">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal('edit', product)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openModal('delete', product)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 分頁元件 -->
    <pagination-component :pages="pagination" :get-items="getProducts"></pagination-component>
    <!-- Modal -->
    <product-modal-component :is-new="isNew" :temp-product="tempProduct" :update-product="updateProduct"
    :confirm-update="confirmUpdate"
    ref="pModal"></product-modal-component>
    <delete-modal-component :del-product="delProduct" ref="dModal" @del-item="delProduct"></delete-modal-component>
    <!-- Modal -->
  </div>
</template>

<script>
import axios from 'axios'

import PaginationComponent from '../../components/PaginationComponent.vue'
import ProductModalComponent from '../../components/ProductModalComponent.vue'
import DeleteModalComponent from '../../components/DelModalComponent.vue'
import LoadingComponent from '../../components/LoadingComponent.vue'

const { VITE_API, VITE_PATH } = import.meta.env
// 因為有其他元件也會使用到，因此將url相關資訊寫在全域
const url = VITE_API
const path = VITE_PATH

export default {
// let productModal = null;
// let deleteProductModal = null;
  components: {
    PaginationComponent,
    ProductModalComponent,
    DeleteModalComponent,
    LoadingComponent
  },
  data () {
    return {
      isNew: false,
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      modal: {
        editModal: '',
        dModal: ''
      },
      pagination: {},
      url: VITE_API,
      path: VITE_PATH,
      isLoading: false,
      isFullPage: true
    }
  },
  methods: {
    openModal (status, item) {
      console.log(item)
      if (status === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
        this.$refs.pModal.openModal()
      } else if (status === 'edit') {
        this.tempProduct = { ...item }
        this.isNew = false
        this.$refs.pModal.openModal()
      } else if (status === 'delete') {
        this.tempProduct = { ...item }
        if (!Array.isArray(this.tempProduct.imagesUrl)) {
          this.tempProduct.imagesUrl = []
        }
        this.isNew = false
        this.$refs.dModal.openModal()
      }
    },
    getProducts (page = 1) {
      this.isLoading = !this.isLoading
      // 給參數預設值
      const getUrl = `${url}/api/${path}/admin/products?page=${page}` // (query)為網址參數寫法，page參數帶入，取得當前頁碼的產品資料
      axios
        .get(getUrl)
        .then((res) => {
          console.log(res.data)
          const { products, pagination } = res.data
          this.products = products
          this.pagination = pagination
          this.isLoading = !this.isLoading
          console.log(this.products)
        })
        .catch((error) => {
          alert(error.response.data.message)
          console.log(error)
          this.$router.push('/')
        })
    },
    confirmUpdate () {
      if (this.tempProduct.id) {
        this.updateProduct()
      }
    },
    updateProduct () {
      let updateOrNewUrl = `${url}/api/${path}/admin/product/${this.tempProduct.id}`
      let http = 'put'
      if (this.isNew) {
        updateOrNewUrl = `${url}/api/${path}/admin/product`
        http = 'post'
      }
      axios[http](updateOrNewUrl, { data: this.tempProduct })
        .then((res) => {
          alert(res.data.message)
          this.$refs.pModal.closeModal()
          this.getProducts() // 取得所有產品
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
    },
    delProduct () {
      const deleteUrl = `${url}/api/${path}/admin/product/${this.tempProduct.id}`
      axios
        .delete(deleteUrl)
        .then((res) => {
          alert(res.data.message)
          this.$refs.dModal.closeModal()
          this.getProducts() // 更新所有產品
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
    },
    createImages () {
      this.tempProduct.imagesUrl = []
      this.tempProduct.imagesUrl.push('')
    }
  },
  mounted () {
    this.getProducts()
  }
// app.component('pagination-component',PaginationComponent); // 區域註冊
// app.component('productModalComponent',ProductModalComponent); // 區域註冊
}
</script>

<style scoped>
  img {
    object-fit: contain;
    max-width: 100%;
  }
  .primary-image {
    height: 300px;
  }
  .images {
    height: 150px;
  }
</style>
