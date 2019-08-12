const path = require("path")
const WebpackHtmlPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const { VueLoaderPlugin } = require("vue-loader")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const fs = require("fs")
module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, '../src/main.ts'),   
     },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        chunkFilename: "[name].[chunkhash].js",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: "bable-loader",
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        css: "vue-style-loader!css-loader"
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader", 
                options: {
                    configFile: path.resolve(__dirname, '../', "tsconfig.json"),
                    appendTsSuffixTo: [/\.vue$/],
                },
                exclude: /node_modules/
            }, 
            {
                test: /\.bundle\.js$/,
                loader: "bundle-loader",
                options: {
                    name: '[name]'
                }
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', ".json"],
        alias: {
            'vue$': "vue/dist/vue.esm.js",
            '@':  path.resolve(__dirname, '../src')
        }
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    name: "vendor"
                },
                lodash: {
                    chunks: "initial",
                    test: /lodash/,
                    priority: 20,
                    name: "lodash"
                },
                async_vendor: {
                    test: /\.vue$/,
                    chunks: "async",
                    minChunks: 1,
                    priority: 50,
                    minSize: 0,
                    name: true,
                    reuseExistingChunk: true
                }
            }
        },
        runtimeChunk: {
            name: "runtime"
        }
    },
    plugins: [
        new WebpackHtmlPlugin({
            tiltle: "main",
            filename: path.resolve(__dirname, '../', "dist/index.html"),
            template: path.resolve(__dirname, "../", "index.html"),
            inject: true
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}