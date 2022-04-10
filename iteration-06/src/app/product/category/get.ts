import prisma from "../../../client";
import { Result } from "@badrap/result";
import type { ProductGetResult } from "../../../types/return-types";

/**
 * Get products by category/categories.
 *
 * Specifications:
 * - If any error occurrs, should return an unspecified error.
 * - Sort the products by their name alphabetically (a -> z (set proper orderBy)).
 * - If no categories are given, should output an empty array.
 * - The result is the **union** of all products that are in the specified categories.
 *
 * @param categories - array of category IDs (strings)
 *
 * @returns - `Result.ok(Product[])` if the query runs successfully.
 *          - `Result.err(Error("Unspecified error"))` otherwise.
 */
export const getProductsByCategory = async (
  categories: string[]
): ProductGetResult => {
  /**
   * @todo
   */

  return Result.err();
};
