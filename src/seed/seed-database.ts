import { create } from 'zustand';
import { initialData } from './seed';
import prisma from '../lib/prisma';

async function main() {
  // 1. Borrar registros previos
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const { categories, products } = initialData;

  // Crear Categorías
  const categoriesData = categories.map((name) => ({ name }));

  await prisma.category.createMany({
    data: categoriesData
  });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>);

  console.log(categoriesMap);

  // Crear Productos
  for (const product of products) {
    const { type, images, ...rest } = product;

    const categoryId = categoriesMap[type.toLowerCase()];
    if (!categoryId) {
      console.error(`No se encontró la categoría para el tipo: ${type}`);
      continue; // O lanzar un error si prefieres
    }

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoryId // Aquí aseguramos que `categoryId` está presente
      }
    });

    // Crear imágenes del producto
    for (const imageUrl of images) {
      await prisma.productImage.create({
        data: {
          url: imageUrl,
          productId: dbProduct.id
        }
      });
    }
  }

  console.log('Seed ejecutado correctamente');
}

(() => {
  if (process.env.NODE_ENV === 'production') return;

  main().catch((error) => {
    console.error('Error ejecutando el seed:', error);
    process.exit(1);
  });
})();
