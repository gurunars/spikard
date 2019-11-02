const fs = require("fs");

function configureEnv() {
  process.env["NODE_ENV"] = "production";
}

function generateIndex() {
  const files = fs.readdirSync("src");
  const lines = files
    .filter(
      it =>
        fs.existsSync("src/" + it + "/index.ts") ||
        fs.existsSync("src/" + it + "/index.tsx")
    )
    .map(it => "export { default as " + it + ' } from "../src/' + it + '";')
    .join("\n");
  if (!fs.existsSync("generated")) {
    fs.mkdirSync("generated");
  }
  fs.writeFileSync("generated/index.ts", lines);
}

// https://webpack.js.org/configuration/
module.exports = {
  mode: "production",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  entry: ["./generated"],

  resolve: {
    extensions: [".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]]
        }
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      }
    ]
  },

  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
