/*
  Warnings:

  - You are about to drop the `Edy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Edy";

-- CreateTable
CREATE TABLE "User" (
    "id_" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_")
);
