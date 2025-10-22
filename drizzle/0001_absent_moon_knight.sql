CREATE TABLE `governorates` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`nameAr` varchar(100) NOT NULL,
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `governorates_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `touristPlaces` (
	`id` int AUTO_INCREMENT NOT NULL,
	`governorateId` int NOT NULL,
	`name` varchar(150) NOT NULL,
	`nameAr` varchar(150) NOT NULL,
	`description` text NOT NULL,
	`descriptionAr` text NOT NULL,
	`latitude` decimal(10,6) NOT NULL,
	`longitude` decimal(10,6) NOT NULL,
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `touristPlaces_id` PRIMARY KEY(`id`)
);
