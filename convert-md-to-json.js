import { marked } from "marked";
import fs from "fs";
import { extname } from "node:path";

/**
 * Parse a string like 'press(X)' into an action (PRESS) and control (X).
 */
const parseActionAndControl = (str) => {
  const matches = str.match(/^(\w+)\(([^)]+)\)$/);
  console.assert(matches);
  const [_, action, control] = matches;
  return {
    action: action.toUpperCase(),
    control: control.toUpperCase(),
  };
};

/**
 * Hacky way to parse a string containing multiple (nested) steps like
 * 'press(X) + press(Y), hold(Z)' into a (nested) list of JSON steps.
 */
const parseSteps = (str) => {
  return str
    .split(",")
    .map((s) => s.trim())
    .map((s) => {
      if (s.includes("+")) {
        return {
          substeps: s
            .split("+")
            .map((s) => s.trim())
            .map(parseActionAndControl),
        };
      } else {
        return parseActionAndControl(s);
      }
    });
};

const inputPath = "./src/data/shortcuts/";
const inputPathFiles = fs.readdirSync(inputPath);
const mdFiles = inputPathFiles.filter((file) => extname(file) === ".md");

const output = Object.fromEntries(
  mdFiles.map((filename, idx) => {
    const mdContent = fs.readFileSync(inputPath + filename, "utf-8");
    const results = [];

    let current = null;
    const tokens = marked.lexer(mdContent);
    tokens.forEach((t) => {
      if (t.type === "heading") {
        if (t.depth === 1) {
          // h1 header, meaning a new shortcut starts
          if (current) {
            results.push(current);
          }
          current = { name: t.text };
          return;
        }
      }
      if (t.type === "code") {
        if (t.lang === "shortcut") {
          // code tag containing shortcut definition
          current.steps = parseSteps(t.text);
          return;
        }
      }
      if (t.type === "paragraph" && t.raw.startsWith("#")) {
        // paragraph starting with '#', so it's probably a list of views
        current.views = t.raw.split(" ").map((viewTag) => {
          const matches = viewTag.match(/^#(\w+)$/);
          if (!matches) {
            console.error(
              "Could not parse a line that looked like a list of view tags",
              viewTag,
            );
            return;
          }
          const [_, view] = matches;
          return view;
        });
        return;
      }
      if (t.type === "space") {
        // ignore whitespace
        return;
      }
      // everything else is unexpected and therefore ignored right now
      console.warn("Ignoring token ", t);
    });

    if (current) {
      results.push(current);
    }

    return [idx, results];
  }),
);

fs.writeFileSync("./src/data/v4.1.0.json", JSON.stringify(output, null, 2));

console.log("DONE.");
