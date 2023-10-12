/*
  Warnings:

  - You are about to drop the column `email` on the `Property` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Property_email_key` ON `Property`;

-- AlterTable
ALTER TABLE `Property` DROP COLUMN `email`,
    MODIFY `homeType` VARCHAR(191) NULL,
    MODIFY `imgSrc` VARCHAR(191) NULL,
    MODIFY `lat` VARCHAR(191) NULL,
    MODIFY `long` VARCHAR(191) NULL,
    MODIFY `zipCode` VARCHAR(191) NULL;
