-- AlterTable
ALTER TABLE `Property` ADD COLUMN `listingStatus` ENUM('FOR_SALE', 'PENDING', 'SOLD') NOT NULL DEFAULT 'FOR_SALE',
    ADD COLUMN `propertyType` ENUM('ANY', 'HOUSE', 'APPARTMENT', 'LAND') NOT NULL DEFAULT 'ANY';