import { Result } from "@badrap/result";
import { getProductsByCategory } from "./get";

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
    const res = await getProductsByCategory([
      "7eef0480-a7fd-409c-984c-2a60f1d84934",
    ]);

    expect(res).toEqual(Result.err(new Error("Unspecified error")));
  });
});
