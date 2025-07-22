/*
  Warnings:

  - You are about to drop the column `userId` on the `TravelPlan` table. All the data in the column will be lost.
  - Added the required column `createdById` to the `TravelPlan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TravelPlan" DROP CONSTRAINT "TravelPlan_userId_fkey";

-- AlterTable
ALTER TABLE "TravelPlan" DROP COLUMN "userId",
ADD COLUMN     "createdById" TEXT NOT NULL,
ALTER COLUMN "roomName" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "TravelPlan" ADD CONSTRAINT "TravelPlan_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
