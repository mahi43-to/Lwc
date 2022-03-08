import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubComponentB extends LightningElement {
    message
    connectedCallback() {
        this.callSubseriber()
    }
    callSubseriber() {
        pubsub.subscribe('componentA', (message)=>{ 
            this.message = message;
        })
    }
}