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
  devServer: {
    open: true,
    port: 3002,
  },
  module: {
    rules: [
      // loader的规则
      {
        test: /\.css$/, // 匹配所有的css文件
        // loader 执行的顺序： use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/, // 匹配执行类型的文件
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
};
