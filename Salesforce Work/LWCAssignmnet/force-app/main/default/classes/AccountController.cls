public with sharing class AccountController {
    public AccountController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String actName){
        String matchString = '%'+actName+'%';
        return [select id,name,type,industry from Account where name like:matchString limit 8];
    }
    
}
