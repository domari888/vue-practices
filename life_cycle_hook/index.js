const lifeCycleHook = new Vue({
  el: '#life-cycle-hook',
  data: {
    count: 0
  },
  // インスタンス初期化前
  beforeCreate: function(){
    console.log('beforeCreate : this$data = ' + this.$data);
  },
  // インスタンス初期化後
  created: function(){
    console.log('created : this.$data = ' + this.$data);
  },
  // HTML に反映される前(マウント前)
  beforeMount: function(){
    console.log('beforeMount');
    console.log(this.$el);
  },
  // HTML に反映される後(マウント後)
  mounted: function(){
    console.log('mounted');
    console.log(this.$el);
  },
  // データ更新後、DOM が適応される前
  beforeUpdate: function(){
    alert('beforeUpdate count = ' + this.count);
    console.log('beforeUpdate count = ' + this.count);
  },
  // データ更新後、仮想 DOM が描画された後
  updated: function(){
    console.log('updated count = ' + this.count);
  },
  // インスタンスが破棄される前
  beforeDestroy: function(){
    console.log('beforeDestroy');
  },
  destroyed: function(){
    console.log('destroyed');
  },
  // インスタンスが破棄された後
  methods: {
    addCount: function(){
      this.count++;
    },
    callDelete: function(){
      this.$destroy();
    }
  }
})