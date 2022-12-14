const app = Vue.createApp({
  data() {
    return {
      inputTask: "",
      list: [],
      isToggle: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.isToggle ? "Hide" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.list.push(this.inputTask);
    },
    setToggle() {
      this.isToggle = !this.isToggle;
    },
    deleteTask(idx) {
      this.list.splice(idx, 1);
    },
  },
});
app.mount("#assignment");
