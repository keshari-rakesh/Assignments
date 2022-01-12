------------------------Transaction Control----------------------------
use db;

Begin Transaction insert_cust_details
insert into customers values(10,'Vaibhav',7887654321,'Ahmedabad');
insert into customers values(10,'Vaibhav',7887654321,'Ahmedabad');
insert into customers values(10,'Vaibhav',7887654321,'Ahmedabad');

commit Transaction insert_cust_details;

Rollback Transaction insert_cust_details;

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