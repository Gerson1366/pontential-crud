CREATE DATABASE `pontential_crud` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

-- pontential_crud.desenvolvedor definition

CREATE TABLE `desenvolvedor` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `sexo` char(1) NOT NULL,
  `idade` int(10) unsigned NOT NULL,
  `hobby` varchar(100) NOT NULL,
  `datanascimento` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;