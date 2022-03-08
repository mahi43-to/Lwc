import { LightningElement } from 'lwc';
import signinMethod from './signinMethod.html';
import signupMethod from './signupMethod.html';
import renderMethod from './renderMethod.html';

export default class RenderMethod extends LightningElement {
    isSubmitted = false;
    selectedBtn = ''
    render() {
        return this.selectedBtn === 'signup' ? signupMethod:
                    this.selectedBtn === 'signin' ? signinMethod :
                    renderMethod
    }
    handleClick(event) {
        this.selectedBtn = event.target.label;
    }

    // element = document.querySelector(".signMsg");
    submitClick(event){
        this.isSubmitted = true;
        // element.textContent = event.target.label;
        console.log(`${event.target.label} successfully`)
    }
}