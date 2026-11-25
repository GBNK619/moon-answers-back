// The Moon Finally Answers Back — make.fun entry (u-mang-the-moon-finally-answers-back-781a7ec1)
//
// Writes one line, in the Moon's voice, to /output/entry.txt:
// the Moon's reply, after four billion years of listening, to
// everyone who has ever stared up at it and made a wish.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Four billion years of listening, and your wish was a parking spot.";

// The gate: entry.txt must be 1–240 characters, one line only,
// and not only whitespace — fail loudly rather than submit junk.
if (line.length < 1 || line.length > 240) {
  throw new Error(
    `entry line must be 1–240 characters, got ${line.length}`,
  );
}
if (line.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry line must be a single line (no newline inside)");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line + "\n", "utf8");
console.log(`wrote entry.txt (${line.length} characters): ${line}`);
