import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'


import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import ANNUAL_REVENU_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY from '@salesforce/schema/Account.Industry'
import RATING from '@salesforce/schema/Account.Rating'

export default class RecordFromDemo extends LightningElement {
    @api recordId
    @api objectApiName
    
    objectName = ACCOUNT_OBJECT
    fieldList = [NAME_FIELD, ANNUAL_REVENU_FIELD, TYPE_FIELD, INDUSTRY, RATING]

    successHandler(event) { 
        console.log(event.detail.id)
        
        const toastEvent = new ShowToastEvent({ 
            title: 'Account Created',
            message: 'Record Id : '+ event.detail.id,
            variant: 'success'
        })
        this.dispatchEvent(toastEvent)
    }
    // rId = currentId
    

}