import { LightningElement } from 'lwc';
import Indian_Economy from '@salesforce/label/c.IndianEcomy'
import Indian_current_Economy from '@salesforce/label/c.IndianEconmy2022'
export default class CustomLabelsDemo extends LightningElement {
    // not best practices to work on 
    // indianPastEconomy = Indian_Economy
    // indianCurrentEconomy = 	Indian_current_Economy
    LABELS = {
        indianPastEconomy: Indian_Economy,
        indianCurrentEconomy: Indian_current_Economy 
    }
}