import { LightningElement, wire } from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi'
import Account_Object from '@salesforce/schema/Account'
export default class GetObjectInfoDemo extends LightningElement {
    defaultRecordTypeId
    @wire(getObjectInfo, {objectApiName:Account_Object})
    objectInfo
    // through function
    // objectInfo({data, error}) { 
    //     if (data) {
    //         console.log(data)
    //         this.defaultRecordTypeId = data.defaultRecordTypeId
    //     }
    //     if(error) { 
    //         console.error(error)
    //     }
    // }
}