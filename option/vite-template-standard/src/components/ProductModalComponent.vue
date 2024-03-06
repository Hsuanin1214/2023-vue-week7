<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <v-form v-slot="{meta,errors}" @submit="confirmUpdate" ref="form">
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-2">
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control mb-2"
                      placeholder="請輸入圖片連結"
                      v-model="editProduct.imageUrl"
                    />
                  </div>
                  <img class="img-fluid" :src="editProduct.imageUrl" alt="" />
                </div>
                <h3 class="mb-3">多圖新增</h3>
                <!-- 檢查是否為陣列 -->
                <div v-if="Array.isArray(editProduct.imagesUrl)">
                  <div
                    class="mb-1"
                    v-for="(img, key) in editProduct.imagesUrl"
                    :key="key + 123"
                  >
                    <div class="mb-3">
                      <input
                        v-model="editProduct.imagesUrl[key]"
                        type="text"
                        class="form-control"
                        placeholder="請輸入圖片連結"
                      />
                    </div>
                    <img class="img-fluid" :src="img" alt="" />
                  </div>
                </div>
                <button
                  v-if="
                    editProduct.imagesUrl.length == 0 ||
                    editProduct.imagesUrl[editProduct.imagesUrl.length - 1]
                  "
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="editProduct.imagesUrl.push('')"
                >
                  <!-- 最後一個有值的情況下 -->
                  新增
                </button>
                <!-- <div v-else> -->
                <div v-else>
                  <button
                    class="btn btn-outline-success btn-sm d-block w-100"
                    @click="editProduct.imagesUrl.pop()"
                  >
                    刪除
                  </button>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">甜點名稱</label>
                  <v-field
                    id="title"
                    name="甜點名稱"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['甜點名稱'] }"
                    placeholder="請輸入甜點名稱"
                    v-model="editProduct.title"
                    rules="required"
                  ></v-field>
                  <error-message name="甜點名稱" class="invalid-feedback"></error-message>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">甜點類型</label>
                    <v-field
                      id="category"
                      name="甜點類型"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['甜點類型'] }"
                      placeholder="請輸入甜點類型"
                      v-model="editProduct.category"
                      rules="required"
                    ></v-field>
                    <error-message name="甜點類型" class="invalid-feedback"></error-message>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">甜點單位</label>
                    <v-field
                      id="unit"
                      name="甜點單位"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['甜點單位'] }"
                      placeholder="請輸入甜點單位"
                      v-model="editProduct.unit"
                      rules="required"
                      ></v-field>
                      <error-message name="甜點單位" class="invalid-feedback"></error-message>
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">甜點原價</label>
                    <v-field
                      id="origin_price"
                      name="甜點原價"
                      type="number"
                      class="form-control"
                      :class="{ 'is-invalid': errors['甜點原價'] }"
                      placeholder="請輸入甜點原價"
                      v-model="editProduct.origin_price"
                      rules="required|integer|min_value:1"
                      ></v-field>
                      <error-message name="甜點原價,必須是大於零的整數" class="invalid-feedback"></error-message>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">甜點售價</label>
                    <v-field
                      id="price"
                      name="甜點售價"
                      type="number"
                      class="form-control"
                      :class="{ 'is-invalid': errors['甜點售價'] }"
                      placeholder="請輸入甜點售價，必須是大於零的整數"
                      v-model="editProduct.price"
                      rules="required|integer|min_value:1"
                      ></v-field>
                      <error-message name="甜點售價" class="invalid-feedback"></error-message>
                  </div>
                </div>
                <hr />

                <div class="mb-3">
                  <label for="description" class="form-label">甜點介紹</label>
                  <v-field
                    id="description"
                    rows="10"
                    name="甜點介紹"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['甜點介紹'] }"
                    placeholder="請輸入甜點介紹"
                    v-model="editProduct.description"
                    rules="required"
                    as="textarea"
                  >
                  </v-field>
                  <error-message name="甜點介紹" class="invalid-feedback"></error-message>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">原料介紹</label>
                  <v-field
                    id="description"
                    rows="10"
                    name="原料介紹"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['原料介紹'] }"
                    placeholder="請輸入原料介紹"
                    v-model="editProduct.content"
                    rules="required"
                    as="textarea"
                  >
                  </v-field>
                  <error-message name="原料介紹" class="invalid-feedback"></error-message>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      v-model="editProduct.is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled"
                      >是否啟用</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="!meta.valid"
            >
              確認
            </button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>
<script>
import BsModal from 'bootstrap/js/dist/modal'

// 會有refs bootstrap 問題]
export default {
  props: ['tempProduct', 'updateProduct', 'confirmUpdate', 'isNew'],
  data () {
    return {
      productModal: null,
      editProduct: {
        imagesUrl: []
      }
    }
  },
  watch: {
    tempProduct: {
      handler (newVal) {
        if (newVal && !newVal.imagesUrl) {
          newVal.imagesUrl = [] // 確保imagesUrl是一個陣列
        }
        this.editProduct = newVal
      },
      immediate: true // 如果希望在監視開始時立即執行一次handler，則設置immediate為true
    }
  },
  methods: {
    openModal () {
      this.productModal.show()
    },
    closeModal () {
      this.productModal.hide()
    }
  },
  mounted () {
    this.productModal = new BsModal(this.$refs.productModal)
  }
}
</script>
