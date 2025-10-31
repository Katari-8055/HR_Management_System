/*
  Warnings:

  - You are about to drop the column `teamId` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('Ongoing', 'Pending', 'Cancelled', 'Completed');

-- DropForeignKey
ALTER TABLE "public"."Employee" DROP CONSTRAINT "Employee_teamId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Team" DROP CONSTRAINT "Team_managerId_fkey";

-- AlterTable
ALTER TABLE "public"."Employee" DROP COLUMN "teamId",
ADD COLUMN     "image" TEXT,
ADD COLUMN     "projectId" TEXT;

-- DropTable
DROP TABLE "public"."Team";

-- DropEnum
DROP TYPE "public"."TeamRole";

-- CreateTable
CREATE TABLE "public"."Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" "public"."Status" NOT NULL,
    "managerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Employee" ADD CONSTRAINT "Employee_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Project" ADD CONSTRAINT "Project_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
