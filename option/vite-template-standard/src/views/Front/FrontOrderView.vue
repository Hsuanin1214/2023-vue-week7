<template>
  <div class="container px-5">
    <h2 class="my-4 text-primary border-primary-left ps-3">訂單查詢</h2>
    <div class="row justify-content-center pb-5">
      <h3 class="fw-bold mb-4 pt-3 h5">訂單相關資訊</h3>
      <div class="col-12">
        <div class="accordion" id="accordionExample">
          <div class="card rounded-0" v-for="order in orders" :key="order.id">
            <div
            class="card-header bg-white border-0 py-3"
            :id="'heading' + order.id"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + order.id"
            aria-expanded="true"
            :aria-controls="'collapse' + order.id"
            >
              <p class="mb-0 position-relative custom-checkout-label text-info fw-bold">
                訂單編號 : {{ order.id }}
              </p>
            </div>
            <div
            :id="'collapse' + order.id"
            class="collapse"
            :aria-labelledby="'heading' + order.id"
            data-bs-parent="#accordionExample"
            >
              <div class="card-body bg-light ps-3 py-4">
                <div class="mb-2" style="margin: 0 auto; max-width: 900px;">
                <div class="woocommerce-order">
                    <p class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received">{{order.user.name}}您好，此為你這次的訂單明細</p>
                    <ul class="woocommerce-order-overview woocommerce-thankyou-order-details order_details">
                      <li class="woocommerce-order-overview__order order">
                        訂單編號 : <strong>{{ order.id }}</strong>
                      </li>
                      <li class="woocommerce-order-overview__date date">
                        訂購時間 :<strong>{{formatDate(order.create_at)}}</strong>
                      </li>
                      <li class="woocommerce-order-overview__total total">
                        訂單金額 :<strong><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">NT$</span>{{order.total}}</span></strong>
                      </li>
                      <li class="woocommerce-order-overview__payment-method method">
                        取貨時間及方式: <strong>{{order.message}}</strong>
                      </li>
                    </ul>
                    <section class="woocommerce-order-details">
                      <h5 class="woocommerce-order-details__title h5 text-info">訂購明細</h5>
                      <div class="d-flex d-flex justify-content-center justify-content-md-start">
                        <table class="woocommerce-table woocommerce-table--order-details shop_table order_details">
                          <thead class="p-3">
                            <tr>
                              <th class="woocommerce-table__product-name product-name px-2 py-1">訂購商品</th>
                              <th class="woocommerce-table__product-table product-total px-2 py-1">金額</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="woocommerce-table__line-item order_item" v-for="product in order.products" :key="product.id">
                              <td class="woocommerce-table__product-name product-name px-2 py-1">
                                <router-link :to="`product/${product.product.id}`">{{product.product.title}}</router-link> <strong class="product-quantity">×
                                  {{product.qty}}</strong> </td>
                              <td class="woocommerce-table__product-total product-total px-2 py-1">
                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">NT$</span>{{product.final_total}}</span>
                              </td>
                            </tr>
                            <!-- <tr class="woocommerce-table__line-item order_item">
                              <td class="woocommerce-table__product-name product-name">
                                <a href="https://demo.woothemes.com/storefront/product/scubapro-10-litre-232-bar-cylinder-single-valve/">Scubapro
                                  10 litre 232 bar cylinder – single valve</a> <strong class="product-quantity">× 1</strong> </td>
                              <td class="woocommerce-table__product-total product-total">
                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">£</span>229.00</span>
                              </td>
                            </tr> -->
                          </tbody>
                          <tfoot>
                            <tr>
                              <th scope="row" class="px-2 py-1">總金額：</th>
                              <td><span class="woocommerce-Price-amount amount px-2 py-1"><span class="woocommerce-Price-currencySymbol">NT$</span>{{order.total}}</span>
                              </td>
                            </tr>
                            <tr class="mt-3">
                              <th scope="row" class="px-2 py-1">訊息留言：</th>
                              <td><span class="woocommerce-Price-amount amount px-2 py-1">{{order.message}}</span>
                              </td>
                            </tr>
                            <!-- <tr>
                              <th scope="row">Payment method:</th>
                              <td>Check payments</td>
                            </tr> -->
                          </tfoot>
                        </table>
                      </div>
                      <section class="woocommerce-customer-details">
                        <h5 class="h6 mt-3 text-info">訂購人明細</h5>
                        <div class="d-flex justify-content-center justify-content-md-start">
                          <table class="woocommerce-table woocommerce-table--customer-details shop_table customer_details d-flex flex-wrap">
                            <tbody>
                              <tr class="w-100">
                                <th class="px-2 py-1">姓名:</th>
                                <td>{{ order.user.name }}</td>
                              </tr>
                              <tr class="w-100">
                                <th class="px-2 py-1">信箱:</th>
                                <td>{{ order.user.email }}</td>
                              </tr>
                              <tr class="w-100">
                                <th class="px-2 py-1">電話:</th>
                                <td>{{ order.user.tel }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <h5 class="woocommerce-column__title h6 mt-3 text-info">送貨地址 : </h5>
                        <p>
                          {{order.user.address}}
                        </p>
                        <h5 class="woocommerce-column__title h6 mt-3 text-info">是否付款 : </h5>
                        <p>
                          {{order.is_paid? '已付款' : '未付款'}}
                          </p>
                      </section>
                    </section>
                  </div> <!-- woocommerce-order -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { dateMixin } from '../../mixins/dateMixin.js'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      orders: {}
    }
  },
  mixins: [dateMixin],
  methods: {
    async getOrders () {
      try {
        const orderUrl = `${VITE_API}/api/${VITE_PATH}/orders`
        const response = await axios.get(orderUrl)
        console.log(response.data.orders)
        this.orders = response.data.orders
      } catch (error) {
        alert(error.response ? error.response.data.message : '訂單查詢時發生錯誤')
        console.error(error) // 打印錯誤以便於調試
      }
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
<style scoped>
/* .woocommerce-order-overview {
  background: #f8f8f8;
  list-style: none;
  margin: 2rem 0;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
}
@media (max-width: 768px) {
  .woocommerce-order-overview {
    display: block;
  }
}
.woocommerce-order-overview:before,
.woocommerce-order-overview:after {
  background: -webkit-linear-gradient(transparent 0, transparent 0),
      -webkit-linear-gradient(135deg, #f8f8f8 33.33%, transparent 33.33%),
      -webkit-linear-gradient(45deg, #f8f8f8 33.33%, transparent 33.33%);
  content: "";
  display: block;
  position: absolute;
  top: -16px;
  left: 0;
  width: 100%;
  height: 16px;
  background-size: 0 100%, 16px 16px, 16px 16px;
}
.woocommerce-order-overview:after {
  top: auto;
  bottom: -16px;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.woocommerce-order-overview li {
  padding: 1em 1.618em;
  font-size: 0.8em;
  width: 25%;
  text-transform: uppercase;
  border-right: 1px dotted #e3e3e3;
  text-align: center;
}
@media (max-width: 768px) {
  .woocommerce-order-overview li {
    width: auto;
    text-align: left;
    padding: 10px 0;
    margin: 0 15px;
    border-right: none;
    border-bottom: 1px dotted #e3e3e3;
  }
  .woocommerce-order-overview li:last-child {
    border-bottom: none;
  }
}
.woocommerce-order-overview li:last-child {
  border-right: none;
}

.woocommerce-table--customer-details {
  border: none;
}
.woocommerce-table--customer-details tbody th {
  background: #f8f8f8;
  padding-left: 25px;
}
@media (max-width: 768px) {
  .woocommerce-table--customer-details tbody th {
    width: 100%;
    display: block;
    text-align: left;
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
.woocommerce-table--customer-details tbody td {
  background: #fdfdfd;
  padding-left: 25px;
  text-align: left !important;
}

/* TABLE ORDER DETAIL */
/* .shop_table.woocommerce-table--order-details {
  box-shadow: 0 0 5px rgba(65, 35, 7, 0.5);
}
.shop_table.woocommerce-table--order-details thead {
  background: #77574a;
  color: #fff;
}
.shop_table.woocommerce-table--order-details thead th {
  border-bottom: none;
  font-weight: normal;
  font-size: .9rem;
}
.shop_table.woocommerce-table--order-details thead th.product-name {
  text-align: left;
}
.shop_table.woocommerce-table--order-details tbody td {
  border-color: #f0f2f7;
} */
</style>
