// 管理modal的開關功能
import Modal from 'bootstrap/js/dist/modal'

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
    this.modal = new Modal(this.$ref.modal)
  }
}
