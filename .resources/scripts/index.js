import fs from "fs";
import { glob } from "glob";

const files = await glob("../../1x1-prompts/**/*.md");

const prompts = {
  pl: [],
  en: [],
};

files.forEach((pathToFile) => {
  const content = fs.readFileSync(pathToFile, { encoding: "utf-8" });

  if (pathToFile.includes("prompts/pl")) {
    prompts.pl.push(content);
  } else {
    prompts.en.push(content);
  }
});

console.log(prompts);

fs.writeFileSync('./gh-pages/prompts.json', JSON.stringify(prompts, null, 2), 'utf-8');
