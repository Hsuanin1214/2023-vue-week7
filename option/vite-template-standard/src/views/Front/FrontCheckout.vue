<template>
  <div class="container px-5">
    <h2 class="my-4 text-primary border-primary-left fs-3 ps-3">訂單進度</h2>
    <div class="row justify-content-center align-items-md-center">
      <!-- <div class="col-md-6">
        <h3 class="mb-4 pt-3 fs-4 text-primary">訂購人資訊</h3>
      </div> -->
      <div class="col-12 mb-4">
          <ul
            class="list-unstyled mb-0 ms-md-auto d-flex flex-wrap align-items-center justify-content-start justify-content-md-center w-100 mt-md-0 mt-4"
          >
            <li class="me-md-6 me-5 position-relative custom-step-line">
              <i
                class="fas fa-dot-circle d-md-inline d-block text-center me-2 text-secondary"
              ></i>
              <span class="text-nowrap text-secondary">商品確認</span>
            </li>
            <li class="me-md-6 me-5 position-relative custom-step-line">
              <i
                class="fas fa-dot-circle d-md-inline d-block text-center me-2 text-secondary"
              ></i>
              <span class="text-nowrap text-secondary fw-bold">訂購人填寫</span>
            </li>
            <li>
              <i class="far fa-circle d-md-inline d-block text-center me-2"></i>
              <span class="text-nowrap">訂單確認</span>
            </li>
          </ul>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <div class="col-md-6">
        <div class="border p-4 mb-4 scrollable-div-500">
          <div class="d-flex mt-2" v-for="cart in carts.carts" :key="cart.id">
            <img
              :src="cart.product.imageUrl"
              :alt="cart.product.title"
              class="me-2"
              style="width: 48px; height: 48px; object-fit: cover"
            />
            <div class="w-100">
              <div class="d-flex justify-content-between">
                <p class="mb-0 fw-bold">{{cart.product.title}}</p>
                <p class="mb-0">NT${{formatNumber(cart.final_total)}}</p>
              </div>
              <p class="mb-0 fw-bold">x{{ cart.qty }}</p>
            </div>
          </div>
          <table class="table mt-4 border-top border-bottom text-muted">
            <tbody>
              <tr>
                <th scope="row" class="border-0 px-0 pt-4">
                  小計
                </th>
                <td class="text-end border-0 px-0 pt-4">NT${{formatNumber(carts.total)}}</td>
              </tr>
              <!-- <tr>
                  <th
                    scope="row"
                    class="border-0 px-0 pt-0 pb-4"
                  >
                    優惠券折扣
                  </th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">－NT${{carts.total}}</td>
                </tr> -->
              <tr>
                <th
                  scope="row"
                  class="border-0 px-0 pt-0 pb-4 fw-normal"
                >
                支付方式
                </th>
                <td class="text-end border-0 px-0 pt-0 pb-4">本店目前只提供自取或貨到付款
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">總金額</p>
            <p class="mb-0 h4 fw-bold">NT${{formatNumber(carts.total)}}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <v-form ref="form" v-slot="{ errors }" @submit="addOrder">
          <div class="mb-2">
            <label for="name" class="form-label text-info mb-0">收貨人姓名</label>
            <v-field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"></v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3 mt-4">
            <label for="email" class="form-label text-muted mb-0">信箱</label>
            <v-field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              aria-describedby="emailHelp"
              v-model="form.user.email"></v-field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3 mt-4">
            <label for="address" class="form-label">收件人地址</label>
            <v-field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"></v-field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-2">
            <label for="phone" class="form-label text-muted mb-0">聯絡手機</label>
            <v-field id="phone" name="手機"
            type="tel"
            class="form-control"
              :class="{ 'is-invalid': errors['手機'] }"
              placeholder="請輸入手機，開頭須為09"
              :rules="isPhone"
              v-model="form.user.tel"></v-field>
            <error-message name="手機" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-2">
            <label for="message" class="text-muted mb-0">備註</label>
            <textarea id="message" class="form-control" cols="30" rows="5" v-model="form.message" placeholder="甜點相關備註或有甚麼悄悄話想跟我們說"></textarea>
          </div>
        <!-- </v-form> -->
        <label for="text" class="form-label text-muted mb-0">取貨方式</label>
        <div class="accordion" id="accordionExample">
          <div class="card rounded-0">
            <div
              class="card-header bg-light border-0 py-3 d-flex justify-content-between align-items-center"
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            <div>
              <v-field
                type="radio"
                id="selfTake"
                name="takeType"
                class="me-2"
                value="selfTake"
                v-model="takeType"
                rules="takeTypeSelected|required"
              ></v-field>
              <label for="selfTake" class="mb-0 position-relative custom-checkout-label"
                >自取</label
              >
            </div>
            <i class="fas fa-chevron-down"></i>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body bg-light ps-5 py-4">
                <div class="mb-2">
                  <input
                    type="radio"
                    id="selfTakeNoon"
                    name="selfTakeTime"
                    class="me-2"
                    v-model="takeTime"
                    value="12：00前"
                    :disabled="takeType !== 'selfTake'"
                  />
                  <label for="selfTakeNoon" class="text-dark mb-0"
                    >12：00前</label
                  >
                </div>
                <div class="mb-0">
                  <input
                    type="radio"
                    id="selfTakeNight"
                    name="selfTakeTime"
                    class="me-2"
                    v-model="takeTime"
                    value="20：00店面關店前"
                    :disabled="takeType !== 'selfTake'"
                  />
                  <label for="selfTakeNight" class="text-dark mb-0"
                    >20：00店面關店前</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="card rounded-0">
            <div
              class="card-header bg-light border-0 py-3 collapsed d-flex justify-content-between align-items-center"
              id="headingTwo"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
            <div>
              <v-field
                type="radio"
                id="shipTake"
                name="takeType"
                class="me-2"
                value="shipTake"
                v-model="takeType"
                rules="takeTypeSelected|required"
              ></v-field>
              <label for="shipTake" class="mb-0 position-relative custom-checkout-label"
                >宅配</label
              >
            </div>
            <i class="fas fa-chevron-down"></i>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body bg-light ps-5 py-4">
                <div class="mb-2">
                  <input
                    type="radio"
                    id="shipTakeNoon"
                    name="shipTakeTime"
                    class="me-2"
                    v-model="takeTime"
                    value="中午12：00前"
                    :disabled="takeType !== 'shipTake'"
                  />
                  <label for="shipTakeNoon" class="text-dark mb-0"
                    >中午12：00前</label
                  >
                </div>
                <div class="mb-0">
                  <input
                    type="radio"
                    id="shipTakeNight"
                    name="shipTakeTime"
                    class="me-2"
                    v-model="takeTime"
                    value="中午12：00後"
                    :disabled="takeType !== 'shipTake'"
                  />
                  <label for="shipTakeNight" class="text-dark mb-0"
                    >中午12：00後</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="card rounded-0">
            <div
              class="card-header bg-light d-flex justify-content-between align-items-center border-0 py-3 collapsed"
              id="headingThree"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              <label class="mb-0 position-relative custom-checkout-label fw-bold me-1"
                >點開詳閱以下訊息，確認無誤後請打勾</label>
              <i class="fas fa-chevron-down"></i>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div class="card-body bg-light ps-3 py-2">
                <h4>訂購須知</h4>
                <div class="scrollable-div p-3">
                  <div>
                    <h6>商品訂購與出貨</h6>
                    <p>訂單確認：訂單一經確認，將於1-2個工作天內處理並出貨。</p>
                    <p>出貨時間：正常情況下，商品將於訂單確認後的3-5個工作天內送達。</p>
                    <p>配送範圍：目前僅限台灣本島地區，離島或偏遠地區可能需額外運費，詳情請見運費說明。</p>
                  </div>
                  <div>
                      <h6>退換貨政策</h6>
                      <p>七天猶豫期：依據消保法規定，除特殊商品外，消費者享有商品到貨後七天猶豫期權益，期間內可申請退換貨。</p>
                      <p>食品類商品：由於衛生考量，食品類商品一經開封，除非產品本身存在瑕疵或送達時已過期，否則不予退換。</p>
                      <p>瑕疵品處理：若商品在運送過程中受損或有其他非人為因素導致的瑕疵，請於收貨後七天內聯繫我們，我們將提供退換服務。</p>
                  </div>
                  <div>
                      <h6>無法辦理退換貨之商品</h6>
                      <ul>
                          <li>商品一經使用或開封。</li>
                          <li>商品銷售頁面已明確說明不接受退換的情況。</li>
                          <li>未依照正確流程或未事先聯繫即自行寄回的商品。</li>
                      </ul>
                  </div>
                  <div>
                      <h6>退款流程</h6>
                      <p>退款時間：確認收到退貨商品後，我們將在14個工作天內完成退款，退款將通過原付款方式退回。</p>
                  </div>
                  <div>
                      <h6>客戶服務</h6>
                      <p>如有任何訂購、商品或服務上的問題，歡迎隨時聯繫我們的客戶服務中心，我們將竭誠為您服務。</p>
                      <p>客服時間為週一至週日，上午10:00至晚上8:00。</p>
                      <p>客服專線：02－1234－5678</p>
                  </div>
                  <div>
                      <h6>特別聲明</h6>
                      <p>本公司保留隨時修改訂購須知的權利，任何修改將於本網站公布，恕不另行通知。</p>
                      <p>若消費者因不當行為對本公司或本網站服務造成損害，本公司有權取消其購買資格，並追究法律責任。</p>
                      <p>再次感謝您的支持與理解，我們期待為您提供優質的產品與服務。</p>
                  </div>
                </div>
                <div class="my-2">
                    <v-field
                    id="agreeToTerms"
                      type="checkbox"
                      name="請閱讀後確認打勾"
                      :value="true"
                      :class="{ 'is-invalid': errors['請閱讀後確認打勾'] }"
                      rules="agreeToTerms|required"
                    ></v-field>
                    <label for="agreeToTerms"  class="text-muted mb-0 ms-3"
                      >我已閱讀並同意訂購須知！</label>
                    <error-message message name="請閱讀後確認打勾" class="invalid-feedback d-block"></error-message>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100"
        >
          <router-link
            class="text-dark mt-md-0 mt-3 text-decoration-none"
            to="/cart"
            ><i class="fas fa-chevron-left me-2"></i>返回購物車</router-link
          >
          <button type="submit" class="text-light btn btn-secondary py-2 px-5">確認結帳</button>
        </div>
      </v-form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapActions, mapState } from 'pinia'
import orderStore from '../../stores/orderStore.js'
import { useCartStore } from '../../stores/cartStore.js'
import { formatNumberMixin } from '../../mixins/formatNumberMixin.js'
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      originalMessage: '',
      pickupMessage: '', // 存取貨方式和時間的訊息
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      takeType: 'selfTake',
      takeTime: ''
    }
  },
  watch: {
    // 監聽原始訊息的變化，每當原始訊息更新時，重新組合訊息
    // originalMessage (newVal,oldVal) {
    //   if (newVal !== oldVal) {
    //     this.combineMessage()
    //   }
    // },
    // 監聽取貨方式和時間的變化，每當它們更新時，重新組合訊息
    takeType (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.combineMessage()
      }
    },
    takeTime (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.combineMessage()
      }
    },
    'form.message' (newVal) {
      // 檢查當前的留言是否包含由選擇取貨方式和時間產生的信息
      if (!this.pickupMessage || newVal.endsWith(this.pickupMessage)) {
        // 如果不包含，或者留言以取貨信息結尾（意味著用戶僅修改了原始留言部分）
        // 更新原始留言為當前的 form.message，並從中移除取貨信息
        this.originalMessage = newVal.replace(this.pickupMessage, '').trim()
        if (this.originalMessage && this.pickupMessage) {
          this.originalMessage = this.originalMessage.slice(0, -1) // 移除可能的分隔符
        }
      }
    }
  },
  mixins: [formatNumberMixin],
  computed: {
    ...mapState(useCartStore, ['carts'])
  },
  methods: {
    ...mapActions(useCartStore, ['getCart']),
    ...mapActions(orderStore, ['isPhone']),
    combineMessage () {
      // 定義新的取貨資訊
      let newPickupInfo = ''
      if (this.takeType || this.takeTime) {
        newPickupInfo = `取貨方式：${this.takeType === 'selfTake' ? '自取' : '宅配'}，時間：${this.takeTime}`
      }
      // 如果原始留言已經包含了舊的取貨資訊，首先移除它
      if (this.originalMessage.endsWith(this.pickupMessage) && this.pickupMessage) {
        this.originalMessage = this.originalMessage.slice(0, this.originalMessage.lastIndexOf(this.pickupMessage)).trim()
        // 移除可能的分隔符
        if (this.originalMessage.endsWith('。')) {
          this.originalMessage = this.originalMessage.slice(0, -1)
        }
      }
      // 組合原始留言與新的取貨資訊
      this.form.message = `${this.originalMessage}${this.originalMessage && newPickupInfo ? '。' : ''}${newPickupInfo}`
      // 更新 pickupMessage 為新的取貨資訊，供下次使用
      this.pickupMessage = newPickupInfo
    },
    async addOrder () {
      try {
        const addOrderUrl = `${VITE_API}/api/${VITE_PATH}/order`
        const order = this.form
        const response = await axios.post(addOrderUrl, { data: order })
        alert(response.data.message)
        this.$refs.form.resetForm()
        this.getCart()
        this.$router.push('/checkOrder')
      } catch (error) {
        alert(error.response ? error.response.data.message : '提交訂單時發生錯誤')
        console.error(error) // 打印錯誤以便於調試
      }
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
<style scoped>
</style>
