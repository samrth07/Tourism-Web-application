-- CreateTable
CREATE TABLE "TravelPlanMembers" (
    "memberId" TEXT NOT NULL,
    "travelPlanId" TEXT NOT NULL,

    CONSTRAINT "TravelPlanMembers_pkey" PRIMARY KEY ("memberId","travelPlanId")
);

-- AddForeignKey
ALTER TABLE "TravelPlanMembers" ADD CONSTRAINT "TravelPlanMembers_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelPlanMembers" ADD CONSTRAINT "TravelPlanMembers_travelPlanId_fkey" FOREIGN KEY ("travelPlanId") REFERENCES "TravelPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
