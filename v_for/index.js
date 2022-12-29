const vFor = new Vue({
  el: '#v-for',
  data: {
    team: [
      { name: 'A氏', id: 1 },
      { name: 'B氏', id: 2 },
      { name: 'C氏', id: 3 }
    ]
  },
  methods: {
    addMember: function(){
      // メンバーのidを配列で取得
      const ids = this.team.map(function(member){
        return member.id;
      });
      // 配列idsの要素を2つずつ比較して大きい方を残す
      let maxId = ids.reduce(function(a, b){
        return Math.max(a, b);
      });
      // メンバーの要素を追加
      this.team.push(
        { name: '新規メンバー', id: ++maxId }
      );
    }
  }
})