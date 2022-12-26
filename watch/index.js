const watch = new Vue({
  el: '#watch',
  data: {
    egg_status: '半熟',
    message: '...'
  },
  computed: {
    checkEgg: function() {
      if(this.egg_status == '完熟'){
        return '焼けました！';
      } else {
        return 'まだまだ'
      }
    }
  },
  watch: {
    egg_status: function() {
      const vm = this;
      setTimeout(function(){
        vm.message = '変わったよ！'
      },3000);
    }
  }
})