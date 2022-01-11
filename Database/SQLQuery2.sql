use db;

create table customers(
cust_id int primary key,
cust_name varchar(20),
contact varchar(10),
city varchar(20));

create table products(
prod_id int primary key,
prod_name varchar(20),
descrip varchar(20));

create table orders(
ord_id int primary key,
prod_id int foreign key references products(prod_id),
cust_id int foreign key references customers(cust_id),
amount decimal(8,2));

-- insert records into customers
insert into customers values (1,'Ramesh',9087645321,'Vadodara'),(2,'Suesh',9087632451,'Ahmedabad'),(3,'Raju',7087645334,'Surat'),(4,'Shyam',8987645309,'Anand');

insert into customers values (5,'Paresh',9867345535,'Vadodara'),(6,'Jayesh',8907632451,'Ahmedabad'),(7,'Shilpa',9087645376,'Surat'),(8,'Jaya',7087453543,'Anand');

-- select query for customers
select * from customers;

-- insert records into products
insert into products values (101,'MobilePhone','Oneplus'),(102,'Desktop','Samsung'),(103,'Laptop','Dell'),(104,'IPad','Apple'),(105,'Earphone','Boat'),(106,'Earbud','Realme');

-- select query for products
select * from products;

--insert records into orders
insert into orders values (1001,105,7,2500),(1002,102,5,3000),(1003,106,2,4500),(1004,105,4,1700),(1005,102,7,4100),(1006,103,1,2200),(1007,104,6,3400);

-- select query for orders
select * from orders;

---------------------------- SQL Join -----------------------------

-- Join query
Select * from orders o join products p on o.prod_id = p.prod_id; 

-- Inner Join
Select o.ord_id,p.prod_id,p.prod_name,p.descrip,o.amount from orders o inner join products p on o.prod_id = p.prod_id; 

-- Left Join
Select * from orders o left join products p on o.prod_id = p.prod_id; 

-- Right Join
Select * from orders o right join products p on o.prod_id = p.prod_id; 

-- Full Join
Select * from orders o full join products p on o.prod_id = p.prod_id; 

---------------------------------------------------------------------

--------------------------Stored Procedure---------------------------

-- SP for customers
create procedure allcustomers
as
select * from customers;

exec allcustomers;


create procedure get_part_cust @city varchar(20)
as 
select * from customers where city = @city;

exec get_part_cust @city = 'Vadodara';


-- SP for products
create procedure get_part_pro @prod_name varchar(20), @descrip varchar(20)
as 
select * from products where prod_name = @prod_name OR descrip = @descrip;

exec get_part_pro @prod_name = 'Laptop', @descrip = 'Oneplus';


---------------------------------------------------------------------

------------------------------SQL View-------------------------------

create view view_products as
select * from products;

select * from view_products;

create view view_products_specific as
select * from products
where descrip='Oneplus' OR descrip='Apple';

select * from view_products_specific;

-- Costly Product View
create view costly_products as
Select o.ord_id,o.prod_id,o.cust_id,p.prod_name,o.amount,p.descrip from orders o join products p on o.prod_id = p.prod_id
where o.amount > (select avg(orders.amount) from orders);

select * from costly_products;

---------------------------------------------------------------------



