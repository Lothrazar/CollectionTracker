DROP SCHEMA `tracker` ;
CREATE SCHEMA `tracker` ;
 

CREATE TABLE `tracker`.`region` (
  `region_id` INT NOT NULL DEFAULT 1,
  `region_name` VARCHAR(45) NULL,
  PRIMARY KEY (`region_id`),
  UNIQUE INDEX `region_id_UNIQUE` (`region_id` ASC));


 


CREATE TABLE `tracker`.`company` (
  `company_id` INT NOT NULL DEFAULT 1,
  `company_name` VARCHAR(45) NULL,
  PRIMARY KEY (`company_id`),
  UNIQUE INDEX `company_id_UNIQUE` (`company_id` ASC));
  
  
  
  
  CREATE TABLE `tracker`.`platform` (
  `platform_id` INT NOT NULL DEFAULT 1,
  `platform_name` VARCHAR(45) NULL,
  `platform_company_id` INT NOT NULL , 
	FOREIGN KEY (platform_company_id) REFERENCES company(company_id),

  PRIMARY KEY (`platform_id`),
  UNIQUE INDEX `platform_id_UNIQUE` (`platform_id` ASC))
 
  ;
  
  
  
    
  CREATE TABLE `tracker`.`game` (
  `game_id` INT NOT NULL DEFAULT 1,
  `game_name` VARCHAR(45) NULL,
  `company_id` INT NOT NULL , 
  `platform_id` INT NOT NULL , 
  `region_id` INT NOT NULL , 
  `release_date` date NOT NULL , 
  
	FOREIGN KEY (company_id) REFERENCES company(company_id),
	FOREIGN KEY (platform_id) REFERENCES platform(platform_id),
	FOREIGN KEY (region_id) REFERENCES region(region_id),

  PRIMARY KEY (`game_id`),
  UNIQUE INDEX `game_id_UNIQUE` (`game_id` ASC))
 
  ;
  
  
  
  
  
  