CREATE  DATABASE if not exists icecreamstore;
use icecreamstore;
CREATE TABLE flavors(
flavor_id INT AUTO_INCREMENT,
name TEXT,
quantity_kg_stock float,
date_inserted DATETIME DEFAULT NOW(),
primary key(flavor_id)
);
