const path = require("path")
const WebpackHtmlPlugin = require("html-webpack-plugin")
// const webpack = require("webpack")
const { VueLoaderPlugin } = require("vue-loader")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const LodashWebpackPlugin = require('lodash-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, '../src/main.ts'),   
     },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        chunkFilename: "[name].js",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                      loader: "babel-loader"
                    },
                    {
                        loader: "ts-loader",
                        options: {
                            configFile: path.resolve(__dirname, '../', "tsconfig.json"),
                            appendTsSuffixTo: [/\.vue$/],
                        },
                    }
                ],
                exclude: /node_modules/
            }, 
            {
                test: /\.vue$/,
                loader: "vue-loader",
                // options: {
                //     loaders: {
                //         css: [
                //             MiniCssExtractPlugin.loader,
                //             'css-loader'
                //         ]
                //     }
                // }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            // {
            //     test: /\.(png|jpg|gif|svg)$/,
            //     loader: "file-loader",
            //     options: {
            //         name: 'images/[name].[ext]'
            //     }
            // }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.css', '.vue', ".json"],
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
                styles: { // 把所有css打包在一起，包括.vue文件中style标签里面的
                    name: "styles",
                    test: /\.(css|vue)$/,
                    chunks: "all",
                    enforce: true
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
        new VueLoaderPlugin(),
        new LodashWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
        })j
    ]
}