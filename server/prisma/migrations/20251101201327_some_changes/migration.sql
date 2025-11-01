-- AlterTable
ALTER TABLE "public"."Project" ADD COLUMN     "Deadline" TIMESTAMP(3),
ALTER COLUMN "status" SET DEFAULT 'Ongoing';
