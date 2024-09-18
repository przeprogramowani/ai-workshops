import fs from "fs";
import {glob} from "glob";

let filePaths = await glob("../../prompts/**/*.md");
filePaths = filePaths.sort();

const prompts = {
  pl: [],
  en: [],
};

filePaths.forEach((pathToFile) => {
  const content = fs.readFileSync(pathToFile, {encoding: "utf-8"});

  if (pathToFile.includes("prompts/pl")) {
    prompts.pl.push(content);
  } else {
    prompts.en.push(content);
  }
});

console.log(prompts);

fs.writeFileSync(
  "./github-pages/prompts.json",
  JSON.stringify(prompts, null, 2),
  "utf-8"
);
