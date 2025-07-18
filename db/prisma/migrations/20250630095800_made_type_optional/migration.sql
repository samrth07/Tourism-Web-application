/*
  Warnings:

  - Made the column `roomName` on table `TravelPlan` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Message" ALTER COLUMN "type" DROP NOT NULL;

-- AlterTable
ALTER TABLE "TravelPlan" ALTER COLUMN "roomName" SET NOT NULL;
