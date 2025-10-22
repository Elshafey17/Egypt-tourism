ALTER TABLE `touristPlaces` MODIFY COLUMN `latitude` varchar(20) NOT NULL;--> statement-breakpoint
ALTER TABLE `touristPlaces` MODIFY COLUMN `longitude` varchar(20) NOT NULL;--> statement-breakpoint
ALTER TABLE `touristPlaces` ADD `openingHours` varchar(100);--> statement-breakpoint
ALTER TABLE `touristPlaces` ADD `openingHoursAr` varchar(100);--> statement-breakpoint
ALTER TABLE `touristPlaces` ADD `ticketPrice` varchar(100);--> statement-breakpoint
ALTER TABLE `touristPlaces` ADD `ticketPriceAr` varchar(100);--> statement-breakpoint
ALTER TABLE `touristPlaces` ADD `bestTimeToVisit` varchar(100);--> statement-breakpoint
ALTER TABLE `touristPlaces` ADD `bestTimeToVisitAr` varchar(100);--> statement-breakpoint
ALTER TABLE `touristPlaces` ADD `highlights` text;--> statement-breakpoint
ALTER TABLE `touristPlaces` ADD `highlightsAr` text;--> statement-breakpoint
ALTER TABLE `touristPlaces` ADD `facilities` text;--> statement-breakpoint
ALTER TABLE `touristPlaces` ADD `facilitiesAr` text;--> statement-breakpoint
ALTER TABLE `touristPlaces` ADD `historicalSignificance` text;--> statement-breakpoint
ALTER TABLE `touristPlaces` ADD `historicalSignificanceAr` text;