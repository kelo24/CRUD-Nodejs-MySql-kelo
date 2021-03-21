-- Creando la base de datos
CREATE DATABASE crudnodejsmysqlkelo;

-- Utilizando la base de datos
use crudnodejsmysqlkelo;

-- Creating a table
CREATE TABLE users (
    id INT(5) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL DEFAULT 'none',
    last_name VARCHAR(50) NOT NULL DEFAULT 'none',
    mail VARCHAR(100) UNIQUE NOT NULL DEFAULT 'none',
    password VARCHAR(200) NOT NULL DEFAULT 'none'
);

-- Para ver todas las tablas
SHOW TABLES;

-- Para describir la tabla
describe users;