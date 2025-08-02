/*
  Warnings:

  - You are about to drop the column `friendId` on the `Friend` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[senderID,recieverId]` on the table `Friend` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `recieverId` to the `Friend` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderID` to the `Friend` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Friend" DROP CONSTRAINT "Friend_friendId_fkey";

-- AlterTable
ALTER TABLE "public"."Friend" DROP COLUMN "friendId",
ADD COLUMN     "recieverId" TEXT NOT NULL,
ADD COLUMN     "senderID" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Friend_senderID_recieverId_key" ON "public"."Friend"("senderID", "recieverId");

-- AddForeignKey
ALTER TABLE "public"."Friend" ADD CONSTRAINT "Friend_senderID_fkey" FOREIGN KEY ("senderID") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Friend" ADD CONSTRAINT "Friend_recieverId_fkey" FOREIGN KEY ("recieverId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
