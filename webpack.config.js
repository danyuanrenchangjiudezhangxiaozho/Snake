const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          //配置babel
          {
            loader: "babel-loader",
            //设置babel
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      chrome: "88",
                      // "ie":"11"
                    },
                    corejs: "3",
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            //   "style-loader",
              "css-loader",
              {
                  loader: "postcss-loader",
                  options: {
                      postcssOptions: {
                          plugins: [
                              ["postcss-preset-env", {
                                  browsers: "last 2 versions"
                              }]
                          ]
                      }
                  }
              },
              "less-loader",
          ]
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        //输出文件夹和文件名
            filename:'css/built.css'
        })
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
};
