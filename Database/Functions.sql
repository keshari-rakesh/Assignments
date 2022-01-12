-------------------------------Functions-------------------------------

use db;

Select * from orders;

-- AVG function for average
Select AVG(amount) as average_amount from orders;

-- COUNT function for count
Select COUNT(ord_id) as total_fields from orders;

-- MAX function to get max value
Select MAX(amount) as max_amount from orders;

-- MIN function to get min value
Select MIN(amount) as min_amount from orders;

-- SUM function to get sum of values
Select SUM(amount) as total_amount from orders;

-- ABS function to Absolute of value
Select ABS(-349.55) as Absolute_Number;

-- ROUND function to round of value
Select ROUND(-349.5555,2) as Round_Number;

-- CEILING function to get ceiling value
SELECT CEILING(67.2345) AS CeilValue;

-- FLOOR function to get floor value
SELECT FLOOR(67.2345) AS FloorValue;


-----------------------------------------------------------------------