public with sharing class ContactController {
    public ContactController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> findContactByAccountId(String accountId,String cntName){
        String matchString = '%'+cntName+'%';
        return [select id,name,phone from Contact where AccountId=:accountId and name like:matchString];
    }
}
