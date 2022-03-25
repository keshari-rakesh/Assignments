import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
export default class DisplayDatausingWire extends LightningElement {
    @track accfrmparent;
    accountName='';
    accoundId;
    @wire(getAccounts,{actName:'$accountName'}) accountRecords({error, data}){
        if(data){
            this.accfrmparent = data;
            console.log(accfrmparent);
        }
        else if(error){
            this.accfrmparent = null;
        }
    }
    handleKeyChange(event){
        this.accountName = event.target.value;
    }
    handleClick(event){
        event.preventDefault();
        this.accoundId = event.target.dataset.accountid;
        console.log(this.accoundId);
        console.log("Onclick Call");
    }
    
}