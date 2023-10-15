-- AlterTable
ALTER TABLE `Property` MODIFY `propertyType` ENUM('ANY', 'HOUSE', 'APPARTMENT', 'LAND', 'OFFICE_SPACE') NOT NULL DEFAULT 'ANY';

-- AlterTable
ALTER TABLE `User` ADD COLUMN `hashedPassword` VARCHAR(191) NULL;
