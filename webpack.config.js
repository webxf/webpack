const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js', //入口的路径
  output: {
    //出口的相关配置
    path: path.resolve(__dirname, 'dist'), //出口的路径 绝对路径
    filename: 'bundle.js', //输出文件的名称
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', //template为webpack打包生成dist/html 文件指定模板
      filename: 'index.html', //html 文件 文件名称
    }),
    new CleanWebpackPlugin(),
  ],
};
