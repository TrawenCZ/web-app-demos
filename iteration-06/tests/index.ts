import fs from "fs/promises";

// IMPORTANT
// Do NOT modify this file

global.beforeAll(async () => {
  await fs.copyFile(
    __dirname + "/../prisma/database.db",
    __dirname + "/../prisma/database.backup.db"
  );
});

global.beforeEach(async () => {
  await fs.copyFile(
    __dirname + "/../prisma/test.db",
    __dirname + "/../prisma/database.db"
  );
});

global.afterAll(async () => {
  await fs.copyFile(
    __dirname + "/../prisma/database.backup.db",
    __dirname + "/../prisma/database.db"
  );
  fs.unlink(__dirname + "/../prisma/database.backup.db");
});
