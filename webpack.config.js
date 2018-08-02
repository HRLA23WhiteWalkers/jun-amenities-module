const path = require('path');

module.exports = {
  entry: path.resolve('./client/src/index.js'),
  output: {
    path: path.resolve('./client/public/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'env', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader:
          'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.(png|eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development'
};
