-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Окт 19 2022 г., 16:46
-- Версия сервера: 5.7.21-20-beget-5.7.21-20-1-log
-- Версия PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `f97764hq_mybd`
--

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--
-- Создание: Окт 18 2022 г., 19:40
-- Последнее обновление: Окт 19 2022 г., 13:07
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `sku` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` float NOT NULL,
  `type` int(11) NOT NULL,
  `size` int(11) DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `volume` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`sku`, `name`, `price`, `type`, `size`, `weight`, `volume`) VALUES
('33545454866', 'rrwr', 33, 0, 34, 0, '0'),
('33865456', 'rrwr', 33, 0, 34, 0, '0'),
('345', 'bvbvb', 56, 2, 0, 0, '4444,444,444'),
('awesome', 'nmnn', 500, 0, 588, 0, '0'),
('SKUTest000', 'NameTest000', 25, 0, 200, 0, '0'),
('SKUTest001', 'NameTest001', 25, 1, 0, 200, '0'),
('SKUTest002', 'NameTest002', 25, 2, 0, 0, '200,200,200');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD UNIQUE KEY `sku` (`sku`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
