# `src` folder

- The Task **2** and **3** are done here
- Rule of thumb: you should **modify** those TypeScript **files**, **where you see a** `@todo` or `TODO` somewhere
- `index.ts` should serve as a **blank space** for you **to test** your **code**.
- `src/app` has modules that use the database to retrieve/store data
  - There are also tests, that can be run locally
- `src/seed` has the logic to seed the database from the provided `data/seed.yaml` file

## Useful commands

```sh
# install dependencies before you start to work:
npm i

# to start the src/index.ts file:
npm start

# to run the seed script:
npm run seed

# to test your `src/app` functions:
npm test
npm t # does the same thing
npm t -- --watch # tests are re-run whenever you modify a piece of code

# to migrate the prisma schema to the db:
npx prisma migrate dev --name desired-name-of-your-migration

# to reset the database and re-run the latest migration:
npx prisma reset

# to open the prisma studio:
npx prisma studio

# to run the provided compose:
docker-compose -f compose.yml up -d
# [alternatively podman compose]

# to kill the container:
docker-compose -f compose.yml down --volumes --remove-orphans
# [alternatively podman version of these commands] 
```
