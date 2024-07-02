CREATE DATABASE  IF NOT EXISTS `payrollsystem_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `payrollsystem_db`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: payrollsystem_db
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attendancedb`
--

DROP TABLE IF EXISTS `attendancedb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendancedb` (
  `attendanceid` int NOT NULL AUTO_INCREMENT,
  `employee_id` int NOT NULL,
  `clockIn` time NOT NULL,
  `clockOut` time NOT NULL,
  `workedHours` decimal(4,2) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`attendanceid`),
  UNIQUE KEY `attendanceid_UNIQUE` (`attendanceid`),
  KEY `employee_id_idx` (`employee_id`),
  CONSTRAINT `employeeId_attendance` FOREIGN KEY (`employee_id`) REFERENCES `employeedb` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=201 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendancedb`
--

LOCK TABLES `attendancedb` WRITE;
/*!40000 ALTER TABLE `attendancedb` DISABLE KEYS */;
INSERT INTO `attendancedb` VALUES (1,10015,'08:00:00','17:00:00',9.00,'2024-05-01'),(2,10016,'08:00:00','00:00:17',9.00,'2024-05-01'),(3,10017,'08:00:00','17:00:00',9.00,'2024-05-01'),(4,10018,'08:00:00','17:00:00',9.00,'2024-05-01'),(5,10019,'08:00:00','17:00:00',9.00,'2024-05-01'),(6,10020,'08:00:00','17:00:00',9.00,'2024-05-01'),(7,10021,'08:27:00','17:00:00',8.33,'2024-05-01'),(8,10022,'08:01:00','17:00:00',8.59,'2024-05-01'),(9,10023,'08:05:00','17:00:00',8.55,'2024-05-01'),(10,10024,'08:00:00','17:00:00',9.00,'2024-05-01'),(11,10025,'08:00:00','17:00:00',9.00,'2024-05-01'),(12,10026,'08:00:00','17:00:00',9.00,'2024-05-01'),(13,10027,'08:00:00','17:00:00',9.00,'2024-05-01'),(14,10028,'08:00:00','17:00:00',9.00,'2024-05-01'),(15,10029,'08:00:00','17:00:00',9.00,'2024-05-01'),(16,10030,'08:28:00','17:00:00',8.32,'2024-05-01'),(17,10031,'08:00:00','17:00:00',9.00,'2024-05-01'),(18,10032,'08:00:00','17:00:00',9.00,'2024-05-01'),(19,10033,'08:00:00','17:00:00',9.00,'2024-05-01'),(20,10034,'08:00:00','17:00:00',9.00,'2024-05-01'),(21,10015,'08:00:00','17:00:00',9.00,'2024-05-02'),(22,10016,'08:00:00','17:00:00',9.00,'2024-05-02'),(23,10017,'08:00:00','17:00:00',9.00,'2024-05-02'),(24,10018,'08:00:00','17:00:00',9.00,'2024-05-02'),(25,10019,'08:00:00','17:00:00',9.00,'2024-05-02'),(26,10020,'08:00:00','17:00:00',9.00,'2024-05-02'),(27,10021,'08:00:00','17:00:00',9.00,'2024-05-02'),(28,10022,'08:00:00','17:00:00',9.00,'2024-05-02'),(29,10023,'08:00:00','17:00:00',9.00,'2024-05-02'),(30,10024,'08:00:00','17:00:00',9.00,'2024-05-02'),(31,10025,'08:00:00','17:00:00',9.00,'2024-05-02'),(32,10026,'08:00:00','17:00:00',9.00,'2024-05-02'),(33,10027,'08:00:00','17:00:00',9.00,'2024-05-02'),(34,10028,'09:13:00','17:00:00',7.47,'2024-05-02'),(35,10029,'08:00:00','17:00:00',9.00,'2024-05-02'),(36,10030,'08:00:00','17:00:00',9.00,'2024-05-02'),(37,10031,'08:00:00','17:00:00',9.00,'2024-05-02'),(38,10032,'08:00:00','17:00:00',9.00,'2024-05-02'),(39,10033,'08:00:00','17:00:00',9.00,'2024-05-02'),(40,10034,'08:00:00','17:00:00',9.00,'2024-05-02'),(41,10015,'08:00:00','17:00:00',9.00,'2024-05-03'),(42,10016,'08:14:00','17:00:00',8.46,'2024-05-03'),(43,10017,'08:00:00','17:00:00',9.00,'2024-05-03'),(44,10018,'08:00:00','17:00:00',9.00,'2024-05-03'),(45,10019,'08:00:00','17:00:00',9.00,'2024-05-03'),(46,10020,'08:00:00','17:00:00',9.00,'2024-05-03'),(47,10021,'08:37:00','17:00:00',8.23,'2024-05-03'),(48,10022,'08:00:00','17:00:00',9.00,'2024-05-03'),(49,10023,'08:00:00','17:00:00',9.00,'2024-05-03'),(50,10024,'08:00:00','17:00:00',9.00,'2024-05-03'),(51,10025,'08:00:00','17:00:00',9.00,'2024-05-03'),(52,10026,'08:00:00','17:00:00',9.00,'2024-05-03'),(53,10027,'08:00:00','17:00:00',9.00,'2024-05-03'),(54,10028,'08:00:00','17:00:00',9.00,'2024-05-03'),(55,10029,'08:00:00','17:00:00',9.00,'2024-05-03'),(56,10030,'08:00:00','17:00:00',9.00,'2024-05-03'),(57,10031,'08:00:00','17:00:00',9.00,'2024-05-03'),(58,10032,'08:00:00','17:00:00',9.00,'2024-05-03'),(59,10033,'08:00:00','17:00:00',9.00,'2024-05-03'),(60,10034,'08:00:00','17:00:00',9.00,'2024-05-03'),(61,10015,'08:00:00','17:00:00',9.00,'2024-05-06'),(62,10016,'08:00:00','17:00:00',9.00,'2024-05-06'),(63,10017,'08:00:00','17:00:00',9.00,'2024-05-06'),(64,10018,'08:00:00','17:00:00',9.00,'2024-05-06'),(65,10019,'08:00:00','17:00:00',9.00,'2024-05-06'),(66,10020,'08:00:00','17:00:00',9.00,'2024-05-06'),(67,10021,'08:00:00','17:00:00',9.00,'2024-05-06'),(68,10022,'08:04:00','17:00:00',8.56,'2024-05-06'),(69,10023,'08:00:00','17:00:00',9.00,'2024-05-06'),(70,10024,'08:00:00','17:00:00',9.00,'2024-05-06'),(71,10025,'08:00:00','17:00:00',9.00,'2024-05-06'),(72,10026,'08:00:00','17:00:00',9.00,'2024-05-06'),(73,10027,'08:00:00','17:00:00',9.00,'2024-05-06'),(74,10028,'08:00:00','17:00:00',9.00,'2024-05-06'),(75,10029,'08:00:00','17:00:00',9.00,'2024-05-06'),(76,10030,'08:00:00','17:00:00',9.00,'2024-05-06'),(77,10031,'08:00:00','17:00:00',9.00,'2024-05-06'),(78,10032,'08:00:00','17:00:00',9.00,'2024-05-06'),(79,10033,'08:00:00','17:00:00',9.00,'2024-05-06'),(80,10034,'08:00:00','17:00:00',9.00,'2024-05-06'),(81,10015,'08:00:00','17:00:00',9.00,'2024-05-07'),(82,10016,'08:00:00','17:00:00',9.00,'2024-05-07'),(83,10017,'08:00:00','17:00:00',9.00,'2024-05-07'),(84,10018,'08:00:00','17:00:00',9.00,'2024-05-07'),(85,10019,'08:00:00','17:00:00',9.00,'2024-05-07'),(86,10020,'08:00:00','17:00:00',9.00,'2024-05-07'),(87,10021,'08:00:00','17:00:00',9.00,'2024-05-07'),(88,10022,'08:00:00','17:00:00',9.00,'2024-05-07'),(89,10023,'08:02:00','17:00:00',8.58,'2024-05-07'),(90,10024,'08:00:00','17:00:00',9.00,'2024-05-07'),(91,10025,'08:00:00','17:00:00',9.00,'2024-05-07'),(92,10026,'08:00:00','17:00:00',9.00,'2024-05-07'),(93,10027,'08:00:00','17:00:00',9.00,'2024-05-07'),(94,10028,'08:00:00','17:00:00',9.00,'2024-05-07'),(95,10029,'08:00:00','17:00:00',9.00,'2024-05-07'),(96,10030,'08:00:00','17:00:00',9.00,'2024-05-07'),(97,10031,'08:00:00','17:00:00',9.00,'2024-05-07'),(98,10032,'08:00:00','17:00:00',9.00,'2024-05-07'),(99,10033,'10:01:00','17:00:00',6.59,'2024-05-07'),(100,10034,'08:00:00','17:00:00',9.00,'2024-05-07'),(101,10015,'08:00:00','17:00:00',9.00,'2024-05-08'),(102,10016,'08:00:00','17:00:00',9.00,'2024-05-08'),(103,10017,'08:00:00','17:00:00',9.00,'2024-05-08'),(104,10018,'08:00:00','17:00:00',9.00,'2024-05-08'),(105,10019,'08:00:00','17:00:00',9.00,'2024-05-08'),(106,10020,'08:00:00','17:00:00',9.00,'2024-05-08'),(107,10021,'08:00:00','17:00:00',9.00,'2024-05-08'),(108,10022,'08:00:00','17:00:00',9.00,'2024-05-08'),(109,10023,'08:00:00','17:00:00',9.00,'2024-05-08'),(110,10024,'08:00:00','17:00:00',9.00,'2024-05-08'),(111,10025,'08:00:00','17:00:00',9.00,'2024-05-08'),(112,10026,'08:00:00','17:00:00',9.00,'2024-05-08'),(113,10027,'08:07:00','17:00:00',8.53,'2024-05-08'),(114,10028,'08:00:00','17:00:00',9.00,'2024-05-08'),(115,10029,'08:00:00','17:00:00',9.00,'2024-05-08'),(116,10030,'08:00:00','17:00:00',9.00,'2024-05-08'),(117,10031,'08:00:00','17:00:00',9.00,'2024-05-08'),(118,10032,'08:00:00','17:00:00',9.00,'2024-05-08'),(119,10033,'08:00:00','17:00:00',9.00,'2024-05-08'),(120,10034,'08:00:00','17:00:00',9.00,'2024-05-08'),(121,10015,'08:00:00','17:00:00',9.00,'2024-05-09'),(122,10016,'08:00:00','17:00:00',9.00,'2024-05-09'),(123,10017,'08:00:00','17:00:00',9.00,'2024-05-09'),(124,10018,'08:00:00','17:00:00',9.00,'2024-05-09'),(125,10019,'08:00:00','17:00:00',9.00,'2024-05-09'),(126,10020,'08:00:00','17:00:00',9.00,'2024-05-09'),(127,10021,'08:12:00','17:00:00',8.48,'2024-05-09'),(128,10022,'08:00:00','17:00:00',9.00,'2024-05-09'),(129,10023,'08:00:00','17:00:00',9.00,'2024-05-09'),(130,10024,'08:00:00','17:00:00',9.00,'2024-05-09'),(131,10025,'08:00:00','17:00:00',9.00,'2024-05-09'),(132,10026,'08:00:00','17:00:00',9.00,'2024-05-09'),(133,10027,'08:00:00','17:00:00',9.00,'2024-05-09'),(134,10028,'08:00:00','17:00:00',9.00,'2024-05-09'),(135,10029,'08:00:00','17:00:00',9.00,'2024-05-09'),(136,10030,'08:00:00','17:00:00',9.00,'2024-05-09'),(137,10031,'08:00:00','17:00:00',9.00,'2024-05-09'),(138,10032,'08:00:00','17:00:00',9.00,'2024-05-09'),(139,10033,'08:00:00','17:00:00',9.00,'2024-05-09'),(140,10034,'08:00:00','17:00:00',9.00,'2024-05-09'),(141,10015,'08:00:00','17:00:00',9.00,'2024-05-10'),(142,10016,'08:00:00','17:00:00',9.00,'2024-05-10'),(143,10017,'08:00:00','17:00:00',9.00,'2024-05-10'),(144,10018,'08:00:00','17:00:00',9.00,'2024-05-10'),(145,10019,'08:00:00','17:00:00',9.00,'2024-05-10'),(146,10020,'08:00:00','17:00:00',9.00,'2024-05-10'),(147,10021,'08:00:00','17:00:00',9.00,'2024-05-10'),(148,10022,'08:00:00','17:00:00',9.00,'2024-05-10'),(149,10023,'08:00:00','17:00:00',9.00,'2024-05-10'),(150,10024,'08:00:00','17:00:00',9.00,'2024-05-10'),(151,10025,'08:23:00','17:00:00',8.37,'2024-05-10'),(152,10026,'08:00:00','17:00:00',9.00,'2024-05-10'),(153,10027,'08:00:00','17:00:00',9.00,'2024-05-10'),(154,10028,'08:00:00','17:00:00',9.00,'2024-05-10'),(155,10029,'08:00:00','17:00:00',9.00,'2024-05-10'),(156,10030,'08:00:00','17:00:00',9.00,'2024-05-10'),(157,10031,'08:00:00','17:00:00',9.00,'2024-05-10'),(158,10032,'08:00:00','17:00:00',9.00,'2024-05-10'),(159,10033,'08:00:00','17:00:00',9.00,'2024-05-10'),(160,10034,'08:00:00','17:00:00',9.00,'2024-05-10'),(161,10015,'08:00:00','17:00:00',9.00,'2024-05-13'),(162,10016,'08:00:00','17:00:00',9.00,'2024-05-13'),(163,10017,'08:00:00','17:00:00',9.00,'2024-05-13'),(164,10018,'08:00:00','17:00:00',9.00,'2024-05-13'),(165,10019,'08:00:00','17:00:00',9.00,'2024-05-13'),(166,10020,'08:00:00','17:00:00',9.00,'2024-05-13'),(167,10021,'08:00:00','17:00:00',9.00,'2024-05-13'),(168,10022,'08:00:00','17:00:00',9.00,'2024-05-13'),(169,10023,'08:00:00','17:00:00',9.00,'2024-05-13'),(170,10024,'08:00:00','17:00:00',9.00,'2024-05-13'),(171,10025,'08:00:00','17:00:00',9.00,'2024-05-13'),(172,10026,'08:00:00','17:00:00',9.00,'2024-05-13'),(173,10027,'08:18:00','17:00:00',8.42,'2024-05-13'),(174,10028,'08:00:00','17:00:00',9.00,'2024-05-13'),(175,10029,'08:00:00','17:00:00',9.00,'2024-05-13'),(176,10030,'08:00:00','17:00:00',9.00,'2024-05-13'),(177,10031,'08:00:00','17:00:00',9.00,'2024-05-13'),(178,10032,'08:00:00','17:00:00',9.00,'2024-05-13'),(179,10033,'08:00:00','17:00:00',9.00,'2024-05-13'),(180,10034,'08:00:00','17:00:00',9.00,'2024-05-13'),(181,10015,'08:00:00','17:00:00',9.00,'2024-05-14'),(182,10016,'08:00:00','17:00:00',9.00,'2024-05-14'),(183,10017,'08:00:00','17:00:00',9.00,'2024-05-14'),(184,10018,'08:00:00','17:00:00',9.00,'2024-05-14'),(185,10019,'08:00:00','17:00:00',9.00,'2024-05-14'),(186,10020,'08:00:00','17:00:00',9.00,'2024-05-14'),(187,10021,'08:00:00','17:00:00',9.00,'2024-05-14'),(188,10022,'08:00:00','17:00:00',9.00,'2024-05-14'),(189,10023,'08:00:00','17:00:00',9.00,'2024-05-14'),(190,10024,'09:15:00','17:00:00',7.45,'2024-05-14'),(191,10025,'08:00:00','17:00:00',9.00,'2024-05-14'),(192,10026,'08:00:00','17:00:00',9.00,'2024-05-14'),(193,10027,'08:00:00','17:00:00',9.00,'2024-05-14'),(194,10028,'08:00:00','17:00:00',9.00,'2024-05-14'),(195,10029,'08:00:00','17:00:00',9.00,'2024-05-14'),(196,10030,'08:00:00','17:00:00',9.00,'2024-05-14'),(197,10031,'08:00:00','17:00:00',9.00,'2024-05-14'),(198,10032,'08:00:00','17:00:00',9.00,'2024-05-14'),(199,10033,'08:00:00','17:00:00',9.00,'2024-05-14'),(200,10034,'08:00:00','17:00:00',9.00,'2024-05-14');
/*!40000 ALTER TABLE `attendancedb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authdb`
--

DROP TABLE IF EXISTS `authdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authdb` (
  `userId` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userId_UNIQUE` (`userId`) /*!80000 INVISIBLE */
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authdb`
--

LOCK TABLES `authdb` WRITE;
/*!40000 ALTER TABLE `authdb` DISABLE KEYS */;
INSERT INTO `authdb` VALUES ('EmpId10001','password','Employee'),('EmpId10002','password','Employee'),('EmpId10003','password','Employee'),('EmpId10004','password','Employee'),('EmpId10005','password','IT'),('EmpId10006','password','HR'),('EmpId10007','password','HR'),('EmpId10008','password','HR'),('EmpId10009','password','HR'),('EmpId10010','password','HR'),('EmpId10011','password','Payroll'),('EmpId10012','password','Payroll'),('EmpId10013','password','Payroll'),('EmpId10014','password','Payroll'),('EmpId10015','password','Employee'),('EmpId10016','password','Employee'),('EmpId10017','password','Employee'),('EmpId10018','password','Employee'),('EmpId10019','password','Employee'),('EmpId10020','password','Employee'),('EmpId10021','password','Employee'),('EmpId10022','password','Employee'),('EmpId10023','password','Employee'),('EmpId10024','password','Employee'),('EmpId10025','password','Employee'),('EmpId10026','password','Employee'),('EmpId10027','password','Employee'),('EmpId10028','password','Employee'),('EmpId10029','password','Employee'),('EmpId10030','password','Employee'),('EmpId10031','password','Employee'),('EmpId10032','password','Employee'),('EmpId10033','password','Employee'),('EmpId10034','password','Employee');
/*!40000 ALTER TABLE `authdb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compensationdb`
--

DROP TABLE IF EXISTS `compensationdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compensationdb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int NOT NULL,
  `basicSalary` decimal(8,2) NOT NULL,
  `riceSubsidy` decimal(8,2) NOT NULL,
  `phoneAllowance` decimal(8,2) NOT NULL,
  `clothingAllowance` decimal(8,2) NOT NULL,
  `grossSemimonthlyRate` decimal(8,2) NOT NULL,
  `hourlyRate` decimal(5,2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `employee_id_UNIQUE` (`employee_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `employee_id_idx` (`employee_id`),
  CONSTRAINT `employeeId_compensation` FOREIGN KEY (`employee_id`) REFERENCES `employeedb` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compensationdb`
--

LOCK TABLES `compensationdb` WRITE;
/*!40000 ALTER TABLE `compensationdb` DISABLE KEYS */;
INSERT INTO `compensationdb` VALUES (1,10001,90000.00,1500.00,2000.00,1000.00,45000.00,535.71),(2,10002,60000.00,1500.00,2000.00,1000.00,30000.00,357.14),(3,10003,60000.00,1500.00,2000.00,1000.00,30000.00,357.14),(4,10004,60000.00,1500.00,2000.00,1000.00,30000.00,357.14),(5,10005,52670.00,1500.00,1000.00,1000.00,26335.00,313.51),(6,10006,52670.00,1500.00,1000.00,1000.00,26335.00,313.51),(7,10007,42975.00,1500.00,800.00,800.00,21488.00,255.80),(8,10008,22500.00,1500.00,500.00,500.00,11250.00,133.93),(9,10009,22500.00,1500.00,500.00,500.00,11250.00,133.93),(10,10010,52670.00,1500.00,1000.00,1000.00,26335.00,313.51),(11,10011,50825.00,1500.00,1000.00,1000.00,25413.00,302.53),(12,10012,38475.00,1500.00,800.00,800.00,19238.00,229.02),(13,10013,24000.00,1500.00,500.00,500.00,12000.00,142.86),(14,10014,24000.00,1500.00,500.00,500.00,12000.00,142.86),(15,10015,53500.00,1500.00,1000.00,1000.00,26750.00,318.45),(16,10016,42975.00,1500.00,800.00,800.00,21488.00,255.80),(17,10017,41850.00,1500.00,800.00,800.00,20925.00,249.11),(18,10018,22500.00,1500.00,500.00,500.00,11250.00,133.93),(19,10019,22500.00,1500.00,500.00,500.00,11250.00,133.93),(20,10020,23250.00,1500.00,500.00,500.00,11625.00,138.39),(21,10021,23250.00,1500.00,500.00,500.00,11625.00,138.39),(22,10022,24000.00,1500.00,500.00,500.00,12000.00,142.86),(23,10023,22500.00,1500.00,500.00,500.00,11250.00,133.93),(24,10024,22500.00,1500.00,500.00,500.00,11250.00,133.93),(25,10025,24000.00,1500.00,500.00,500.00,12000.00,142.86),(26,10026,24750.00,1500.00,500.00,500.00,12375.00,147.32),(27,10027,24750.00,1500.00,500.00,500.00,12375.00,147.32),(28,10028,24000.00,1500.00,500.00,500.00,12000.00,142.86),(29,10029,22500.00,1500.00,500.00,500.00,11250.00,133.93),(30,10030,22500.00,1500.00,500.00,500.00,11250.00,133.93),(31,10031,22500.00,1500.00,500.00,500.00,11250.00,133.93),(32,10032,52670.00,1500.00,1000.00,1000.00,26335.00,313.51),(33,10033,52670.00,1500.00,1000.00,1000.00,26335.00,313.51),(34,10034,52670.00,1500.00,1000.00,1000.00,26335.00,313.51);
/*!40000 ALTER TABLE `compensationdb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `employee_attendance`
--

DROP TABLE IF EXISTS `employee_attendance`;
/*!50001 DROP VIEW IF EXISTS `employee_attendance`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `employee_attendance` AS SELECT 
 1 AS `employee_id`,
 1 AS `workedHours`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `employee_contacts`
--

DROP TABLE IF EXISTS `employee_contacts`;
/*!50001 DROP VIEW IF EXISTS `employee_contacts`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `employee_contacts` AS SELECT 
 1 AS `first_name`,
 1 AS `last_name`,
 1 AS `phone_number`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `employee_leave`
--

DROP TABLE IF EXISTS `employee_leave`;
/*!50001 DROP VIEW IF EXISTS `employee_leave`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `employee_leave` AS SELECT 
 1 AS `employee_id`,
 1 AS `requestLeave`,
 1 AS `reason`,
 1 AS `approveLeave`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `employee_payrollsummary`
--

DROP TABLE IF EXISTS `employee_payrollsummary`;
/*!50001 DROP VIEW IF EXISTS `employee_payrollsummary`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `employee_payrollsummary` AS SELECT 
 1 AS `EMPLOYEE_NO`,
 1 AS `Employee_FullName`,
 1 AS `Position`,
 1 AS `Department`,
 1 AS `Gross_Income`,
 1 AS `Social_Security_No`,
 1 AS `Social_Security_Distribution`,
 1 AS `Philhealth_No`,
 1 AS `Philhealth_Contribution`,
 1 AS `Pagibig_No`,
 1 AS `Pagibig_Distribution`,
 1 AS `TIN`,
 1 AS `Withholding_Tax`,
 1 AS `Net_Pay`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `employee_payslip`
--

DROP TABLE IF EXISTS `employee_payslip`;
/*!50001 DROP VIEW IF EXISTS `employee_payslip`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `employee_payslip` AS SELECT 
 1 AS `PAYSLIP_NO`,
 1 AS `EMPLOYEE_ID`,
 1 AS `EMPLOYEE_NAME`,
 1 AS `PERIOD_START_DATE`,
 1 AS `PERIOD_END_DATE`,
 1 AS `EMPLOYEE_POSITION_DEPARTMENT`,
 1 AS `Monthly_Rate`,
 1 AS `Hourly_Rate`,
 1 AS `Days_Worked`,
 1 AS `Overtime`,
 1 AS `GROSS_INCOME`,
 1 AS `Rice_Subsidy`,
 1 AS `Phone_Allowance`,
 1 AS `Clothing_Allowance`,
 1 AS `TOTAL`,
 1 AS `SSS`,
 1 AS `Philhealth`,
 1 AS `Pagibig`,
 1 AS `Withholding_Tax`,
 1 AS `TOTAL_DEDUCTIONS`,
 1 AS `GrossIncome`,
 1 AS `Benefits`,
 1 AS `Deductions`,
 1 AS `TAKE_HOME_PAY`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `employee_salary`
--

DROP TABLE IF EXISTS `employee_salary`;
/*!50001 DROP VIEW IF EXISTS `employee_salary`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `employee_salary` AS SELECT 
 1 AS `employee_id`,
 1 AS `basicSalary`,
 1 AS `hourlyRate`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `employeedb`
--

DROP TABLE IF EXISTS `employeedb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employeedb` (
  `employee_id` int NOT NULL,
  `user_id` varchar(10) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `birthday` date NOT NULL,
  `Street_Barangay` varchar(255) NOT NULL,
  `City_Municipality` varchar(255) NOT NULL,
  `Province` varchar(255) NOT NULL,
  `Zip_Code` int NOT NULL,
  `phone_number` varchar(45) NOT NULL,
  `sss` varchar(45) NOT NULL,
  `philhealth` varchar(45) NOT NULL,
  `tin` varchar(45) NOT NULL,
  `pagibig` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `position` varchar(45) NOT NULL,
  `department` varchar(45) NOT NULL,
  `immediate_supervisor` varchar(45) NOT NULL,
  PRIMARY KEY (`employee_id`),
  UNIQUE KEY `employee_id_idx` (`employee_id`),
  KEY `userId_idx` (`user_id`),
  KEY `last_name_first_name_idx` (`last_name`,`first_name`),
  CONSTRAINT `userId` FOREIGN KEY (`user_id`) REFERENCES `authdb` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeedb`
--

LOCK TABLES `employeedb` WRITE;
/*!40000 ALTER TABLE `employeedb` DISABLE KEYS */;
INSERT INTO `employeedb` VALUES (10001,'EmpId10001','Manuel III','Garcia','1983-10-11','Valero Carpark Building Valero Street','Makati City','Metro Manila',1227,'966-860-270','44-4506057-3','820126853951','442-605-657-000','691295330870','Regular','Chief Executive Officer','Executive','N/A'),(10002,'EmpId10002','Antonio','Lim','1988-06-19','Block 1 Lot 8 and 2 San Antonio De Padua 2','Dasmarinas','Cavite',4114,'171-867-411','52-2061274-9','331735646338','683-102-776-000','663904995411','Regular','Chief Operating Officer','Executive','Garcia, Manuel III'),(10003,'EmpId10003','Bianca Sofia','Aquino','1989-08-04','Rm. 402 4/F Jiao Building Timog Avenue Cor. Quezon Avenue','Quezon City','Metro Manila',1100,'966-889-370','30-8870406-2','177451189665','971-711-280-000','171519773969','Regular','Chief Finance Officer','Executive','Garcia, Manuel III'),(10004,'EmpId10004','Isabella','Reyes','1994-06-16','460 Solanda Street Intramuros','Manila','Metro Manila',1000,'786-868-477','40-2511815-0','341911411254','876-809-437-000','416946776041','Regular','Chief Marketing Officer','Executive','Garcia, Manuel III'),(10005,'EmpId10005','Eduard','Hernandez','1989-09-23','National Highway','Ginoog','Misamis Oriental',9014,'088-861-012','50-5577638-1','957436191812','031-702-374-000','952347222457','Regular','IT Operations and Systems','IT','Lim, Antonio'),(10006,'EmpId10006','Andrea Mae','Villanueva','1988-02-14','17/85 Stracke Via Suite 042 Poblacion','Las PiÃƒÂ±as','Dinagat Islands',4783,'918-621-603','49-1632020-8','382189453145','317-674-022-000','441093369646','Regular','HR Manager','HR','Lim, Antonio'),(10007,'EmpId10007','Brad ','San Jose','1996-03-15','99 Strosin Hills Poblacion','Bislig','Tawi-Tawi',5340,'797-009-261','40-2400714-1','239192926939','672-474-690-000','210850209964','Regular','HR Team Leader','HR','Villanueva, Andrea Mae'),(10008,'EmpId10008','Alice','Romualdez','1992-05-14','12A/33 Upton Isle Apt. 420','Roxas City','Surigao del Norte',1814,'983-606-799','55-4476527-2','545652640232','888-572-294-000','211385556888','Regular','HR Rank and File','HR','San, Jose Brad'),(10009,'EmpId10009','Rosie ','Atienza','1948-09-24','90A Dibbert Terrace Apt. 190','San Lorenzo','Davao del Norte',6056,'266-036-427','41-0644692-3','708988234853','604-997-793-000','260107732354','Regular','HR Rank and File','HR','San, Jose Brad'),(10010,'EmpId10010','Roderick','Alvaro','1988-03-30','#284 T. Morato corner Scout Rallos Street','Quezon City','Metro Manila',1103,'053-381-386','64-7605054-4','578114853194','525-420-419-000','799254095212','Regular','Accounting Head','Accounting','Aquino, Bianca Sofia '),(10011,'EmpId10011','Anthony','Salcedo','1993-09-14','93/54 Shanahan Alley Apt. 183','Santo Tomas','Masbate',1572,'070-766-300','26-9647608-3','126445315651','210-805-911-000','218002473454','Regular','Payroll Manager','Payroll','Alvaro, Roderick'),(10012,'EmpId10012','Josie ','Lopez','1987-01-14','49 Springs Apt. 266 Poblacion','Taguig','Occidental Mindoro',3200,'478-355-427','44-8563448-3','431709011012','218-489-737-000','113071293354','Regular','Payroll Team Leader','Payroll','Salcedo, Anthony'),(10013,'EmpId10013','Martha','Farala','1942-01-11','42/25 Sawayn Stream','Ubay','Zamboanga del Norte',1208,'329-034-366','45-5656375-0','233693897247','210-835-851-000','631130283546','Regular','Payroll Rank and File','Payroll','Salcedo, Anthony'),(10014,'EmpId10014','Leila','Martinez','1970-07-11','37/46 Kulas Roads','Maragondon','Quirino',962,'877-110-749','27-2090996-4','515741057496','275-792-513-000','101205445886','Regular','Payroll Rank and File','Payroll','Salcedo, Anthony'),(10015,'EmpId10015','Fredrick ','Romualdez','1985-03-10','22A/52 Lubowitz Meadows','Pilila','Zambales',4895,'023-079-009','26-8768374-1','308366860059','598-065-761-000','223057707853','Regular','Account Manager','Accounting','Lim, Antonio'),(10016,'EmpId10016','Christian','Mata','1987-10-21','90 O\'Keefe Spur Apt. 379','Catigbian','Sulu',2772,'783-776-744','49-2959312-6','824187961962','103-100-522-000','631052853464','Regular','Account Team Leader','Accounting','Romualdez, Fredrick '),(10017,'EmpId10017','Selena ','De Leon','1975-02-20','89A Armstrong Trace','Compostela','Maguindanao',7874,'975-432-139','27-2090208-8','587272469938','482-259-498-000','719007608464','Regular','Account Team Leader','Accounting','Romualdez, Fredrick '),(10018,'EmpId10018','Allison ','San Jose','1986-06-24','08 Grant Drive Suite 406 Poblacion','Iloilo','La Union',9186,'179-075-129','45-3251383-0','745148459521','121-203-336-000','114901859343','Regular','Account Rank and File','Accounting','Mata, Christian'),(10019,'EmpId10019','Cydney ','Rosario','1996-10-06','93A/21 Berge Points','Tapaz','Quezon',1100,'868-819-912','49-1629900-2','579253435499','122-244-511-000','265104358643','Regular','Account Rank and File','Accounting','Mata, Christian'),(10020,'EmpId10020','Mark ','Bautista','1991-02-12','65 Murphy Center Suite 094 Poblacion','Palayan','Quirino',5636,'683-725-348','49-1647342-5','399665157135','273-970-941-000','260054585575','Regular','Account Rank and File','Accounting','Mata, Christian'),(10021,'EmpId10021','Darlene ','Lazaro','1985-11-25','47A/94 Larkin Plaza Apt. 179 Poblacion','Caloocan','Quirino',2751,'740-721-558','45-5617168-2','606386917510','354-650-951-000','104907708845','Probationary','Account Rank and File','Accounting','Mata, Christian'),(10022,'EmpId10022','Kolby ','Delos Santos','1980-02-26','06A Gulgowski Extensions','Bongabon','Zamboanga del Sur',6085,'739-443-033','52-0109570-6','357451271274','187-500-345-000','113017988667','Probationary','Account Rank and File','Accounting','Mata, Christian'),(10023,'EmpId10023','Vella ','Santos','1983-12-31','99A Padberg Spring Poblacion','Mabalacat','Lanao del Sur',3959,'955-879-269','52-9883524-3','548670482885','101-558-994-000','360028104576','Probationary','Account Rank and File','Accounting','Mata, Christian'),(10024,'EmpId10024','Tomas','Del Rosario','1978-12-18','80A/48 Ledner Ridges Poblacion','Kabankalan','Marinduque',8870,'882-550-989','45-5866331-6','953901539995','560-735-732-000','913108649964','Probationary','Account Rank and File','Accounting','Mata, Christian'),(10025,'EmpId10025','Jacklyn ','Tolentino','1984-05-19','96/48 Watsica Flats Suite 734 Poblacion','Malolos','Ifugao',1844,'675-757-366','47-1692793-0','753800654114','841-177-857-000','210546661243','Probationary','Account Rank and File','Accounting','De Leon, Selena'),(10026,'EmpId10026','Percival ','Gutierrez','1970-12-18','58A Wilderman Walks Poblacion','Digos','Davao del Sur',5822,'512-899-876','40-9504657-8','797639382265','502-995-671-000','210897095686','Probationary','Account Rank and File','Accounting','De Leon, Selena'),(10027,'EmpId10027','Garfield ','Manalaysay','1986-08-28','60 Goyette Valley Suite 219 Poblacion','Tabuk','Lanao del Sur',3159,'948-628-136','45-3298166-4','810909286264','336-676-445-000','211274476563','Probationary','Account Rank and File','Accounting','De Leon, Selena'),(10028,'EmpId10028','Lizeth ','Villegas','1981-12-12','66/77 Mann Views','Luisiana','Dinagat Islands',1263,'332-372-215','40-2400719-4','934389652994','210-395-397-000','122238077997','Probationary','Account Rank and File','Accounting','De Leon, Selena'),(10029,'EmpId10029','Carol ','Ramos','1978-08-20','72/70 Stamm Spurs','Bustos','Iloilo',4550,'250-700-389','60-1152206-4','351830469744','395-032-717-000','212141893454','Probationary','Account Rank and File','Accounting','De Leon, Selena'),(10030,'EmpId10030','Emelia ','Maceda','1973-04-14','50A/83 Bahringer Oval Suite 145','Kiamba','Nueva Ecija',7688,'973-358-041','54-1331005-0','465087894112','215-973-013-000','515012579765','Probationary','Account Rank and File','Accounting','De Leon, Selena'),(10031,'EmpId10031','Delia ','Aguilar','1989-01-27','95 Cremin Junction','Surallah','Cotabato',2809,'529-705-439','52-1859253-1','136451303068','599-312-588-000','110018813465','Probationary','Account Rank and File','Accounting','De Leon, Selena'),(10032,'EmpId10032','John Rafael','Castro','1992-02-09','Hi-wayYati','liloan','Cebu',6002,'332-424-955 ','26-7145133-4','601644902402','404-768-309-000','697764069311','Regular','Sales & Marketing','Sales & Marketing','Reyes, Isabella'),(10033,'EmpId10033','Carlos Ian','Martinez','1990-11-16','Bulala','Camalaniugan','Cagayan',3510,'078-854-208','11-5062972-7','380685387212','256-436-296-000','993372963726','Regular','Supply Chain and Logistics','Supply Chain & Logistics','Reyes, Isabella'),(10034,'EmpId10034','Beatriz','Santos','1990-08-07','Agapita Building','Manila','Metro Manila',1204,'526-639-511','20-2987501-5','918460050077','911-529-713-000','874042259378','Regular','Customer Service and Relations','Customer Service','Reyes, Isabella');
/*!40000 ALTER TABLE `employeedb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leavedb`
--

DROP TABLE IF EXISTS `leavedb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leavedb` (
  `leave_id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int NOT NULL,
  `leaveAllowance` decimal(5,2) NOT NULL,
  `requestLeave` date NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `leaveType` varchar(45) NOT NULL,
  `reason` varchar(45) NOT NULL,
  `approveLeave` varchar(45) NOT NULL,
  PRIMARY KEY (`leave_id`),
  UNIQUE KEY `leave_id_UNIQUE` (`leave_id`),
  KEY `employeeId_idx` (`employee_id`),
  CONSTRAINT `employeeId_leave` FOREIGN KEY (`employee_id`) REFERENCES `employeedb` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leavedb`
--

LOCK TABLES `leavedb` WRITE;
/*!40000 ALTER TABLE `leavedb` DISABLE KEYS */;
INSERT INTO `leavedb` VALUES (1,10018,10.00,'2024-03-01','2024-03-01','2024-03-01','Vacation Leave','Vacation Leave','Approved'),(2,10018,10.00,'2024-03-04','2024-03-04','2024-03-04','Sick Leave','Sick Leave','Approved'),(3,10018,10.00,'2024-03-05','2024-03-05','2024-03-05','Sick Leave','Sick Leave','Approved'),(4,10018,10.00,'2024-03-21','2024-03-21','2024-03-21','Vacation Leave','Vacation Leave','Pending'),(5,10018,10.00,'2024-03-22','2024-03-22','2024-03-22','Vacation Leave','Vacation Leave','Pending'),(6,10019,14.00,'2024-03-01','2024-03-01','2024-03-01','Vacation Leave','Vacation Leave','Rejected'),(7,10019,14.00,'2024-03-04','2024-03-04','2024-03-04','Sick Leave','Sick Leave','Approved'),(8,10019,14.00,'2024-03-05','2024-03-05','2024-03-05','Sick Leave','Sick Leave','Approved'),(9,10019,14.00,'2024-03-21','2024-03-21','2024-03-21','Vacation Leave','Vacation Leave','Pending'),(10,10019,14.00,'2024-03-22','2024-03-22','2024-03-22','Vacation Leave','Vacation Leave','Pending'),(11,10020,12.00,'2024-03-01','2024-03-01','2024-03-01','Vacation Leave','Vacation Leave','Cancelled'),(12,10020,12.00,'2024-03-04','2024-03-04','2024-03-04','Sick Leave','Sick Leave','Approved'),(13,10020,12.00,'2024-03-05','2024-03-05','2024-03-05','Sick Leave','Sick Leave','Approved'),(14,10020,12.00,'2024-03-21','2024-03-21','2024-03-21','Vacation Leave','Vacation Leave','Pending'),(15,10020,12.00,'2024-03-22','2024-03-22','2024-03-22','Vacation Leave','Vacation Leave','Pending'),(16,10021,8.00,'2024-03-01','2024-03-01','2024-03-01','Vacation Leave','Vacation Leave','Approved'),(17,10021,8.00,'2024-03-04','2024-03-04','2024-03-04','Sick Leave','Sick Leave','Approved'),(18,10021,8.00,'2024-03-05','2024-03-05','2024-03-05','Sick Leave','Sick Leave','Approved'),(19,10021,8.00,'2024-03-21','2024-03-21','2024-03-21','Vacation Leave','Vacation Leave','Pending'),(20,10021,8.00,'2024-03-22','2024-03-22','2024-03-22','Vacation Leave','Vacation Leave','Pending');
/*!40000 ALTER TABLE `leavedb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `overtimedb`
--

DROP TABLE IF EXISTS `overtimedb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `overtimedb` (
  `overtimeid` int NOT NULL AUTO_INCREMENT,
  `employeeId` int NOT NULL,
  `overtimeDate` date NOT NULL,
  `overtimeHours` time NOT NULL,
  PRIMARY KEY (`overtimeid`),
  UNIQUE KEY `overtimeid_UNIQUE` (`overtimeid`),
  KEY `employeeId_ot_idx` (`employeeId`),
  CONSTRAINT `employeeId_ot` FOREIGN KEY (`employeeId`) REFERENCES `employeedb` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `overtimedb`
--

LOCK TABLES `overtimedb` WRITE;
/*!40000 ALTER TABLE `overtimedb` DISABLE KEYS */;
INSERT INTO `overtimedb` VALUES (1,10015,'2024-05-15','00:00:02'),(2,10016,'2024-05-15','00:00:02'),(3,10017,'2024-05-15','00:00:04'),(4,10018,'2024-05-15','00:00:03'),(5,10019,'2024-05-15','00:00:01'),(6,10020,'2024-05-15','00:00:03'),(7,10021,'2024-05-15','00:00:01'),(8,10022,'2024-05-15','00:00:01');
/*!40000 ALTER TABLE `overtimedb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagibigcontribution_matrix`
--

DROP TABLE IF EXISTS `pagibigcontribution_matrix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagibigcontribution_matrix` (
  `id` int NOT NULL,
  `SalaryMin` varchar(45) DEFAULT NULL,
  `SalaryMax` varchar(45) DEFAULT NULL,
  `ContributionRate` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagibigcontribution_matrix`
--

LOCK TABLES `pagibigcontribution_matrix` WRITE;
/*!40000 ALTER TABLE `pagibigcontribution_matrix` DISABLE KEYS */;
INSERT INTO `pagibigcontribution_matrix` VALUES (1,'1.00','1,000.00',100.00),(2,'1,000.00','1,500.00',0.03),(3,'1,500.00','over',0.04);
/*!40000 ALTER TABLE `pagibigcontribution_matrix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payslipdb`
--

DROP TABLE IF EXISTS `payslipdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payslipdb` (
  `payslipId` int NOT NULL AUTO_INCREMENT,
  `employeeId` int NOT NULL,
  `sssDeduction` decimal(8,2) NOT NULL,
  `philhealthDeduction` decimal(8,2) NOT NULL,
  `pagibigDeduction` decimal(8,2) NOT NULL,
  `incomeTax` decimal(8,2) NOT NULL,
  `workedDays` int NOT NULL,
  `total_workedHours` int NOT NULL,
  `overtimePay` decimal(8,2) NOT NULL,
  `totalDeductions` decimal(8,2) NOT NULL,
  `totalEarnings` decimal(8,2) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  PRIMARY KEY (`payslipId`),
  KEY `employeeIdpayslip_idx` (`employeeId`),
  CONSTRAINT `employeeId_payslip` FOREIGN KEY (`employeeId`) REFERENCES `employeedb` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payslipdb`
--

LOCK TABLES `payslipdb` WRITE;
/*!40000 ALTER TABLE `payslipdb` DISABLE KEYS */;
INSERT INTO `payslipdb` VALUES (1,10001,1125.00,1800.00,1800.00,16415.40,21,168,0.00,21140.40,73359.60,'2024-04-15','2024-05-15'),(2,10002,1125.00,1800.00,1200.00,8135.50,21,168,0.00,12260.50,52239.50,'2024-04-15','2024-05-15'),(3,10003,1125.00,1800.00,1200.00,8135.50,21,168,0.00,12260.50,52239.50,'2024-04-15','2024-05-15'),(4,10004,1125.00,1800.00,1200.00,8135.50,21,168,0.00,12260.50,52239.50,'2024-04-15','2024-05-15'),(5,10005,1125.00,1580.10,1053.40,6394.63,21,168,0.00,10153.13,46016.88,'2024-04-15','2024-05-15'),(6,10006,1125.00,1580.10,1053.40,6394.63,21,168,0.00,10153.13,46016.88,'2024-04-15','2024-05-15'),(7,10007,1125.00,1289.25,859.50,4092.06,21,168,0.00,7365.81,38709.19,'2024-04-15','2024-05-15'),(8,10008,1012.50,675.00,450.00,0.00,21,168,0.00,2137.50,22862.50,'2024-04-15','2024-05-15'),(9,10009,1012.50,675.00,450.00,0.00,21,168,0.00,2137.50,22862.50,'2024-04-15','2024-05-15'),(10,10010,1125.00,1580.10,1053.40,6394.63,21,168,0.00,10153.13,46016.88,'2024-04-15','2024-05-15'),(11,10011,1125.00,1524.75,1016.50,5956.44,21,168,0.00,9622.69,44702.31,'2024-04-15','2024-05-15'),(12,10012,1125.00,1154.25,769.50,3023.31,21,168,0.00,6072.06,35502.94,'2024-04-15','2024-05-15'),(13,10013,1080.00,720.00,480.00,177.40,21,168,0.00,2457.40,24042.60,'2024-04-15','2024-05-15'),(14,10014,1080.00,720.00,480.00,177.40,21,168,0.00,2457.40,24042.60,'2024-04-15','2024-05-15'),(15,10015,1125.00,1605.00,1070.00,6591.75,21,168,0.00,10391.75,46608.25,'2024-04-15','2024-05-15'),(16,10016,1125.00,1289.25,859.50,4092.06,21,168,0.00,7365.81,38709.19,'2024-04-15','2024-05-15'),(17,10017,1125.00,1255.50,837.00,3824.88,21,168,0.00,7042.38,37907.63,'2024-04-15','2024-05-15'),(18,10018,1012.50,675.00,450.00,0.00,21,168,0.00,2137.50,22862.50,'2024-04-15','2024-05-15'),(19,10019,1012.50,675.00,450.00,0.00,21,168,0.00,2137.50,22862.50,'2024-04-15','2024-05-15'),(20,10020,1035.00,697.50,465.00,43.90,21,168,0.00,2241.40,23508.60,'2024-04-15','2024-05-15'),(21,10021,1035.00,697.50,465.00,43.90,21,168,0.00,2241.40,23508.60,'2024-04-15','2024-05-15'),(22,10022,1080.00,720.00,480.00,177.40,21,168,0.00,2457.40,24042.60,'2024-04-15','2024-05-15'),(23,10023,1012.50,675.00,450.00,0.00,21,168,0.00,2137.50,22862.50,'2024-04-15','2024-05-15'),(24,10024,1012.50,675.00,450.00,0.00,21,168,0.00,2137.50,22862.50,'2024-04-15','2024-05-15'),(25,10025,1080.00,720.00,480.00,177.40,21,168,0.00,2457.40,24042.60,'2024-04-15','2024-05-15'),(26,10026,1102.50,742.50,495.00,315.40,21,168,0.00,2655.40,24594.60,'2024-04-15','2024-05-15'),(27,10027,1102.50,742.50,495.00,315.40,21,168,0.00,2655.40,24594.60,'2024-04-15','2024-05-15'),(28,10028,1080.00,720.00,480.00,177.40,21,168,0.00,2457.40,24042.60,'2024-04-15','2024-05-15'),(29,10029,1012.50,675.00,450.00,0.00,21,168,0.00,2137.50,22862.50,'2024-04-15','2024-05-15'),(30,10030,1012.50,675.00,450.00,0.00,21,168,0.00,2137.50,22862.50,'2024-04-15','2024-05-15'),(31,10031,1012.50,675.00,450.00,0.00,21,168,0.00,2137.50,22862.50,'2024-04-15','2024-05-15'),(32,10032,1125.00,1580.10,1053.40,6394.63,21,168,0.00,10153.13,46016.88,'2024-04-15','2024-05-15'),(33,10033,1125.00,1580.10,1053.40,6394.63,21,168,0.00,10153.13,46016.88,'2024-04-15','2024-05-15'),(34,10034,1125.00,1580.10,1053.40,6394.63,21,168,0.00,10153.13,46016.88,'2024-04-15','2024-05-15');
/*!40000 ALTER TABLE `payslipdb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `philhealthcontribution_matrix`
--

DROP TABLE IF EXISTS `philhealthcontribution_matrix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `philhealthcontribution_matrix` (
  `id` int NOT NULL,
  `SalaryMax` varchar(10) DEFAULT NULL,
  `Premium` varchar(10) DEFAULT NULL,
  `Remarks` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `philhealthcontribution_matrix`
--

LOCK TABLES `philhealthcontribution_matrix` WRITE;
/*!40000 ALTER TABLE `philhealthcontribution_matrix` DISABLE KEYS */;
INSERT INTO `philhealthcontribution_matrix` VALUES (1,'10,000.00','0.03','capped at 300'),(2,'59,999.00','0.03','multiply Monthly Salary and Premium'),(3,'60,000.00','0.03','capped at 1800');
/*!40000 ALTER TABLE `philhealthcontribution_matrix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ssscontribution_matrix`
--

DROP TABLE IF EXISTS `ssscontribution_matrix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ssscontribution_matrix` (
  `ssscontribution_id` int NOT NULL,
  `SalaryMin` varchar(20) DEFAULT NULL,
  `SalaryMax` varchar(20) DEFAULT NULL,
  `Contribution` decimal(6,2) DEFAULT NULL,
  PRIMARY KEY (`ssscontribution_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ssscontribution_matrix`
--

LOCK TABLES `ssscontribution_matrix` WRITE;
/*!40000 ALTER TABLE `ssscontribution_matrix` DISABLE KEYS */;
INSERT INTO `ssscontribution_matrix` VALUES (1,'1','3,250',135.00),(2,'3,250','3,750',157.50),(3,'3,750','4,250',180.00),(4,'4,250','4,750',202.50),(5,'4,750','5,250',225.00),(6,'5,250','5,750',247.50),(7,'5,750','6,250',270.00),(8,'6,250','6,750',292.50),(9,'6,750','7,250',315.00),(10,'7,250','7,750',337.50),(11,'7,750','8,250',360.00),(12,'8,250','8,750',382.50),(13,'8,750','9,250',405.00),(14,'9,250','9,750',427.50),(15,'9,750','10,250',450.00),(16,'10,250','10,750',472.50),(17,'10,750','11,250',495.00),(18,'11,250','11,750',517.50),(19,'11,750','12,250',540.00),(20,'12,250','12,750',562.50),(21,'12,750','13,250',585.00),(22,'13,250','13,750',607.50),(23,'13,750','14,250',630.00),(24,'14,250','14,750',652.50),(25,'14,750','15,250',675.00),(26,'15,250','15,750',697.50),(27,'15,750','16,250',720.00),(28,'16,250','16,750',742.50),(29,'16,750','17,250',765.00),(30,'17,250','17,750',787.50),(31,'17,750','18,250',810.00),(32,'18,250','18,750',832.50),(33,'18,750','19,250',855.00),(34,'19,250','19,750',877.50),(35,'19,750','20,250',900.00),(36,'20,250','20,750',922.50),(37,'20,750','21,250',945.00),(38,'21,250','21,750',967.50),(39,'21,750','22,250',990.00),(40,'22,250','22,750',1012.50),(41,'22,750','23,250',1035.00),(42,'23,250','23,750',1057.50),(43,'23,750','24,250',1080.00),(44,'24,250','24,750',1102.50),(45,'24,750','Over',1125.00);
/*!40000 ALTER TABLE `ssscontribution_matrix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `witholdingtax_matrix`
--

DROP TABLE IF EXISTS `witholdingtax_matrix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `witholdingtax_matrix` (
  `id` int NOT NULL,
  `SalaryMin` varchar(45) DEFAULT NULL,
  `SalaryMax` varchar(45) DEFAULT NULL,
  `TaxRate` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `witholdingtax_matrix`
--

LOCK TABLES `witholdingtax_matrix` WRITE;
/*!40000 ALTER TABLE `witholdingtax_matrix` DISABLE KEYS */;
INSERT INTO `witholdingtax_matrix` VALUES (1,'1','20,832.00','No withholding tax'),(2,'20,833.00','33,332.00','20% in excess of 20,833'),(3,'33,333.00','66,666.00','2,500 plus 25% in excess of 33,333'),(4,'66,667.00','166,666.00','10,833 plus 30% in excess of 66,667'),(5,'166,667.00','666,666.00','40,833.33 plus 32% in excess over 166,667'),(6,'666,667.00','over','200,833.33 plus 35% in excess of 666,667');
/*!40000 ALTER TABLE `witholdingtax_matrix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `employee_attendance`
--

/*!50001 DROP VIEW IF EXISTS `employee_attendance`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `employee_attendance` AS select `attendancedb`.`employee_id` AS `employee_id`,`attendancedb`.`workedHours` AS `workedHours` from `attendancedb` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `employee_contacts`
--

/*!50001 DROP VIEW IF EXISTS `employee_contacts`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `employee_contacts` AS select `employeedb`.`first_name` AS `first_name`,`employeedb`.`last_name` AS `last_name`,`employeedb`.`phone_number` AS `phone_number` from `employeedb` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `employee_leave`
--

/*!50001 DROP VIEW IF EXISTS `employee_leave`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `employee_leave` AS select `leavedb`.`employee_id` AS `employee_id`,`leavedb`.`requestLeave` AS `requestLeave`,`leavedb`.`reason` AS `reason`,`leavedb`.`approveLeave` AS `approveLeave` from `leavedb` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `employee_payrollsummary`
--

/*!50001 DROP VIEW IF EXISTS `employee_payrollsummary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `employee_payrollsummary` AS select `payslipdb`.`employeeId` AS `EMPLOYEE_NO`,concat(`employeedb`.`last_name`,', ',`employeedb`.`first_name`) AS `Employee_FullName`,`employeedb`.`position` AS `Position`,`employeedb`.`department` AS `Department`,((`payslipdb`.`total_workedHours` * `compensationdb`.`hourlyRate`) + `payslipdb`.`overtimePay`) AS `Gross_Income`,`employeedb`.`sss` AS `Social_Security_No`,`payslipdb`.`sssDeduction` AS `Social_Security_Distribution`,`employeedb`.`philhealth` AS `Philhealth_No`,`payslipdb`.`philhealthDeduction` AS `Philhealth_Contribution`,`employeedb`.`pagibig` AS `Pagibig_No`,`payslipdb`.`pagibigDeduction` AS `Pagibig_Distribution`,`employeedb`.`tin` AS `TIN`,`payslipdb`.`incomeTax` AS `Withholding_Tax`,((((`payslipdb`.`total_workedHours` * `compensationdb`.`hourlyRate`) + `payslipdb`.`overtimePay`) + ((`compensationdb`.`riceSubsidy` + `compensationdb`.`phoneAllowance`) + `compensationdb`.`clothingAllowance`)) - (((`payslipdb`.`sssDeduction` + `payslipdb`.`philhealthDeduction`) + `payslipdb`.`pagibigDeduction`) + `payslipdb`.`incomeTax`)) AS `Net_Pay` from ((`payslipdb` join `employeedb` on((`payslipdb`.`employeeId` = `employeedb`.`employee_id`))) join `compensationdb` on((`employeedb`.`employee_id` = `compensationdb`.`employee_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `employee_payslip`
--

/*!50001 DROP VIEW IF EXISTS `employee_payslip`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `employee_payslip` AS select `payslipdb`.`payslipId` AS `PAYSLIP_NO`,`payslipdb`.`employeeId` AS `EMPLOYEE_ID`,concat(`employeedb`.`last_name`,', ',`employeedb`.`first_name`) AS `EMPLOYEE_NAME`,`payslipdb`.`startDate` AS `PERIOD_START_DATE`,`payslipdb`.`endDate` AS `PERIOD_END_DATE`,concat(`employeedb`.`position`,'/',`employeedb`.`department`) AS `EMPLOYEE_POSITION_DEPARTMENT`,`compensationdb`.`basicSalary` AS `Monthly_Rate`,`compensationdb`.`hourlyRate` AS `Hourly_Rate`,`payslipdb`.`workedDays` AS `Days_Worked`,`payslipdb`.`overtimePay` AS `Overtime`,((`payslipdb`.`total_workedHours` * `compensationdb`.`hourlyRate`) + `payslipdb`.`overtimePay`) AS `GROSS_INCOME`,`compensationdb`.`riceSubsidy` AS `Rice_Subsidy`,`compensationdb`.`phoneAllowance` AS `Phone_Allowance`,`compensationdb`.`clothingAllowance` AS `Clothing_Allowance`,((`compensationdb`.`riceSubsidy` + `compensationdb`.`phoneAllowance`) + `compensationdb`.`clothingAllowance`) AS `TOTAL`,`payslipdb`.`sssDeduction` AS `SSS`,`payslipdb`.`philhealthDeduction` AS `Philhealth`,`payslipdb`.`pagibigDeduction` AS `Pagibig`,`payslipdb`.`incomeTax` AS `Withholding_Tax`,(((`payslipdb`.`sssDeduction` + `payslipdb`.`philhealthDeduction`) + `payslipdb`.`pagibigDeduction`) + `payslipdb`.`incomeTax`) AS `TOTAL_DEDUCTIONS`,(select `GROSS_INCOME`) AS `GrossIncome`,(select `TOTAL`) AS `Benefits`,(select `TOTAL_DEDUCTIONS`) AS `Deductions`,((((`payslipdb`.`total_workedHours` * `compensationdb`.`hourlyRate`) + `payslipdb`.`overtimePay`) + ((`compensationdb`.`riceSubsidy` + `compensationdb`.`phoneAllowance`) + `compensationdb`.`clothingAllowance`)) - (((`payslipdb`.`sssDeduction` + `payslipdb`.`philhealthDeduction`) + `payslipdb`.`pagibigDeduction`) + `payslipdb`.`incomeTax`)) AS `TAKE_HOME_PAY` from ((`payslipdb` join `employeedb` on((`payslipdb`.`employeeId` = `employeedb`.`employee_id`))) join `compensationdb` on((`employeedb`.`employee_id` = `compensationdb`.`employee_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `employee_salary`
--

/*!50001 DROP VIEW IF EXISTS `employee_salary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `employee_salary` AS select `compensationdb`.`employee_id` AS `employee_id`,`compensationdb`.`basicSalary` AS `basicSalary`,`compensationdb`.`hourlyRate` AS `hourlyRate` from `compensationdb` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-01 23:32:46
