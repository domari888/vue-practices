const eventHandlingButton = new Vue({
  el: '#event-handling-button',
  data: {
    count: 0
  },
  methods: {
    addCount: function(){
      this.count++;
    }
  }
})
