"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseData = exports.loadData = void 0;
const result_1 = require("@badrap/result");
const fs_1 = require("fs");
const yaml_1 = __importDefault(require("yaml"));
// IMPORTANT
// Do NOT modify this file
/**
 * Load the data from the file and store it as a string
 *
 * @param path - path to the file
 *
 * @returns - `string` with the file content if the file has been found
 *          - `false` otherwise
 */
const loadData = (path) => {
    try {
        // for now, this operation shall be synchronous
        const data = (0, fs_1.readFileSync)(path, "utf-8");
        return result_1.Result.ok(data);
    }
    catch (e) {
        console.log(`There has been an error while reading the file: ${e}`);
    }
    return result_1.Result.err();
};
exports.loadData = loadData;
/**
 * Parse the Yaml into our defined DTOs
 *
 * @param data - yaml data in string
 *
 * @returns Result.ok(parsed yaml data)
 *          Result.err() when an error occurrs
 */
const parseData = (data) => {
    try {
        const parsedData = yaml_1.default.parse(data);
        const typedData = parsedData;
        return result_1.Result.ok(typedData);
    }
    catch (e) {
        console.log(`There has been an error while parsing the yaml file: ${e}`);
    }
    return result_1.Result.err();
};
exports.parseData = parseData;
