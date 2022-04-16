"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByPrice = void 0;
const client_1 = __importDefault(require("../../../client"));
const result_1 = require("@badrap/result");
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
const getProductsByPrice = async (price) => {
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
        if (client_1.default.storeProduct === undefined) {
            throw new Error();
        }
        if (price.maxPrice === undefined) {
            price.maxPrice = Number.MAX_SAFE_INTEGER;
        }
        if (price.minPrice === undefined) {
            price.minPrice = 0;
        }
        let storeProducts = await client_1.default.storeProduct.findMany({
            where: {
                prices: {
                    some: {
                        price: {
                            lte: price.maxPrice,
                            gte: price.minPrice
                        }
                    }
                }
            },
            include: {
                product: true,
                prices: {
                    orderBy: {
                        validFrom: "asc"
                    },
                    take: 1
                }
            }
        });
        let storeProductIds = new Array();
        for (const storeProduct of storeProducts) {
            if (storeProduct.prices[0] !== undefined &&
                (storeProduct.prices[0].price > price.maxPrice
                    || storeProduct.prices[0].price < price.minPrice)) {
                continue;
            }
            else {
                storeProductIds.push(storeProduct.id);
            }
        }
        storeProducts = await client_1.default.storeProduct.findMany({
            where: {
                id: {
                    in: storeProductIds
                }
            },
            include: {
                product: true,
                prices: {
                    orderBy: {
                        validFrom: "asc"
                    },
                    take: 1
                }
            }
        });
        return result_1.Result.ok(storeProducts);
    }
    catch (e) {
        return result_1.Result.err(Error("Unspecified error"));
    }
};
exports.getProductsByPrice = getProductsByPrice;
