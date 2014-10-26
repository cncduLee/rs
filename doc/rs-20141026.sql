-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.6.19 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  8.3.0.4796
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 rs 的数据库结构
CREATE DATABASE IF NOT EXISTS `rs` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `rs`;


-- 导出  表 rs.cms_article 结构
CREATE TABLE IF NOT EXISTS `cms_article` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `category_id` bigint(20) NOT NULL COMMENT '分类编号',
  `user_id` bigint(20) NOT NULL COMMENT '发布者',
  `title` varchar(255) NOT NULL COMMENT '标题',
  `color` varchar(50) DEFAULT '' COMMENT '标题颜色（red：红色；green：绿色；blue：蓝色；yellow：黄色；orange：橙色）',
  `thumb` varchar(255) DEFAULT '' COMMENT '缩略图',
  `keywords` varchar(255) DEFAULT '' COMMENT '关键字',
  `desciption` varchar(255) DEFAULT '' COMMENT '描述、摘要',
  `status` char(1) DEFAULT '' COMMENT '状态（0：发布；1：作废；2：审核；）',
  `weight` int(11) DEFAULT '0' COMMENT '权重，越大越靠前',
  `hits` int(11) DEFAULT '0' COMMENT '点击数',
  `posid` varchar(10) DEFAULT NULL COMMENT '推荐位，多选（1：首页焦点图；2：栏目页文章推荐；）',
  `input_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '录入时间',
  `update_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `title` (`title`),
  KEY `keywords` (`keywords`),
  KEY `status` (`status`),
  KEY `weight` (`weight`),
  KEY `input_date` (`input_date`),
  KEY `update_date` (`update_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='内容管理文章模型表';

-- 正在导出表  rs.cms_article 的数据：~0 rows (大约)
DELETE FROM `cms_article`;
/*!40000 ALTER TABLE `cms_article` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_article` ENABLE KEYS */;


-- 导出  表 rs.cms_article_data 结构
CREATE TABLE IF NOT EXISTS `cms_article_data` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `content` mediumtext COMMENT '内容',
  `copyfrom` varchar(255) DEFAULT NULL COMMENT '来源',
  `relation` varchar(255) DEFAULT NULL COMMENT '相关文章',
  `allow_comment` char(1) DEFAULT NULL COMMENT '是否允许评论',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='内容管理文章模型表';

-- 正在导出表  rs.cms_article_data 的数据：~0 rows (大约)
DELETE FROM `cms_article_data`;
/*!40000 ALTER TABLE `cms_article_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_article_data` ENABLE KEYS */;


-- 导出  表 rs.cms_category 结构
CREATE TABLE IF NOT EXISTS `cms_category` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `site_id` bigint(20) DEFAULT '1' COMMENT '站点编号',
  `parent_id` bigint(20) NOT NULL COMMENT '父级编号',
  `parent_ids` varchar(255) NOT NULL COMMENT '所有父级编号',
  `module` varchar(20) NOT NULL COMMENT '栏目模块（article：文章；picture：图片；download：下载；link：链接；special：专题）',
  `name` varchar(100) NOT NULL COMMENT '栏目名称',
  `image` varchar(255) DEFAULT '' COMMENT '栏目图片',
  `href` varchar(255) NOT NULL COMMENT '链接',
  `target` varchar(20) NOT NULL COMMENT '目标（ _blank、_self、_parent、_top）',
  `desciption` varchar(255) DEFAULT '' COMMENT '描述，填写有助于搜索引擎优化',
  `keywords` varchar(255) DEFAULT '' COMMENT '关键字，填写有助于搜索引擎优化',
  `sort` int(11) DEFAULT '30' COMMENT '排序（升序）',
  `in_menu` char(1) DEFAULT '1' COMMENT '是否在导航中显示（1：显示；0：不显示）',
  `in_list` char(1) DEFAULT '1' COMMENT '是否在分类页中显示列表（1：显示；0：不显示）',
  `show_modes` char(1) DEFAULT '0' COMMENT '展现方式（0:有子栏目显示栏目列表，无子栏目显示内容列表;1：首栏目内容列表；2：栏目第一条内容）',
  `allow_comment` char(1) DEFAULT NULL COMMENT '是否允许评论',
  `del_flag` char(1) DEFAULT '0' COMMENT '删除标记（0：正常；1：删除）',
  PRIMARY KEY (`id`),
  KEY `parent_id` (`parent_id`),
  KEY `parent_ids` (`parent_ids`),
  KEY `module` (`module`),
  KEY `name` (`name`),
  KEY `sort` (`sort`),
  KEY `del_flag` (`del_flag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='内容管理栏目表';

-- 正在导出表  rs.cms_category 的数据：~0 rows (大约)
DELETE FROM `cms_category`;
/*!40000 ALTER TABLE `cms_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_category` ENABLE KEYS */;


-- 导出  表 rs.cms_comment 结构
CREATE TABLE IF NOT EXISTS `cms_comment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `module` varchar(20) NOT NULL COMMENT '内容模型（article：文章；picture：图片；download：下载）',
  `content_id` bigint(20) NOT NULL COMMENT '归属分类内容的编号（Article.id、Photo.id、Download.id）',
  `title` varchar(255) DEFAULT NULL COMMENT '归属分类内容的标题（Article.title、Photo.title、Download.title）',
  `content` varchar(255) DEFAULT NULL COMMENT '评论内容',
  `name` varchar(100) DEFAULT NULL COMMENT '评论姓名',
  `ip` varchar(100) DEFAULT NULL COMMENT '评论IP',
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '评论时间',
  `audit_user_id` bigint(20) DEFAULT NULL COMMENT '审核人',
  `audit_date` timestamp NULL DEFAULT NULL COMMENT '审核时间',
  `status` char(1) DEFAULT '0' COMMENT '删除标记（0：发布；1：作废；2：审核；）',
  PRIMARY KEY (`id`),
  KEY `module` (`module`),
  KEY `content_id` (`content_id`),
  KEY `status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='内容管理内容评论表';

-- 正在导出表  rs.cms_comment 的数据：~0 rows (大约)
DELETE FROM `cms_comment`;
/*!40000 ALTER TABLE `cms_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_comment` ENABLE KEYS */;


-- 导出  表 rs.cms_guestbook 结构
CREATE TABLE IF NOT EXISTS `cms_guestbook` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `type` varchar(100) NOT NULL COMMENT '留言分类（咨询、建议、投诉、其它）',
  `content` varchar(255) NOT NULL COMMENT '留言内容',
  `name` varchar(100) NOT NULL COMMENT '姓名',
  `email` varchar(100) NOT NULL COMMENT '邮箱',
  `phone` varchar(100) NOT NULL COMMENT '电话',
  `workunit` varchar(100) NOT NULL COMMENT '单位',
  `ip` varchar(100) NOT NULL COMMENT 'IP',
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '留言时间',
  `re_user_id` bigint(20) DEFAULT NULL COMMENT '回复人',
  `re_date` timestamp NULL DEFAULT NULL COMMENT '回复时间',
  `re_content` varchar(100) DEFAULT NULL COMMENT '回复内容',
  `status` char(1) DEFAULT '0' COMMENT '状态（0：发布；1：作废；2：审核；）',
  PRIMARY KEY (`id`),
  KEY `status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='内容管理留言本表';

-- 正在导出表  rs.cms_guestbook 的数据：~0 rows (大约)
DELETE FROM `cms_guestbook`;
/*!40000 ALTER TABLE `cms_guestbook` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_guestbook` ENABLE KEYS */;


-- 导出  表 rs.cms_site 结构
CREATE TABLE IF NOT EXISTS `cms_site` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` varchar(100) NOT NULL COMMENT '站点名称',
  `title` varchar(100) NOT NULL COMMENT '站点标题',
  `desciption` varchar(255) DEFAULT '' COMMENT '描述，填写有助于搜索引擎优化',
  `keywords` varchar(255) DEFAULT '' COMMENT '关键字，填写有助于搜索引擎优化',
  `theme` varchar(255) DEFAULT 'default' COMMENT '主题',
  `copyright` mediumtext COMMENT '版权信息',
  `del_flag` char(1) DEFAULT '0' COMMENT '删除标记（0：正常；1：删除）',
  PRIMARY KEY (`id`),
  KEY `del_flag` (`del_flag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='内容管理站点配置表';

-- 正在导出表  rs.cms_site 的数据：~0 rows (大约)
DELETE FROM `cms_site`;
/*!40000 ALTER TABLE `cms_site` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_site` ENABLE KEYS */;


-- 导出  表 rs.sys_user 结构
CREATE TABLE IF NOT EXISTS `sys_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `area_id` bigint(20) NOT NULL COMMENT '区域编号',
  `login_name` varchar(100) NOT NULL COMMENT '登录名',
  `password` varchar(100) DEFAULT NULL COMMENT '密码',
  `name` varchar(100) DEFAULT NULL COMMENT '姓名',
  `email` varchar(200) DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(200) DEFAULT NULL COMMENT '电话',
  `mobile` varchar(200) DEFAULT NULL COMMENT '手机',
  `remarks` varchar(255) DEFAULT '' COMMENT '备注',
  `user_type` varchar(100) DEFAULT '' COMMENT '用户类型',
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `del_flag` char(1) DEFAULT '0' COMMENT '删除标记（0：正常；1：删除）',
  `login_ip` varchar(100) DEFAULT NULL COMMENT '最后登陆IP',
  `login_date` datetime DEFAULT NULL COMMENT '最后登陆时间',
  PRIMARY KEY (`id`),
  KEY `area_id` (`area_id`),
  KEY `login_name` (`login_name`),
  KEY `del_flag` (`del_flag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='系统用户表';

-- 正在导出表  rs.sys_user 的数据：~0 rows (大约)
DELETE FROM `sys_user`;
/*!40000 ALTER TABLE `sys_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `sys_user` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
