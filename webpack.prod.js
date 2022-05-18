const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  entry: [path.resolve(__dirname, ".index.js"), "regenerator-runtime/runtime"],
  output: {
    path: path.resolve(__dirname, "dist/app"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.$css/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".", ".js", ".jsx", ".css", ".scss"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
    new webpack.DefinePlugin({
      "process.env.DEV_HOST": JSON.stringify(process.env.DEV_HOST),
      "process.env.PROD_HOST": JSON.stringify(process.env.PROD_HOST),
      "process.env.BROWSER": JSON.stringify(true),
    }),
  ],
};
