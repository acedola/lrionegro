import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';
import { ProductGrid, Title } from '@/components/idex';
const seedProducts = initialData.products;

interface Props {
  params: {
    id: string;
  };
}

export default function ({ params }: Props) {
  const { id } = params;
  const products = seedProducts.filter((product) => product.gender === id);
  // if (id === 'contacto') {
  //   notFound();
  // }
  return (
    <>
      <Title title="Tienda" subtitle="Todos los Productos" className="mb-2" />
      <ProductGrid products={products} />
    </>
  );
}
