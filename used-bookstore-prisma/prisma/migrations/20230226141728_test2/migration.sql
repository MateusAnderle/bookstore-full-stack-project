/*
  Warnings:

  - You are about to drop the `checkout_products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "checkout_products" DROP CONSTRAINT "checkout_products_orderId_fkey";

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "products" JSONB[];

-- DropTable
DROP TABLE "checkout_products";
