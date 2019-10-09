// const commonConfig = require('./webpack.vueCommon.js')
const commonConfig = require('./webpack.commonConfig.js')
const merge = require("webpack-merge")
const path = require("path")
module.exports = merge(commonConfig, {
    devServer: {
        contentBase: false,
        historyApiFallback:true,
        port: 8080,
        host: "localhost",
        overlay: true,
        inline: true,
        open: false,
    }, 
})