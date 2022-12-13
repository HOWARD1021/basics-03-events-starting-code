Vue.create({
    data() {
        return {
            name:''
        }
    },
    methods:{
        showAlert() {
           return alert(this.name) 
        }

    }
}).mount('#assignment')

