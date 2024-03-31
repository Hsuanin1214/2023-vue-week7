import axios from 'axios'
//
import { defineStore } from 'pinia'

const { VITE_API, VITE_PATH } = import.meta.env

export default defineStore('productStore', {
  state: () => (
    {
      products: [],
      pagination: {},
      productSelect: [],
      tabs: []
    }),
  actions: {
    getAllProducts () {
      const getUrl = `${VITE_API}/api/${VITE_PATH}/products/all` // (query)為網址參數寫法，page參數帶入，取得當前頁碼的產品資料
      axios
        .get(getUrl)
        .then((res) => {
          const categories = res.data.products.map(product => {
            return product.category
          })
          // 使用 Set 對象來過濾重複的值，並將 Set 轉換回 Array
          this.tabs = ['全部', ...new Set(categories)]
        })
        .catch((error) => {
          alert(error.response.data.message)
          console.log(error)
        })
    },
    getProducts (page = 1, category = '') {
      // this.isLoading = !this.isLoading
      const categoryQuery = category !== '全部' ? category : ''
      // 給參數預設值
      // const getUrl = `${url}/api/${path}/admin/products?page=${page}&category=${categoryQuery}`
      const getUrl = `${VITE_API}/api/${VITE_PATH}/products?page=${page}&category=${categoryQuery}` // (query)為網址參數寫法，page參數帶入，取得當前頁碼的產品資料
      axios
        .get(getUrl)
        .then((res) => {
          const { products, pagination } = res.data
          console.log(products)
          this.products = products
          this.pagination = pagination
          // this.isLoading = !this.isLoading
        })
        .catch((error) => {
          alert(error.response.data.message)
          console.log(error)
        })
    },
    getProduct (id) {
      // this.isLoading = !this.isLoading
      // const categoryQuery = this.filter !== '全部' ? this.filter : ''
      // 給參數預設值
      // const getUrl = `${url}/api/${path}/admin/products?page=${page}&category=${categoryQuery}`
      // const productId = this.$route.params.id
      const getUrl = `${VITE_API}/api/${VITE_PATH}/product/${id}` // (query)為網址參數寫法，page參數帶入，取得當前頁碼的產品資料
      axios
        .get(getUrl)
        .then((res) => {
          const { product } = res.data
          console.log(product)
          this.productSelect = product
          // this.isLoading = !this.isLoading
        })
        .catch((error) => {
          alert(error.response.data.message)
          console.log(error)
        })
    }
  }
})
