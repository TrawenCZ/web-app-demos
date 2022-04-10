// IMPORTANT
// Do NOT modify this file

import type { Result } from "@badrap/result";
import type {
  Category,
  Product,
  ProductPrice,
  Store,
  StoreProduct,
} from "@prisma/client";

export type ProductAddCategoryResult = Promise<
  Result<Product & { categories: Category[] }>
>;

export type StoreProductGetByPriceResult = Promise<
  Result<(StoreProduct & { product: Product; prices: ProductPrice[] })[]>
>;

export type ProductGetResult = Promise<Result<Product[]>>;

export type StoreGetResult = Promise<Result<Store[]>>;

export type StoreProductAddPriceResult = Promise<
  Result<
    StoreProduct & {
      product: Product;
      store: Store;
      prices: ProductPrice[];
    }
  >
>;

export type StoreProductPriceGetResult = Promise<
  Result<(StoreProduct & { prices: ProductPrice[] })[]>
>;
