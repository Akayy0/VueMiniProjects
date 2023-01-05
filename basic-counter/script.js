const app = Vue.createApp({
    data() {
        return {
            number: 0,
            id : 0,
        }
    },

    methods: {
        increase(){

            if (this.id == null || this.id == undefined) {
                this.id = 0
              }        
            this.id += 1
            console.log(this.id)

            this.number++
        }
        
    },

    watch: {
        number(novoNumero){
            console.log(`O novo numero e ${novoNumero}`)
        }
    }
})

app.mount("#app")