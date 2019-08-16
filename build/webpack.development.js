const commonConfig = require('./webpack.common.js')
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