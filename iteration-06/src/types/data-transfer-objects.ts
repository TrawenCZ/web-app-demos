export default interface SeedFileStructure {
  categories: CategoryDTO[];
  products: ProductDTO[];
  productPhotos: ProductPhotoDTO[];
  /**
   * @todo: change these to the correct data types
   */
  stores: StoreDTO[];
  storeProducts: StoreProductDTO[];
}

export interface CategoryDTO {
  id: string;
  name: string;
  picture: string;
}

export interface ProductDTO {
  id: string;
  name: string;
  description: string;
  categories: {
    categoryId: string;
  }[];
}

export interface ProductPhotoDTO {
  productId: string;
  source: string;
  isMain: boolean;
}

export interface StoreDTO {
  id: string;
  name: string;
  eshopAddress: string;
}

export interface StoreProductDTO {
  storeId: string;
  productId: string;
  prices: PriceDTO[];
}

export interface PriceDTO {
  validFrom: string;
  price: number;
  currency: string;
}
/**
 * @todo: finish the DTO interfaces -> stores, store products and prices
 * the prices are modelled non-relationally
 * which means the interfaces will need to be nested
 * (model the price as a standalone DTO)
 */
