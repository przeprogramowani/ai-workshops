import {buildLegacyPrompts} from "./prompts-legacy.js";
import {buildPromptCatalog} from "./prompts-new.js";

await buildLegacyPrompts();
await buildPromptCatalog();
