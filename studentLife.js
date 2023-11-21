const app = Vue.createApp({
    data() {
        return {
            registrationOverlay: false,
            partsBunner:[ ['/Assets/Sport.jpg'] , 
            ['/Assets/Studentcouncil.jpg'],
            ['/Assets/houseSystem-2.jpg'],
            ['/Assets/transportpic.png'],
            ['/Assets/nurserydep.jpg']],
            activeBunner:0,
            pageParts:['Sport','The school councils','the house system','Transport','nursery Department'],
            activePart:0,
        }
    },
    methods: {
        pagePartClick(part){
            this.activePart = this.pageParts.indexOf(part)
        },
      
    },
    mounted() {
    
    },
}).mount('#app')