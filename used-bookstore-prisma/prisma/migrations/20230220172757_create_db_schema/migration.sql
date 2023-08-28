-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "zipCode" INTEGER NOT NULL,
    "phone" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "repeatPassword" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "products" TEXT NOT NULL,
    "orderSummary" TEXT NOT NULL,
    "delivery" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
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
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_livro_key" ON "products"("livro");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
