# Folder structure - `src/app` folder

In this folder, the **Task 3** implementation will live

The `app` folder is structured in folders. Each folder is defined by the corresponding database record.

The name of the folder is then divided into subfolders. Finally a `get` & `add` typescript files are placed, according to the purpose of the functions that live inside them.

By this logic, a `src/app/product/category/get` will host a function that will get products that are in the specified categories, or `src/app/store/product/get` will host a function that will get all stores which sell a specified product.

These functions are already typed, so you only need to write an implementation

## TODO

Your task is to **finish these functions**

**IMPORTANT** use `prisma` import as your client. Do not create the client yourself.

The tests are provided locally in the assignment. **DO NOT MODIFY** them (we will know if your solution is not correct by code-review anyway)

If any function behaviour is not clear, you can write your questions under the Issue. The behaviour will be specified.
