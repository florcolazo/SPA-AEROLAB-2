const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
         
      {   
        test: /\.(img|url|png|svg|jpg|jpeg|gif)$/,
                use: [
                 {loader: "file-loader",
                 options: { name: 'assets/[hash].[ext]' },
               
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                
                  ]
                },
         
                
            ]   
        },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html',
      }
    ),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/styles/styles.css", to: '' },
        { from: "./src/assets/images", to: "assets/images" }
      ],
  }),
  ],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'public'),
      },
      {
        directory: path.join(__dirname, 'src/assets/images'),
        publicPath: '/assets/images',
      }
    ],
    compress: true,
    port: 8081,
    hot: true,
    open: true,
  }
}


