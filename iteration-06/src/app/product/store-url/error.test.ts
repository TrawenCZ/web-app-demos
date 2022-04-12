import { Result } from "@badrap/result";
import { getProductsByStoreURLs } from "./get";

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
    const res = await getProductsByStoreURLs(["https://czc.cz"]);

    expect(res).toEqual(Result.err(new Error("Unspecified error")));
  });
});
