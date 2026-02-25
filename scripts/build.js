const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "..", "dist");
const src = path.join(__dirname, "..", "src", "index.html");

fs.mkdirSync(dist, { recursive: true });

const html = fs.readFileSync(src, "utf8");
fs.writeFileSync(path.join(dist, "index.html"), html);

const meta = `Build time (UTC): ${new Date().toISOString()}\n`;
fs.writeFileSync(path.join(dist, "build.txt"), meta);

console.log("✅ Build complete. Files in dist/:");
console.log(fs.readdirSync(dist));
