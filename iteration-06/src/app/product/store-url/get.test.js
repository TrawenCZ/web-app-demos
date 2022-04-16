"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = require("@badrap/result");
require("@prisma/client");
const client_1 = __importDefault(require("../../../client"));
const get_1 = require("./get");
describe("product/store-url/get", () => {
    beforeEach(async () => {
        await client_1.default.$disconnect();
    });
    test("All products by CZC", async () => {
        const result = result_1.Result.ok([
            {
                id: "32c5144d-a4fb-41fd-9e49-886b632219a1",
                name: "Xbox Series X",
                description: "Next-gen game console from Microsoft",
            },
        ]);
        await expect((0, get_1.getProductsByStoreURLs)(["https://czc.cz"])).resolves.toEqual(result);
    });
    test("All products by CZC and Electroworld", async () => {
        const result = result_1.Result.ok([
            {
                id: "de560dc9-a675-48ea-81a4-2e223ebd8626",
                name: "Nintendo Switch",
                description: "Portable game console",
            },
            {
                id: "32c5144d-a4fb-41fd-9e49-886b632219a1",
                name: "Xbox Series X",
                description: "Next-gen game console from Microsoft",
            },
        ]);
        await expect((0, get_1.getProductsByStoreURLs)(["https://electroworld.cz", "https://czc.cz"])).resolves.toEqual(result);
    });
    test("Input empty store IDs", async () => {
        const result = result_1.Result.ok([]);
        await expect((0, get_1.getProductsByStoreURLs)([])).resolves.toEqual(result);
    });
});
