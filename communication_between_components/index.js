const childComponent = {
  template: '<p>【子コンポーネント】 年齢 : {{age}}歳</p>',
  props: ['age']
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
  template: '<p>【親コンポーネント】 名前 : {{name}}, 学籍番号 : {{number}}, 年齢 : {{age}}歳<child-component v-bind:age="age"></child-component></p>'
};

const introduction = new Vue({
  el: '#introduction',
  components: {
    'parent-component': parentComponent
  }
});