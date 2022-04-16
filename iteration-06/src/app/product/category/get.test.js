"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = require("@badrap/result");
require("@prisma/client");
const client_1 = __importDefault(require("../../../client"));
const get_1 = require("./get");
describe("product/category/get", () => {
    beforeEach(async () => {
        await client_1.default.$disconnect();
    });
    test("Should get all products from the videogame category", async () => {
        const result = result_1.Result.ok([
            {
                id: "de560dc9-a675-48ea-81a4-2e223ebd8626",
                name: "Nintendo Switch",
                description: "Portable game console",
            },
            {
                id: "cd1c3350-1d77-4506-af2b-08fd1e8089b7",
                name: "Sony PlayStation 5",
                description: "Next-gen game console from Sony",
            },
            {
                id: "32c5144d-a4fb-41fd-9e49-886b632219a1",
                name: "Xbox Series X",
                description: "Next-gen game console from Microsoft",
            },
        ]);
        await expect((0, get_1.getProductsByCategory)(["7eef0480-a7fd-409c-984c-2a60f1d84934"])).resolves.toEqual(result);
    });
    test("Should get all products from the smartphone category", async () => {
        const result = result_1.Result.ok([
            {
                id: "55b41b01-2b81-429b-8063-bc5460849e07",
                name: "Samsung Galaxy S22 256GB",
                description: "Samsung's flagship smartphone",
            },
            {
                id: "d9dde733-23f6-4141-8369-207de173f864",
                name: "iPhone 13 128GB",
                description: "Currently the mid-tier iPhone",
            },
        ]);
        await expect((0, get_1.getProductsByCategory)(["d36c6fd3-6063-40a0-8612-a3f0b783db36"])).resolves.toEqual(result);
    });
    test("Should get all products from the iPhone or the videogame category", async () => {
        const result = result_1.Result.ok([
            {
                id: "de560dc9-a675-48ea-81a4-2e223ebd8626",
                name: "Nintendo Switch",
                description: "Portable game console",
            },
            {
                id: "cd1c3350-1d77-4506-af2b-08fd1e8089b7",
                name: "Sony PlayStation 5",
                description: "Next-gen game console from Sony",
            },
            {
                id: "32c5144d-a4fb-41fd-9e49-886b632219a1",
                name: "Xbox Series X",
                description: "Next-gen game console from Microsoft",
            },
            {
                id: "d9dde733-23f6-4141-8369-207de173f864",
                name: "iPhone 13 128GB",
                description: "Currently the mid-tier iPhone",
            },
        ]);
        await expect((0, get_1.getProductsByCategory)([
            "7eef0480-a7fd-409c-984c-2a60f1d84934",
            "0e1429c3-4878-46af-9f6d-a2e93a3c07cb",
        ])).resolves.toEqual(result);
    });
});
test("Should be empty", async () => {
    const result = result_1.Result.ok([]);
    await expect((0, get_1.getProductsByCategory)([])).resolves.toEqual(result);
});
