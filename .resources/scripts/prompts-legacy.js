import fs from "fs";
import {glob} from "glob";

export async function buildLegacyPrompts() {
  try {
    let filePaths = await glob("../../prompts/{en,pl}/*.md");
    if (!filePaths || filePaths.length === 0) {
      throw new Error("No prompt files found in the legacy directories");
    }
    filePaths = filePaths.sort();

    const prompts = {
      pl: [],
      en: [],
    };

    filePaths.forEach((pathToFile) => {
      try {
        const content = fs.readFileSync(pathToFile, {encoding: "utf-8"});
        if (!content) {
          console.warn(`Empty file found: ${pathToFile}`);
          return;
        }

        if (pathToFile.includes("prompts/pl")) {
          prompts.pl.push(content);
        } else {
          prompts.en.push(content);
        }
      } catch (fileError) {
        console.error(`Error reading file ${pathToFile}:`, fileError.message);
      }
    });

    try {
      fs.writeFileSync(
        "./github-pages/prompts.json",
        JSON.stringify(prompts, null, 2),
        "utf-8"
      );
    } catch (writeError) {
      throw new Error(`Failed to write prompts file: ${writeError.message}`);
    }
  } catch (error) {
    console.error("Error building legacy prompts:", error.message);
    throw error;
  }
}
