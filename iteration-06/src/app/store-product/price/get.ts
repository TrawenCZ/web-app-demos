import prisma from "../../../client";
import { Result } from "@badrap/result";
import type { ProductFilterByPrice } from "../../../types/parameters";
import type { StoreProductGetByPriceResult } from "../../../types/return-types";

/**
 * Get products by price - filter the results.
 *
 * Specifications:
 * - If any error occurrs, should return an unspecified error.
 * - Only the latest price (most recend `validFrom` field) is of concern.
 * - Sort the products by their name alphabetically (a -> z (set proper orderBy)).
 * - The interval is CLOSED (inclusive).
 *
 * @param price - price parameters
 *
 * @returns - `Result.ok((StoreProduct & {product: Product; prices: ProductPrice[];})[])` if the query succeeds
 *          - `Result.err(Error("Unspecified error"))` otherwise
 */
export const getProductsByPrice = async (
  price: Partial<ProductFilterByPrice>
): StoreProductGetByPriceResult => {
  /**
   * @todo
   *
   * Hint: Probably the easiest way to write this function:
   *       - start from the storeProduct record,
   *       - filter out the products that were historically in the range,
   *          - include the product in the query,
   *          - include ONLY the latest price per store in the query
   *            (use `orderBy` and `take: 1` to achieve it)
   *       - post-processing is necessary:
   *       - filter the list and check if the latest price matches
   *         the required criteria (same test as in the db)
   *
   * Hint 2:
   *      - if the max price is not defined in the `price` parameter, you can use a constant which
   *        has the maximal value a number can have
   *      - if the min price is not defined, 0 should be a sufficient placeholder
   */
  try {
    if (price.maxPrice === undefined) {
      price.maxPrice = Number.MAX_SAFE_INTEGER;
    }
    if (price.minPrice === undefined) {
      price.minPrice = 0;
    }
    let storeProducts = await prisma.storeProduct.findMany({
      where : {
        prices : {
          some : {
            price : {
              lte : price.maxPrice,
              gte : price.minPrice
            }
          },
        }
      },
      include : {
        product : true,
        prices : {
          orderBy : {
            validFrom : "desc"
          },
          take : 1
        }
      }
    })

    let storeProductTest = storeProducts.filter((storeProduct) => {
      const currencyCheck = price.currency ? storeProduct.prices[0]?.currency === price.currency : true
      return storeProduct.prices[0] !== undefined && price.maxPrice !== undefined && price.minPrice !== undefined
          && storeProduct.prices[0]?.price <= price.maxPrice
          && storeProduct.prices[0]?.price >= price.minPrice
          && currencyCheck;
    })

    return Result.ok(storeProductTest)
  } catch (e) {
    return Result.err(Error("Unspecified error"))
  }
};
