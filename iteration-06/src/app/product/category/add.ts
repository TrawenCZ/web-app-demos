import prisma from "../../../client";
import { Result } from "@badrap/result";
import type { ProductAddCategoryResult } from "../../../types/return-types";

/**
 * Add a product to a category.
 *
 * Specifications:
 * - If either the product or the category do not exist, should return an error.
 * - If the connection already exists, nothing should change.
 * - Sort the products by their name alphabetically (a -> z (set proper orderBy)).
 *
 * @param productId - ID of the product
 * @param categoryId - ID of the category
 *
 * @returns - `Result.ok(Product & {categories: Category[]})` with an updated product
 *          - `Result.err(Error("Could not add a product to the category due to an unexpected error"))` otherwise
 */
export const addProductToCategory = async (
  productId: string,
  categoryId: string
): ProductAddCategoryResult => {
  /**
   * @todo
   */

  return Result.err();
};
