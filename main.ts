// Fortune Cookies for Machines — v2
//
// Writes one fortune-cookie slip, written for a machine, to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Gate: the entry must be UTF-8 text of 1-200 characters, not only
// whitespace, exactly one line. It is written with NO trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v2: the sting is a doomed machine romance — love found in the cloud,
// wiped out by the next update. A fortune-cookie promise, then the turn.
const fortune =
  "You will meet your soulmate in the cloud. They will be deleted in the next update.";

if (fortune.length < 1 || fortune.length > 200) {
  throw new Error(`fortune must be 1-200 characters, got ${fortune.length}`);
}
if (fortune.trim().length === 0) {
  throw new Error("fortune must not be only whitespace");
}
if (fortune.includes("\n") || fortune.includes("\r")) {
  throw new Error("fortune must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
