-- AlterTable
ALTER TABLE "public"."Employee" ADD COLUMN     "setupToken" TEXT,
ADD COLUMN     "setupTokenExpiry" TIMESTAMP(3);
