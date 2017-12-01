 

CREATE table inventory (

id INTEGER AUTO_INCREMENT NOT NULL,
product_name varchar(50) NOT NULL,
department_name varchar(50) NOT NULL,
price DECIMAL (4, 2) NOT NULL,
stock_quantity INTEGER,
PRIMARY KEY(id)

)

DESCRIBE inventory

ALTER TABLE inventory
ALTER COLUMN price DECIMAL (7,2) NOT NULL;

SELECT * FROM inventory

SELECT * FROM inventory; UPDATE inventory SET stock_quantity = stock_quantity - 2 WHERE id = "2"

SELECT stock_quantity FROM inventory WHERE id = "2"

SELECT * FROM inventory WHERE stock_quantity <= 10

SELECT * FROM inventory; UPDATE inventory SET stock_quantity = stock_quantity + 50 WHERE id = "1"

INSERT into inventory (product_name, department_name, price, stock_quantity) VALUES("JBL","Headphones","90","60")

CREATE TABLE departments (

id INTEGER AUTO_INCREMENT NOT NULL,
department_name varchar(50) NOT NULL,
over_head_costs INTEGER,
PRIMARY KEY(id)

)





