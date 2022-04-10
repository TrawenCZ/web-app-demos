import { Result } from "@badrap/result";
import { Product } from "@prisma/client";
import prisma from "../../../client";
import { getProductsByStoreURLs } from "./get";

describe("product/store-url/get", () => {
  beforeEach(async () => {
    await prisma.$disconnect();
  });

  test("All products by CZC", async () => {
    const result: Result<Product[]> = Result.ok([
      {
        id: "32c5144d-a4fb-41fd-9e49-886b632219a1",
        name: "Xbox Series X",
        description: "Next-gen game console from Microsoft",
      },
    ]);

    await expect(getProductsByStoreURLs(["https://czc.cz"])).resolves.toEqual(
      result
    );
  });

  test("All products by CZC and Electroworld", async () => {
    const result: Result<Product[]> = Result.ok([
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

    await expect(
      getProductsByStoreURLs(["https://electroworld.cz", "https://czc.cz"])
    ).resolves.toEqual(result);
  });

  test("Input empty store IDs", async () => {
    const result: Result<Product[]> = Result.ok([]);

    await expect(getProductsByStoreURLs([])).resolves.toEqual(result);
  });
});
