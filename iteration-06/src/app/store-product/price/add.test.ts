import { Result } from "@badrap/result";
import { Product, ProductPrice, Store, StoreProduct } from "@prisma/client";
import prisma from "../../../client";
import { addProductPrice } from "./add";

describe("store-product/price/add", () => {
  beforeEach(async () => {
    await prisma.$disconnect();
  });

  test("Should succeed - Add a price to a product from store", async () => {
    const result: Partial<StoreProduct> & {
      product: Product;
      store: Store;
      prices: Partial<ProductPrice>[];
    } = {
      storeId: "a1ba32a2-acdc-4ee5-8e10-6e1a0d0df5d3",
      productId: "32c5144d-a4fb-41fd-9e49-886b632219a1",
      product: {
        id: "32c5144d-a4fb-41fd-9e49-886b632219a1",
        name: "Xbox Series X",
        description: "Next-gen game console from Microsoft",
      },
      store: {
        id: "a1ba32a2-acdc-4ee5-8e10-6e1a0d0df5d3",
        name: "CZC",
        eshopAddress: "https://czc.cz",
        logo: null,
      },
      prices: [
        {
          validFrom: new Date("2022-04-07T00:00:00.000Z"),
          price: 22999.99,
          currency: "Czk",
        },
        {
          validFrom: new Date("2022-04-01T00:00:00.000Z"),
          price: 23949.99,
          currency: "Czk",
        },
      ],
    };

    await expect(
      addProductPrice(
        "32c5144d-a4fb-41fd-9e49-886b632219a1",
        "a1ba32a2-acdc-4ee5-8e10-6e1a0d0df5d3",
        {
          validFrom: new Date("2022-04-07T00:00:00.000Z"),
          price: 22999.99,
          currency: "Czk",
        }
      )
    ).resolves.toEqual(
      Result.ok(
        expect.objectContaining({
          ...result,
          prices: expect.arrayContaining([
            ...result.prices.map((price) => {
              return expect.objectContaining({
                ...price,
              });
            }),
          ]),
        })
      )
    );
  });

  test("Should fail - nonexistent store", async () => {
    const result = Result.err(
      new Error("Could not add a price due to an unexpected error")
    );

    await expect(
      addProductPrice(
        "d9dde733-23f6-4141-8369-207de173f864",
        "8fc87377-7e20-450e-a441-b875e2d0a3db",
        {
          validFrom: new Date(Date.now()),
          price: 10000,
          currency: "Euro",
        }
      )
    ).resolves.toEqual(result);
  });

  test("Should fail - nonexistent product", async () => {
    const result = Result.err(
      new Error("Could not add a price due to an unexpected error")
    );

    await expect(
      addProductPrice(
        "d9dde733-23f6-4141-8369-207de173f865",
        "8fc87377-7e20-450e-a441-b875e2d0a3da",
        {
          validFrom: new Date(Date.now()),
          price: 10000,
          currency: "Euro",
        }
      )
    ).resolves.toEqual(result);
  });
});
