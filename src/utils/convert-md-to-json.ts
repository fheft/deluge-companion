import * as fs from "fs";
import { extname } from "node:path";
import { parseMd } from "../lib/md-convert.js";

const inputPath = "./src/data/shortcuts/";
const inputPathFiles = fs.readdirSync(inputPath);
const mdFiles = inputPathFiles.filter((file) => extname(file) === ".md");

const output = mdFiles.flatMap((filename) => {
  const mdContent = fs.readFileSync(inputPath + filename, "utf-8");
  return parseMd(mdContent);
});
fs.writeFileSync("./src/data/v4.1.0.json", JSON.stringify(output, null, 2));

console.log("DONE.");
