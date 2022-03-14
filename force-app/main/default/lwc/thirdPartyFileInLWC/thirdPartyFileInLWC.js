import { LightningElement } from 'lwc';
// to import the moment.zip
import MOMENT from '@salesforce/resourceUrl/moment'

// to import the animate.zip
import ANIMATE from '@salesforce/resourceUrl/animate'
// to load 
import {loadScript, loadStyle} from 'lightning/platformResourceLoader'

export default class ThirdPartyFileInLWC extends LightningElement {
    currentDate = ''
    // for stop load when some operation is running
    isLibLoaded = false
    renderedCallback() {
        if (this.isLibLoaded) {
            return
        }else {

            Promise.all([
                loadStyle(this, ANIMATE+'/animate/animate.min.css'),
                loadScript(this, MOMENT+'/moment/moment.min.js')

            ]).then(()=>{
                this.setDateOnScreen()
            })
            this.isLibLoaded = true
            // .catch(error=>{
            //     console.log(error)
            // })
            // we can skip promise.all if  there is only one load item is there
            
        }
    }
    setDateOnScreen() {
        this.currentDate = moment().format('LLLL')
    }
} 