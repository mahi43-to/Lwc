import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} // foo storing the answer
    correctAnswers = 0 // for check no. of correct answer
    isSubmitted = false // use to show the result

    myQuestions = [
        {
            Id: "Question1",
            Question: "Largest metropolitan city in India?",
            Options:{
                a: "Mumbai",
                b: "Delhi",
                c: "Chennai",
                d: "Hyderabad"
            },
            correctAnswer: "a"
        },
        {
            Id: "Question2",
            Question: "Highest mountain peak in India ?",
            Options:{
                a: "Kamet",
                b: "Nandha Devi",
                c: "Kanchenjunga",
                d: "Shillong Peak"
            },
            correctAnswer: "c"
        },
        {
            Id: "Question3",
            Question: "Which Indian state has high length of the national highways ?",
            Options:{
                a: "Rajasthan",
                b: "Tamil Nadu",
                c: "Andhra Pradesh",
                d: "Uttar Pradesh"
            },
            correctAnswer: "d"
        },
        {
            Id: "Question4",
            Question: "In which year first population census conducted in India ?",
            Options:{
                a: "1953",
                b: "1872",
                c: "1870",
                d: "1954"
            },
            correctAnswer: "b"
        },
        {
            Id: "Question5",
            Question: " Largest District in India ?",
            Options:{
                a: "Leh ( J & K)",
                b: "Anantapur ( Andhra Pradesh )",
                c: "Kutch ( Gujarat )",
                d: "Nagur ( Rajasthan )"
            },
            correctAnswer: "c"
        }
    ]

    // for disable the button if all questions options is not selected 
    get allAnsAreNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    // for applying dyynamic styling to our result
    get isScoredFull() {
        return `slds-text-heading_medium ${this.myQuestions.length === this.correctAnswers?
                    'slds-text-color_success slds-text-align_center' : 'slds-text-color_error slds-text-align_center'}`
    }

    //for disable the options after selected
    get isAlreadySelected() {
        return (this.correctAnswers > 0);
    }


    // changehandler get's called on every click on th Options 
    changeHandler(event) {
        // console.log("name", event.target.name)
        // console.log("value", event.target.value)
        // const name = this.name = event.target.value
        const {name, value} = event.target
        this.selected = {...this.selected, [name]:value}
    }

    //form submit handler
    submitHandler(event) {
        // for not relod the page while click on submit button
        event.preventDefault()
         
       let correct = this.myQuestions.filter(item=>this.selected[item.Id] === item.correctAnswer)
        this.correctAnswers = correct.length;
        this.isSubmitted = true;
        // console.log("this.correctAnswers", this.correctAnswers)
        //console.log(correct.length);

    }
    // form reset handler
    resetHandler(event) {
        this.selected={}
        this.correctAnswers=0
        this.isSubmitted = false;
    }

    // for card styling
    renderedCallback() {
        const style = document.createElement('style')
        style.innerText = `c-quiz-app .slds-card{
            color: black;
            font-weight: bold;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-image: linear-gradient(135deg, #93a5cf 10%, #e4efe9 100%);
        }`
        this.template.querySelector('lightning-card').appendChild(style)
    }

}