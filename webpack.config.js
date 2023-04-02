const path = require('path');
module.exports = {
  // entry: 시작점
  entry: "./src/index.ts",
  // rule: 규칙 설정
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // use: 사용할 3rd party
        use: 'ts-loader',
        // exclude: 제외대상
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // extensions: resolve할 파일의 확장자
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
  }
};
