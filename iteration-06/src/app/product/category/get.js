"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByCategory = void 0;
const client_1 = __importDefault(require("../../../client"));
const result_1 = require("@badrap/result");
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
const getProductsByCategory = async (categories) => {
    try {
        const data = await client_1.default.product.findMany({
            where: {
                categories: {
                    some: {
                        id: {
                            in: categories
                        }
                    }
                }
            },
            orderBy: {
                name: "asc"
            }
        });
        return result_1.Result.ok(data);
    }
    catch (e) {
        return result_1.Result.err(Error("Unspecified error"));
    }
};
exports.getProductsByCategory = getProductsByCategory;
