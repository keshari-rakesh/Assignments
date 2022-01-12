------------------------Transaction Control----------------------------
use db;

Begin Transaction insert_cust_details
insert into customers values(10,'Vaibhav',7887654321,'Ahmedabad');

commit Transaction insert_cust_details;


Begin Transaction insert_cust_details2
insert into customers values(11,'Rakesh',7887654321,'Ahmedabad');
insert into customers values(12,'Pradip',7887654321,'Ahmedabad');

Rollback Transaction insert_cust_details; -- it will rollback to first transaction i.e insert_cust_details

---------------Transaction Control using Stored Procedure--------------

create procedure insert_cust
as
insert into customers values(10,'Vaibhav',7887654321,'Ahmedabad');
go

select * from customers;

Begin Transaction
	exec insert_cust;

Rollback Transaction

-----------------------------------------------------------------------

-----------------------------------------------------------------------