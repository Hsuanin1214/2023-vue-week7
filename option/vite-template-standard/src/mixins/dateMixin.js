// dateMixin.js
export const dateMixin = {
  methods: {
    formatDate (timestamp) {
      const milliseconds = timestamp * 1000
      const date = new Date(milliseconds)
      return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(
        -2
      )}-${('0' + date.getDate()).slice(-2)}`
    },
    parseDate (dateString) {
      return new Date(dateString).getTime() / 1000
    }
  }
}
