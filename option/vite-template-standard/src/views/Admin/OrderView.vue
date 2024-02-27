<template>
  <div>
    <h2>訂單</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in orders" :key="item.id">
          <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
            ...
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  @click="openModal(item)"
                >
                  檢視
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  type="button"
                  @click="openDelOrderModal(item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <OrderModal ref="orderModal" :order="tempOrder" @update-paid="updatePaid" />
    <!-- <DelModal ref="delModal" :item="tempOrder" @del-item="delOrder" /> -->
  </div>
</template>

<script>
import axios from 'axios'
import OrderModal from '../../components/OrderModal.vue'
import DelModal from '../../components/DelModal.vue'

const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      orders: {},
      tempOrder: {},
      currentPage: 1,
      url: VITE_API,
      path: VITE_PATH
    }
  },
  components: {
    OrderModal,
    DelModal
  },
  methods: {
    getOrders (currentPage = 1) {
      this.currentPage = currentPage
      const url = `${this.url}/api/${this.path}/admin/orders?page=${currentPage}`
      this.isLoading = true
      axios.get(url, this.tempProduct).then((response) => {
        this.orders = response.data.orders
        this.pagination = response.data.pagination
        // this.isLoading = false
      }).catch((error) => {
        // this.isLoading = false
        // this.pushMessage({
        //   style: 'danger',
        //   title: '錯誤訊息',
        //   content: error.response.data.message,
        // })
        alert(error)
      })
    },
    openModal (item) {
      this.tempOrder = { ...item }
      const orderComponent = this.$refs.orderModal
      orderComponent.openModal()
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.openModal()
    },
    updatePaid (item) {
      const api = `${this.url}/api/${this.path}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      axios
        .put(api, {
          data: paid
        })
        // 成功的結果
        .then((res) => {
          console.log(res)
          const orderComponent = this.$refs.orderModal
          orderComponent.hideModal()
          this.getOrders(this.currentPage)
        })
        // 失敗結果
        .catch((error) => {
          console.log(error.response.data.message)
          alert('未成功更新訂單資料')
        })
    },
    delOrder () {
      const url = `${this.url}/api/${this.path}/admin/order/${this.tempOrder.id}`
      axios
        .delete(url)
        .then(() => {
          const delComponent = this.$refs.delModal
          delComponent.hideModal()

          this.getOrders(this.currentPage)
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>

<style scoped></style>
