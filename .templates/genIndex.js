const fs = require('fs');

function main() {
  const files = fs.readdirSync("src");
  const lines = files
    .filter(it => fs.existsSync("src/" + it + "/index.ts") || fs.existsSync("src/" + it + "/index.tsx"))
    .map(it => "export { default as " + it + " } from \"../src/" + it + "\";")
    .join("\n");
  if (!fs.existsSync("generated")) {
    fs.mkdirSync("generated");
  }
  fs.writeFileSync("generated/index.ts", lines);
}

main();