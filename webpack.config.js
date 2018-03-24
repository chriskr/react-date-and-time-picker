// https://v1.dhruvkumarjha.com/articles/introduction-to-creating-react-components-and-publishing-them-to-npm
// https://www.valentinog.com/blog/webpack-4-tutorial/
// https://github.com/webpack/docs/wiki/configuration

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const babelLoader = {
  loader: 'babel-loader',
  test: /.js$/,
  exclude: /node_modules/,
  options: {
    presets: ['env', 'react']
  },
};
const urlLoader = {
  test: [/\.svg$/],
  loader: 'url-loader',
  options: {
    limit: 10000,
  },
};
const cssExtractor = options => ({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options,
      },
     ],
   }),
 });

module.exports = [];

const baseConfig = {
  output: {
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      babelLoader,
      urlLoader,
      cssExtractor({
        importLoaders: 1,
        minimize: false,
      }),
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
  ]
};

module.exports.push(baseConfig);

if (isProduction) {
  Object.assign(baseConfig, {
    externals: {
      'react': 'react',
      'react-dom': 'react-dom',
      'regenerator-runtime': 'regenerator-runtime',
    },
  });
  module.exports.push(Object.assign({}, baseConfig, {
    output: {
      filename: 'main.min.js',
      path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
      minimize: true,
    },
    module: {
      rules: [
        babelLoader,
        urlLoader,
        cssExtractor({
          importLoaders: 1,
          minimize: true,
        }),
      ],
    },
    plugins: [
      new ExtractTextPlugin('main.min.css'),
    ]
  }));
}
