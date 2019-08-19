const path = require("path")
const webpack = require("webpack")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const commonConfig = require('./webpack.common.js')
const merge = require("webpack-merge")
module.exports = merge(commonConfig, {
    output: {
        publicPath: "./",
        chunkFilename: "[name].[chunkHash:6].js"
    }, 
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "styles/styles.css",
            chunkFilename:"styles/[name].[chunkhash:6].css"
        }),
        // new WebpackBundleAnalyzer({
        //     analyzerMode: "static"
        // }),
    ]
})