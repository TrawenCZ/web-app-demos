import { Result } from "@badrap/result";
import { getStoresThatSellProduct } from "./get";

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
    const res = await getStoresThatSellProduct(
      "de560dc9-a675-48ea-81a4-2e223ebd8626"
    );

    expect(res).toEqual(Result.err(new Error("Product does not exist")));
  });
});
