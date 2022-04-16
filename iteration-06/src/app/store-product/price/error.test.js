"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = require("@badrap/result");
const get_1 = require("./get");
const add_1 = require("./add");
let findMany = jest.fn();
jest.mock("../../../client", () => {
    return {
        storeProduct: {
            findMany: jest.fn(),
        },
    };
});
describe("Test errors", () => {
    test("Should return error on caught exception with addProductPrice", async () => {
        findMany.mockImplementationOnce(() => Promise.reject(new Error()));
        const res = await (0, add_1.addProductPrice)("32c5144d-a4fb-41fd-9e49-886b632219a1", "a1ba32a2-acdc-4ee5-8e10-6e1a0d0df5d3", {
            validFrom: new Date("2022-04-07T00:00:00.000Z"),
            price: 22999.99,
            currency: "Czk",
        });
        expect(res).toEqual(result_1.Result.err(new Error("Could not add a price due to an unexpected error")));
    });
    test("Should return error on caught exception with getProductsByPrice", async () => {
        findMany.mockImplementationOnce(() => Promise.reject(new Error()));
        const res = await (0, get_1.getProductsByPrice)({
            minPrice: 17000,
            maxPrice: 21000,
            currency: "Czk",
        });
        expect(res).toEqual(result_1.Result.err(new Error("Unspecified error")));
    });
});
