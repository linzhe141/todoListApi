/*
 Navicat Premium Data Transfer

 Source Server         : bs
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : datasafe

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 03/05/2020 21:08:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for certificationinfo
-- ----------------------------
DROP TABLE IF EXISTS `certificationinfo`;
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

-- ----------------------------
-- Records of certificationinfo
-- ----------------------------
BEGIN;
INSERT INTO `certificationinfo` VALUES ('181163', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181162', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181161', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181160', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181159', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181158', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181157', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181156', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181155', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181154', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181153', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181152', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181151', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181150', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181149', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181148', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181147', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181146', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181145', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181144', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181143', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181142', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181141', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181140', '[未登录]', '2019-12-09 10:21:39', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181139', '[未登录]', '2019-12-08 10:21:55', '127.0.0.1', '无认证策略', '查询', '成功', '查看无认证策略');
INSERT INTO `certificationinfo` VALUES ('181138', '[未登录]', '2019-12-09 10:21:39', '192.168.23.45', '无认证策略', '查询', '成功', '查看无认证策略');
COMMIT;

-- ----------------------------
-- Table structure for classgrade
-- ----------------------------
DROP TABLE IF EXISTS `classgrade`;
CREATE TABLE `classgrade` (
  `classID` int(11) NOT NULL,
  `className` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`classID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of classgrade
-- ----------------------------
BEGIN;
INSERT INTO `classgrade` VALUES (2016001, '高二一班');
INSERT INTO `classgrade` VALUES (2016002, '高二二班');
COMMIT;

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `courseID` varchar(255) NOT NULL,
  `courseName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`courseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of course
-- ----------------------------
BEGIN;
INSERT INTO `course` VALUES ('KC2020001', '语文');
INSERT INTO `course` VALUES ('KC2020002', '数学');
INSERT INTO `course` VALUES ('KC2020003', '英语');
COMMIT;

-- ----------------------------
-- Table structure for courseClass
-- ----------------------------
DROP TABLE IF EXISTS `courseClass`;
CREATE TABLE `courseClass` (
  `courseID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `classID` int(255) NOT NULL,
  PRIMARY KEY (`courseID`,`classID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of courseClass
-- ----------------------------
BEGIN;
INSERT INTO `courseClass` VALUES ('KC2020001', 2016001);
INSERT INTO `courseClass` VALUES ('KC2020001', 2016002);
INSERT INTO `courseClass` VALUES ('KC2020002', 2016001);
INSERT INTO `courseClass` VALUES ('KC2020002', 2016002);
INSERT INTO `courseClass` VALUES ('KC2020003', 2016001);
INSERT INTO `courseClass` VALUES ('KC2020003', 2016002);
COMMIT;

-- ----------------------------
-- Table structure for homework
-- ----------------------------
DROP TABLE IF EXISTS `homework`;
CREATE TABLE `homework` (
  `hwID` int(255) NOT NULL AUTO_INCREMENT,
  `courseID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `hwName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `hwDesc` varchar(255) DEFAULT NULL,
  `hwContent` varchar(255) DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `hwFile` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`hwID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=20200089 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of homework
-- ----------------------------
BEGIN;
INSERT INTO `homework` VALUES (20200083, 'KC2020001', 'TEST-FOR-CLASS2', '空', 'FDSAFSA', '2020-04-01', '2020-04-04', '空');
INSERT INTO `homework` VALUES (20200084, 'KC2020001', 'TEST-FOR-CLASS1', '空', 'FDSAFSA', '2020-04-01', '2020-05-01', '空');
INSERT INTO `homework` VALUES (20200086, 'KC2020002', 'test-math', '空', 'fdsafas', '2020-05-07', '2020-05-09', '空');
INSERT INTO `homework` VALUES (20200087, 'KC2020003', 'english - test', '空', 'fdsafsa', '2020-05-01', '2020-05-08', '空');
INSERT INTO `homework` VALUES (20200088, 'KC2020003', '英语 test', '空', 'fdsadfas', '2020-05-01', '2020-05-16', '空');
COMMIT;

-- ----------------------------
-- Table structure for hwClass
-- ----------------------------
DROP TABLE IF EXISTS `hwClass`;
CREATE TABLE `hwClass` (
  `hwID` int(255) NOT NULL AUTO_INCREMENT,
  `classID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`hwID`,`classID`)
) ENGINE=InnoDB AUTO_INCREMENT=20200089 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of hwClass
-- ----------------------------
BEGIN;
INSERT INTO `hwClass` VALUES (20200083, '2016002');
INSERT INTO `hwClass` VALUES (20200084, '2016001');
INSERT INTO `hwClass` VALUES (20200086, '2016001');
INSERT INTO `hwClass` VALUES (20200087, '2016001');
INSERT INTO `hwClass` VALUES (20200088, '2016001');
COMMIT;

-- ----------------------------
-- Table structure for score
-- ----------------------------
DROP TABLE IF EXISTS `score`;
CREATE TABLE `score` (
  `hwID` int(255) NOT NULL,
  `stuID` varchar(255) NOT NULL,
  `score` varchar(255) DEFAULT NULL,
  `stuHwFile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `state` int(255) DEFAULT '0',
  `resultFile` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`hwID`,`stuID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of score
-- ----------------------------
BEGIN;
INSERT INTO `score` VALUES (20200083, 'XS5120162267', NULL, NULL, NULL, 0, NULL);
INSERT INTO `score` VALUES (20200083, 'XS5120162268', NULL, NULL, NULL, 0, NULL);
INSERT INTO `score` VALUES (20200084, 'XS5120162265', 'fdasfas', NULL, 'gdsfgs', 1, NULL);
INSERT INTO `score` VALUES (20200084, 'XS5120162266', '', '1588510583143+XS5120162266教师端功能.png', '', 1, '20200084+XS5120162266.png');
INSERT INTO `score` VALUES (20200085, 'XS5120162265', NULL, NULL, NULL, 0, NULL);
INSERT INTO `score` VALUES (20200085, 'XS5120162266', NULL, NULL, NULL, 0, NULL);
INSERT INTO `score` VALUES (20200086, 'XS5120162265', NULL, NULL, NULL, 0, NULL);
INSERT INTO `score` VALUES (20200086, 'XS5120162266', NULL, NULL, NULL, 0, NULL);
INSERT INTO `score` VALUES (20200087, 'XS5120162265', NULL, NULL, NULL, 0, NULL);
INSERT INTO `score` VALUES (20200087, 'XS5120162266', NULL, NULL, NULL, 0, NULL);
INSERT INTO `score` VALUES (20200088, 'XS5120162265', NULL, NULL, NULL, 0, NULL);
INSERT INTO `score` VALUES (20200088, 'XS5120162266', NULL, NULL, NULL, 0, NULL);
COMMIT;

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `stuID` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `stuName` varchar(255) NOT NULL,
  `stuAge` int(255) NOT NULL,
  `stuGender` varchar(255) NOT NULL,
  `classID` int(255) DEFAULT NULL,
  PRIMARY KEY (`stuID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of students
-- ----------------------------
BEGIN;
INSERT INTO `students` VALUES ('XS5120162265', '张三', 18, '男', 2016001);
INSERT INTO `students` VALUES ('XS5120162266', '郑鹏', 18, '男', 2016001);
INSERT INTO `students` VALUES ('XS5120162267', '李四', 18, '男', 2016002);
INSERT INTO `students` VALUES ('XS5120162268', '罗翔', 18, '男', 2016002);
COMMIT;

-- ----------------------------
-- Table structure for teachers
-- ----------------------------
DROP TABLE IF EXISTS `teachers`;
CREATE TABLE `teachers` (
  `tchID` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tchName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tchAge` int(255) NOT NULL,
  `tchGender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `courseID` varchar(255) NOT NULL,
  PRIMARY KEY (`tchID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of teachers
-- ----------------------------
BEGIN;
INSERT INTO `teachers` VALUES ('JG20201234', '李知恩', 27, '女', 'KC2020001');
INSERT INTO `teachers` VALUES ('JG20201235', '张满月', 27, '女', 'KC2020002');
INSERT INTO `teachers` VALUES ('JG20201236', '李至安', 27, '女', 'KC2020003');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(20) NOT NULL,
  `permissions` int(11) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('JG20201234', 'test10086', 1);
INSERT INTO `users` VALUES ('JG20201235', 'test10086', 1);
INSERT INTO `users` VALUES ('JG20201236', 'test10086', 1);
INSERT INTO `users` VALUES ('root', 'linzhe141', 0);
INSERT INTO `users` VALUES ('XS5120162235', 'sfsdafd', 2);
INSERT INTO `users` VALUES ('XS5120162266', 'linzhe141..', 2);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
