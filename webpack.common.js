module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
