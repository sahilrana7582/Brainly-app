-- CreateEnum
CREATE TYPE "channelType" AS ENUM ('Twitter', 'Youtube', 'Document', 'Link');

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "channel" "channelType" NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Task_userId_key" ON "Task"("userId");
