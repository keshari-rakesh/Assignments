import { LightningElement,api,wire,track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import findContactByAccountId from '@salesforce/apex/ContactController.findContactByAccountId';

export default class ContactList extends NavigationMixin(LightningElement) {

    @track contacts;
    @api accountId;
    @api recordId;
    contactName='';
    
    @wire(findContactByAccountId,{accountId:'$accountId', cntName:'$contactName'}) 
    contactRecords({error,data}){
        if(data){
            this.contacts = data;
        }
        else if(error){
            this.contacts = null;
        }
    }
    handleKeyChange(event){
        this.contactName = event.target.value;
    }
    handleNavigate(event) {
        console.log("Navigation Mixin method call");
        console.log(this.recordId);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.target.dataset.cid,
                objectApiName: 'Contact',
                actionName: 'edit'
            },
        });
        console.log(this.recordId);
    }
    // Navigate to Edit Account Page
    /*navigateToEditAccountPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Account',
                actionName: 'edit'
            },
        });
    }
    this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            },
        });*/
}