"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = require("@badrap/result");
const get_1 = require("./get");
let findMany = jest.fn();
jest.mock("../../../client", () => {
    return {
        storeProduct: {
            findMany: jest.fn(),
        },
    };
});
describe("Test errors", () => {
    test("Should return error on caught exception with getStoresThatSellProduct", async () => {
        findMany.mockImplementationOnce(() => Promise.reject(new Error()));
        const res = await (0, get_1.getStoresThatSellProduct)("de560dc9-a675-48ea-81a4-2e223ebd8626");
        expect(res).toEqual(result_1.Result.err(new Error("Unspecified error")));
    });
});
