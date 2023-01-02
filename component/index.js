// グローバル登録
Vue.component('my-name', {
  template: '<p>私の名前は太郎です</p>'
});

const introduction = new Vue({
  el: '#introduction'
});

// ローカル登録
const buttonCounter = {
  data: function(){
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">カウンター : {{count}}</button>'
}

const counter = new Vue({
  el: '#counter',
  components: {
    'button-counter' : buttonCounter
  }
});