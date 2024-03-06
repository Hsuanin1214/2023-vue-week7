<template>
  <div>
    <div class="mb-3">
      <h2>優惠券管理</h2>
      <span>目前共有<span class="fs-4 text-success fw-bold mx-2">{{coupons.length}}</span>張優惠券</span>
    </div>
    <div>
      <button type="button" class="btn btn-outline-primary mb-3" @click="openCoupon(coupon)">新增優惠券</button>
    </div>
    <div class="row">
      <div class="list-item-container col-5">
        <ul class="list-group" v-for="coupon in coupons" :key="coupon.id + 1">
          <li class="list-group-item me-2" @click="openCoupon(coupon)">
            <span class="badge text-bg-secondary me-2">{{coupon.is_enabled == 1 ? '開啟' : '關閉'}}</span>
            {{coupon.title}}
            <span class="arrow">&rsaquo;</span>
          </li>
        </ul>
        <!-- 分頁元件 -->
        <pagination-component :pages="page" :get-items="getCoupons" class="mt-2"></pagination-component>
      </div>
      <loading-component :isLoading="isLoading" v-if="isLoading"></loading-component>
      <v-form class="col-7" v-slot="{meta,errors}" @submit="confirmUpdate" ref="form" v-else>
        <!-- <div ref='couponModal' class="col-7"> -->
          <div v-if="isNoClick" class="d-flex justify-content-center align-items-center">目前未選擇任何優惠券</div>
          <div v-else>
            <div>
              <div class="mb-3 form-switch">
                <label class="form-check-label me-3" for="test">是否開啟</label>
                <input class="form-check-input ms-5" type="checkbox"
                  role="switch"
                  id="test"
                  :checked="tempCoupon.is_enabled"
                  @change="switchStatus($event, tempCoupon)"
                >
              </div>
              <div class="mb-3">
                <label for="couponName" class="form-label is-required">優惠券名稱</label>
                <v-field
                  id="couponName"
                  name="優惠券名稱"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['優惠券名稱'] }"
                  placeholder="請輸入優惠券名稱"
                  rules="required"
                  v-model="tempCoupon.title"
                ></v-field>
                <error-message name="優惠券名稱" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-3">
                <label for="couponNum" class="form-label is-required">優惠碼</label>
                <v-field
                  id="couponNum"
                  name="優惠碼"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['優惠碼'] }"
                  placeholder="請輸入優惠碼"
                  rules="required"
                  v-model="tempCoupon.code"
                ></v-field>
                <error-message name="優惠碼" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-3">
                <label for="couponDiscount" class="col-3">折扣</label>
                <v-field
                  id="couponDiscount"
                  name="折扣"
                  type="number"
                  class="form-control"
                  :class="{ 'is-invalid': errors['折扣'] }"
                  placeholder="請輸入折扣"
                  rules="required|integer|min_value:1|max_value:100"
                  v-model="tempCoupon.percent"
                ></v-field>
                <error-message name="折扣" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-3">
                <label for="couponName" class="col-3">有效日期</label>
                <input id="due_date" type="date" class="form-control" v-model="due_date">
              </div>
            </div>
            <div class="d-flex">
              <button type="submit" class="btn btn-outline-primary me-2" :disabled="!meta.valid">確認</button>
              <button type="button" class="btn btn-outline-primary" @click="delProduct( tempCoupon.id)">刪除</button>
            </div>
          </div>
        <!-- </div> -->
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import couponStore from '../../stores/couponStore.js'
import PaginationComponent from '../../components/PaginationComponent.vue'
import LoadingComponent from '../../components/LoadingComponent.vue'
export default {
  components: {
    PaginationComponent,
    LoadingComponent
  },
  data () {
    return {
      tempCoupon: {},
      status: '',
      isNoClick: true
    }
  },
  computed: {
    ...mapState(couponStore, ['coupons', 'page', 'isLoading']),
    due_date: {
      get () {
        const date = new Date(this.tempCoupon.due_date * 1000)
        const year = date.getFullYear()
        const month = ('0' + (date.getMonth() + 1)).slice(-2)
        const day = ('0' + date.getDate()).slice(-2)
        return `${year}-${month}-${day}`
      },
      set (date) {
        this.tempCoupon.due_date = new Date(date).getTime() / 1000
      }
    }
  },
  methods: {
    ...mapActions(couponStore, ['getCoupons', 'switchStatus', 'updateCoupons', 'delProduct']),
    openCoupon (item) {
      this.isNoClick = false
      this.tempCoupon = item
        ? { ...item }
        : {
            is_enabled: 0
          }
      this.status = item
        ? 'edit'
        : 'new'
    },
    confirmUpdate () {
      if (this.tempCoupon.id) {
        console.log('edit')
        this.updateCoupons('edit', this.tempCoupon)
      } else {
        console.log('new')
        this.updateCoupons('new', this.tempCoupon)
      }
    }
  },
  mounted () {
    this.getCoupons()
  }
}
</script>
