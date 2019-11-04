import typescript from "rollup-plugin-typescript";
import svgr from "@svgr/rollup";

export default {
  input: "generated/index.ts",
  output: {
    file: "dist/index.js",
    format: "esm",
    sourcemap: true
  },
  plugins: [typescript(), svgr()]
};
