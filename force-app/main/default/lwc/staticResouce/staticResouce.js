import { LightningElement } from 'lwc';
// video 2 in static res import images
import USER_IMG from '@salesforce/resourceUrl/user'
import Setting from '@salesforce/resourceUrl/setting'

export default class StaticResouce extends LightningElement {
    userImage = USER_IMG

    userSetting = Setting
}