const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.join(__dirname, 'node_modules/pdfjs-dist/build/pdf.worker.min.js'),
              to: path.join(__dirname, 'build/static/js'),
            },
          ],
        })
      );
      return webpackConfig;
    },
  },
}; 