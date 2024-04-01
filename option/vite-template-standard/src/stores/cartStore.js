import axios from 'axios'
//
import { defineStore } from 'pinia'

const { VITE_API, VITE_PATH } = import.meta.env

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    products: [],
    selectedProduct: [],
    // productModal: null,
    carts: { carts: [] },
    cartsLength: 0,
    status: {
      addCartLoading: '',
      cartQtyLoading: ''
    },
    form: {
      user: {
        name: '',
        email: '',
        tel: '',
        address: ''
      },
      message: ''
    }
  }),
  actions: {
    addToCart (productId, qty = 1) {
      const order = {
        product_id: productId,
        qty
      }
      const postCartUrl = `${VITE_API}/api/${VITE_PATH}/cart`
      this.status.addCartLoading = productId
      axios
        .post(postCartUrl, { data: order })
        .then((res) => {
          console.log(res)
          this.status.addCartLoading = ''
          // alert('已加入購物車')
          // this.$refs.userModal.closeModal()
          this.getCart()
        })
        .catch((error) => {
          alert(error.response.data.message)
          console.dir(error)
        })
    },
    changeCartQty (item, qty = 1) {
      const order = {
        product_id: item.product_id,
        qty
      }
      const postCartUrl = `${VITE_API}/api/${VITE_PATH}/cart/${item.id}`
      this.status.cartQtyLoading = item.id
      axios
        .put(postCartUrl, { data: order })
        .then((res) => {
          console.log(res)
          this.status.cartQtyLoading = ''
          // this.$refs.userModal.closeModal();
          this.getCart()
        })
        .catch((error) => {
          alert(error.response.data.message)
          console.dir(error)
        })
    },
    getCart () {
      const getCartUrl = `${VITE_API}/api/${VITE_PATH}/cart`
      axios
        .get(getCartUrl)
        .then((res) => {
          this.carts = res.data.data
          this.cartsLength = this.carts.carts.length
        })
        .catch((error) => {
          alert(error.response.data.message)
          console.dir(error)
        })
    },
    removeCartItem (id) {
      const deleteCartUrl = `${VITE_API}/api/${VITE_PATH}/cart/${id}`
      this.status.cartQtyLoading = id
      axios
        .delete(deleteCartUrl)
        .then((res) => {
          console.log(res)
          this.status.cartQtyLoading = ''
          // this.$refs.userModal.closeModal();
          this.getCart()
        })
        .catch((error) => {
          alert(error.response.data.message)
          console.dir(error)
        })
    },
    removeAllCart () {
      const deleteCartsUrl = `${VITE_API}/api/${VITE_PATH}/carts`
      axios
        .delete(deleteCartsUrl)
        .then((res) => {
          console.log(res)
          this.getCart()
        })
        .catch((error) => {
          alert(error.response.data.message)
          console.dir(error)
        })
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    addOrder () {
      const addOrderUrl = `${VITE_API}/api/${VITE_PATH}/order`
      const order = this.form
      axios
        .post(addOrderUrl, { data: order })
        .then((res) => {
          console.log(res)
          alert(res.data.message)
          this.$refs.form.resetForm()
          this.getCart()
        })
        .catch((error) => {
          alert(error.response.data.message)
          console.dir(error)
        })
    }
  }
})
