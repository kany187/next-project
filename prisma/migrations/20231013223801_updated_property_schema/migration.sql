/*
  Warnings:

  - You are about to drop the column `homeType` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `long` on the `Property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Property` DROP COLUMN `homeType`,
    DROP COLUMN `long`,
    ADD COLUMN `lng` VARCHAR(191) NULL;
