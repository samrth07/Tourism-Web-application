/*
  Warnings:

  - You are about to drop the column `roomName` on the `TravelPlan` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."TravelPlan_roomName_key";

-- AlterTable
ALTER TABLE "public"."TravelPlan" DROP COLUMN "roomName";
