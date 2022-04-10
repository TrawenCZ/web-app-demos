import prisma from "../../../client";
import { Result } from "@badrap/result";
import type { ProductGetResult } from "../../../types/return-types";

/**
 * Get products, which are sold by stores with the defined eshop URLs.
 *
 * Specifications:
 * - If any error occurrs, should return an unspecified error.
 * - If the storeURLs array is empty, should output an empty array.
 * - Sort the products by their name alphabetically (a -> z (set proper orderBy)).
 *
 * @param storeURLs - URLs of the desired shop
 *
 * @returns - `Result.ok(Product[])` on successful query.
 *          - `Result.err(Error("Unspecified error"))` otherwise.
 */
export const getProductsByStoreURLs = async (
  storeURLs: string[]
): ProductGetResult => {
  /**
   * @todo
   */

  return Result.err();
};
