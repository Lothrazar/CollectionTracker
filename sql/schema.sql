CREATE SCHEMA `tracker` ;
 

CREATE TABLE `tracker`.`region` (
  `region_id` INT NOT NULL DEFAULT 1,
  `region_name` VARCHAR(45) NULL,
  PRIMARY KEY (`region_id`),
  UNIQUE INDEX `region_id_UNIQUE` (`region_id` ASC));
