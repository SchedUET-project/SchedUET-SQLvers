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
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `teacherID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `faculty` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`teacherID`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,'GS.TS. Nguyễn Thanh Thủy','nguyenthanhthuy@vnu.edu.vn','Khoa học Máy tính','nan'),(2,'PGS.TS. Nguyễn Hải Châu','chaunh@vnu.edu.vn','Hệ thống Thông tin','nan'),(3,'PGS.TS. Lê Thanh Hà','ltha@vnu.edu.vn','PTN Tương tác Người-Máy','Trưởng Phòng thí nghiệm'),(5,'PGS.TS. Nguyễn Ngọc Hóa','hoa.nguyen@vnu.edu.vn','Hệ thống Thông tin','Chủ nhiệm Bộ môn'),(6,'PGS. TS. Hoàng Xuân Huấn','huanhx@vnu.edu.vn','Khoa học Máy tính','Nguyên Phó trưởng khoa CNTT'),(7,'PGS.TS. Phạm Ngọc Hùng','hungpn@vnu.edu.vn','Công nghệ Phần mềm','Phó Chủ nhiệm Khoa'),(8,'PGS.TS. Nguyễn Hoài Sơn','sonnh@vnu.edu.vn','Mạng và Truyền thông máy tính','Chủ nhiệm Bộ môn'),(9,'PGS.TS. Nguyễn Thị Nhật Thanh','thanhntn@vnu.edu.vn','PTN Tương tác Người-Máy','nan'),(10,'PGS.TS. Nguyễn Trí Thành','ntthanh@vnu.edu.vn','Hệ thống Thông tin','nan'),(11,'PGS. TS. Hà Quang Thụy','thuyhq@vnu.edu.vn','Công nghệ Tri thức','Nguyên Phó hiệu trưởng Trường ĐH Công nghệ'),(12,'PGS.TS. Lê Sỹ Vinh','vinhls@vnu.edu.vn','Khoa học và Kỹ thuật tính toán','Chủ nhiệm Khoa'),(13,'TS. Đặng Cao Cường','cuongdc@vnu.edu.vn','Khoa học và Kỹ thuật tính toán','nan'),(14,'TS. Tạ Việt Cường','cuongtv@vnu.edu.vn','PTN Tương tác Người-Máy','nan'),(15,'TS. Ma Thị Châu','chaumt@vnu.edu.vn','PTN Tương tác Người-Máy','nan'),(16,'TS. Trần Thị Minh Châu','chauttm@vnu.edu.vn','Khoa học Máy tính','nan'),(17,'TS. Ngô Thị Duyên','duyennt@vnu.edu.vn','PTN Tương tác Người-Máy','nan'),(18,'TS. Hoàng Thị Điệp','diepht@vnu.edu.vn','Khoa học và Kỹ thuật tính toán','Phó Chủ nhiệm Bộ môn'),(19,'TS. Đỗ Đức Đông','dongdoduc@vnu.edu.vn','Khoa học và Kỹ thuật tính toán','nan'),(20,'TS. Đặng Thanh Hải','hai.dang@vnu.edu.vn','Khoa học và Kỹ thuật tính toán','nan'),(21,'TS. Lê Hồng Hải','hailh@vnu.edu.vn','Hệ thống Thông tin','nan'),(22,'TS. Dư Phương Hạnh','hanhdp@vnu.edu.vn','Hệ thống Thông tin','nan'),(23,'TS. Đặng Đức Hạnh','hanhdd@vnu.edu.vn','Công nghệ Phần mềm','Phó Chủ nhiệm Bộ môn'),(24,'TS. Nguyễn Thị Hậu','nguyenhau@vnu.edu.vn','Hệ thống Thông tin','Phó Chủ nhiệm Bộ môn'),(25,'TS. Lê Quang Hiếu','hieulq@vnu.edu.vn','Khoa học Máy tính','nan'),(26,'PGS.TS. Trần Trọng Hiếu','hieutt@vnu.edu.vn','PTN Công nghệ Tri thức','Chủ tịch Công đoàn Khoa'),(27,'TS. Võ Đình Hiếu','hieuvd@vnu.edu.vn','Công nghệ Phần mềm','Phó Chủ nhiệm Khoa, Chủ nhiệm Bộ môn'),(28,'TS. Lê Thị Hợi','hoi_le@vnu.edu.vn','PTN An toàn Thông tin','nan'),(29,'TS. Tô Văn Khánh','khanhtv@vnu.edu.vn','PTN Hệ thống nhúng','Phó Phòng thí nghiệm'),(30,'TS. Lê Minh Khôi','khoilm@vnu.edu.vn','Khoa học Máy tính','nan'),(31,'TS. Lê Nguyên Khôi','khoi.n.le@vnu.edu.vn','Khoa học Máy tính','nan'),(32,'TS. Trần Trúc Mai','mai.tran@vnu.edu.vn','Mạng và Truyền thông máy tính','Phó Chủ nhiệm Bộ môn'),(33,'TS. Dương Lê Minh','minhdl@vnu.edu.vn','Mạng và Truyền thông máy tính','Phó Chủ nhiệm Khoa'),(34,'TS. Vũ Thị Hồng Nhạn','vthnhan@vnu.edu.vn','Công nghệ Phần mềm','nan'),(35,'TS. Hoàng Xuân Tùng','tunghx@vnu.edu.vn','Mạng và Truyền thông máy tính','nan'),(36,'TS. Lê Đình Thanh','thanhld@vnu.edu.vn','PTN An toàn Thông tin','nan'),(37,'TS. Nguyễn Đại Thọ','nguyendaitho@vnu.edu.vn','PTN An toàn Thông tin','nan'),(38,'TS. Lê Đức Trọng','trongld@vnu.edu.vn','Khoa học Máy tính','Phó Chủ nhiệm Bộ môn'),(39,'TS. Nguyễn Văn Vinh','vinhnv@vnu.edu.vn','Khoa học Máy tính','nan'),(40,'TS. Trần Mai Vũ','vutm@vnu.edu.vn','PTN Công nghệ Tri thức','nan'),(41,'TS. Nguyễn Ngọc Tân','tan.nguyen@vnu.edu.vn','Mạng và Truyền thông máy tính','nan'),(42,'TS. Nghiêm Nguyễn Việt Dũng','dung.nghiem@vnu.edu.vn','Khoa học và Kỹ thuật tính toán','nan'),(43,'ThS. Nguyễn Đức Anh','nguyenducanh@vnu.edu.vn','Công nghệ Phần mềm','nan'),(44,'ThS. Phạm Thị Mai Bảo','baoptm@vnu.edu.vn','Văn phòng Khoa','nan'),(45,'ThS. Cấn Duy Cát','catcd@vnu.edu.vn','PTN Công nghệ Tri thức','nan'),(46,'ThS. Đặng Minh Công','congdm@vnu.edu.vn','Mạng và Truyền thông máy tính','nan'),(47,'ThS. Vũ Bá Duy','duyvb@vnu.edu.vn','Hệ thống Thông tin','nan'),(48,'ThS. Ngô Lê Minh','minhnl@vnu.edu.vn','Mạng và Truyền thông máy tính','nan'),(49,'ThS. Phạm Cẩm Ngọc','ngocpc@vnu.edu.vn','Hệ thống Thông tin','nan'),(50,'ThS. Hồ Đắc Phương','phuonghd@vnu.edu.vn','Mạng và Truyền thông máy tính','nan'),(51,'TS. Lê Hoàng Quỳnh','lhquynh@vnu.edu.vn','PTN Công nghệ Tri thức','nan'),(52,'ThS. Nguyễn Việt Tân','tannv@vnu.edu.vn','Công nghệ Phần mềm','nan'),(53,'ThS. Nguyễn Thị Minh Thanh','thanhntm@vnu.edu.vn','Văn phòng Khoa','nan'),(54,'ThS. Đào Minh Thư','thudm@vnu.edu.vn','Mạng và Truyền thông máy tính','nan'),(55,'ThS. Nguyễn Thu Trang','trang.nguyen@vnu.edu.vn','Công nghệ Phần mềm','nan'),(56,'ThS. Hoàng Thị Ngọc Trang','tranghtn@vnu.edu.vn','Khoa học Máy tính','nan'),(57,'ThS. Nguyễn Thị Cẩm Vân','vanntc@vnu.edu.vn','PTN Công nghệ Tri thức','nan'),(58,'ThS. Vương Thị Hải Yến','yenvth@vnu.edu.vn','PTN Công nghệ Tri thức','nan'),(59,'ThS. Phạm Thị Quỳnh Trang','trangptq@vnu.edu.vn','PTN Công nghệ Tri thức','nan'),(60,'ThS. Trần Mạnh Cường','tranmanhcuong@vnu.edu.vn','Công nghệ Phần mềm','nan'),(61,'CN. Lê Bằng Giang','giangbang@vnu.edu.vn','PTN Tương tác Người-Máy','nan'),(62,'CN. Đào Minh Hải','haidaouet@vnu.edu.vn','Mạng và Truyền thông máy tính','nan'),(63,'ThS. Phan Đăng Trung Hiếu','hieupdt@vnu.edu.vn','Khoa học Máy tính','nan'),(64,'CN. Đỗ Minh Khá','khadm@vnu.edu.vn','Khoa học Máy tính','nan'),(65,'ThS. Kiều Hải Đăng','dangkh_uet@vnu.edu.vn','PTN Tương tác Người-Máy','nan'),(66,'ThS. Hoàng Đăng Kiên','kienhd1@vnu.edu.vn','PTN An toàn Thông tin','nan'),(67,'ThS. Lê Kiên','lkien@vnu.edu.vn','Công nghệ Phần mềm','nan'),(68,'ĐH. Nguyễn Tùng Lâm','tunglam@vnu.edu.vn','Công nghệ Phần mềm','nan'),(69,'ThS. Vương Thị Hồng','hongvt57@vnu.edu.vn','PTN Công nghệ Tri thức','nan'),(70,'CN. Hoàng Thị Linh','hoanglinh@vnu.edu.vn','PTN Tương tác Người-Máy','nan'),(71,'CN. Nguyễn Lan Hương','lanhuong1491@vnu.edu.vn','Văn phòng Khoa','nan'),(72,'CN. Nguyễn Hải Long','longnh@vnu.edu.vn','PTN Công nghệ Tri thức','nan'),(73,'ThS. Nguyễn Ngọc Quỳnh','nguyenngocquynh1997@vnu.edu.vn','Hệ thống Thông tin','nan'),(74,'CN. Nguyễn Huy Sơn','huyson@vnu.edu.vn','PTN Công nghệ Tri thức','nan'),(75,'CN. Trần Trường Thủy','truongthuyuet@vnu.edu.vn','Khoa học Máy tính','nan'),(76,'CN. Lê Công Thương','thuongle276@gmail.com','PTN Tương tác Người-Máy','nan'),(77,'ThS. Nguyễn Thị Thu Trang','trangngtt@vnu.edu.vn','PTN An toàn Thông tin','nan'),(78,'ThS. Ngô Xuân Trường','truonggnx@vnu.edu.vn','Khoa học Máy tính','nan'),(79,'PGS. TS. Bùi Thế Duy','duybt@vnu.edu.vn','PTN Tương tác Người-Máy','Thứ trưởng Bộ Khoa học và Công nghệ'),(80,'PGS. TS. Phạm Bảo Sơn','sonpb@vnu.edu.vn','PTN Tương tác Người-Máy','Phó Giám đốc Đại học Quốc gia Hà Nội'),(81,'PGS. TS. Nguyễn Việt Hà','hanv@vnu.edu.vn','Công nghệ Phần mềm','Nguyên Hiệu trưởng Trường ĐH Công nghệ'),(82,'PGS.TS. Hà Quang Thụy','thuyhq@vnu.edu.vn','PTN Tri thức','Nguyên Phó Hiệu trưởng Trường ĐH Công nghệ'),(83,'PGS. TS. Nguyễn Phương Thái','thainp@vnu.edu.vn','Khoa học Máy tính','Trưởng phòng Đào tạo'),(84,'TS. Bùi Ngọc Thăng','thangbn@vnu.edu.vn','Khoa học Máy tính','Trưởng phòng Tổ chức cán bộ'),(85,'PGS. TS. Trương Ninh Thuận','thuantn@vnu.edu.vn','Công nghệ Phần mềm','Viện phó Viện Hàng không vũ trụ'),(86,'TS. Trần Quốc Long','tqlong@vnu.edu.vn','Khoa học Máy tính','Viện trưởng Viện AI'),(87,'TS. Lê Phê Đô','dolp@vnu.edu.vn','Khoa học và Kỹ thuật Tính toán','nan'),(88,'PGS. TS. Nguyễn Ngọc Bình','nnbinh2019@gmail.com','Công nghệ Phần mềm','Nguyên Hiệu trưởng Trường ĐH Công nghệ'),(89,'TS. Nguyễn Cảnh Hoàng','hoangnc@vnu.edu.vn','Khoa học và Kỹ thuật Tính toán','nan'),(90,'PGS. TS. Hồ Sĩ Đàm','damhshoabinh@gmail.com','Mạng và TT Máy tính','Nguyên Trưởng khoa CNTT'),(91,'ThS. Đào Kiến Quốc','dkquoc@gmail.com','Công nghệ Phần mềm','nan'),(92,'ThS. Nguyễn Nam Hải','hainn@vnu.edu.vn','Mạng và TT Máy tính','nan'),(93,'TS. Nguyễn Tuệ','ntue@vnu.edu.vn','Các Hệ thống Thông tin','nan'),(94,'TS. Đặng Hữu Thịnh','thinhdh@vnu.edu.vn','Khoa học và Kỹ thuật Tính toán','nan'),(95,'PGS. TS. Nguyễn Đình Việt','vietnd@vnu.edu.vn','Hệ thống Nhúng','nan'),(96,'PGS. TS. Nguyễn Văn Vỵ','vynv@vnu.edu.vn','Công nghệ Phần mềm','nan'),(97,'PGS. Nguyễn Quốc Toản','toannq@vnu.edu.vn','Mạng và TT Máy tính','nan'),(98,'PGS. TS. Lê Minh Khanh','nan','Khoa học Máy tính','nan');
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
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
