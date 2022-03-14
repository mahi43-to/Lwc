import { LightningElement } from 'lwc';
import Account_ObjectName from '@salesforce/schema/Account'
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class RecordEditCustome extends LightningElement {
    objectName = Account_ObjectName
    inputValue=''
    
    handleChange(event) { 
        this.inputValue = event.target.value
    }

    handleSubmit(event) { 
        event.preventDefault()
        const inputCmp = this.template.querySelector('lightning-input')
        const value = inputCmp.value

        if (!value.includes('India')) {
            inputCmp.setCustomValidity("The Account Name Must Include 'India'")
        }else { 
            inputCmp.setCustomValidity("")
            const fields = event.detail.fields
            fields.Name = value
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputCmp.reportValidity()
    }

    successHandler(event){ 
        const toastEvent = new ShowToastEvent({ 
            titel: 'Account Created',
            message: "Record Id : " + event.detail.id,
            variant: "success"
        })
        this.dispatchEvent(toastEvent)

    }

    handelError(event) { 
        const toastEvent = new ShowToastEvent({ 
            titel: 'Error While Account Creating',
            message: event.detail.message,
            variant: "error"
        })
        this.dispatchEvent(toastEvent)
    }
}