import catMen from "@/assets/cat-men.jpg";
import catWomen from "@/assets/cat-women.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import catHome from "@/assets/cat-home.jpg";
import pSneakers from "@/assets/p-sneakers.jpg";
import pJacket from "@/assets/p-jacket.jpg";
import pBag from "@/assets/p-bag.jpg";
import pSweater from "@/assets/p-sweater.jpg";

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  inStock: boolean;
};

export const categories: Category[] = [
  { slug: "men", name: "Men", blurb: "Tailored essentials", image: catMen },
  { slug: "women", name: "Women", blurb: "Modern silhouettes", image: catWomen },
  { slug: "accessories", name: "Accessories", blurb: "Finishing details", image: catAccessories },
  { slug: "home", name: "Home & Living", blurb: "Considered comfort", image: catHome },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "field-overshirt-olive",
    name: "Field Overshirt",
    category: "Men",
    price: 89.99,
    compareAt: 119.99,
    rating: 4.6,
    reviews: 124,
    image: pJacket,
    badge: "25% off",
    inStock: true,
  },
  {
    id: "2",
    slug: "atelier-low-sneaker",
    name: "Atelier Low Sneaker",
    category: "Shoes",
    price: 79.99,
    rating: 4.8,
    reviews: 96,
    image: pSneakers,
    badge: "New",
    inStock: true,
  },
  {
    id: "3",
    slug: "merino-crew-knit",
    name: "Merino Crew Knit",
    category: "Women",
    price: 64.5,
    compareAt: 82,
    rating: 4.5,
    reviews: 58,
    image: pSweater,
    inStock: true,
  },
  {
    id: "4",
    slug: "carryall-leather-holdall",
    name: "Carryall Leather Holdall",
    category: "Accessories",
    price: 189.0,
    rating: 4.9,
    reviews: 41,
    image: pBag,
    badge: "Best seller",
    inStock: false,
  },
];

export const bestSellers: Product[] = [products[3]!, products[0]!, products[1]!, products[2]!];
