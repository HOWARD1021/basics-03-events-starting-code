const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:"",
      enterName:"",
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      this.counter =this.counter -1 ;
    },
    setName(event,second){
      this.name = event.target.value + ' ' +second
    },
    setEnterName(event) {
      this.enterName  = event.target.value
    },
    submitForm(event){
      // event.preventDefault();
      alert('submit')
    }
  },
});

app.mount("#events");
