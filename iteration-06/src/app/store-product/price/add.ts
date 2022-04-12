import prisma from "../../../client";
import { Result } from "@badrap/result";
import type { ProductPriceCreateData } from "../../../types/parameters";
import type { StoreProductAddPriceResult } from "../../../types/return-types";

/**
 * Add a price to a sold product.
 *
 * Specifications:
 * - If the product is not sold by the store, add the product to the store catalogue/offers.
 * - If either the product, or store does not exist, should return an error.
 * - Order the prices by their date in descending order (for the tests to run correctly).
 * - Include the prices list as well as the join table.
 *
 * @param productId - ID of the product
 * @param storeId - ID of the store
 * @param newPrice - new price data
 *
 *
 * @returns - `Result.ok(StoreProduct & {product: Product; store: Store;prices: ProductPrice[]})` on success
 *          - `Result.err(Error("Could not add a price due to an unexpected error"))` if an error occurrs
 */
export const addProductPrice = async (
  productId: string,
  storeId: string,
  newPrice: ProductPriceCreateData
): StoreProductAddPriceResult => {
  /**
   * @todo
   *
   * Hint: There is an operation which updates OR creates a record when the record is not found.
   *       Find it in the Prisma documentation and use it.
   */

  return Result.err();
};
