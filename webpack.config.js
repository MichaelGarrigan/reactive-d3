const webpack = require('webpack');
const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  //entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(process.cwd(), 'public/icons'), 
        to: path.resolve(process.cwd(), 'dist/icons')
      },
      {
        from: path.resolve(process.cwd(), 'public/images'), 
        to: path.resolve(process.cwd(), 'dist/images')
      },
      {
        from: path.resolve(process.cwd(), 'public/index.html'), 
        to: path.resolve(process.cwd(), 'dist')
      }
    ])
  ],
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};