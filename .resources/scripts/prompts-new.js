import fs from "fs";
import {glob} from "glob";

export async function buildPromptCatalog() {
  try {
    let filePaths = await glob("../../prompts/catalog/**/*.{en|pl}.md");
    if (!filePaths || filePaths.length === 0) {
      throw new Error("No prompt files found in the catalog directory");
    }
    filePaths = filePaths.sort();

    const catalog = {
      pl: {},
      en: {},
    };

    filePaths.forEach((pathToFile) => {
      try {
        const content = fs.readFileSync(pathToFile, {encoding: "utf-8"});
        if (!content) {
          console.warn(`Empty file found: ${pathToFile}`);
          return;
        }

        const fileName = pathToFile.split("/").pop();
        if (!fileName) {
          console.warn(`Invalid file path: ${pathToFile}`);
          return;
        }

        const language = fileName.endsWith(".pl.md") ? "pl" : "en";
        const promptId = fileName.split(".")[0];
        if (!promptId) {
          console.warn(`Invalid file name format: ${fileName}`);
          return;
        }

        catalog[language][promptId] = content;
      } catch (fileError) {
        console.error(
          `Error processing file ${pathToFile}:`,
          fileError.message
        );
      }
    });

    try {
      fs.writeFileSync(
        "./github-pages/prompts.json",
        JSON.stringify(catalog, null, 2),
        "utf-8"
      );
    } catch (writeError) {
      throw new Error(`Failed to write catalog file: ${writeError.message}`);
    }
  } catch (error) {
    console.error("Error building prompt catalog:", error.message);
    throw error;
  }
}
