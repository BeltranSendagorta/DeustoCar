
-- Comprobar si existe la base de datos y eliminarla si es necesario
DROP DATABASE IF EXISTS deustoCar;

-- Crear la base de datos deustoCar
CREATE DATABASE deustoCar;

-- Usar la base de datos deustoCar
USE deustoCar;

-- Comprobar si existe la tabla user y eliminarla si es necesario
DROP TABLE IF EXISTS user;

-- Crear la tabla user
CREATE TABLE user (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    username VARCHAR(45) NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- Comprobar si existe la tabla favoriteCars y eliminarla si es necesario
DROP TABLE IF EXISTS favoriteCars;

-- Crear la tabla favoriteCars
CREATE TABLE favoriteCars (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(45) NOT NULL,
    carID VARCHAR(45) NOT NULL
);
