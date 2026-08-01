/*
  Warnings:

  - You are about to drop the column `updatedAr` on the `Activity` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Activity` DROP COLUMN `updatedAr`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
