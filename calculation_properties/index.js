const calculationProperties = new Vue({
  el: '#calculation-properties',
  data: {
    customer_list: ['いぬ', 'きじ', 'さる'],
    item: {
      name: 'きびだんご',
      price: 100
    },
    amount: 2
  },
  computed: {
    sumPrice: function() {
      return this.item.price * this.amount
    }
  }
})