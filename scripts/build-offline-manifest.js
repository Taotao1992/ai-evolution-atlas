#!/usr/bin/env node
/** Build the same-origin asset list used by the installable app's offline cache. */
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const assetsRoot = path.join(root, "assets");

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(absolute);
    if (entry.name === ".DS_Store") return [];
    return [`./${path.relative(root, absolute).split(path.sep).join("/")}`];
  });
}

const assets = walk(assetsRoot).sort();
const output = path.join(root, "offline-assets.json");
fs.writeFileSync(output, `${JSON.stringify(assets, null, 2)}\n`);
console.log(`Wrote ${assets.length} offline assets to ${path.relative(root, output)}`);
