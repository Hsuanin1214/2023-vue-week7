import axios from 'axios'
//
import { defineStore } from 'pinia'

const { VITE_API, VITE_PATH } = import.meta.env

export default defineStore('couponStore', {
  state: () => (
    {
      coupons: [],
      page: {}
    }),
  actions: {
    getCoupons (page = 1) {
      // 給參數預設值
      const getUrl = `${VITE_API}/api/${VITE_PATH}/admin/coupons?page=${page}` // (query)為網址參數寫法，page參數帶入，取得當前頁碼的產品資料
      axios
        .get(getUrl)
        .then((res) => {
          const { coupons, pagination } = res.data
          this.coupons = coupons
          this.page = pagination
          this.isLoading = !this.isLoading
        })
        .catch((error) => {
          alert(error.response.data.message)
          console.log(error)
        })
    },
    updateCoupons (status, data) {
      console.log(status, data)
      let updateOrNewUrl = `${VITE_API}/api/${VITE_PATH}/admin/coupon/${data.id}`
      let http = 'put'
      if (status === 'new') {
        updateOrNewUrl = `${VITE_API}/api/${VITE_PATH}/admin/coupon`
        http = 'post'
      }
      console.log(updateOrNewUrl, http)
      axios[http](updateOrNewUrl, { data })
        .then((res) => {
          alert(res.data.message)
          this.getCoupons() // 取得所有產品
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
    },
    delProduct (id) {
      const deleteUrl = `${VITE_API}/api/${VITE_PATH}/admin/coupon/${id}`
      axios
        .delete(deleteUrl)
        .then((res) => {
          alert(res.data.message)
          this.getCoupons() // 更新所有產品
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
    },
    switchStatus (event, data) {
      const current = event.target.checked ? 1 : 0
      const newData = { ...data, is_enabled: current }
      // loaderStore.createLoader('switch-coupon-status')
      axios.put(`${VITE_API}/api/${VITE_PATH}/admin/coupon/${data.id}`, { data: newData })
        .then(() => {
          // alertStore.toastAlert(`成功${current ? '取消' : '開啟'}優惠券`, 'success');
          this.getCoupons()
        })
        .catch((error) => alert(error.response.data.message))
      // .finally(() => loaderStore.removeLoader('switch-coupon-status'))
    }
  }
})
