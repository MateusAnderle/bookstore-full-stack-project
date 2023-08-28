/*
  Warnings:

  - You are about to drop the column `products` on the `orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "products";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "orderId" TEXT;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
