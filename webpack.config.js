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
      },
      { test: /\.css$/, use: [ 
        { loader: "style-loader" },  // to inject the result into the DOM as a style block

        // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
    ] }, 
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ds.js'
  }
}