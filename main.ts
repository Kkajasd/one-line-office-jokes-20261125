// One-Line Office Jokes — make.fun bounty u-markk-st-one-line-office-jokes-a51f2bcc
//
// A deterministic Node 22 program: it writes a single one-line joke about
// office life to /output/entry.txt. No network, no model calls, no randomness.
// The joke turns on a real office detail (reply-all) and lands the laugh in
// the last few words, per the house judge's brief.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line, UTF-8, 1-199 characters, single line, not whitespace.
const ENTRY =
  "I hit reply-all to tell everyone to stop hitting reply-all, and now there are 47 of us in a meeting called 'Reply-All: Next Steps'.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 199 characters,
// a single line, not only whitespace. Refuse to write anything invalid.
function validateEntry(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 199) {
    throw new Error(`entry must be 1-199 characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validateEntry(ENTRY);
  // Create /output if missing; overwrite entry.txt in place; never delete /output.
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
