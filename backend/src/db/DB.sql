CREATE DATABASE IF NOT EXISTS TOdo_DB;

USE TOdo_DB;

CREATE TABLE users (
    user_id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(50) NOT NULL,

    PRIMARY KEY (user_id)
);

INSERT INTO users (name, email, password)
VALUES ('Andre Santos', 'teste@test.com', '123456');

CREATE TABLE tasks (
    user_id int NOT NULL,
    description varchar(255) NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO tasks (user_id, name, description)
VALUES (1, 'Estudar para prova do BB');
