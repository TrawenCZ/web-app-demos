import { Result } from "@badrap/result";
import { readFileSync } from "fs";
import YAML from "yaml";
import type YAMLFileData from "../../types/data-transfer-objects";

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
export const loadData = (path: string): Result<string> => {
  try {
    // for now, this operation shall be synchronous
    const data: string = readFileSync(path, "utf-8");
    return Result.ok(data);
  } catch (e) {
    console.log(`There has been an error while reading the file: ${e}`);
  }

  return Result.err();
};

/**
 * Parse the Yaml into our defined DTOs
 *
 * @param data - yaml data in string
 *
 * @returns Result.ok(parsed yaml data)
 *          Result.err() when an error occurrs
 */
export const parseData = (data: string): Result<YAMLFileData> => {
  try {
    const parsedData = YAML.parse(data);
    const typedData = parsedData as YAMLFileData;

    return Result.ok(typedData);
  } catch (e) {
    console.log(`There has been an error while parsing the yaml file: ${e}`);
  }

  return Result.err();
};
