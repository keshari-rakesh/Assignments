CREATE DATABASE DB;
 USE DB;

CREATE TABLE students(
  id INTEGER PRIMARY KEY,
  name varchar(20) NOT NULL,
  gender varchar(6) NOT NULL
);

-- alter table
alter table students
add email varchar(20);

alter table students
add age int;

-- Insert values
INSERT INTO students VALUES (1, 'abc', 'M','ryan@gmail.com',23);

-- Insert multiple values
INSERT INTO students VALUES (2, 'Joanna', 'F','joanna@gmail.com',24),(3, 'Moanna', 'F','moanna@gmail.com',23),(4, 'Jiyan', 'M','jiyan@gmail.com',21);

-- fetch values
Select * from students;

-- drop table
Drop table students;

-- update table
update students set name='Rihana' from students where id=1;

-- Like operator
SELECT * FROM students where name LIKE 'J%' order by age asc;

-- order by asc/desc || OR
SELECT * FROM students where age=21 or age=23 order by age desc;

-- group by
SELECT  age, count(*) as total from students group by age;

-- distinct
SELECT distinct(age) as distinct_age from students;
