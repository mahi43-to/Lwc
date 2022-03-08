import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carsList = ['TATA','BMW', 'Jaguar', 'Audi', 'RollsRoy', 'Ferrari', 'Mahindra', 'Toyata', 'Bugati', 'voxwagan', 'polo', 'suziki']

    ceoList = [
        {
            id: 1,
            company: "Reliance",
            name: "Mukesh Ambani"
        },
        {
            id: 2,
            company: "TATA",
            name: "Ratan Tata"
        },
        {
            id: 3,
            company: "Microsoft",
            name: "Satya Nadella"
        },
        {
            id: 4, 
            company: "Google",
            name: "Sundar Pichai"
        }
    ];
}