const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    library: "JSHelpers",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
    globalObject: "this",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
