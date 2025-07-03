const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { serviceworker } = require('globals');
const glob = require('glob');

const entries = glob.sync('src/**/*.ts').reduce((acc, file) => {
  const name = path.relative('src', file).replace(/\.ts$/, '');
  acc[name] = `./${file}`;
  return acc;
}, {});

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './src',
          to: '[path][name][ext]',
          globOptions: { ignore: ['**/*.ts'] }
        }
      ]
    })
],
};
