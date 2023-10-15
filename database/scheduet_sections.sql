-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: scheduet
-- ------------------------------------------------------
-- Server version	8.1.0

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
-- Table structure for table `sections`
--

DROP TABLE IF EXISTS `sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sections` (
  `courseID` varchar(10) NOT NULL,
  `sectionID` varchar(10) NOT NULL,
  `location` varchar(45) NOT NULL,
  `day` int NOT NULL,
  `start` varchar(45) NOT NULL,
  `end` varchar(45) NOT NULL,
  `teacherID` int NOT NULL,
  `capacity` int NOT NULL,
  PRIMARY KEY (`courseID`,`sectionID`),
  KEY `teacherID_idx` (`teacherID`),
  CONSTRAINT `courseIDofSec` FOREIGN KEY (`courseID`) REFERENCES `courses` (`courseID`),
  CONSTRAINT `teacherIDofSec` FOREIGN KEY (`teacherID`) REFERENCES `teachers` (`teacherID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES ('INT2204','1','3-G3',3,'10','11',43,80),('INT2204','2','3-G3',3,'1','2',27,80),('INT2204','20','PM402-E5',2,'1','2',55,80),('INT2204','21','PM305-G2',3,'1','2',34,80),('INT2204','22','PM401-E5',3,'1','2',60,80),('INT2204','23','PM208-G2',3,'7','8',43,80),('INT2204','24','105-GĐ3',3,'10','11',27,80),('INT2204','25','107-G2',2,'7','8',34,80),('INT3115','1','105-GĐ3',6,'4','6',17,80),('INT3117','1','107-GĐ3',6,'7','9',55,80),('INT3117','2','103-G2',5,'7','9',55,80),('INT3121','20','205-GĐ3',3,'7','9',1,80),('INT3121','21','207-GĐ3',2,'7','9',3,80),('INT3131','20','Khoa CNTT',8,'1','5',38,80),('INT3132','1','Khoa CNTT',7,'1','5',38,80),('INT3132','20','Khoa CNTT',8,'7','11',38,80),('INT3209','1','309-GĐ2',2,'1','3',11,80),('INT3209','3','106-GĐ3',4,'1','3',51,80),('INT3301','1','PM304-G2',7,'7','11',48,80),('INT3301','20','PM304-G2',7,'1','5',28,80),('INT3301','21','PM402-E5',7,'7','11',28,80),('INT3303','20','309-GĐ2',3,'1','3',8,80),('INT3304','1','306-GĐ2',6,'1','2',41,80),('INT3306','1','301-G2',5,'9','10',36,80),('INT3306','2','PM202-G2',3,'1','2',62,80),('INT3306','21','PM305-G2',3,'7','8',54,80),('INT3306','22','PM307-G2',4,'1','2',54,80),('INT3306','3','206-GĐ3',2,'10','11',35,80),('INT3306','4','309-GĐ2',2,'4','5',36,80),('INT3307','1','308-GĐ2',5,'1','3',37,80),('INT3401','1','107-G2',5,'1','3',39,80),('INT3401','2','107-G2',5,'4','6',39,80),('INT3401','20','206-GĐ3',7,'1','3',19,80),('INT3401','21','106-GĐ3',7,'7','9',19,80),('INT3401','3','308-GĐ2',5,'4','6',9,80),('INT3401','4','206-GĐ3',2,'7','9',1,80),('INT3401','5','3-G3',3,'7','9',86,80),('INT3403','1','301-GĐ2',4,'7','8',15,80),('INT3403','2','303-GĐ2',3,'3','4',15,80),('INT3405','2','309-GĐ2',6,'4','6',14,80),('INT3407','1','105-GĐ3',6,'1','3',13,80),('INT3507','1','307-GĐ2',2,'7','9',43,80),('INT3507','2','312-GĐ2',4,'7','9',85,80),('INT3507','3','302-GĐ2',5,'7','9',2,80),('INT3507','4','307-GĐ2',5,'4','6',37,80),('INT3507','5','304-GĐ2',3,'7','9',12,80),('INT3507','6','101-G2',2,'4','6',20,80),('MAT1101','20','102-GĐ3',6,'1','3',18,80),('MAT1101','22','105-GĐ3',4,'7','9',20,80),('MAT1101','23','107-GĐ3',7,'1','3',13,80),('MAT1101','24','101-G2',6,'9','11',13,80),('MAT1101','25','208-GĐ3',6,'4','6',18,80),('MAT1101','3','107-GĐ3',6,'10','12',18,80),('MAT1101','4','105-GĐ3',6,'7','9',12,80),('MAT1101','5','307-GĐ2',6,'9','11',42,80);
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-05 18:32:36
