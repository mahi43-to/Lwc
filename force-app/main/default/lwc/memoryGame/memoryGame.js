import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader'
import FONTAWESOME from '@salesforce/resourceUrl/fontAwesome'

export default class MemoryGame extends LightningElement {
    // rendercallback will load eveytime when any change happen in our html so 
    // to avoid that we are using isLibLoaded which inital value is false and it will use to 
    // avoid rerender everytime when any changes happen 
    isLibLoaded = false
    openedCards = []
    moves = 0
    matchCards = []
    totalTime = "00:00"
    timerRef
    showCongo = false

    cards=[
        {id:1, listClass: "card", type:'diamond', icon: 'fa fa-diamond'},
        {id:2, listClass: "card", type: 'plane', icon: 'fa fa-paper-plane-o'},
        {id:3, listClass: "card", type:'anchor', icon:'fa fa-anchor'},
        {id:4, listClass: "card", type: 'bolt', icon: 'fa fa-bolt'},
        {id:5, listClass: "card", type:'cube', icon: 'fa fa-cube'},
        {id:6, listClass: "card", type:'anchor', icon:'fa fa-anchor '},
        {id:7, listClass: "card", type: 'leaf', icon:'fa fa-leaf'},
        {id:8, listClass: "card", type: 'bicycle', icon: 'fa fa-bicycle'},
        {id:9, listClass: "card", type:'diamond', icon:'fa fa-diamond'},
        {id:10, listClass:"card", type: 'bomb', icon:'fa fa-bomb'},
        {id:11, listClass:"card", type:'leaf', icon: 'fa fa-leaf'},
        {id:12, listClass:"card", type: 'bomb', icon: 'fa fa-bomb'},
        {id:13, listClass:"card", type: 'bolt', icon: 'fa fa-bolt'},
        {id:14, listClass:"card", type: 'bicycle', icon:'fa fa-bicycle'},
        {id:15, listClass:"card", type:'plane', icon: 'fa fa-paper-plane-o'},
        {id:16, listClass:"card", type:'cube', icon: 'fa fa-cube'}
    ]

    get gameRating() { 
        let stars = this.moves > 9 && this.moves < 12 ? [1, 2, 3] : this.moves >= 13 ? [1, 2] : [1] 
        return this.matchCards.length === 16 ? stars : []
    }

    displayCard(event) {
        console.log("hello")
        let currentCard = event.target
        currentCard.classList.add("open", "show", "disabled")
        this.openedCards = this.openedCards.concat(event.target)
        const len = this.openedCards.length
        if(len === 2) {
            this.moves = this.moves+1
            
            //to start timer when move became 1 
            if(this.moves === 1) {
                this.timer();
            }

            if(this.openedCards[0].type === this.openedCards[1].type){
                this.matchCards = this.matchCards.concat(this.openedCards[0], this.openedCards[1])
                this.matched()
            }else {
                this.unmatched()
            }

        }
    }

    matched() { 
        this.openedCards[0].classList.add("match", "disabled")
        this.openedCards[1].classList.add("match", "disabled")
        this.openedCards[0].classList.remove("open", "show")
        this.openedCards[1].classList.remove("open", "show")
        this.openedCards = []

        //this condition to stop the timer when all cards are shown properly
        if (this.matchCards.length === 16) {
            // this javascript function will clear all Interval
            window.clearInterval(this.timerRef)
            this.showCongo = true
        }
    }

    unmatched() { 
        this.openedCards[0].classList.add("unmatched")
        this.openedCards[1].classList.add("unmatched")
        this.action('DISABLE')

        setTimeout(()=> {
            this.openedCards[0].classList.remove("show", "open", "unmatched")
            this.openedCards[1].classList.remove("show", "open", "unmatched")
            this.action('ENABLE')

            this.openedCards = []
        },1100)
    }

    action(action) { 
        let cards = this.template.querySelectorAll('.card')
        Array.from(cards).forEach(item=> { 
            if (action === 'ENABLE') {
                let isMatch = item.classList.contains('match')
                if (!isMatch) {
                    item.classList.remove('disabled')
                }
            }
            if (action === 'DISABLE') {
                item.classList.add('disabled')
            }
        })
    }


    timer() { 
        let startTime = new Date()
        this.timerRef = setInterval(()=> { 
            // to calculate the difference in start time and current time
            let diff = new Date().getTime() - startTime.getTime()
            console.log(diff)
            // find the diffrence in day
            let d = Math.floor(diff/1000)

            // to find difference in minute
            const m = Math.floor(d % 3600 / 60);

            // to find difference in second
            const s = Math.floor(d % 3600 % 60);

            const mDisplay = m>0 ?  m+(m===1? "minute, ":" minutes, "):""
            
            const sDisplay = s>0 ? s+(s===1? "second":" seconds"):""

            this.totalTime = mDisplay + sDisplay

        }, 1000)
    }



    shuffle() { 
        this.showCongo = false
        console.log('hello')
        this.openedCards = []
        this.moves = 0
        this.matchCards = []
        this.totalTime = "00:00"
        window.clearInterval(this.timerRef)
        let elem = this.template.querySelectorAll('.card')
        Array.from(elem).forEach(item=>{
            item.classList.remove("show", "open", "match", "disabled")
        })

        // shuffel and swaping logic
        let array = [...this.cards]
        let counter = array.length
        while(counter > 0){ 
            let index = Math.floor(Math.random() * counter)
            counter--

            // swap logic
            let temp = array[counter]
            array[counter] = array[index];
            array[index] = temp
        }

        this.cards = [...array]
    }


    renderedCallback() {
        if(this.isLibLoaded) {
            return
        } else { 
            loadStyle(this, FONTAWESOME+'/fontawesome/css/font-awesome.min.css').then(()=>{ 
                console.log("loaded successfully")
            }).catch(error=>{ 
                console.error(error)
            })
            this.isLibLoaded = true
        }
        
    }
}