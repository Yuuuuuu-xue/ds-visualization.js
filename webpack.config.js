const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  context: path.resolve('library'),
  entry: './index.ts',
  mode: "production",
  module: {
    rules: [
      {
        use: [
        {
          loader: 'expose-loader',
          options: {
            exposes: {
              globalName: 'ds',
              override: true
            },
          }
        }, 
        {
          loader: 'ts-loader'
        }],
        exclude: /node_modules/
      },
      {
        test: /\.(less)$/,
        use: [{
            loader: MiniCssExtractPlugin.loader 
        }, {
            loader: 'css-loader' // translates CSS into CommonJS
        }, {
            loader: 'less-loader' // compiles Less to CSS
        }]
    },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.css', '.less']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // path: path.resolve('./frontend/public/library'),
    filename: 'ds.js'
  }
}