const app = Vue.createApp({
    data() {
        return {
            registrationOverlay: false,
            partsBunner:[ ['/Assets/Sport.jpg'] , 
            ['/Assets/Studentcouncil.jpg'],
            ['/Assets/houseSystem-2.jpg'],
            ['/Assets/transportpic.png'],
            ['/Assets/nurserydep.jpg']],
            partsText:[
                [{
                    h1:'Sport at wisdom Tree school aims to prepare pupils for a happy, healthy and successful life through the provision of a wide range of sporting activities and the development of excellence in those who choose to pursue an activity to a higher level.',
                    h3:'All pupils from age 3 to 18 have the opportunity to participate in regular sporting activities within the school timetable. ',
                    p1:'Our playing fields at Began Road provide a large outdoor space for sporting events and pupils have regular access to additional facilities within Cardiff including NIAC, Cardiff Met, Eastern Swimming Pool, Boulders Rock Climbing Centre, The Geraint Thomas Velodrome Newport, Somersault Gym, Cardiff International White Water Sports and many others.A regular timetable of additional events throughout the year includes: Aqua Games, Cardiff Games Events, Multi-Sport Days, Sports Day and wellbeing events.',
                    p2:'Enrichment of wider learning experiences, often includes; trips to professional sports matches, for example to watch the Welsh ladies and Welsh mens football teams play, Welsh rugby games, Welsh netball matches and events. Other pupils \' experiences have included: stadium visits, insight to professional training and sports technology departments at Cardiff Metropolitan and training centres such as The Vale Resort.',
                }],
                [{
                    h1:'The Junior and Senior School Councils create an opportunity for pupils to make their voice heard, and thereby integrate them as a part of the organizational system of our school community. It encourages pupils to develop a strong sense of belonging, and enhances communication channels between pupils and teachers alike.',
                    h3:'',
                    p1:'The School Council provides a sound platform for pupils to develop democratic principles and practices, whilst also enhancing many other personal attributes. Various areas of school life are discussed at council, for example, the dining room, uniform, timetables, pupil wellbeing and homework.',
                    p2:'The College Councils play a vital role in setting an example for the rest of the school community, and provides pupils with a sense of ownership, responsibility and recognition.',
                }],
                [{
                    h1:'Our house system allows everyone to engage in healthy, constructive competition and encourages teamwork and establishes a sense of community and belonging.                    ',
                    h3:'Pupils and students at Wisdom tree College are divided into four houses',
                    p1:'Each member of staff is affiliated with a house. In the Junior and Senior schools, there are house guardians who help coordinate inter-house activities, competitions and campaigns. Pupils are awarded house points for academic achievement and good conduct, with a running total kept throughout the academic year.',
                    p2:'In addition, inter-house competitions are held every term and complement the large whole-school occasions such as the Eisteddfod and Sports Days.',
                }],
                [{
                    h1:'The school is conveniently located, with easy access from most transport route',
                    h3:'For details of our extensive school bus provision  please contact our Transport Manager',
                    p1:'We currently offer school transport services in the following areas',
                    p2:'',
                }],
                [{
                    h1:'At Wisdom tree school, we believe that a healthy and happy student is the foundation for success. We understand that each student is unique and faces their own challenges, which is why we are committed to providing comprehensive support and resources to promote their overall wellbeing.',
                    h3:'Wisdom tree School Nursery and Infant Department is a place where children feel happy and secure and are cared for in an enriching environment that provides new and stimulating experiences.',
                    p1:'Our pupils are taught to care for and respect one another and in turn to develop mutual respect in their relationships with their teachers and other adults.',
                    p2:'Our dedicated team of enthusiastic staff provide boundless energy and fun whilst nurturing the hearts and minds of our youngest pupils. In addition, our wraparound care provides reassurance and flexibility for today’s working families.',
                }]
            ],
            activeBunner:0,
            pageParts:['Sport','The school councils','the house system','Transport','nursery Department'],
            activePart:0,
            ImgGallary:[
                ['/Assets/Sport.jpg','Assets/gallary/Sport-2.jpg','Assets/gallary/sport3.jpg'],
                ['Assets/gallary/stuentcouncil-3.jpg','Assets/gallary/stuentcouncil-1.jpg','Assets/gallary/stuentcouncil-2.jpg'],
                ['Assets/gallary/housesystem-3.jpg','Assets/gallary/housesystem.jpg','Assets/houseSystem-2.jpg'],
                ['Assets/transportpic.png','Assets/gallary/transpor-3.jpg','Assets/gallary/transport-2.jpg'],
                ['Assets/gallary/nurse-1.jpg','Assets/gallary/nurse-2.jpg','Assets/gallary/nurse-3.jpg']
            ],
            imgHover:false,
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