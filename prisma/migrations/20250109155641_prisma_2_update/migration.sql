/*
  Warnings:

  - The values [Document,Link] on the enum `channelType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "channelType_new" AS ENUM ('Twitter', 'Youtube', 'Documents', 'Links');
ALTER TABLE "Task" ALTER COLUMN "channel" TYPE "channelType_new" USING ("channel"::text::"channelType_new");
ALTER TYPE "channelType" RENAME TO "channelType_old";
ALTER TYPE "channelType_new" RENAME TO "channelType";
DROP TYPE "channelType_old";
COMMIT;
