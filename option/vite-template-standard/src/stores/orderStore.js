import axios from 'axios'
//
import { defineStore } from 'pinia'

import { useCartStore } from './cartStore.js'
const { VITE_API, VITE_PATH } = import.meta.env

export default defineStore('orderStore', {
  state: () => ({
    products: [],
    selectedProduct: [],
    // productModal: null,
    carts: {},
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
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    addOrder () {
      const cartStore = useCartStore()
      const addOrderUrl = `${VITE_API}/api/${VITE_PATH}/order`
      const order = this.form
      console.log(addOrderUrl, order)
      axios
        .post(addOrderUrl, { data: order })
        .then((res) => {
          console.log(res)
          alert(res.data.message)
          this.$refs.form.resetForm()
          cartStore.getCart()
        })
        .catch((error) => {
          alert(error.response.data.message)
          console.dir(error)
        })
    }
  }
})
