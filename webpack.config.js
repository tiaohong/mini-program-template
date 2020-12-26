const copyWebpackPlugin = require('copy-webpack-plugin')
//webpack.config.js
const path = require('path')
module.exports = {
  mode: 'development',
  entry: './old_src/app.js',
  output: {
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new copyWebpackPlugin({
      patterns: [{
        context: './old_src',
        from: '**/*',
        to: './'
      }]
    })
  ]
}