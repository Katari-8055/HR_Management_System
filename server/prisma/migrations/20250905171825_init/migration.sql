-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."EmploymentType" AS ENUM ('FULL_TIME', 'PART_TIME', 'INTERN', 'CONTRACT');

-- CreateEnum
CREATE TYPE "public"."EmploymentStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'ON_LEAVE', 'TERMINATED');

-- CreateEnum
CREATE TYPE "public"."Roles" AS ENUM ('HR', 'MANAGER', 'EMPLOYEE');

-- CreateEnum
CREATE TYPE "public"."TeamRole" AS ENUM ('MEMBER', 'LEAD');

-- CreateTable
CREATE TABLE "public"."Employee" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "gender" "public"."Gender" DEFAULT 'OTHER',
    "position" TEXT,
    "street" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip" TEXT,
    "country" TEXT,
    "dateOfJoining" TIMESTAMP(3) NOT NULL,
    "employmentType" "public"."EmploymentType" NOT NULL DEFAULT 'FULL_TIME',
    "status" "public"."EmploymentStatus" NOT NULL DEFAULT 'ACTIVE',
    "salary" DOUBLE PRECISION NOT NULL DEFAULT 50000,
    "accountNo" TEXT,
    "ifsc" TEXT,
    "bankName" TEXT,
    "emergencyName" TEXT,
    "emergencyRelation" TEXT,
    "emergencyPhone" TEXT,
    "pan" TEXT,
    "aadhaar" TEXT,
    "passport" TEXT,
    "role" "public"."Roles" NOT NULL DEFAULT 'EMPLOYEE',
    "departmentId" TEXT,
    "teamId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "managerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_employeeId_key" ON "public"."Employee"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "public"."Employee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_pan_key" ON "public"."Employee"("pan");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_aadhaar_key" ON "public"."Employee"("aadhaar");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_passport_key" ON "public"."Employee"("passport");

-- AddForeignKey
ALTER TABLE "public"."Employee" ADD CONSTRAINT "Employee_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "public"."Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Employee" ADD CONSTRAINT "Employee_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "public"."Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Team" ADD CONSTRAINT "Team_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
