import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false;
    clickHandler() {
        this.showModal = true;
    }

    closeModal(event) {
        this.msg = event.detail.msg;
        this.showModal = false;
    }
}