"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = require("@badrap/result");
require("@prisma/client");
const client_1 = __importDefault(require("../../../client"));
const add_1 = require("./add");
describe("product/category/add", () => {
    beforeEach(async () => {
        await client_1.default.$disconnect();
    });
    // Connect a product to a category
    test("Should add the specified product to the specified category", async () => {
        let result = result_1.Result.ok({
            id: "d9dde733-23f6-4141-8369-207de173f864",
            name: "iPhone 13 128GB",
            description: "Currently the mid-tier iPhone",
            categories: [
                {
                    id: "0e1429c3-4878-46af-9f6d-a2e93a3c07cb",
                    name: "Apple iPhone",
                    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png",
                },
                {
                    id: "03489d70-4662-488f-ae3c-2324f014000e",
                    name: "Electronics",
                    picture: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Arduino_ftdi_chip-1.jpg",
                },
                {
                    id: "d36c6fd3-6063-40a0-8612-a3f0b783db36",
                    name: "Smartphones",
                    picture: "https://cdn.cnn.com/cnnnext/dam/assets/210922153639-best-smartphones-lead.jpg",
                },
                {
                    id: "7eef0480-a7fd-409c-984c-2a60f1d84934",
                    name: "Video games",
                    picture: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/most-popular-video-games-of-2022-1642612227.png?crop=1.00xw:1.00xh;0,0&resize=1200:*",
                },
            ],
        });
        await expect((0, add_1.addProductToCategory)("d9dde733-23f6-4141-8369-207de173f864", "7eef0480-a7fd-409c-984c-2a60f1d84934")).resolves.toEqual(result);
    });
    test("Should not change anything - product already is in the category", async () => {
        let result = result_1.Result.ok({
            id: "55b41b01-2b81-429b-8063-bc5460849e07",
            name: "Samsung Galaxy S22 256GB",
            description: "Samsung's flagship smartphone",
            categories: [
                {
                    id: "03489d70-4662-488f-ae3c-2324f014000e",
                    name: "Electronics",
                    picture: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Arduino_ftdi_chip-1.jpg",
                },
                {
                    id: "e0f6064c-c9e3-49aa-b339-2f08c7942b0f",
                    name: "Samsung Galaxy",
                    picture: "https://images.samsung.com/is/image/samsung/assets/ae/2201/galaxy-s21-5g/images/galaxy-s21_banner_goto_fe_s.jpg?$ORIGIN_JPG$",
                },
                {
                    id: "d36c6fd3-6063-40a0-8612-a3f0b783db36",
                    name: "Smartphones",
                    picture: "https://cdn.cnn.com/cnnnext/dam/assets/210922153639-best-smartphones-lead.jpg",
                },
            ],
        });
        await expect((0, add_1.addProductToCategory)("55b41b01-2b81-429b-8063-bc5460849e07", "d36c6fd3-6063-40a0-8612-a3f0b783db36")).resolves.toEqual(result);
    });
    test("Should fail - category does not exist", async () => {
        let result = result_1.Result.err(new Error("Could not add a product to the category due to an unexpected error"));
        await expect((0, add_1.addProductToCategory)("de560dc9-a675-48ea-81a4-2e223ebd8626", "2d850191-0634-42ca-b08d-1cec44b9cf82")).resolves.toEqual(result);
    });
    test("Should fail - product does not exist", async () => {
        let result = result_1.Result.err(new Error("Could not add a product to the category due to an unexpected error"));
        await expect((0, add_1.addProductToCategory)("08ee0d01-da22-4aab-b9ed-c55bc40bfc40", "d36c6fd3-6063-40a0-8612-a3f0b783db36")).resolves.toEqual(result);
    });
});
