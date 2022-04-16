import prisma from "../../client";
import { Result } from "@badrap/result";
import type SeedFileStructure from "../../types/data-transfer-objects";
import type { CategoryDTO } from "../../types/data-transfer-objects";

/**
 * This function connects to the database and seeds it with the loaded data
 *
 * @param yamlParsed parsed seed file content
 * @returns - `Result.ok(true)` if successful
 *          - `Result.err(_)` otherwise
 */

const seedDb = async (
  yamlParsed: SeedFileStructure
): Promise<Result<boolean>> => {
  try {
    console.log(yamlParsed)
    /* Transactions are used to ensure either ALL queries in the array
     * are executed correctly, or none at all.
     * This maintains the consistency of the database.
     */
    await prisma.$transaction([
      /* Here go your queries.
       * You need to fill this array with prisma queries
       * use map and spread operator to fill this array with prisma queries
       * Like so:
       *
       *   ...inputDTO.map(object => {
       *    return prisma.create({}); // and fill it correctly
       *   });
       *
       * Note: using `createMany` is permitted, when possible.
       * However, SQLite prisma clients might not have
       * these features available.
       * In that case, use the create prisma query (performance
       * is worse, but it's better than having an empty database)
       */

      // seed categories - model example
      ...yamlParsed.categories.map((category: CategoryDTO) => {
        return prisma.category.create({
          data: {
            id: category.id,
            name: category.name,
            picture: category.picture,
          },
        });
      }),

      ...yamlParsed.products.map((product) => {
        return prisma.product.create({
          data: {
            id: product.id,
            name: product.name,
            description: product.description,
            categories: {
              connect: product.categories.map((category) => {
                return {id: category.categoryId};
              })
            }
          },
        });
      }),

      ...yamlParsed.productPhotos.map((productPhoto) => {
        return prisma.productPhoto.create({
          data: {
            isMain: productPhoto.isMain,
            source: productPhoto.source,
            product: {
              connect: {id: productPhoto.productId}
            },
          },
        });
      }),

      ...yamlParsed.stores.map((store) => {
        return prisma.store.create({
          data: {
            id: store.id,
            name: store.name,
            eshopAddress: store.eshopAddress,
          },
        });
      }),

      ...yamlParsed.storeProducts.map((storeProduct) => {
        return prisma.storeProduct.create({
          data: {
            product: {
              connect: {id: storeProduct.productId}
            },
            store: {
              connect: {id: storeProduct.storeId},
            },
            prices: {
              create: storeProduct.prices.map((price) => {
                return {
                  validFrom: price.validFrom,
                  price: price.price,
                  currency: price.currency
                }
              })
            }
          },
        });
      }),



      /* continue yourself - continue in the order that the data is stored
       * in the file
       * (to create associations to existing records, use the `connect` prisma method)
       *
       * Hint: `connect` can accept an array of objects (which then hold unique properties
       * like private keys or joint unique fields). more can be found in the documentation
       *
       * Hint2: When seeding offer prices:
       *        The data is modelled non-relationally, which means you will need to
       *        create a prisma query for every storeProduct and then for every price for that store
       *        product. This will de-facto create a 2D array when you want to seed prices.
       *        You have seen how to flatten such array. The flattened structure can then be used
       *        as usual with the spread operator
       */
    ]);

    return Result.ok(true);
  } catch (e) {
    return Result.err(e as Error);
  }
};

export default seedDb;
