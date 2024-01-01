CREATE TABLE `notes` (
	`id` varchar(256) NOT NULL,
	`title` varchar(256) NOT NULL,
	`body` varchar(256) NOT NULL,
	`profile_id` varchar(256) NOT NULL,
	CONSTRAINT `notes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `profiles` (
	`id` varchar(256) NOT NULL,
	`email` varchar(256) NOT NULL,
	`password` varchar(256) NOT NULL,
	CONSTRAINT `profiles_id` PRIMARY KEY(`id`)
);
