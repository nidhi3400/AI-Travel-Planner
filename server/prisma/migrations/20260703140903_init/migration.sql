/*
  Warnings:

  - The `interests` column on the `Trip` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[searchKey]` on the table `Trip` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `estimatedCost` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `searchKey` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "estimatedCost" INTEGER NOT NULL,
ADD COLUMN     "searchKey" TEXT NOT NULL,
DROP COLUMN "interests",
ADD COLUMN     "interests" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "Trip_searchKey_key" ON "Trip"("searchKey");
