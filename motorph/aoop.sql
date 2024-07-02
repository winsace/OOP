CREATE DATABASE  IF NOT EXISTS `oopdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `oopdb`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: oopdb
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
-- Table structure for table `compensation`
--

DROP TABLE IF EXISTS `compensation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compensation` (
  `employeeID` int NOT NULL,
  `basicSalary` int NOT NULL,
  `riceSubsidy` int NOT NULL,
  `phoneAllowance` int NOT NULL,
  `clothingAllowance` int NOT NULL,
  PRIMARY KEY (`employeeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compensation`
--

LOCK TABLES `compensation` WRITE;
/*!40000 ALTER TABLE `compensation` DISABLE KEYS */;
INSERT INTO `compensation` VALUES (1,90000,1500,2000,1000),(2,60000,1500,2000,1000),(3,60000,1500,2000,1000),(4,60000,1500,2000,1000),(5,52670,1500,1000,1000),(6,52670,1500,1000,1000),(7,42975,1500,800,800),(8,22500,1500,500,500),(9,22500,1500,500,500),(10,52670,1500,1000,1000),(11,50825,1500,1000,1000),(12,38475,1500,800,800),(13,24000,1500,500,500),(14,24000,1500,500,500),(15,53500,1500,1000,1000),(16,42975,1500,800,800),(17,41850,1500,800,800),(18,22500,1500,500,500),(19,22500,1500,500,500),(20,23250,1500,500,500),(21,23250,1500,500,500),(22,24000,1500,500,500),(23,22500,1500,500,500),(24,22500,1500,500,500),(25,24000,1500,500,500),(26,24750,1500,500,500),(27,24750,1500,500,500),(28,24000,1500,500,500),(29,22500,1500,500,500),(30,22500,1500,500,500),(31,22500,1500,500,500),(32,52670,1500,1000,1000),(33,52670,1500,1000,1000),(34,52670,1500,1000,1000);
/*!40000 ALTER TABLE `compensation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cred`
--

DROP TABLE IF EXISTS `cred`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cred` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `employee_id` int NOT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `employee_id_UNIQUE` (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cred`
--

LOCK TABLES `cred` WRITE;
/*!40000 ALTER TABLE `cred` DISABLE KEYS */;
INSERT INTO `cred` VALUES ('employee1','Test2024!',1,'employee'),('employee2','Test2024!',5,'payroll'),('employee3','Test2024!',7,'it'),('employee4','Test2024!',9,'it'),('hr1','Test2024!',2,'hr'),('hr2','Test2024!',6,'hr'),('it1','Test2024!',3,'it'),('payroll1','Test2024!',4,'payroll'),('payroll2','Test2024!',8,'it'),('payroll5','Test2024!',10,'payroll'),('test1','Test2024!',11,'it'),('test2','Test2024!',12,'it'),('test3','Test2024!',13,'it'),('test4','Test2024!',14,'it');
/*!40000 ALTER TABLE `cred` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employeedb`
--

DROP TABLE IF EXISTS `employeedb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employeedb` (
  `employeeID` int NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `birthday` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `phoneNumber` varchar(50) NOT NULL,
  `sss` varchar(50) NOT NULL,
  `philhealth` varchar(50) NOT NULL,
  `tin` varchar(50) NOT NULL,
  `pagibig` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `immediateSupervisor` varchar(50) NOT NULL,
  PRIMARY KEY (`employeeID`),
  UNIQUE KEY `Employee ID_UNIQUE` (`employeeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeedb`
--

LOCK TABLES `employeedb` WRITE;
/*!40000 ALTER TABLE `employeedb` DISABLE KEYS */;
INSERT INTO `employeedb` VALUES (1,'Garcia','Manuel III','Regular','1983-11-10','Makati City','966-860-270','44-4506057-3','820126853951','442-605-657-000','820126853951','Chief Executive Officer','N/A'),(2,'Lim','Antonio','Regular','1988-06-19','Dasmarinas Cavite','171-867-411','52-2061274-9','331735646338','683-102-776-000','331735646338','Chief Operating Officer','Garcia Manuel III'),(3,'Aquino','Bianca Sofia','Regular','1989-04-08','Quezon City','966-889-370','30-8870406-2','177451189665','971-711-280-000','177451189665','Chief Finance Officer','Garcia Manuel III'),(4,'Reyes','Isabella','Regular','1994-06-16','Manila','786-868-477','40-2511815-0','341911411254','876-809-437-000','341911411254','Chief Marketing Officer','Garcia Manuel III'),(5,'Hernandez','Eduard','Regular','1989-09-23','Misamis Occidental','088-861-012','50-5577638-1','957436191812','031-702-374-000','957436191812','IT Operations and Systems','Lim Antonio'),(6,'Villanueva','Andrea Mae','Regular','1988-02-14','Dinagat Islands','918-621-603','49-1632020-8','382189453145','317-674-022-000','382189453145','HR Manager','Lim Antonio'),(7,'SanJose','Brad','Regular','1996-03-15','Tawi Tawi','797-009-261','40-2400714-1','239192926939','672-474-690-000','239192926939','HR Team Leader','Villanueva Andrea Mae'),(8,'Romualdez','Alice','Regular','1992-05-14','Surigaodel Norte','983-606-799','55-4476527-2','545652640232','888-572-294-000','545652640232','HR Rank and File','San Jose Brad'),(9,'Atienza','Rosie','Regular','1948-09-24','Davao del Norte','266-036-427','41-0644692-3','708988234853','604-997-793-000','708988234853','HR Rank and File','San Jose Brad'),(10,'Alvaro','Roderick','Regular','1988-03-30','Quezon City','053-381-386','64-7605054-4','578114853194','525-420-419-000','578114853194','Accounting Head','Aquino Bianca Sofia'),(11,'Salcedo','Anthony','Regular','1993-09-14','Masbate','070-766-300','26-9647608-3','126445315651','210-805-911-000','126445315651','Payroll Manager','Alvaro Roderick'),(12,'Lopez','Josie','Regular','1987-01-14','Mindoro','478-355-427','44-8563448-3','431709011012','218-489-737-000','431709011012','Payroll Team Leader','Salcedo Anthony'),(13,'Farala','Martha','Regular','1942-11-01','Zamboanga del Norte','329-034-366','45-5656375-0','233693897247','210-835-851-000','233693897247','Payroll Rank and File','Salcedo Anthony'),(14,'Martinez','Leila','Regular','1970-11-07','Quirino','877-110-749','27-2090996-4','515741057496','275-792-513-000','515741057496','Payroll Rank and File','Salcedo Anthony'),(15,'Romualdez','Fredrick','Regular','1985-10-03','Zambales','023-079-009','26-8768374-1','308366860059','598-065-761-000','308366860059','Account Manager','Lim Antonio'),(16,'Mata','Christian','Regular','1987-10-21','Sulu','783-776-744','49-2959312-6','824187961962','103-100-522-000','824187961962','Account Team Leader','Romualdez Fredrick'),(17,'DeLeon','Selena','Regular','1975-02-20','Maguindanao','975-432-139','27-2090208-8','587272469938','482-259-498-000','587272469938','Account Team Leader','Romualdez Fredrick'),(18,'SanJose','Allison','Regular','1986-06-24','La Union','179-075-129','45-3251383-0','745148459521','121-203-336-000','745148459521','Account Rank and File','Mata Christian'),(19,'Rosario','Cydney','Regular','1996-06-10','Quezon','868-819-912','49-1629900-2','579253435499','122-244-511-000','579253435499','Account Rank and File','Mata Christian'),(20,'Bautista','Mark','Regular','1991-12-02','Quirino','683-725-348','49-1647342-5','399665157135','273-970-941-000','399665157135','Account Rank and File','Mata Christian'),(21,'Lazaro','Darlene','Probationary','1985-11-25','Quirino','740-721-558','45-5617168-2','606386917510','354-650-951-000','606386917510','Account Rank and File','Mata Christian'),(22,'DelosSantos','Kolby','Probationary','1980-02-26','Zamboanga del Sur','739-443-033','52-0109570-6','357451271274','187-500-345-000','357451271274','Account Rank and File','Mata Christian'),(23,'Santos','Vella','Probationary','1983-12-31','Lanao del Sur','955-879-269','52-9883524-3','548670482885','101-558-994-000','548670482885','Account Rank and File','Mata Christian'),(24,'DelRosario','Tomas','Probationary','1978-12-18','Marinduque','882-550-989','45-5866331-6','953901539995','560-735-732-000','953901539995','Account Rank and File','Mata Christian'),(25,'Tolentino','Jacklyn','Probationary','1984-05-19','Ifugao','675-757-366','47-1692793-0','753800654114','841-177-857-000','753800654114','Account Rank and File','De Leon Selena'),(26,'Gutierrez','Percival','Probationary','1970-12-18','Davao del Sur','512-899-876','40-9504657-8','797639382265','502-995-671-000','797639382265','Account Rank and File','De Leon Selena'),(27,'Manalaysay','Garfield','Probationary','1986-08-28','Lanao del Sur','948-628-136','45-3298166-4','810909286264','336-676-445-000','810909286264','Account Rank and File','De Leon Selena'),(28,'Villegas','Lizeth','Probationary','1981-12-12','Dinagat Islands','332-372-215','40-2400719-4','934389652994','210-395-397-000','934389652994','Account Rank and File','De Leon Selena'),(29,'Ramos','Carol','Probationary','1978-08-20','Iloilo','250-700-389','60-1152206-4','351830469744','395-032-717-000','351830469744','Account Rank and File','De Leon Selena'),(30,'Maceda','Emelia','Probationary','1973-04-14','Nueva Ecija','973-358-041','54-1331005-0','465087894112','215-973-013-000','465087894112','Account Rank and File','De Leon Selena'),(31,'Aguilar','Delia','Probationary','1989-01-27','Cotabato','529-705-439','52-1859253-1','136451303068','599-312-588-000','136451303068','Account Rank and File','De Leon Selena'),(32,'Castro','John Rafael','Regular','1992-09-02','Liloan Cebu','332-424-955','26-7145133-4','601644902402','404-768-309-000','601644902402','Sales & Marketing','Reyes Isabella'),(33,'Martinez','Carlos Ian','Regular','1990-11-16','Camalaniugan','078-854-208','11-5062972-7','380685387212','256-436-296-000','380685387212','Supply Chain and Logistics','Reyes Isabella'),(34,'Santos','Beatriz','Regular','1990-07-08','Metro Manila','526-639-511','20-2987501-5','918460050077','911-529-713-000','918460050077','Customer Service and Relations','Reyes Isabella'),(35,'Bansas','Rhona','Regular','2024-05-30','Davao','526-639-512','20-2987501-6','918460050078','911-529-714-000','918460050077','IT Operations and Systems','Winston Ace Lao'),(36,'Lopez','Sherilou','Regular','2024-06-26','12312','526-639-513','20-2987501-7','918460050079','911-529-715-000','918460050077','123123','Rhona Bansas'),(37,'De Guzman','Catherine','Regular','2024-06-26','Bulacan','526-639-514','20-2987501-8','918460050076','911-529-716-000','918460050077','HR','Rhona Bansas'),(38,'Malabja','Joward Dahryll','Regular','2024-05-30','Makati','526-639-515','20-2987501-9','918460050074','911-529-773-000','918460050077','IT Operations and Systems','Rhona Bansas'),(39,'Lao','Winston Ace','Regular','1987-06-02','Quezon City','test','test','test','test','test','Chief Executive Officer','Rhona Bansas');
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
  UNIQUE KEY `leave_id_UNIQUE` (`leave_id`)
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
-- Table structure for table `ticketdb`
--

DROP TABLE IF EXISTS `ticketdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticketdb` (
  `Employee ID` int NOT NULL,
  `Ticket ID` bigint NOT NULL,
  `Assign Team` varchar(255) NOT NULL,
  `Severity` varchar(255) NOT NULL,
  `Subject` text NOT NULL,
  `Description` text NOT NULL,
  `Status` varchar(255) NOT NULL,
  PRIMARY KEY (`Ticket ID`),
  UNIQUE KEY `Ticket ID_UNIQUE` (`Ticket ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticketdb`
--

LOCK TABLES `ticketdb` WRITE;
/*!40000 ALTER TABLE `ticketdb` DISABLE KEYS */;
INSERT INTO `ticketdb` VALUES (1,202403170001,'HR','Low','Update Employee Details','Update Employee Details','Assigned'),(1,202403170002,'Payroll','High','Payroll Dispute','Payroll Dispute','Cancelled'),(1,202403170003,'IT','High','Password Reset','Password Reset','Working'),(2,202403170004,'HR','Low','Update Employee Details','Update Employee Details','Assigned'),(2,202403170005,'Payroll','High','Payroll Dispute','Payroll Dispute','Closed'),(2,202403170006,'IT','High','Password Reset','Password Reset','Working'),(3,202403170007,'HR','Low','Update Employee Details','Update Employee Details','Assigned'),(3,202403170008,'Payroll','High','Payroll Dispute','Payroll Dispute','Reassigned'),(3,202403170009,'IT','High','Password Reset','Password Reset','Pending'),(4,202403170010,'HR','Low','Update Employee Details','Update Employee Details','Assigned'),(4,202403170011,'Payroll','High','Payroll Dispute','Payroll Dispute','Closed'),(4,202403170012,'IT','High','Password Reset','Password Reset','Working'),(1,202403170013,'HR','Low','COE Request','COE Request','Working'),(1,202403170014,'IT','Medium','Tools issue','Tools issue','Pending'),(1,202403170015,'Payroll','High ','Payroll Dispute','Payroll Dispute','Assigned'),(2,202403170017,'HR','Low','COE Request','COE Request','Working'),(2,202403170018,'IT','Medium','Tools issue','Tools issue','Pending'),(2,202403170020,'IT','Urgent','Password Reset','Password Reset','Closed'),(3,202403170021,'HR','Low','COE Request','COE Request','Working'),(3,202403170023,'Payroll','High ','Payroll Dispute','Payroll Dispute','Assigned'),(3,202403170024,'IT','Urgent','Password Reset','Password Reset','Closed'),(4,202403170025,'HR','Low','COE Request','COE Request','Working'),(4,202403170026,'Payroll','High ','Payroll Dispute','Payroll Dispute','Assigned'),(4,202403170027,'IT','Urgent','Password Reset','Password Reset','Closed');
/*!40000 ALTER TABLE `ticketdb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timesheetdb`
--

DROP TABLE IF EXISTS `timesheetdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `timesheetdb` (
  `timesheet_id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int NOT NULL,
  `date` varchar(45) NOT NULL,
  `time_in` varchar(45) DEFAULT NULL,
  `time_out` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`timesheet_id`),
  UNIQUE KEY `timesheet_id_UNIQUE` (`timesheet_id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timesheetdb`
--

LOCK TABLES `timesheetdb` WRITE;
/*!40000 ALTER TABLE `timesheetdb` DISABLE KEYS */;
INSERT INTO `timesheetdb` VALUES (1,1,'03/01/2024','8:00am',NULL),(2,1,'03/01/2024',NULL,'5:00pm'),(3,1,'03/04/2024','8:00am',NULL),(4,1,'03/04/2024',NULL,'5:00pm'),(5,1,'03/05/2024','8:00am',NULL),(6,1,'03/05/2024',NULL,'5:00pm'),(7,1,'03/06/2024','8:00am',NULL),(8,1,'03/06/2024',NULL,'5:00pm'),(9,1,'03/07/2024','8:00am',NULL),(10,1,'03/07/2024',NULL,'5:00pm'),(11,1,'03/08/2024','8:00am',NULL),(12,1,'03/08/2024',NULL,'5:00pm'),(13,1,'03/11/2024','8:00am',NULL),(14,1,'03/11/2024',NULL,'5:00pm'),(15,1,'03/12/2024','8:00am',NULL),(16,1,'03/12/2024',NULL,'5:00pm'),(17,1,'03/13/2024','8:00am',NULL),(18,1,'03/13/2024',NULL,'5:00pm'),(19,1,'03/14/2024','8:00am',NULL),(20,1,'03/14/2024',NULL,'5:00pm'),(21,1,'03/15/2024','8:00am',NULL),(22,1,'03/15/2024',NULL,'5:00pm'),(23,2,'03/01/2024','8:00am',NULL),(24,2,'03/01/2024',NULL,'5:00pm'),(25,2,'03/04/2024','8:00am',NULL),(26,2,'03/04/2024',NULL,'5:00pm'),(27,2,'03/05/2024','8:00am',NULL),(28,2,'03/05/2024',NULL,'5:00pm'),(29,2,'03/06/2024','8:00am',NULL),(30,2,'03/06/2024',NULL,'5:00pm'),(31,2,'03/07/2024','8:00am',NULL),(32,2,'03/07/2024',NULL,'5:00pm'),(33,2,'03/08/2024','8:00am',NULL),(34,2,'03/08/2024',NULL,'5:00pm'),(35,2,'03/11/2024','8:00am',NULL),(36,2,'03/11/2024',NULL,'5:00pm'),(37,2,'03/12/2024','8:00am',NULL),(38,2,'03/12/2024',NULL,'5:00pm'),(39,2,'03/13/2024','8:00am',NULL),(40,2,'03/13/2024',NULL,'5:00pm'),(41,2,'03/14/2024','8:00am',NULL),(42,2,'03/14/2024',NULL,'5:00pm'),(43,2,'03/15/2024','8:00am',NULL),(44,2,'03/15/2024',NULL,'5:00pm'),(45,3,'03/1/2024','8:00am',NULL),(46,3,'03/1/2024',NULL,'5:00pm'),(47,3,'03/04/2024','8:00am',NULL),(48,3,'03/04/2024',NULL,'5:00pm'),(49,3,'03/05/2024','8:00am',NULL),(50,3,'03/05/2024',NULL,'5:00pm'),(51,3,'03/06/2024','8:00am',NULL),(52,3,'03/06/2024',NULL,'5:00pm'),(53,3,'03/07/2024','8:00am',NULL),(54,3,'03/07/2024',NULL,'5:00pm'),(55,3,'03/08/2024','8:00am',NULL),(56,3,'03/08/2024',NULL,'5:00pm'),(57,3,'03/11/2024','8:00am',NULL),(58,3,'03/11/2024',NULL,'5:00pm'),(59,3,'03/12/2024','8:00am',NULL),(60,3,'03/12/2024',NULL,'5:00pm'),(61,3,'03/13/2024','8:00am',NULL),(62,3,'03/13/2024',NULL,'5:00pm'),(63,3,'03/14/2024','8:00am',NULL),(64,3,'03/14/2024',NULL,'5:00pm'),(65,3,'03/15/2024','8:00am',NULL),(66,3,'03/15/2024',NULL,'5:00pm'),(67,4,'03/01/2024','8:00am',NULL),(68,4,'03/01/2024',NULL,'5:00pm'),(69,4,'03/04/2024','8:00am',NULL),(70,4,'03/04/2024',NULL,'5:00pm'),(71,4,'03/05/2024','8:00am',NULL),(72,4,'03/05/2024',NULL,'5:00pm'),(73,4,'03/06/2024','8:00am',NULL),(74,4,'03/06/2024',NULL,'5:00pm'),(75,4,'03/07/2024','8:00am',NULL),(76,4,'03/07/2024',NULL,'5:00pm'),(77,4,'03/08/2024','8:00am',NULL),(78,4,'03/08/2024',NULL,'5:00pm'),(79,4,'03/11/2024','8:00am',NULL),(80,4,'03/11/2024',NULL,'5:00pm'),(81,4,'03/12/2024','8:00am',NULL),(82,4,'03/12/2024','','5:00pm'),(83,4,'03/13/2024','8:00am',NULL),(84,4,'03/13/2024',NULL,'5:00pm'),(85,4,'03/14/2024','8:00am',NULL),(86,4,'03/14/2024','','5:00pm'),(87,4,'03/15/2024','8:00am',''),(88,4,'03/15/2024',NULL,'5:00pm');
/*!40000 ALTER TABLE `timesheetdb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-01 23:33:20
