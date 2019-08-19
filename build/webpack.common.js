const path = require("path")
const WebpackHtmlPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")
const LodashWebpackPlugin = require("lodash-webpack-plugin")
const extractTextWebpackPlugin = require("extract-text-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        main: path.resolve(__dirname, '../src/main.ts'),   
     },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        chunkFilename: "[name].[hash].js",
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
                //     //     css: [
                //     //         {
                //     //             loader: "vue-style-loader",
                //     //             options: {
                //     //                 injectType: "singletonStyleTag"
                //     //             }
                //     //         },
                //     //         // process.env.NODE_ENV === "development" ? "vue-style-loader" : MiniCssExtractPlugin.loader,
                //     //         "css-loader",
                //     //  ]
                //     css: extractTextWebpackPlugin.extract({
                //         fallback: {
                //             loader: "vue-style-loader",
                //             options: {
                //                 singleton: true
                //             }
                //         },
                //         use: {
                //             loader: "css-loader"
                //         }
                //     })
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
                    process.env.NODE_ENV === "development" ? {
                        loader: "style-loader",
                        options: {
                            injectType: 'singletonStyleTag'
                        }
                    }:  MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
                // use: extractTextWebpackPlugin.extract({
                //     fallback: {
                //         loader: "style-loader",
                //         // singleton: true
                //     },
                //     use: 'css-loader'
                // })
            },
            {
                test: /\.(png|jpe?g|gif|svg|ttf|eot|otf|woff|woff2)$/,
                loader: "url-loader?limit=10000",
                options: {
                    publicPath: '../',
                    name: 'images/[name].[ext]'
                }
            }
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
            },
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
        new VueLoaderPlugin(),
        new LodashWebpackPlugin(),
        // new extractTextWebpackPlugin({
        //     filename: "styles/styles.css",
        //     allChunks: true,
        // })
        // new WebpackBundleAnalyzer({
        //     analyzerMode: "static"
        // }),
    ]
}