const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const packagejson = require('./package.json');
const dependencies = Object.keys(packagejson.dependencies);

module.exports = {
  mode: 'development',
  target: 'web',

  entry: {
    // 'app' is the entry point into the REACT Application [location: src/.index.js]
    app: './src/index.js',
    /* 'vendor' - bundle name that contains all of our 3rd party code.
     * 'dependencies' - List of modules that are listed in our package.json file
     */
    vendor: dependencies
  },

  output: {
    // Output everything into the 'dist' directory,
    path: path.resolve(__dirname, 'dist'),

    // Each entry point will be produced using this placeholder, which is the entry point name.
    // You will see 'app.js' and 'vendor~.js' in 'dist
    filename: '[name].js',
    
    // Path to resources relative to the html file.  Our index.html will be at the root of dist:
    publicPath: '/'
  },

  // Setting up babel-loader to compile our js/jsx files:
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  
  // Tell webpack to split our vendors bundle into chunks:
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins: [
    // Using the template found in 'src/index.html' the bundles are injected into the body secion :
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html',
      inject: 'body',
    })
  ],

  // Dev Server settings:
  devServer: {
    // path of the static resources:
    contentBase: path.join(__dirname, '/'),
    historyApiFallback: true
  },

  // Allows debugging of the compiled code:
  devtool: 'source-map'
};