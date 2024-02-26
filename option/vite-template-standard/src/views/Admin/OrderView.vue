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
  </div>
</template>

<script>
import axios from 'axios'
import OrderModal from '../../components/OrderModal.vue'

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
    OrderModal
  },
  methods: {
    openModal (item) {
      this.tempOrder = { ...item }
      const orderComponent = this.$refs.orderModal
      orderComponent.openModal()
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
          // this.getOrders(this.currentPage)
        })
        // 失敗結果
        .catch((error) => {
          console.log(error.response.data.message)
          alert('未成功更新訂單資料')
        })
    }
  }
}
</script>

<style scoped></style>
