import { LightningElement, wire } from 'lwc';
import Id  from '@salesforce/user/Id'
import { getRecord } from 'lightning/uiRecordApi';
import Name_Field from '@salesforce/schema/User.Name'
import Emaial_Fiels from '@salesforce/schema/User.Email'
export default class WireDemoUserDetails extends LightningElement {
    userId = Id

    userDetail
    
    @wire(getRecord, {recordId: '$userId', fields:[Name_Field, Emaial_Fiels] }) 
    userDetailHandler({data, error}) { 
        if(data) { 
            this.userDetail = data.fields
        }
        if (error) {
            console.log(error)
        }
    }

    @wire(getRecord, {recordId: '$userId', fields:[Name_Field, Emaial_Fiels] }) 
    userDetailProperty
}