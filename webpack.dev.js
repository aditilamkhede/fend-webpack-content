const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',

    module: {
                rules: [
                        {
                    test: '/\.js$/',
                    exclude: /node_modules/,
                    loader: "babel-loader"
                        }
                ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/client/views/index.html',
        filename: './index.html'
      }),
      new CleanWebpackPlugin({
                // Simulate the removal of files
                dry: true,
                // Write Logs to Console
                verbose: true,
                // Automatically remove all unused webpack assets on rebuild
                cleanStaleWebpackAssets: true,
                protectWebpackAssets: false
        }),
      new BundleAnalyzerPlugin()
    ]
};

// output: { ...output options }
