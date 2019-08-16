const path = require("path")
const webpack = require("webpack")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const commonConfig = require('./webpack.common.js')
const merge = require("webpack-merge")
module.exports = merge(commonConfig, {
    // output: {
    //     publicPath: "",
    // },  
    plugins: [
        new CleanWebpackPlugin(),
        // new WebpackBundleAnalyzer({
        //     analyzerMode: "static"
        // }),
    ]
})