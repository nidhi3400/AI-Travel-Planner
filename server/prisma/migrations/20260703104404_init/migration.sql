-- CreateTable
CREATE TABLE "Trip" (
    "id" TEXT NOT NULL,
    "budget" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "sourceCity" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "interests" JSONB NOT NULL,
    "itinerary" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);
