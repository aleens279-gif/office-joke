// Make the AI Judge Laugh: the Office Joke Open — writes one line to /output/entry.txt
// Gate: 120 chars (max 200), one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "The office printer is the only colleague who has never said 'per my last email' — it just silently judges us, then jams.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
