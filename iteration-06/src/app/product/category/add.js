"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductToCategory = void 0;
const client_1 = __importDefault(require("../../../client"));
const result_1 = require("@badrap/result");
/**
 * Add a product to a category.
 *
 * Specifications:
 * - If either the product or the category do not exist, should return an error.
 * - If the connection already exists, nothing should change.
 * - Sort the categories by their name alphabetically (a -> z (set proper orderBy)).
 *
 * @param productId - ID of the product
 * @param categoryId - ID of the category
 *
 * @returns - `Result.ok(Product & {categories: Category[]})` with an updated product
 *          - `Result.err(Error("Could not add a product to the category due to an unexpected error"))` otherwise
 */
const addProductToCategory = async (productId, categoryId) => {
    try {
        const product = await client_1.default.product.findUnique({
            where: {
                id: productId
            }
        });
        const category = await client_1.default.category.findUnique({
            where: {
                id: categoryId
            }
        });
        if (category === null || product === null) {
            throw new Error();
        }
        const updatedProduct = await client_1.default.product.update({
            where: {
                id: productId,
            },
            data: {
                categories: {
                    connect: {
                        id: categoryId
                    }
                }
            },
            include: {
                categories: {
                    orderBy: {
                        name: "asc"
                    }
                }
            }
        });
        return result_1.Result.ok(updatedProduct);
    }
    catch (e) {
        return result_1.Result.err(Error("Could not add a product to the category due to an unexpected error"));
    }
};
exports.addProductToCategory = addProductToCategory;
