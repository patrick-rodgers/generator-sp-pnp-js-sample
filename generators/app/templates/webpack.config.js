var path = require("path");

module.exports = {
  cache: true,
  entry: './src/app.ts',
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/assets/",
    filename: "app.js"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
