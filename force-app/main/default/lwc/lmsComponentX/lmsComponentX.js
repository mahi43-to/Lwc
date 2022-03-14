import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import {APPLICATION_SCOPE, subscribe, MessageContext, unsubscribe } from 'lightning/messageService'

export default class LmsComponentX extends LightningElement {
    // to recive the message
    reciveMessage
    // to hold the subscription
    subscription

    @wire(MessageContext)
    context

    // render on load time
    connectedCallback(){
        this.subscribeMessage()
    }

    subscribeMessage() {
        // subscribe(messageContext, messageChannel, listner, subscriberOptions)
        this.subscription = subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)}, {scope: APPLICATION_SCOPE})
    }

    handleMessage(message) {
        this.reciveMessage = message.lmsData.value?message.lmsData.value:"No Message Published"
    }

    unsubscribeMessageChannel(){
        console.log("hello")
        unsubscribe(this.subscription) 
        console.log(this.subscription)
        this.subscription = null
    }
}