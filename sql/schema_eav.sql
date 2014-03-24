  DROP SCHEMA `content`;
CREATE SCHEMA `content`;


/**************** users **************/

CREATE TABLE `content`.`role` 
(
  `role_id` INT NOT NULL DEFAULT 1, 
  `role_name` VARCHAR(100) NOT NULL,
 
  PRIMARY KEY (`role_id`), UNIQUE INDEX `role_id_UNIQUE` (`role_id` ASC)
); 
 
  
 
 
CREATE TABLE `content`.`person` 
(
  `person_id` INT NOT NULL DEFAULT 1,
  `first_name` VARCHAR(200) NOT NULL,
  `middle_name` VARCHAR(200) NULL,
  `last_name` VARCHAR(200) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  
  PRIMARY KEY (`person_id`), UNIQUE INDEX `person_id_UNIQUE` (`person_id` ASC)
);  


 
CREATE TABLE `content`.`collection` 
(
  `collection_id` INT NOT NULL DEFAULT 1,
  `collection_name` VARCHAR(45) NULL,
 
  
  PRIMARY KEY (`collection_id`), UNIQUE INDEX `collection_id_UNIQUE` (`collection_id` ASC)
);



CREATE TABLE `content`.`person_collection_perm`
(
  `id` INT NOT NULL DEFAULT 1, 
  `person_id` INT NOT NULL,
  `collection_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  
	FOREIGN KEY (person_id) REFERENCES person(person_id),
	FOREIGN KEY (collection_id) REFERENCES collection(collection_id),
	FOREIGN KEY (role_id) REFERENCES role(role_id),
  PRIMARY KEY (`id`), UNIQUE INDEX `pc_id_UNIQUE` (`id` ASC)
);





CREATE TABLE `content`.`collection_record` 
(
  `record_id` INT NOT NULL DEFAULT 1,
  `record_name` VARCHAR(45) NULL,
  `item_id` INT NOT NULL,
  `collection_id` INT NOT NULL,
	FOREIGN KEY (collection_id) REFERENCES collection(collection_id),
  PRIMARY KEY (`record_id`), UNIQUE INDEX `collection_id_UNIQUE` (`record_id` ASC)
);




/**************** EAV ***************************************/

CREATE TABLE `content`.`item`
(
	`item_id` INT NOT NULL DEFAULT 1,
	
  PRIMARY KEY (`item_id`), UNIQUE INDEX `item_id_UNIQUE` (`item_id` ASC)
);


 

CREATE TABLE `content`.`item_attribute`
(
	`attribute_id` INT NOT NULL DEFAULT 1,
	`item_id` INT NOT NULL  ,
	`attribute_name` VARCHAR(200) NOT NULL,
	
	FOREIGN KEY (item_id) REFERENCES item(item_id),
  PRIMARY KEY (`attribute_id`), UNIQUE INDEX `attribute_id_UNIQUE` (`attribute_id` ASC)
);

 
CREATE TABLE `content`.`item_value`
(
	`value_id` INT NOT NULL DEFAULT 1,
	`item_id` INT NOT NULL  ,
 	`is_many` BIT NOT NULL DEFAULT 0,
	
	
	
	FOREIGN KEY (item_id) REFERENCES item(item_id),
  PRIMARY KEY (`value_id`), UNIQUE INDEX `value_id_UNIQUE` (`value_id` ASC)
);


CREATE TABLE `content`.`lu_value_type`
(
	`type_id` INT NOT NULL DEFAULT 1,
	`value_id` INT NOT NULL, 
	`type_name` VARCHAR(50) NOT NULL,
	
	FOREIGN KEY (value_id) REFERENCES item_value(value_id),
  PRIMARY KEY (`type_id`), UNIQUE INDEX `value_id_UNIQUE` (`type_id` ASC)
);

CREATE TABLE `content`.`value_date`
(
	`id` INT NOT NULL DEFAULT 1, 
	 
  PRIMARY KEY (`id`), UNIQUE INDEX `vd_id_UNIQUE` (`id` ASC)
)
