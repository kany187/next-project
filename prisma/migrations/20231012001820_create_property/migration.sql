/*
  Warnings:

  - Added the required column `bath` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bed` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `homeType` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgSrc` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lat` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `long` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `streetAddress` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Property` ADD COLUMN `bath` VARCHAR(191) NOT NULL,
    ADD COLUMN `bed` VARCHAR(191) NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `homeType` VARCHAR(191) NOT NULL,
    ADD COLUMN `imgSrc` VARCHAR(191) NOT NULL,
    ADD COLUMN `lat` VARCHAR(191) NOT NULL,
    ADD COLUMN `long` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` ENUM('NEW', 'SOLD') NOT NULL DEFAULT 'NEW',
    ADD COLUMN `streetAddress` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `zipCode` VARCHAR(191) NOT NULL;
