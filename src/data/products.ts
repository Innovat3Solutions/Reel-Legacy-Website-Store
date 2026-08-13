// Central product catalog — single source of truth for every page.
//
// Images here are PLACEHOLDERS pulled from the existing lifestyle/clothing shots.
// Swap the `image` paths for real product photography as it comes in; nothing
// else needs to change.

export type Category = 'apparel' | 'headwear' | 'accessories';

export type Product = {
  id: number;
  /** url-safe id used in product links, e.g. /shop/legacy-performance-tee */
  slug: string;
  name: string;
  category: Category;
  /** price in USD */
  price: number;
  /** colorway / variant shown under the name */
  color: string;
  image: string;
  isNew?: boolean;
  /** optional merchandising badge, e.g. "Best Seller" */
  badge?: string;
  /** overrides the default size run for this product's category */
  sizes?: string[];
};

/** Standard apparel size run, smallest → largest. */
export const APPAREL_SIZES = ['S', 'M', 'L', 'XL', '2XL', '3XL'];

/** Display labels + order for category filters. `all` is synthesized in the UI. */
export const CATEGORIES: { key: Category; label: string }[] = [
  { key: 'apparel', label: 'Apparel' },
  { key: 'headwear', label: 'Headwear' },
  { key: 'accessories', label: 'Accessories' },
];

export const CATEGORY_LABELS: Record<Category, string> = {
  apparel: 'Apparel',
  headwear: 'Headwear',
  accessories: 'Accessories',
};

export const products: Product[] = [
  {
    id: 1,
    slug: 'legacy-performance-tee',
    name: 'Legacy Performance Tee',
    category: 'apparel',
    price: 49.99,
    color: 'White',
    image: '/images/clothing/tshirt.png',
    isNew: true,
    badge: 'Best Seller',
  },
  {
    id: 2,
    slug: 'legacy-performance-long-sleeve',
    name: 'Legacy Performance Long Sleeve',
    category: 'apparel',
    price: 54.99,
    color: 'White',
    image: '/images/clothing/long-sleeve.png',
    isNew: true,
  },
  {
    id: 3,
    slug: 'legacy-long-sleeve-grey',
    name: 'Legacy Long Sleeve',
    category: 'apparel',
    price: 54.99,
    color: 'Heather Grey',
    image: '/images/lifestyle/grey-long-sleeve.png',
  },
  {
    id: 4,
    slug: 'legacy-performance-shirt-white',
    name: 'Legacy Performance Shirt',
    category: 'apparel',
    price: 49.99,
    color: 'White',
    image: '/images/lifestyle/white-shirt.png',
  },
  {
    id: 5,
    slug: 'legacy-camo-snapback',
    name: 'Legacy Camo Snapback',
    category: 'headwear',
    price: 34.99,
    color: 'Camo',
    image: '/images/clothing/hat.png',
    isNew: true,
    badge: 'Best Seller',
  },
  {
    id: 6,
    slug: 'legacy-camo-hat',
    name: 'Legacy Camo Hat',
    category: 'headwear',
    price: 34.99,
    color: 'Field Camo',
    image: '/images/lifestyle/camo-hat.png',
  },
  {
    id: 7,
    slug: 'reel-legacy-cooler',
    name: 'Reel Legacy Cooler',
    category: 'accessories',
    price: 129.99,
    color: 'Stone White',
    image: '/images/lifestyle/cooler.png',
    isNew: true,
  },
  {
    id: 8,
    slug: 'reel-legacy-tumbler',
    name: 'Reel Legacy Tumbler',
    category: 'accessories',
    price: 29.99,
    color: 'Stainless',
    image: '/images/lifestyle/tumbler.png',
    isNew: true,
  },
];

/** Formats a numeric price as "$49.99". */
export const formatPrice = (price: number) => `$${price.toFixed(2)}`;

/**
 * The sizes offered for a product. Apparel uses the full S–3XL run, headwear is
 * one-size, accessories have none. A product can override via its `sizes` field.
 */
export const getSizes = (product: Product): string[] => {
  if (product.sizes) return product.sizes;
  if (product.category === 'apparel') return APPAREL_SIZES;
  if (product.category === 'headwear') return ['One Size'];
  return [];
};

export const getProductsByCategory = (category: Category) =>
  products.filter((p) => p.category === category);
