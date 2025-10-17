CREATE DATABASE db_inNout;

USE db_inNout;

CREATE TABLE users (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `fullName` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NUll,
    `email` VARCHAR(255) NOT NUll,
    `senha` VARCHAR(255) NOT NUll,
    `type` ENUM('admin', 'normal')
);

INSERT INTO users (fullName, phone, email, senha, type)
VALUES ('Fabio S.', '(11) 9999-8888', 'fabio@admim.com', '123456', 'admin'),
('Jose M.', '(11) 4421-8888', 'jose@email.com', '123456', 'normal');

CREATE TABLE products (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `price` DECIMAL(4, 2) NOT NULL,
    `category` ENUM('desserts', 'sides', 'sandwiches', 'beverages')
);

INSERT INTO products (`name`, price, category)
VALUES ('X-TUDO', 20.99, 'sandwiches'),
('Coca 250ml', 5.99, 'sides');