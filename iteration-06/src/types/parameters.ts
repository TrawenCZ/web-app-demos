// IMPORTANT
// Do NOT modify this file

export interface ProductPriceCreateData {
  validFrom: Date;
  price: number;
  currency: string;
}

export interface ProductFilterByPrice {
  minPrice: number;
  maxPrice: number;
  currency: string;
}

export interface TimeInterval {
  soldFrom: Date;
  soldUntil: Date;
}
