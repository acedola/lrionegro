interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: 'lupulos' | 'fardos' | 'aceites';
}

type ValidSizes = 'kg1' | 'kg5' | 'kg10';
type ValidTypes = 'Cascade' | 'Nuget' | 'Victoria' | 'Mapuche';

interface SeedData {
  categories: string[];
  products: SeedProduct[];
}

export const initialData: SeedData = {
  categories: ['Cascade', 'Nuget', 'Victoria', 'Mapuche'],
  products: [
    {
      description:
        'Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
      images: ['1740176-00-A_0_2000.jpg', '1740176-00-A_1.jpg'],
      inStock: 7,
      price: 75,
      sizes: ['kg1', 'kg5', 'kg10'],
      slug: 'mens_chill_crew_neck_sweatshirt',
      type: 'Cascade',
      tags: ['herval'],
      title: 'Cascade Rio Negro',
      gender: 'lupulos'
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      images: ['1740507-00-A_0_2000.jpg', '1740507-00-A_1.jpg'],
      inStock: 5,
      price: 200,
      sizes: ['kg1', 'kg5', 'kg10'],
      slug: 'men_quilted_shirt_jacket',
      type: 'Nuget',
      tags: ['Nuget'],
      title: 'Nuget Rio Negro',
      gender: 'lupulos'
    },

    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      images: ['1740250-00-A_0_2000.jpg', '1740250-00-A_1.jpg'],
      inStock: 10,
      price: 130,
      sizes: ['kg1', 'kg5', 'kg10'],
      slug: 'men_raven_lightweight_zip_up_bomber_jacket',
      type: 'Mapuche',
      tags: ['mapuche'],
      title: 'Mapuche Rio Negro',
      gender: 'lupulos'
    },

    {
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      images: ['1740280-00-A_0_2000.jpg', '1740280-00-A_1.jpg'],
      inStock: 50,
      price: 45,
      sizes: ['kg1', 'kg5', 'kg10'],
      slug: 'men_turbine_long_sleeve_tee',
      type: 'Victoria',
      tags: ['victoria'],
      title: 'Victoria Rio Negro',
      gender: 'lupulos'
    }
  ]
};
