const app = Vue.createApp({
  data() {
    return {
      isSelected: true,
      Istoggle: false,
    };
  },
  methods: {
    toggle() {
      this.Istoggle = !this.Istoggle;
    },
  },
  computed: {
    selectedCss() {
      return {
        user1: this.isSelected,
      };
    },
  },
});

app.mount("#assignment");
