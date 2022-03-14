import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData'

import myCustomePermission from '@salesforce/customPermission/show_details'
export default class CheckPermissionDemo extends LightningElement {
    get hasViewAllDataAvialable() {
        return hasViewAllData
    }

    get hasCustomePermission() {
        return myCustomePermission
    }

}