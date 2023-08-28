import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const productsRoutes = Router();

productsRoutes.get("/", async (req, res) => {
  const skip = req?.query?.skip || 0;
  const take = req?.query?.take || 10;

  try {
    const [products, totalProducts] = await prisma.$transaction([
      prisma.product.findMany({
        skip: Number(skip),
        take: Number(take),
        orderBy: {
          created_at: "asc",
        },
      }),
      prisma.product.count(),
    ]);

    const pages = Math.ceil(totalProducts / take);

    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: "There are no registered products!" });
    }

    return res.json({ totalProducts, pages, products });
  } catch (error) {
    return res.status(404).json({ message: "Error to list products" });
  }
});

productsRoutes.post("/", async (req, res) => {
  try {
    const {
      livro,
      autor,
      ano,
      genero,
      image,
      quantidade,
      precoSugerido,
      preco,
      sinopse,
      idioma,
      isbn,
      fabricante,
      dimensoes,
    } = req.body;

    const product = await prisma.product.findUnique({
      where: { livro },
    });

    if (product) {
      return res.status(409).json({ message: "Book already exists" });
    }

    await prisma.product.create({
      data: {
        livro,
        autor,
        ano,
        genero,
        image,
        quantidade,
        precoSugerido,
        preco,
        sinopse,
        idioma,
        isbn,
        fabricante,
        dimensoes,
      },
    });

    return res.status(201).end();
  } catch (error) {
    return res.status(404).json({ message: "Error to create product!" });
  }
});

productsRoutes.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (product.length === 0) {
      return res.status(404).json({ message: "Failed to find product!" });
    }

    return res.json(product);
  } catch (error) {
    return res.status(404).json({ message: "Error to find product!" });
  }
});

productsRoutes.get("/filter/:category", async (req, res) => {
  const { category } = req.params;
  const skip = req?.query?.skip || 0;
  const take = req?.query?.take || 10;

  try {
    const [categories, totalCategories] = await prisma.$transaction([
      prisma.product.findMany({
        where: {
          genero: {
            contains: category,
            mode: "insensitive",
          },
        },
        skip: Number(skip),
        take: Number(take),
        orderBy: {
          created_at: "asc",
        },
      }),
      prisma.product.count({
        where: {
          genero: {
            contains: category,
            mode: "insensitive",
          },
        },
      }),
    ]);

    const pages = Math.ceil(totalCategories / take);

    if (categories.length === 0) {
      return res.status(404).json({ message: "Failed to find category!" });
    }

    return res.json({ totalCategories, pages, categories });
  } catch (error) {
    return res.status(404).json({ message: "Error to find category!" });
  }
});

productsRoutes.get("/search/:search", async (req, res) => {
  const { search } = req.params;
  const skip = req?.query?.skip || 0;
  const take = req?.query?.take || 10;

  try {
    const [filteredBooks, totalFilteredBooks] = await prisma.$transaction([
      prisma.product.findMany({
        where: {
          AND: [
            {
              livro: {
                search: search,
              },
            },
            {
              sinopse: {
                search: search,
              },
            },
            {
              genero: {
                search: search,
              },
            },
            {
              autor: {
                search: search,
              },
            },
            {
              fabricante: {
                search: search,
              },
            },
          ],
        },
        skip: Number(skip),
        take: Number(take),
        orderBy: {
          created_at: "asc",
        },
      }),
      prisma.product.count({
        where: {
          AND: [
            {
              livro: {
                search: search,
              },
            },
            {
              sinopse: {
                search: search,
              },
            },
            {
              genero: {
                search: search,
              },
            },
            {
              autor: {
                search: search,
              },
            },
            {
              fabricante: {
                search: search,
              },
            },
          ],
        },
      }),
    ]);

    const pages = Math.ceil(totalFilteredBooks / take);

    if (filteredBooks.length === 0) {
      return res
        .status(404)
        .json({ message: "There is no products with this description!" });
    }

    return res.status(200).json({ totalFilteredBooks, pages, filteredBooks });
  } catch (error) {
    return res.status(404).json({ message: "Error to find products!" });
  }
});

productsRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const {
      livro,
      autor,
      ano,
      genero,
      image,
      quantidade,
      precoSugerido,
      preco,
      sinopse,
      idioma,
      isbn,
      fabricante,
      dimensoes,
    } = req.body;

    await prisma.product.update({
      where: {
        id: id,
      },
      data: {
        livro,
        autor,
        ano,
        genero,
        image,
        quantidade,
        precoSugerido,
        preco,
        sinopse,
        idioma,
        isbn,
        fabricante,
        dimensoes,
      },
    });

    res.status(200).json({ message: "Product updated" });
  } catch (error) {
    return res.status(404).json({ message: "Failed to update product!" });
  }
});

productsRoutes.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.product.delete({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    return res.status(404).json({ message: "Failed to delete product!" });
  }
});

export { productsRoutes };
