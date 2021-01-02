const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "none",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.min.js",
  },
  optimization: {
    moduleIds: "deterministic",
    chunkIds: "deterministic",
    mangleExports: "deterministic",
    nodeEnv: "production",
    flagIncludedChunks: true,
    concatenateModules: true,
    splitChunks: {
      hidePathInfo: true,
      minSize: 30000,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
    },
    emitOnErrors: false,
    checkWasmTypes: true,
    minimize: true,
  },
  plugins: [
    new TerserPlugin(/* ... */),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
