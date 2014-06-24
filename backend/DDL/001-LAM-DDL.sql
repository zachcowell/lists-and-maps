DROP TABLE admin CASCADE
;
DROP TABLE app_user CASCADE
;
DROP SEQUENCE  app_user_id_seq
;
DROP TABLE itinerary CASCADE
;
DROP TABLE itinerary_item CASCADE
;
DROP TABLE list CASCADE
;
DROP TABLE list_item CASCADE
;
DROP TABLE logs CASCADE
;
DROP TABLE place CASCADE
;
DROP TABLE user_preferences CASCADE
;

CREATE TABLE admin ( 
	id BIGINT NOT NULL,
	user_id BIGINT NOT NULL
)
;

CREATE SEQUENCE app_user_id_seq INCREMENT 1 START 1
;

CREATE TABLE app_user ( 
	id bigint DEFAULT nextval(('app_user_id_seq'::text)::regclass) NOT NULL,
	email varchar(120),
	facebook_id bigint,
	username varchar(30) NOT NULL,
	last_name varchar(40),
	first_name varchar(40),
	created_on timestamp(0) NOT NULL,
	last_login timestamp(0)
)
;

CREATE TABLE itinerary ( 
	id bigint NOT NULL,
	user_id bigint NOT NULL,
	is_public integer NOT NULL,
	is_shared integer,
	is_deleted integer NOT NULL,
	score integer DEFAULT 0,
	name varchar(150) NOT NULL
)
;

CREATE TABLE itinerary_item ( 
	id bigint NOT NULL,
	place_id bigint NOT NULL,
	itinerary_id bigint NOT NULL,
	is_deleted integer,
	created_on timestamp(0)
)
;

CREATE TABLE list ( 
	id bigint NOT NULL,
	user_id bigint NOT NULL,
	created_on timestamp(0),
	is_public integer,
	is_deleted integer
)
;

CREATE TABLE list_item ( 
	id bigint NOT NULL,
	place_id bigint,
	list_id bigint
)
;

CREATE TABLE logs ( 
	id bigint NOT NULL,
	logged_at timestamp(0),
	route_id varchar(100) NOT NULL,
	user_id bigint NOT NULL,
	server_elapsed_miliseconds double precision,
	comments varchar(250)
)
;

CREATE TABLE place ( 
	id bigint NOT NULL,
	name varchar(100),
	street_address1 varchar(200),
	street_address2 varchar(200),
	zip integer,
	state varchar(10),
	yelp_biz_id varchar(100),
	lat double precision,
	lng double precision
)
;

CREATE TABLE user_preferences ( 
	id bigint NOT NULL,
	user_id bigint,
	receive_emails integer NOT NULL,
	gps_services integer NOT NULL,
	public_profile integer NOT NULL
)
;


CREATE INDEX IXFK_admin_user
	ON admin (user_id)
;
ALTER TABLE app_user
	ADD CONSTRAINT UQ_user_username UNIQUE (username)
;
CREATE INDEX IXFK_itinerary_user
	ON itinerary (user_id)
;
CREATE INDEX IXFK_itinerary_item_itinerary
	ON itinerary_item (itinerary_id)
;
CREATE INDEX IXFK_itinerary_item_place
	ON itinerary_item (place_id)
;
CREATE INDEX IXFK_list_user
	ON list (user_id)
;
CREATE INDEX IXFK_list_item_list
	ON list_item (list_id)
;
CREATE INDEX IXFK_list_item_place
	ON list_item (place_id)
;
CREATE INDEX IXFK_logs_user
	ON logs (user_id)
;
CREATE INDEX IXFK_user_preferences_user
	ON user_preferences (user_id)
;
ALTER TABLE admin ADD CONSTRAINT PK_admin 
	PRIMARY KEY (id)
;


ALTER TABLE app_user ADD CONSTRAINT PK_user 
	PRIMARY KEY (id)
;


ALTER TABLE itinerary ADD CONSTRAINT PK_itinerary 
	PRIMARY KEY (id)
;


ALTER TABLE itinerary_item ADD CONSTRAINT PK_itinerary_item 
	PRIMARY KEY (id)
;


ALTER TABLE list ADD CONSTRAINT PK_list 
	PRIMARY KEY (id)
;


ALTER TABLE list_item ADD CONSTRAINT PK_list_item 
	PRIMARY KEY (id)
;


ALTER TABLE logs ADD CONSTRAINT PK_logs 
	PRIMARY KEY (id)
;


ALTER TABLE place ADD CONSTRAINT PK_place 
	PRIMARY KEY (id)
;


ALTER TABLE user_preferences ADD CONSTRAINT PK_user_preferences 
	PRIMARY KEY (id)
;




ALTER TABLE admin ADD CONSTRAINT FK_admin_user 
	FOREIGN KEY (user_id) REFERENCES app_user (id)
;

ALTER TABLE itinerary ADD CONSTRAINT FK_itinerary_user 
	FOREIGN KEY (user_id) REFERENCES app_user (id)
;

ALTER TABLE itinerary_item ADD CONSTRAINT FK_itinerary_item_itinerary 
	FOREIGN KEY (itinerary_id) REFERENCES itinerary (id)
;

ALTER TABLE itinerary_item ADD CONSTRAINT FK_itinerary_item_place 
	FOREIGN KEY (place_id) REFERENCES place (id)
;

ALTER TABLE list ADD CONSTRAINT FK_list_user 
	FOREIGN KEY (user_id) REFERENCES app_user (id)
;

ALTER TABLE list_item ADD CONSTRAINT FK_list_item_list 
	FOREIGN KEY (list_id) REFERENCES list (id)
;

ALTER TABLE list_item ADD CONSTRAINT FK_list_item_place 
	FOREIGN KEY (place_id) REFERENCES place (id)
;

ALTER TABLE logs ADD CONSTRAINT FK_logs_user 
	FOREIGN KEY (user_id) REFERENCES app_user (id)
;

ALTER TABLE user_preferences ADD CONSTRAINT FK_user_preferences_user 
	FOREIGN KEY (user_id) REFERENCES app_user (id)
;
