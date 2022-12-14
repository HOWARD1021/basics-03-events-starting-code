const app = Vue.createApp({
  data() {
    return {
        isSelected: true,
        toggle:false,
    };
  },
  methods:{
    togglePara(){
        return {
            this.toggle  = !this.toggle
        } 
    }
  },
  computed:{
    selectedCss() {
        return {
            user1:this.isSelected
        }
    },   
  }
});

app.mount("#assignment")
