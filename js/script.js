// Boolzapp - a (not very) innovative messaging 
// platform 
// Milestone 1 
// ●   Replica della grafica  con la possibilità di avere  messaggi scritti dall’utente (verdi) e 
// dall’interlocutore (bianco) assegnando due classi CSS diverse 
// ●   Visualizzazione dinamica della lista contatti:  tramite  la direttiva v-for, visualizzare 
// nome e immagine di ogni contatto 
 
// Milestone 2 
// ●   Visualizzazione dinamica dei messaggi:  tramite la  direttiva v-for, visualizzare tutti i 
// messaggi relativi al contatto attivo all’interno del pannello della conversazione 
// ●   Click sul contatto  mostra la conversazione del contatto  cliccato
// Milestone 3 
// ●   Aggiunta di un messaggio  : l’utente scrive un testo  nella parte bassa e digitando 
// “enter” il testo viene aggiunto al thread sopra, come messaggio verde 
// ●   Risposta dall’interlocutore:  ad ogni inserimento di  un messaggio, l’utente riceverà 
// un “ok” come risposta, che apparirà dopo 1 secondo.

 






const app = new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
        ],
        activeItem : 0,
        inputUser : '',
        currentDate: dayjs().format('DD/MM/YYYY hh:mm:ss'),
        searchContact : '',
    },
    methods: {
        showContact: function(index){
            this.activeItem = index;  
        },
        answer: function(){
            this.contacts[this.activeItem].messages.push({
                date: dayjs().format('DD/MM/YYYY hh:mm:ss'),
                message: 'ok',
                status: 'received'
            });
        }, 
        sendMessage: function(){
            if(this.inputUser != ''){
                this.contacts[this.activeItem].messages.push({
                    date: dayjs().format('DD/MM/YYYY hh:mm:ss'),
                    message: this.inputUser,
                    status: 'sent',
                });
                this.inputUser = '';
                setTimeout(this.answer, 1000);
                
            }
        },
        findContact: function(){
            for(let i=0; i< this.contacts.length; i++){
                if(this.contacts[i].name.includes(this.searchContact)){
                    this.contacts[i].visible = true;
                }else{
                    this.contacts[i].visible = false;
                }
            }
            
        },
        // creaRicerca: function{
        //     const array = '';
        //     array.push()
        // }
              

    }
}); 

// Milestone 4 
// ●   Ricerca utenti:  scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i 
// contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo 
// “mar” rimangono solo Marco e Martina) 


// stackoverflow per date
// console.log(dayjs().format('DD/MM/YYYY hh:mm:ss')
// );

// milestone 4 ricerca: visible true,  quando stampate la lista dei contatti fate un controllo su qeusta variabile, quando effettui una ricerca alla pressione di un qualsiasi tasto su un campo input fate un ciclo su tutti i contatti e se la stringa è presente nel campo input rimane visible true altrimenti diventa visible false. come fate a verificare se all'interno di una stringa è oresente un'ltra stringa? si usa includes() perchè le stringhe sono come Array.