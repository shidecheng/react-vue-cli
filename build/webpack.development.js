const path = require("path")
const WebpackHtmlPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const { VueLoaderPlugin } = require("vue-loader")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const LodashWebpackPlugin = require('lodash-webpack-plugin')
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
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
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
        new VueLoaderPlugin(),
        new LodashWebpackPlugin()
    ]
}