import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import Name_Field from '@salesforce/schema/Contact.Name'
import Title_Field from '@salesforce/schema/Contact.Title'
import Email_field from '@salesforce/schema/Contact.Email'
import Phone_filed from '@salesforce/schema/Contact.Phone'
import Account_field from '@salesforce/schema/Contact.AccountId'

export default class RecordEditForm extends LightningElement {
    objectName = CONTACT_OBJECT
    fields = { 
        accountField: Account_field,
        nameField: Name_Field,
        titleField: Title_Field,
        phoneField: Phone_filed,
        emailField: Email_field
    }

    handelReset() { 
        const inputFields = this.template.querySelectorAll('lightning-input-field')
        if(inputFields) { 
            Array.from(inputFields).forEach(field=>{ 
                field.reset()
            })
        }
    }
}