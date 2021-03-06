var boolzapp = new Vue({
    el: '#container',
    data: {
        activeClass: 0,
        ricercaContatti: "",
        newMessage: {
            date: new Date().toLocaleString(),
            text: '',
            status: 'destinatario_chat'
        }, 
        newMessageAuto: {
            date: new Date().toLocaleString(),
            text: 'Ok!',
            status: 'mittente_chat'
        },   
        contacts: [
            {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                text: 'Hai portato a spasso il cane?',
                                status: 'destinatario_chat'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                text: 'Ricordati di dargli da mangiare',
                                status: 'destinatario_chat'
                            },
                            {
                                date: '10/01/2020 16:15:22',
                                text: 'Tutto fatto!',
                                status: 'mittente_chat'
                            }
                            ],
            },
            {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                            {
                                date: '20/03/2020 16:30:00',
                                text: 'Ciao come stai?',
                                status: 'destinatario_chat'
                            },
                            {
                                date: '20/03/2020 16:30:55',
                                text: 'Bene grazie! Stasera ci vediamo?',
                                status: 'mittente_chat'
                            },
                            {
                                date: '20/03/2020 16:35:00',
                                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'destinatario_chat'
                            }
                            ],
            },
            {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                            {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'mittente_chat'
                            },
                            {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'destinatario_chat'
                            },
                            {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'mittente_chat'
                            }
                            ],
            },
            {
                    name: 'Luisa',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'destinatario_chat'
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'mittente_chat'
                            }
                            ],
            },
        ]
    },
    methods: {
        // USO QUESTA FUNZIONE PER APRIRE AL CLICK LA CHAT
        openChat: function(i){
            this.activeClass = i
        },

        // IN QUESTO MODO POSSO SCRIVERE UN MEX NELLA CHAT APERTA
        addMex: function(){
            this.contacts[this.activeClass].messages.push(this.newMessage);
            this.newMessage = {
                date: new Date().toLocaleString(),
                text: '',
                status: 'destinatario_chat'
            }, 
            // QUI MI ASPETTO UNA RISPOSTA AUTOMATICA DOPO UN SECONDO DAL SISTEMA
            setTimeout(() => {
                this.contacts[this.activeClass].messages.push(this.newMessageAuto)            
            }, 1000);
        },
        
    }
});





