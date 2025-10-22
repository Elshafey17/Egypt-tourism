import { mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, int } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  id: varchar("id", { length: 64 }).primaryKey(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Governorates table
export const governorates = mysqlTable("governorates", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 100 }).notNull(),
  nameAr: varchar("nameAr", { length: 100 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});

export type Governorate = typeof governorates.$inferSelect;
export type InsertGovernorate = typeof governorates.$inferInsert;

// Tourist Places table
export const touristPlaces = mysqlTable("touristPlaces", {
  id: int("id").primaryKey().autoincrement(),
  governorateId: int("governorateId").notNull(),
  name: varchar("name", { length: 150 }).notNull(),
  nameAr: varchar("nameAr", { length: 150 }).notNull(),
  description: text("description").notNull(),
  descriptionAr: text("descriptionAr").notNull(),
  latitude: varchar("latitude", { length: 20 }).notNull(),
  longitude: varchar("longitude", { length: 20 }).notNull(),
  openingHours: varchar("openingHours", { length: 100 }),
  openingHoursAr: varchar("openingHoursAr", { length: 100 }),
  ticketPrice: varchar("ticketPrice", { length: 100 }),
  ticketPriceAr: varchar("ticketPriceAr", { length: 100 }),
  bestTimeToVisit: varchar("bestTimeToVisit", { length: 100 }),
  bestTimeToVisitAr: varchar("bestTimeToVisitAr", { length: 100 }),
  highlights: text("highlights"),
  highlightsAr: text("highlightsAr"),
  facilities: text("facilities"),
  facilitiesAr: text("facilitiesAr"),
  historicalSignificance: text("historicalSignificance"),
  historicalSignificanceAr: text("historicalSignificanceAr"),
  createdAt: timestamp("createdAt").defaultNow(),
});

export type TouristPlace = typeof touristPlaces.$inferSelect;
export type InsertTouristPlace = typeof touristPlaces.$inferInsert;
