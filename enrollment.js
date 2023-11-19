const app = Vue.createApp({
    data() {
        return {
            registrationOverlay: false,
            engageActivate:false,
        }
    },
    methods: {
        engageActive(){
            let engage = document.getElementById('main').getBoundingClientRect()
            if (engage.top >= -300 &&engage.top <= 300) {
                this.engageActivate = true
            }else{
                this.engageActivate = false
            }
            
        }
        
    },
    mounted() {
        window.addEventListener('scroll', this.engageActive)
    },
}).mount('#app')