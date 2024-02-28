// 管理modal的開關功能，可以直接引用
import BsModal from 'bootstrap/js/dist/modal'

export default {
  methods: {
    openModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new BsModal(this.$refs.modal)
  }
}
