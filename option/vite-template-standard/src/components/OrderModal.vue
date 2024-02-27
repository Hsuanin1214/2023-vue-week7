// components/OrderModal.vue
<template>
  <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body"></div>
          ...
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="$emit('update-paid', tempOrder)">
            修改付款狀態
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

// components/OrderModal.vue
<script>
import modalMixin from '@/mixins/modalMixin'

export default {
  props: {
    order: {
      type: Object,
      default () {
        return {} // 每次傳都會生成新物件，避免不同組件的汙染
      }
    }
  },
  data () {
    return {
      modal: '',
      tempOrder: {},
      isPaid: false
    }
  },
  emits: ['update-paid'],
  mixins: [modalMixin], // 可以使用modalMixin的關閉功能
  watch: {
    order () {
      this.tempOrder = this.order // 重新賦值避免動到父層的props
    }
  }
}
</script>
