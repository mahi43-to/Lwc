import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName="Zero To Hero"
    title = "aura"

    changeHandler(event) {
        this.title = event.target.value
    }

    @track address = {
        city : "surat",
        postalcode : 395023,
        country : "India"
    }

    trackHandler (event) {
        // without track ==>this.address = {...this.address, "city":event.target.value} 
        this.address.city = event.target.value
    }

    // getters
    user = ["nikhil", "chintu", "mahi"];

    get userDetail() {
        return this.user[1];
    }

    num1 = 10;
    num2 = 20;

    get multiply(){
        return this.num1 * this.num2;
    }

}

