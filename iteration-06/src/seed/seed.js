"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parse_1 = require("./yaml-parse/parse");
const seed_from_dtos_1 = __importDefault(require("./dto-to-database/seed-from-dtos"));
// IMPORTANT
// Do NOT modify this file
const seed = async (path) => {
    const data = (0, parse_1.loadData)(path);
    if (data.isErr) {
        console.log(`Could not load the file because of this error: ${data.error.message}`);
        return;
    }
    const dataParsed = (0, parse_1.parseData)(data.value);
    if (dataParsed.isErr) {
        console.log(`Could not parse the data from the file because of this error: ${dataParsed.error.message}`);
        return;
    }
    const seedResult = await (0, seed_from_dtos_1.default)(dataParsed.value);
    if (seedResult.isErr) {
        console.log(`Could not seed the database because of this error: ${seedResult.error.message}`);
        return;
    }
    console.log(`Success! The database has been seeded successfully! Run 'npx prisma studio' to see the results`);
};
seed(process.env["SEED_FILE_PATH"] || "./data/seed.yaml").catch((e) => {
    throw e;
});
