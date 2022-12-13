const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      // fullName:"",
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

  },
  computed : {
    fullName () {
      console.log('running again');
      if(this.name ==="" || this.lastName ==="") {
        return ""
      }else {
        return this.name + " " + this.lastName
      }
    }
  },
  watch :{
    counter (value) {
      if(value >10 ){
        // const that = this
        setTimeout( function() {
          this.counter = 0
        }, 2000)
      }
    }
  }
  // watch: {
  //   name(value){
  //     if(value === ""){
  //       this.fullName= "" ;          
  //     } else {
  //       this.fullName = value +" " + this.lastName ;
  //     }
  //   },
  //   lastName(value) {
  //     if( value === ""){
  //       this.fullName = "";          
  //     }else {
  //       this.fullName = this.name  + " "+ value;
  //     }
  //   }
  // }

});

app.mount("#events");
