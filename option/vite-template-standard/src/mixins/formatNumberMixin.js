// formatNumberMixin.js
export const formatNumberMixin = {
  methods: {
    formatNumber (value) {
      if (!value) return '0'
      return value.toLocaleString()
    }
  }
}
