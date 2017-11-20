var path = require('path');

// must also define below in plugins
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: [ 'style-loader', 'css-loader' ]
      },
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract({
      //     fallbackLoader: 'style-loader',
      //     loader: [
      //       {
      //         loader: 'css-loader',
      //         options: {
      //           modules: true,
      //           importLoaders: 1
      //         }
      //       },
      //       {
      //         loader: 'postcss-loader'
      //       }
      //     ]
      //   })
      // },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [
              require('babel-plugin-transform-runtime'),
              require('babel-plugin-transform-regenerator'),
              require('babel-plugin-transform-class-properties'),
              require('babel-plugin-transform-object-rest-spread'),
              require('babel-plugin-transform-react-jsx')
            ]
          }
        }
      }
    ]
  },
  externals: {
    react: 'commonjs react'
  }
  // ,
  // plugins: [
  //   new webpack.LoaderOptionsPlugin({
  //     test: /\.css$/,
  //     options: {
  //       postcss: [
  //         require('postcss-import')(),
  //         require('postcss-url')(),
  //         require('postcss-cssnext')({
  //           browsers: 'last 2 versions'
  //         }),
  //         require('precss')
  //       ],
  //       context: __dirname
  //     }
  //   }),
  //   new ExtractTextPlugin('[name].css')
  // ]
};