const app = Vue.createApp({
    data() {
        return {
            videoPlayPack:['fa-solid fa-pause fa-xl','fa-solid fa-play fa-xl'],
            videoStatus:0,
            meetFutureVid:1,
            headings:['Values','Mission','Vision'],
            schoolValues:[
                'At Wisdom Tree School, our core values serve as the foundation for everything we do. We embrace the values of knowledge, integrity, collaboration, holistic development, and inclusivity.These values guide our interactions, decisions, and the overall learning environment, ensuring that we provide a nurturing, respectful, and inclusive space for all students.',
                'Our mission at Wisdom Tree School is to inspire and empower young minds to become lifelong learners, critical thinkers, and compassionate individuals. We are committed to fostering a love for learning, providing a holistic education that nurtures academic excellence, character development, and personal growth. Through a supportive and inclusive environment.',
                'Our vision at Wisdom Tree School is to be a leading educational institution that prepares students for success in the 21st century. We envision a school where students are engaged in meaningful and innovative learning experiences, where they develop a deep understanding of diverse perspectives, and where they are motivated to become responsible global citizens.',
            ],
            slectedValue:0,
            valuesInterval:null,
            activeSection: 1 ,
            registrationOverlay: false,
        }
    },
    methods: {
        toggleVideo(){
            if (this.videoStatus === 0){
                document.getElementById('vid').pause()
                this.videoStatus =1
            }else{
                this.videoStatus =0
                document.getElementById('vid').play()
            }
            
        },
        meetFutureToggle(){
            if (this.meetFutureVid == 1) {
                this.meetFutureVid =0
                document.getElementById('meetFutureVid').play()
            }else{
                this.meetFutureVid =1
                document.getElementById('meetFutureVid').pause()
            }
        },

        sectionNav(){
            if (window.scrollY< document.body.scrollHeight * 0.20) {
                this.activeSection = 1
            }
            else if (window.scrollY > document.body.scrollHeight * 0.20 && window.scrollY < document.body.scrollHeight * 0.34 ) {
                this.activeSection = 2
            }
            else if (window.scrollY > document.body.scrollHeight * 0.34 && window.scrollY < document.body.scrollHeight * 0.68 ) {
                this.activeSection = 3
            }
            else if (window.scrollY > document.body.scrollHeight * 0.68 && window.scrollY < document.body.scrollHeight * 0.92 ) {
                this.activeSection = 4
            }
            
            
           
        },
       
        stopInterval(){
            clearInterval(this.valuesInterval)
        }

    },
    mounted() {
        this.valuesInterval=setInterval(() => {
            if (this.slectedValue < this.schoolValues.length-1) {
                this.slectedValue+=1
            }else{
                this.slectedValue = 0
            }
        }, 5000);

        window.addEventListener('scroll', this.sectionNav);
    
    },
}).mount('#app')