import { Result } from "@badrap/result";
import { Product } from "@prisma/client";
import prisma from "../../../client";
import { getProductsByCategory } from "./get";

describe("product/category/get", () => {
  beforeEach(async () => {
    await prisma.$disconnect();
  });

  test("Should get all products from the videogame category", async () => {
    const result: Result<Product[]> = Result.ok([
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

    await expect(
      getProductsByCategory(["7eef0480-a7fd-409c-984c-2a60f1d84934"])
    ).resolves.toEqual(result);
  });

  test("Should get all products from the smartphone category", async () => {
    const result: Result<Product[]> = Result.ok([
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

    await expect(
      getProductsByCategory(["d36c6fd3-6063-40a0-8612-a3f0b783db36"])
    ).resolves.toEqual(result);
  });

  test("Should get all products from the iPhone or the videogame category", async () => {
    const result: Result<Product[]> = Result.ok([
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

    await expect(
      getProductsByCategory([
        "7eef0480-a7fd-409c-984c-2a60f1d84934",
        "0e1429c3-4878-46af-9f6d-a2e93a3c07cb",
      ])
    ).resolves.toEqual(result);
  });
});

test("Should be empty", async () => {
  const result: Result<Product[]> = Result.ok([]);

  await expect(getProductsByCategory([])).resolves.toEqual(result);
});
