Vue.createApp({
  data() {
    return {
      name: "",
      enterName: "",
      enterNameUp: "",
    };
  },
  methods: {
    showAlert() {
      alert("submit");
    },
    setEnterName(event) {
      this.enterName = event.target.value;
    },
    setEnterNameUp(event) {
      this.enterNameUp = event.target.value;
    },
    submitForm(event){
              alert('submit')
            }
  },
}).mount("#assignment");
