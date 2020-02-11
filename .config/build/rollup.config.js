import fs from "fs"

import typescript from "rollup-plugin-typescript"
import svgr from "@svgr/rollup"

function generateIndex() {
  const files = fs.readdirSync("src")
  const lines = files
    .filter(
      it =>
        fs.existsSync("src/" + it + "/index.ts") ||
        fs.existsSync("src/" + it + "/index.tsx")
    )
    .map(it => "export { default as " + it + ' } from "../src/' + it + '"')
    .join("\n")
  if (!fs.existsSync("generated")) {
    fs.mkdirSync("generated")
  }
  fs.writeFileSync("generated/index.ts", lines)
}

export default {
  input: "generated/index.ts",
  output: {
    file: "dist/index.js",
    format: "esm",
    sourcemap: true
  },
  plugins: [
    {
      buildStart() {
        generateIndex()
      }
    },
    typescript({
      tsconfig: "../../tsconfig.json"
    }),
    svgr()
  ]
}
