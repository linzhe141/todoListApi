-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: datasafe
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `certificationinfo`
--

DROP TABLE IF EXISTS `certificationinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certificationinfo` (
  `id` char(20) DEFAULT NULL,
  `username` char(20) DEFAULT NULL,
  `optime` char(20) DEFAULT NULL,
  `orip` char(20) DEFAULT NULL,
  `logtype` char(20) DEFAULT NULL,
  `optype` char(20) DEFAULT NULL,
  `opresult` char(20) DEFAULT NULL,
  `opcontent` char(20) DEFAULT NULL,
  UNIQUE KEY `test` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certificationinfo`
--

LOCK TABLES `certificationinfo` WRITE;
/*!40000 ALTER TABLE `certificationinfo` DISABLE KEYS */;
INSERT INTO `certificationinfo` VALUES ('181163','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181162','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181161','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181160','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181159','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181158','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181157','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181156','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181155','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181154','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181153','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181152','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181151','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181150','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181149','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181148','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181147','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181146','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181145','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181144','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181143','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181142','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181141','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181140','[未登录]','2019-12-09 10:21:39','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181139','[未登录]','2019-12-08 10:21:55','127.0.0.1','无认证策略','查询','成功','查看无认证策略'),('181138','[未登录]','2019-12-09 10:21:39','192.168.23.45','无认证策略','查询','成功','查看无认证策略');
/*!40000 ALTER TABLE `certificationinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `ID` int(11) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(20) NOT NULL,
  `permissions` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'root','linzhe141',0),(2,'5120162266','linzhe141..',1),(3,'5120162235','sfsdafd',1),(3,'linzhe','zhengpeng10086',1);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-02 14:55:32
