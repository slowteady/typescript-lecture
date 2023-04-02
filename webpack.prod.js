const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // mode: 개발, 운영 모드를 설정
  mode: "production",
  // entry: 시작점
  entry: "./src/index.ts",
  // devtool: 개발 환경에서의 필요한 3rd party 
  devtool: "inline-source-map",
  // rule: 규칙 설정
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // use: 사용할 3rd party
        use: "ts-loader",
        // exclude: 제외대상
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // extensions: resolve할 파일의 확장자
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
  },
  plugin: [
    new CleanWebpackPlugin(),
  ]
};
