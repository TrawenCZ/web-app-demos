"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
// IMPORTANT
// Do NOT modify this file
global.beforeAll(async () => {
    await promises_1.default.copyFile(__dirname + "/../prisma/database.db", __dirname + "/../prisma/database.backup.db");
});
global.beforeEach(async () => {
    await promises_1.default.copyFile(__dirname + "/../prisma/test.db", __dirname + "/../prisma/database.db");
});
global.afterAll(async () => {
    await promises_1.default.copyFile(__dirname + "/../prisma/database.backup.db", __dirname + "/../prisma/database.db");
    promises_1.default.unlink(__dirname + "/../prisma/database.backup.db");
});
