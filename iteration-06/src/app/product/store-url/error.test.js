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
        const res = await (0, get_1.getProductsByStoreURLs)(["https://czc.cz"]);
        expect(res).toEqual(result_1.Result.err(new Error("Unspecified error")));
    });
});
