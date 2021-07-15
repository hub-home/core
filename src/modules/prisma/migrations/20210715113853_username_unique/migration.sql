/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Member` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Member.username_unique" ON "Member"("username");
