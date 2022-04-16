"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoresThatSellProduct = void 0;
const client_1 = __importDefault(require("../../../client"));
const result_1 = require("@badrap/result");
require("../../../types/return-types");
/**
 * Get all stores that sell the product.
 *
 * Specifications:
 * - If any error occurrs, should return an unspecified error.
 * - Sort the stores by their name alphabetically (a -> z (set proper orderBy)).
 *
 * @param productId - ID of the product in the db
 *
 * @returns - `Result.ok(Store[])` on successful query
 *          - `Result.err(Error("Unspecified error"))` otherwise
 */
const getStoresThatSellProduct = async (productId) => {
    try {
        if (client_1.default.storeProduct === undefined) {
            throw new Error();
        }
        const storeProducts = await client_1.default.storeProduct.findMany({
            where: {
                productId: productId
            },
            include: {
                store: true
            },
            orderBy: {
                store: {
                    name: "asc"
                }
            }
        });
        return result_1.Result.ok(storeProducts.map((storeProduct) => {
            return storeProduct.store;
        }));
    }
    catch (e) {
        return result_1.Result.err(Error("Unspecified error"));
    }
};
exports.getStoresThatSellProduct = getStoresThatSellProduct;
