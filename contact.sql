-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 22, 2024 at 04:42 PM
-- Server version: 5.7.24
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contact`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_list`
--

CREATE TABLE `contact_list` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `isFavorite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact_list`
--

INSERT INTO `contact_list` (`id`, `name`, `email`, `isFavorite`) VALUES
(1, 'Flutter Deve', 'flutte@gmail.com', 1),
(5, 'Flutter Developer', 'flutte@gmail.com.my', 0),
(6, 'Flutter Developer', 'flutter@gmail.com.my', 0),
(7, 'asdasd', 'kamal@gmail.com', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_list`
--
ALTER TABLE `contact_list`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_4a4a63e2b3c863ec737ee537f8` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_list`
--
ALTER TABLE `contact_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
