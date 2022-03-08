import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    closeHandler() {
        const myEvent = new CustomEvent('close', { 
            detail: {
                msg: "modal close successfully"
            }
        });
        this.dispatchEvent(myEvent);
    }
}