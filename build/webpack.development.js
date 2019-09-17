// const commonConfig = require('./webpack.vueCommon.js')
const commonConfig = require('./webpack.commonConfig.js')
const merge = require("webpack-merge")
module.exports = merge(commonConfig, {
    devServer: {
        contentBase: false,
        port: 8080,
        host: "localhost",
        overlay: true,
        inline: true,
        open: true,
    }, 
})