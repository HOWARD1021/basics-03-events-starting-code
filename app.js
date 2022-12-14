const app = Vue.createApp({
  data() {
    return {
      isSelected: true,
      Istoggle: false,
      inputBackgroundColor:'', 
      vueLink:'https://medium.com/andy%E7%9A%84%E8%B6%A3%E5%91%B3%E7%A8%8B%E5%BC%8F%E7%B7%B4%E5%8A%9F%E5%9D%8A/vue%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-%E5%9B%9B-vue%E6%8C%87%E4%BB%A4-%E4%B8%AD-v-bind-6c4fdce84879'
    };
  },
  methods: {
    toggle() {
        console.log('this.Istoggle', this.Istoggle)
      this.Istoggle = !this.Istoggle;
    },
  },
  computed: {
    selectedCss() {
      return {
        user1: this.isSelected === 'user1',
        user2: this.isSelected === 'user2',
        visible: this.Istoggle,
        hidden: !this.Istoggle,
      };
    },
  },
});

app.mount("#assignment");
