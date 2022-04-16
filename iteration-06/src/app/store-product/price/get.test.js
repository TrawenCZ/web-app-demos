"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = require("@badrap/result");
require("@prisma/client");
const client_1 = __importDefault(require("../../../client"));
const get_1 = require("./get");
describe("product/price/get", () => {
    beforeEach(async () => {
        await client_1.default.$disconnect();
    });
    test("Should get all products below 8000 Czk", async () => {
        const result = [
            {
                storeId: "b73d4fcb-d577-4f7d-ba11-ee76411cc905",
                productId: "de560dc9-a675-48ea-81a4-2e223ebd8626",
                prices: [
                    {
                        validFrom: new Date("2022-01-16T12:00:00.000Z"),
                        price: 7989.99,
                        currency: "Czk",
                    },
                ],
                product: {
                    id: "de560dc9-a675-48ea-81a4-2e223ebd8626",
                    name: "Nintendo Switch",
                    description: "Portable game console",
                },
            },
            {
                storeId: "c531f883-e6d1-453b-af20-6e6107865a61",
                productId: "de560dc9-a675-48ea-81a4-2e223ebd8626",
                prices: [
                    {
                        validFrom: new Date("2022-04-02T10:00:00.000Z"),
                        price: 7499.99,
                        currency: "Czk",
                    },
                ],
                product: {
                    id: "de560dc9-a675-48ea-81a4-2e223ebd8626",
                    name: "Nintendo Switch",
                    description: "Portable game console",
                },
            },
        ];
        const actual = await (0, get_1.getProductsByPrice)({
            maxPrice: 8000,
            currency: "Czk",
        });
        expect(actual.isOk).toBe(true);
        expect(actual.isOk && actual.value.length).toEqual(result.length);
        expect(actual).toEqual(result_1.Result.ok(expect.arrayContaining(result.map((storeProduct) => {
            return expect.objectContaining({
                ...storeProduct,
                prices: expect.arrayContaining(storeProduct.prices?.map((price) => {
                    return expect.objectContaining(price);
                }) ?? []),
            });
        }))));
    });
    test("Should get all products below 20000", async () => {
        const result = [
            {
                storeId: "b73d4fcb-d577-4f7d-ba11-ee76411cc905",
                productId: "de560dc9-a675-48ea-81a4-2e223ebd8626",
                prices: [
                    {
                        validFrom: new Date("2022-01-16T12:00:00.000Z"),
                        price: 7989.99,
                        currency: "Czk",
                    },
                ],
                product: {
                    id: "de560dc9-a675-48ea-81a4-2e223ebd8626",
                    name: "Nintendo Switch",
                    description: "Portable game console",
                },
            },
            {
                storeId: "c531f883-e6d1-453b-af20-6e6107865a61",
                productId: "de560dc9-a675-48ea-81a4-2e223ebd8626",
                prices: [
                    {
                        validFrom: new Date("2022-04-02T10:00:00.000Z"),
                        price: 7499.99,
                        currency: "Czk",
                    },
                ],
                product: {
                    id: "de560dc9-a675-48ea-81a4-2e223ebd8626",
                    name: "Nintendo Switch",
                    description: "Portable game console",
                },
            },
            {
                storeId: "b4f819f6-9585-4344-ba08-4bc0b4371bd8",
                productId: "de560dc9-a675-48ea-81a4-2e223ebd8626",
                prices: [
                    {
                        validFrom: new Date("2022-04-04T00:00:00.000Z"),
                        price: 329.65,
                        currency: "Euro",
                    },
                ],
                product: {
                    id: "de560dc9-a675-48ea-81a4-2e223ebd8626",
                    name: "Nintendo Switch",
                    description: "Portable game console",
                },
            },
            {
                storeId: "8fc87377-7e20-450e-a441-b875e2d0a3da",
                productId: "cd1c3350-1d77-4506-af2b-08fd1e8089b7",
                prices: [
                    {
                        validFrom: new Date("2022-02-06T12:00:00.000Z"),
                        price: 18599.99,
                        currency: "Czk",
                    },
                ],
                product: {
                    id: "cd1c3350-1d77-4506-af2b-08fd1e8089b7",
                    name: "Sony PlayStation 5",
                    description: "Next-gen game console from Sony",
                },
            },
            {
                storeId: "b73d4fcb-d577-4f7d-ba11-ee76411cc905",
                productId: "cd1c3350-1d77-4506-af2b-08fd1e8089b7",
                prices: [
                    {
                        validFrom: new Date("2022-01-17T10:00:00.000Z"),
                        price: 17949.99,
                        currency: "Czk",
                    },
                ],
                product: {
                    id: "cd1c3350-1d77-4506-af2b-08fd1e8089b7",
                    name: "Sony PlayStation 5",
                    description: "Next-gen game console from Sony",
                },
            },
        ];
        const actual = await (0, get_1.getProductsByPrice)({
            maxPrice: 20000,
        });
        expect(actual.isOk).toBe(true);
        expect(actual.isOk && actual.value.length).toEqual(result.length);
        expect(actual).toEqual(result_1.Result.ok(expect.arrayContaining(result.map((storeProduct) => {
            return expect.objectContaining({
                ...storeProduct,
                prices: expect.arrayContaining(storeProduct.prices?.map((price) => {
                    return expect.objectContaining(price);
                }) ?? []),
            });
        }))));
    });
    test("Should get all products below 400 (Nintendo Switch is below 400 Euro)", async () => {
        const result = [
            {
                storeId: "b4f819f6-9585-4344-ba08-4bc0b4371bd8",
                productId: "de560dc9-a675-48ea-81a4-2e223ebd8626",
                prices: [
                    {
                        validFrom: new Date("2022-04-04T00:00:00.000Z"),
                        price: 329.65,
                        currency: "Euro",
                    },
                ],
                product: {
                    id: "de560dc9-a675-48ea-81a4-2e223ebd8626",
                    name: "Nintendo Switch",
                    description: "Portable game console",
                },
            },
        ];
        const actual = await (0, get_1.getProductsByPrice)({
            maxPrice: 400,
        });
        expect(actual.isOk).toBe(true);
        expect(actual.isOk && actual.value.length).toEqual(result.length);
        expect(actual).toEqual(result_1.Result.ok(expect.arrayContaining(result.map((storeProduct) => {
            return expect.objectContaining({
                ...storeProduct,
                prices: expect.arrayContaining(storeProduct.prices?.map((price) => {
                    return expect.objectContaining(price);
                }) ?? []),
            });
        }))));
    });
    test("Should get all products over 30000 Czk", async () => {
        const result = [
            {
                storeId: "b73d4fcb-d577-4f7d-ba11-ee76411cc905",
                productId: "55b41b01-2b81-429b-8063-bc5460849e07",
                prices: [
                    {
                        validFrom: new Date("2022-01-01T00:00:00.000Z"),
                        price: 35179.0,
                        currency: "Czk",
                    },
                ],
                product: {
                    id: "55b41b01-2b81-429b-8063-bc5460849e07",
                    name: "Samsung Galaxy S22 256GB",
                    description: "Samsung's flagship smartphone",
                },
            },
            {
                storeId: "8fc87377-7e20-450e-a441-b875e2d0a3da",
                productId: "55b41b01-2b81-429b-8063-bc5460849e07",
                prices: [
                    {
                        validFrom: new Date("2021-12-14T10:00:00.000Z"),
                        price: 34990.0,
                        currency: "Czk",
                    },
                ],
                product: {
                    id: "55b41b01-2b81-429b-8063-bc5460849e07",
                    name: "Samsung Galaxy S22 256GB",
                    description: "Samsung's flagship smartphone",
                },
            },
        ];
        const actual = await (0, get_1.getProductsByPrice)({
            minPrice: 30000,
            currency: "Czk",
        });
        expect(actual.isOk).toBe(true);
        expect(actual.isOk && actual.value.length).toEqual(result.length);
        expect(actual).toEqual(result_1.Result.ok(expect.arrayContaining(result.map((storeProduct) => {
            return expect.objectContaining({
                ...storeProduct,
                prices: expect.arrayContaining(storeProduct.prices?.map((price) => {
                    return expect.objectContaining(price);
                }) ?? []),
            });
        }))));
    });
    test("Unknown currency - should be empty", async () => {
        const result = result_1.Result.ok([]);
        await expect((0, get_1.getProductsByPrice)({
            currency: "Yen",
        })).resolves.toEqual(result);
    });
    test("All products between 17000 Czk and 21000 Czk", async () => {
        const result = [
            {
                storeId: "8fc87377-7e20-450e-a441-b875e2d0a3da",
                productId: "cd1c3350-1d77-4506-af2b-08fd1e8089b7",
                prices: [
                    {
                        validFrom: new Date("2022-02-06T12:00:00.000Z"),
                        price: 18599.99,
                        currency: "Czk",
                    },
                ],
                product: {
                    id: "cd1c3350-1d77-4506-af2b-08fd1e8089b7",
                    name: "Sony PlayStation 5",
                    description: "Next-gen game console from Sony",
                },
            },
            {
                storeId: "b73d4fcb-d577-4f7d-ba11-ee76411cc905",
                productId: "cd1c3350-1d77-4506-af2b-08fd1e8089b7",
                prices: [
                    {
                        validFrom: new Date("2022-01-17T10:00:00.000Z"),
                        price: 17949.99,
                        currency: "Czk",
                    },
                ],
                product: {
                    id: "cd1c3350-1d77-4506-af2b-08fd1e8089b7",
                    name: "Sony PlayStation 5",
                    description: "Next-gen game console from Sony",
                },
            },
        ];
        const actual = await (0, get_1.getProductsByPrice)({
            minPrice: 17000,
            maxPrice: 21000,
            currency: "Czk",
        });
        expect(actual.isOk).toBe(true);
        expect(actual.isOk && actual.value.length).toEqual(result.length);
        expect(actual).toEqual(result_1.Result.ok(expect.arrayContaining(result.map((storeProduct) => {
            return expect.objectContaining({
                ...storeProduct,
                prices: expect.arrayContaining(storeProduct.prices?.map((price) => {
                    return expect.objectContaining(price);
                }) ?? []),
            });
        }))));
    });
});
