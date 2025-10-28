-- AlterTable
ALTER TABLE "public"."TravelPlan" ADD COLUMN     "Categories" TEXT,
ADD COLUMN     "Difficulty" TEXT,
ADD COLUMN     "Duration" TEXT,
ADD COLUMN     "decp" TEXT,
ADD COLUMN     "grpSize" INTEGER,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "maxAge" INTEGER DEFAULT 100,
ADD COLUMN     "minAge" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "Age" INTEGER;

-- CreateTable
CREATE TABLE "public"."Trip_Hightlights" (
    "planId" TEXT NOT NULL,
    "Trip_hightLight" TEXT NOT NULL,

    CONSTRAINT "Trip_Hightlights_pkey" PRIMARY KEY ("planId")
);

-- AddForeignKey
ALTER TABLE "public"."Trip_Hightlights" ADD CONSTRAINT "Trip_Hightlights_planId_fkey" FOREIGN KEY ("planId") REFERENCES "public"."TravelPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
