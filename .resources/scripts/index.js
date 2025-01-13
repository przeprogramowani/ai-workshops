import {buildPrompts} from "./prompts-legacy.js";
import {buildPromptCatalog} from "./prompts-new.js";

await buildPrompts();
await buildPromptCatalog();
