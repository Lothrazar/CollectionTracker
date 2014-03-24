CREATE SCHEMA `eav` ;

CREATE SCHEMA `users` ;

CREATE SCHEMA 'content';



CREATE TABLE `users`.`person` 
(
  `person_id` INT NOT NULL DEFAULT 1,
  `first_name` VARCHAR(200) NULL,
  `middle_name` VARCHAR(200) NULL,
  `last_name` VARCHAR(200) NULL,
  `password` VARCHAR(200) NULL,
  
  PRIMARY KEY (`person_id`), UNIQUE INDEX `person_id_UNIQUE` (`person_id` ASC)
); 


CREATE TABLE 'users'.'person_collection_perm'
(
  `id` INT NOT NULL DEFAULT 1, 
  `person_id` INT NOT NULL,
  `collection_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  
  PRIMARY KEY (`pc_id`), UNIQUE INDEX `pc_id_UNIQUE` (`id` ASC)
);
 
CREATE TABLE `content`.`collection` 
(
  `collection_id` INT NOT NULL DEFAULT 1,
  `collection_name` VARCHAR(45) NULL,
  'person_id' INT NOT NULL, 
  
  PRIMARY KEY (`collection_id`), UNIQUE INDEX `collection_id_UNIQUE` (`collection_id` ASC)
);



CREATE TABLE `content`.`collection_record` 
(
  `record_id` INT NOT NULL DEFAULT 1,
  `record_name` VARCHAR(45) NULL,
  'item_id' INT NOT NULL,
  'collection_id' INT NOT NULL,
  PRIMARY KEY (`record_id`), UNIQUE INDEX `collection_id_UNIQUE` (`record_id` ASC)
);

