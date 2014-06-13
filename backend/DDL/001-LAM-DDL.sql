CREATE TABLE user
(
	id BIGINT NOT NULL AUTO_INCREMENT,
	email VARCHAR(120),
	username VARCHAR(30) NOT NULL,
	last_name VARCHAR(40),
	first_name VARCHAR(40),
	password VARCHAR(36) NOT NULL,
	created_on DATETIME(0) NOT NULL,
	last_login DATETIME(0),
	PRIMARY KEY (id),
	UNIQUE UQ_user_username(username)

) 
;


CREATE TABLE admin ( 
	id BIGINT NOT NULL,
	user_id BIGINT NOT NULL
) 

;

CREATE TABLE itinerary
(
	id BIGINT NOT NULL,
	user_id BIGINT NOT NULL,
	is_public TINYINT NOT NULL,
	is_shared TINYINT,
	is_deleted TINYINT NOT NULL,
	score INT DEFAULT 0,
	name VARCHAR(150) NOT NULL,
	PRIMARY KEY (id),
	INDEX IXFK_itinerary_user (user_id ASC)

) 
;


CREATE TABLE list
(
	id BIGINT NOT NULL,
	user_id BIGINT NOT NULL,
	created_on DATETIME(0),
	is_public TINYINT,
	is_deleted TINYINT,
	PRIMARY KEY (id),
	INDEX IXFK_list_user (user_id ASC)

) 
;


CREATE TABLE itinerary_item
(
	id BIGINT NOT NULL,
	place_id BIGINT NOT NULL,
	itinerary_id BIGINT NOT NULL,
	is_deleted TINYINT,
	created_on DATETIME(0),
	PRIMARY KEY (id),
	INDEX IXFK_itinerary_item_itinerary (itinerary_id ASC),
	INDEX IXFK_itinerary_item_place (place_id ASC)

) 
;


CREATE TABLE place
(
	id BIGINT NOT NULL,
	name VARCHAR(100),
	street_address1 VARCHAR(200),
	street_address2 VARCHAR(200),
	zip INT,
	state VARCHAR(10),
	yelp_biz_id VARCHAR(100),
	lat DOUBLE,
	lng DOUBLE,
	PRIMARY KEY (id)

) 
;


CREATE TABLE list_item
(
	id BIGINT NOT NULL,
	place_id BIGINT,
	list_id BIGINT,
	PRIMARY KEY (id),
	INDEX IXFK_list_item_list (list_id ASC),
	INDEX IXFK_list_item_place (place_id ASC)

) 
;


CREATE TABLE logs
(
	id BIGINT NOT NULL,
	logged_at DATETIME(0),
	route_id VARCHAR(100) NOT NULL,
	user_id BIGINT NOT NULL,
	server_elapsed_miliseconds DOUBLE,
	comments VARCHAR(250),
	PRIMARY KEY (id),
	INDEX IXFK_logs_user (user_id ASC)

) 
;


CREATE TABLE user_preferences
(
	id BIGINT NOT NULL,
	user_id BIGINT,
	receive_emails TINYINT NOT NULL,
	gps_services TINYINT NOT NULL,
	public_profile TINYINT NOT NULL,
	PRIMARY KEY (id),
	INDEX IXFK_user_preferences_user (user_id ASC)

) 
;



CREATE INDEX IXFK_admin_user
ON admin (user_id ASC)
;
ALTER TABLE admin ADD CONSTRAINT PK_admin 
PRIMARY KEY (id) 

;




ALTER TABLE admin ADD CONSTRAINT FK_admin_user 
FOREIGN KEY (user_id) REFERENCES user (id)
;

ALTER TABLE itinerary ADD CONSTRAINT FK_itinerary_user 
	FOREIGN KEY (user_id) REFERENCES user (id)
;

ALTER TABLE list ADD CONSTRAINT FK_list_user 
	FOREIGN KEY (user_id) REFERENCES user (id)
;

ALTER TABLE itinerary_item ADD CONSTRAINT FK_itinerary_item_itinerary 
	FOREIGN KEY (itinerary_id) REFERENCES itinerary (id)
;

ALTER TABLE itinerary_item ADD CONSTRAINT FK_itinerary_item_place 
	FOREIGN KEY (place_id) REFERENCES place (id)
;

ALTER TABLE list_item ADD CONSTRAINT FK_list_item_list 
	FOREIGN KEY (list_id) REFERENCES list (id)
;

ALTER TABLE list_item ADD CONSTRAINT FK_list_item_place 
	FOREIGN KEY (place_id) REFERENCES place (id)
;

ALTER TABLE logs ADD CONSTRAINT FK_logs_user 
	FOREIGN KEY (user_id) REFERENCES user (id)
;

ALTER TABLE user_preferences ADD CONSTRAINT FK_user_preferences_user 
	FOREIGN KEY (user_id) REFERENCES user (id)
;
