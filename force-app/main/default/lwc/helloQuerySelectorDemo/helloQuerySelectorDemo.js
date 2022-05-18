import { LightningElement, track} from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userName = ["jhon", "smith", "luke", "raj"];
    fetchDetailHandler(){
        const elem = this.template.querySelector('h1')
        elem.style.border="2px solid red"
        console.log(elem.innerText)

        const users = this.template.querySelectorAll('.name')
        Array.from(users).forEach(item => {
            console.log(item.innerText)
            item.setAttribute("title",item.innerText);
        });

        //lwc:dom="manual" demo
        const childEle = this.template.querySelector('.child');
        childEle.innerHTML =`<p>Hey I am child element manipulate form dom<p>`
    }
}