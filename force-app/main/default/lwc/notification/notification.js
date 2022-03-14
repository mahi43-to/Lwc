import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class Notification extends LightningElement {
    toastHandler() {
       this.showToast("Success!!", "{0} Account Created!! {1}", "success")
    }

    toastHandlerTwo() {
        this.showToast("Error!!", "Account Creation Failed!!", "error")
     }

     toastHandlerThree() {
        this.showToast("Password!!", "Password is not strong!!", "warning")
     }

     toastHandlerFour() {
        this.showToast("Knowledge!!", "this is to guide you through the proccess!!", "info")
     }

     showToast(title, message, variant) {
        const evt =  new ShowToastEvent({ 
            title,
            message,
            variant,
            messageData:[
                'salesforce',{
                    url: 'http://www.salesforce.com',
                    label: 'Click Here'
                }
            ],
            // for stick the notification
            //mode: 'sticky'
        })
        this.dispatchEvent(evt)
     }
}