"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByStoreURLs = void 0;
const client_1 = __importDefault(require("../../../client"));
const result_1 = require("@badrap/result");
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
const getProductsByStoreURLs = async (storeURLs) => {
    try {
        if (client_1.default.store === undefined || client_1.default.product === undefined) {
            throw new Error();
        }
        const stores = await client_1.default.store.findMany({
            where: {
                eshopAddress: {
                    in: storeURLs
                }
            },
            include: {
                products: true
            }
        });
        let productIds = [];
        for (const store of stores) {
            for (const storeProduct of store.products) {
                productIds.push(storeProduct.productId);
            }
        }
        const products = await client_1.default.product.findMany({
            where: {
                id: {
                    in: productIds
                }
            },
            orderBy: {
                name: "asc"
            }
        });
        return result_1.Result.ok(products);
    }
    catch (e) {
        return result_1.Result.err(Error("Unspecified error"));
    }
};
exports.getProductsByStoreURLs = getProductsByStoreURLs;
