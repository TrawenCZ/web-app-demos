import { Result } from "@badrap/result";
import { Store } from "@prisma/client";
import prisma from "../../../client";
import { getStoresThatSellProduct } from "./get";

describe("store/product/get", () => {
  beforeEach(async () => {
    await prisma.$disconnect();
  });

  test("Stores that sell the Switch", async () => {
    const result: Result<Store[]> = Result.ok([
      {
        id: "c531f883-e6d1-453b-af20-6e6107865a61",
        name: "Alza",
        eshopAddress: "https://alza.cz",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Alza_logo.png",
      },
      {
        id: "b4f819f6-9585-4344-ba08-4bc0b4371bd8",
        name: "Electroworld",
        eshopAddress: "https://electroworld.cz",
        logo: null,
      },
      {
        id: "b73d4fcb-d577-4f7d-ba11-ee76411cc905",
        name: "Mall.cz",
        eshopAddress: "https://mall.cz",
        logo: null,
      },
    ]);

    await expect(
      getStoresThatSellProduct("de560dc9-a675-48ea-81a4-2e223ebd8626")
    ).resolves.toEqual(result);
  });

  test("Stores that sell the Xbox One", async () => {
    const result: Result<Store[]> = Result.ok([
      {
        id: "a1ba32a2-acdc-4ee5-8e10-6e1a0d0df5d3",
        name: "CZC",
        eshopAddress: "https://czc.cz",
        logo: null,
      },
    ]);

    await expect(
      getStoresThatSellProduct("32c5144d-a4fb-41fd-9e49-886b632219a1")
    ).resolves.toEqual(result);
  });

  test("Stores that sell a non-existent product", async () => {
    await expect(
      getStoresThatSellProduct("thisshouldnotpassthrough")
    ).resolves.toEqual(Result.ok([]));
  });
});
