 

CREATE table inventory (

id INTEGER AUTO_INCREMENT NOT NULL,
product_name varchar(50) NOT NULL,
department_name varchar(50) NOT NULL,
price DECIMAL (4, 2) NOT NULL,
stock_quantity INTEGER,
PRIMARY KEY(id)

)

DESCRIBE inventory

SELECT * FROM inventory

SELECT * FROM inventory; UPDATE inventory SET stock_quantity = stock_quantity - 2 WHERE id = "2"

SELECT stock_quantity FROM inventory WHERE id = "2"





