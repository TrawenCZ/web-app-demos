"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductPrice = void 0;
const client_1 = __importDefault(require("../../../client"));
const result_1 = require("@badrap/result");
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
const addProductPrice = async (productId, storeId, newPrice) => {
    /**
     * @todo
     *
     * Hint: There is an operation which updates OR creates a record when the record is not found.
     *       Find it in the Prisma documentation and use it.
     */
    try {
        const product = await client_1.default.product.findUnique({
            where: {
                id: productId
            }
        });
        const store = await client_1.default.store.findUnique({
            where: {
                id: storeId
            }
        });
        if (product === null || store === null) {
            throw new Error();
        }
        const newProductPrice = await client_1.default.productPrice.create({
            data: {
                storeProduct: {
                    connectOrCreate: {
                        create: {
                            product: {
                                connect: { id: productId }
                            },
                            store: {
                                connect: { id: storeId }
                            }
                        },
                        where: {
                            productId_storeId: { productId: productId, storeId: storeId },
                        }
                    }
                },
                price: newPrice.price,
                validFrom: newPrice.validFrom,
                currency: newPrice.currency
            },
            include: {
                storeProduct: {
                    include: {
                        product: true,
                        store: true,
                        prices: {
                            orderBy: {
                                price: "desc"
                            }
                        }
                    }
                }
            }
        });
        return result_1.Result.ok(newProductPrice.storeProduct);
    }
    catch (e) {
        return result_1.Result.err(Error("Could not add a price due to an unexpected error"));
    }
};
exports.addProductPrice = addProductPrice;
