const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const app = require('./app.json');

const analyzeBundle = process.env.ANALYZE_BUNDLE === 'true';
const nodeEnv = process.env.NODE_ENV || 'development';

if (!['development', 'stage', 'production'].includes(nodeEnv)) {
  throw new Error('NODE_ENV must be one of "development", "stage", "production"');
}

const appConfig = app[nodeEnv];

const baseConfig = {
  mode: appConfig.mode,
  devtool: appConfig.devtool,
  devServer: {
    contentBase: 'dist',
  },
  entry: ['babel-polyfill', path.resolve(__dirname, '../src/main.js')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      __APP__: JSON.stringify(appConfig),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react'],
          },
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader',
      },
      {
        test: /\.(otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:8].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /index.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};

if (analyzeBundle) {
  baseConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  ...baseConfig,
};
