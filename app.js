const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName:"",
    };
  },
  computed:{
   
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value ;
      // this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    reSet() {
      this.name = "";
    },
    outPutFullName(){
      console.log('render again');
      if(this.name === '') {
        return ''         
      }else {
        return this.name + " " + "howard"
      }
    }
  },
});

app.mount("#events");
