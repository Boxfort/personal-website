DROP DATABASE website;

CREATE DATABASE website;

USE website;

CREATE TABLE project (
	project_id int(11) NOT NULL AUTO_INCREMENT,
	project_name varchar(255) NOT NULL,
	project_description varchar(8000),
	github_url varchar(1000),
	PRIMARY KEY (project_id)
);

CREATE TABLE project_image (
	image_id int(11) NOT NULL AUTO_INCREMENT,
	project_id int(11) NOT NULL,
	img_path varchar(255) NOT NULL,
	PRIMARY KEY (image_id),
	CONSTRAINT project_image_ibfk_1 FOREIGN KEY (project_id) REFERENCES project (project_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE tech (
	tech_id int(11) NOT NULL AUTO_INCREMENT,
	tech_html varchar(255) NOT NULL,
	PRIMARY KEY (tech_id)
);

CREATE TABLE project_tech (
	project_tech_id int(11) NOT NULL AUTO_INCREMENT,
	tech_id int(11) NOT NULL,
	project_id int(11) NOT NULL,
	PRIMARY KEY (project_tech_id),
	CONSTRAINT project_tech_ibfk_1 FOREIGN KEY (tech_id) REFERENCES tech (tech_id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT project_tech_ibfk_2 FOREIGN KEY (project_id) REFERENCES project (project_id) ON DELETE CASCADE ON UPDATE CASCADE
);
