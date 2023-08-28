/*
  Warnings:

  - You are about to drop the `checkout_delivery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `checkout_summary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "checkout_delivery" DROP CONSTRAINT "checkout_delivery_orderId_fkey";

-- DropForeignKey
ALTER TABLE "checkout_summary" DROP CONSTRAINT "checkout_summary_orderId_fkey";

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "delivery" JSONB[],
ADD COLUMN     "orderSummary" JSONB[];

-- DropTable
DROP TABLE "checkout_delivery";

-- DropTable
DROP TABLE "checkout_summary";
