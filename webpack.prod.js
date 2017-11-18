const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = (env) => {
  if (env.API_KEY) {
    console.log('\x1b[36m%s\x1b[0m', '\nAPI key loaded\n')
  } else {
    console.log('\x1b[33m%s\x1b[0m: ', '\nWarning - No API_KEY declared\n')
  }
  return merge(common, {
    plugins: [
      new UglifyJSPlugin(),
      new webpack.DefinePlugin({
        'process.env.API_KEY': JSON.stringify(env.API_KEY)
      })
    ]
  })
}
