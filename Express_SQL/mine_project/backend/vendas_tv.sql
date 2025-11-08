CREATE DATABASE vendas_tv;

USE vendas_tv;

CREATE TABLE usuarios (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nome_usuario` VARCHAR(30)
)

CREATE TABLE produtos (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `tv` VARCHAR(30),
    `preco` DECIMAL(6, 2)
)

CREATE TABLE vendas (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `id_usuario` INT,
    `id_produto` INT,
    FOREIGN KEY (id_produto) REFERENCES produtos (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
)

INSERT INTO usuarios (nome_usuario) VALUES ("JEAN"), ("FILIPE"), ("ANDRES");

INSERT INTO produtos (tv, preco)
VALUE ("TV LG", 1200.00), ("TV Sansumg", 1300.00);

INSERT INTO vendas (id_usuario, id_produto)
VALUE (1, 1), (1, 2);

SELECT
    v.id AS venda_id,
    u.nome_usuario,
    p.tv,
    p.preco
FROM vendas v
INNER JOIN usuarios u ON v.id_usuario = u.id
INNER JOIN produtos p ON v.id_produto = p.id;