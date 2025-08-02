-- CreateTable
CREATE TABLE "public"."Friend" (
    "id" SERIAL NOT NULL,
    "friendId" TEXT NOT NULL,

    CONSTRAINT "Friend_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Friend" ADD CONSTRAINT "Friend_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
