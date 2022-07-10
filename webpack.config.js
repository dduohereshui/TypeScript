const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    // stats: "errors-only",
    compress: false,
    host: "localhost",
    port: 8888,
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: path.join(__dirname, "dist"),
    }),
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
    }),
  ],
};
