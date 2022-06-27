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
      //webpack4
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   // use: ['url-loader'],
      //   use: [
      //     {
      //       loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
      //       // 配置limit, 超过8k, 不转, file-loader复制, 随机名, 输出文件
      //       options: {
      //         limit: 8 * 1024,
      //       },
      //     },
      //   ],
      // },
      //webpack5
      {
        // 图片文件的配置(仅适用于webpack5版本)
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: 'asset', // 在导出一个 data URI 和发送一个单独的文件之间自动选择
      },
      {
        // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font-[name].[hash:6][ext]',
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // 预设:转码规则(用bable开发环境本来预设的)
          },
        },
      },
    ],
  },
};
