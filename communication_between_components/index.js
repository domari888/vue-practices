const childComponent = {
  template: '<p>【子コンポーネント】 年齢 : {{age}}歳\
  <button v-on:click="emitAgeEvent">年齢 + 1</button></p>',
  props: ['age'],
  methods: {
    emitAgeEvent: function(){
      // 第2引数に親コンポーネントへ渡す値を設定
      this.$emit('change-age', this.age)
    }
  }
};

const parentComponent = {
  data: function(){
    return {
      name: '太郎',
      number: 1,
      age: 20
    }
  },
  components: {
    'child-component' : childComponent
  },
  template: '<p>【親コンポーネント】 名前 : {{name}}, 学籍番号 : {{number}}, 年齢 : {{age}}歳<child-component v-bind:age="age" v-on:change-age="getAge"></child-component></p>',
  methods: {
    // 引数には子コンポーネントから渡された値が入る
    getAge: function(childAge){
      this.age = ++childAge;
    }
  }
};

const introduction = new Vue({
  el: '#introduction',
  components: {
    'parent-component': parentComponent
  }
});