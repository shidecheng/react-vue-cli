const path = require("path")
const WebpackHtmlPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")
const LodashWebpackPlugin = require("lodash-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HappyPack = require("happypack")
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const os = require("os")
// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length});
const happyThreadPool = HappyPack.ThreadPool({ size: 1});
// const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const START_TYPE = process.env.START_TYPE
const main = path.resolve(__dirname, `../src/${START_TYPE === "react" ? 'reactMain.tsx' : 'vueMain.ts' }`) 
let options = {
    configFile: path.resolve(__dirname, '../', "tsconfig.json"),// ts编译器配置
}
if (START_TYPE === "vue") {
    options.appendTsSuffixTo = [/\.vue$/]
}
module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        main,
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
                        options,
                    }
                ],
                use: "happypack/loader?id=ts",
                exclude: /node_modules/
            }, 
            {
                test: /\.vue$/,
                loader: "vue-loader"
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
        extensions: ['.ts', '.tsx', '.js', '.css', ".json"],
        alias: {
            "@": path.resolve(__dirname, "../src")
        }
    },
    // externals: ["react", "react-dom"],
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
        new HappyPack({
            id: "ts",
            threadPool: happyThreadPool,
            loaders:  [
                {
                  path: "babel-loader",
                },
                {
                    path: "ts-loader",
                    query: {
                        happyPackMode: true,
                        configFile: path.resolve(__dirname, '../', "tsconfig.json"),
                        appendTsSuffixTo: START_TYPE === "react" ? [] : [/\.vue$/],
                    },
                }
            ]
        }),
        // new ForkTsCheckerWebpackPlugin({
        //     checkSyntacticErrors: true
        // }),
        // new WebpackBundleAnalyzer({
        //     analyzerMode: "static"
        // }),
    ]
}