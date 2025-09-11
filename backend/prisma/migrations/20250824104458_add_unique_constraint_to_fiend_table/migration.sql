/*
  Warnings:

  - A unique constraint covering the columns `[senderID,recieverId]` on the table `Friend` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Friend_senderID_recieverId_key" ON "public"."Friend"("senderID", "recieverId");
