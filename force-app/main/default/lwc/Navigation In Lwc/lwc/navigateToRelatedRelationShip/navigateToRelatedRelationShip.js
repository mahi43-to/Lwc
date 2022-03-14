import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigateToRelatedRelationShip extends NavigationMixin (LightningElement) {
    navigateToRelatedList() { 
        this[NavigationMixin.Navigate]({ 
            type: 'standard__recordRelationshipPage',
            attributes: { 
                recordId: '0010w00000wMjAfAAK',
                objectApiName: 'Account',
                relationshipApiName: 'Contacts', 
                actionName: 'view'
            }
        })
    }
}