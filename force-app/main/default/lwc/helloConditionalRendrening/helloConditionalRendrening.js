import { LightningElement } from 'lwc';

export default class HelloConditionalRendrening extends LightningElement {
    isVisble = false;
    name;

    handleClick() {
        this.isVisble = true;
    }

    changeHandler(event) {
        this.name = event.target.value;
    }

    get helloCheck() {
        return this.name === "hello"
    }
}