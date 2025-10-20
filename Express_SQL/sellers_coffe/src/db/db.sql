CREATE DATABASE coffe_shop;

USE coffe_shop;

CREATE TABLE users (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `fullName` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NUll,
    `email` VARCHAR(255) NOT NUll,
    `password` VARCHAR(255) NOT NUll,
    `type` ENUM('admin', 'normal') NOT NULL
);

DROP TABLE users;