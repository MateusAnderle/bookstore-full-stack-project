/*
  Warnings:

  - You are about to drop the column `delivery` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `orderSummary` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `products` on the `orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "delivery",
DROP COLUMN "orderSummary",
DROP COLUMN "products";

-- CreateTable
CREATE TABLE "checkout_products" (
    "idUnique" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "livro" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "precoSugerido" DOUBLE PRECISION NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "sinopse" TEXT NOT NULL,
    "idioma" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "fabricante" TEXT NOT NULL,
    "dimensoes" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "orderId" TEXT,

    CONSTRAINT "checkout_products_pkey" PRIMARY KEY ("idUnique")
);

-- CreateTable
CREATE TABLE "checkout_summary" (
    "id" TEXT NOT NULL,
    "numberOfItems" DOUBLE PRECISION NOT NULL,
    "totalPriceCart" DOUBLE PRECISION NOT NULL,
    "orderId" TEXT,

    CONSTRAINT "checkout_summary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "checkout_delivery" (
    "id" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "localidade" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "referencePoint" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "valorFrete" DOUBLE PRECISION NOT NULL,
    "prazo" DOUBLE PRECISION NOT NULL,
    "payment" TEXT NOT NULL,
    "orderId" TEXT,

    CONSTRAINT "checkout_delivery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "checkout_products" ADD CONSTRAINT "checkout_products_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "checkout_summary" ADD CONSTRAINT "checkout_summary_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "checkout_delivery" ADD CONSTRAINT "checkout_delivery_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
