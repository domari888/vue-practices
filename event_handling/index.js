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

const eventHandlingInput = new Vue({
  el: '#event-handling-input',
  data: {
    team: [
      { name: 'A氏', id: 1 },
      { name: 'B氏', id: 2 },
      { name: 'C氏', id: 3 }
    ]
  },
  methods: {
    addMember: function(){
      const memberIds = this.team.map(function(member){
        return member.id;
      });
      let maxId = memberIds.reduce(function(a, b){
        return Math.max(a, b);
      });
      const name = this.$refs.name.value
      this.team.push(
        { name: name, id: ++maxId }
      );
    }
  }
})