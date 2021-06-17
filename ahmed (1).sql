-- Adminer 4.7.9 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

CREATE DATABASE `ahmed` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ahmed`;

DROP TABLE IF EXISTS `extra`;
CREATE TABLE `extra` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `descreption` varchar(255) NOT NULL,
  `price` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `extra_demande`;
CREATE TABLE `extra_demande` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) NOT NULL,
  `descreption` varchar(255) NOT NULL,
  `amount` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `hotels`;
CREATE TABLE `hotels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `room` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `hotels` (`id`, `name`, `room`, `location`) VALUES
(1,	'Hotel 1',	'1',	'Sousse');

DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` varchar(255) NOT NULL,
  `card_number` varchar(255) NOT NULL,
  `ex_date` varchar(255) NOT NULL,
  `cvv` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `payment` (`id`, `id_user`, `card_number`, `ex_date`, `cvv`) VALUES
(1,	'1',	'1234556',	'024',	555),
(2,	'1',	'1234556',	'024',	555),
(3,	'1',	'1234556',	'024',	555),
(4,	'1',	'1234556',	'024',	555),
(5,	'1',	'1234556',	'024',	555),
(6,	'1',	'1234556',	'024',	555),
(7,	'1',	'1234556',	'024',	555),
(8,	'1',	'1234548484856',	'024',	555);

DROP TABLE IF EXISTS `reservations`;
CREATE TABLE `reservations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) NOT NULL,
  `room_id` varchar(255) NOT NULL,
  `from` date NOT NULL,
  `to` decimal(10,0) NOT NULL,
  `amount` float NOT NULL,
  `nb_nuit` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `rooms`;
CREATE TABLE `rooms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room_name` varchar(255) NOT NULL,
  `nb_adulte` int NOT NULL,
  `nb_children` int NOT NULL,
  `type` varchar(255) NOT NULL,
  `descreption` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `nb_disponible` int NOT NULL,
  `hotel_id` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `rooms` (`id`, `room_name`, `nb_adulte`, `nb_children`, `type`, `descreption`, `price`, `nb_disponible`, `hotel_id`, `image`) VALUES
(1,	'room 1 ',	2,	0,	'double',	'double',	150,	8,	'1',	'https://i.ytimg.com/vi/6K44JEduspY/maxresdefault.jpg'),
(2,	'room 12',	1,	0,	'simple',	'simple',	150,	10,	'1',	'https://i.ytimg.com/vi/6K44JEduspY/maxresdefault.jpg');

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `passeport` varchar(255) DEFAULT NULL,
  `cin` varchar(255) DEFAULT NULL,
  `gender` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `nb_reservation` int NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `users` (`id`, `first_name`, `last_name`, `passeport`, `cin`, `gender`, `country`, `nb_reservation`, `username`, `password`) VALUES
(1,	'bader',	'rachedddddddddd',	'123456789',	'12841138',	'male',	'sousse',	0,	'bader',	'123456789'),
(2,	'test',	'test',	'121212',	'121212',	'male',	'sousse',	0,	'test',	'123456789'),
(3,	'test',	'test',	'121212',	'121212',	'male',	'sousse',	0,	'test2',	'123456789'),
(6,	'test',	'test',	'121212',	'121212',	'male',	'sousse',	0,	'test55',	'123456789');

-- 2021-06-17 14:24:43
