const path = require('path')

module.exports = {
  context: path.resolve('src'),
  entry: './index.ts',
  mode: "development",
  module: {
    rules: [
      {
        use: [{
          loader: 'expose-loader',
          options: {
            exposes: {
              globalName: 'ds',
              override: true
            },
          }
        }, {
          loader: 'ts-loader'
        }],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.css']
  },
  output: {
    // path: path.resolve(__dirname, 'dist'),
    path: path.resolve('./frontend/public/library'),
    filename: 'ds.js'
  }
}