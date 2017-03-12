/**
 * Created by Administrator on 2017/3/10.
 */
var webpack = require("webpack");
var path = require("path");

module.exports = {
    devtool: 'eval-source-map', //生成source-map
    entry : [
        'webpack-hot-middleware/client?path=http:127.0.0.1:3000/__webpack_hmr&reload=true&noInfo=false&quiet=false',
        './app/main.js'
    ],
    output: {
        path : __dirname + '/public',
        filename: 'bundle.js',
        publicPath: "/public/",
        chunkFilename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?mudoles"//感叹号作用在于使同一文件使用不同loader
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        contentBase: "./public",//本地服务器加载页面所在目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true//实时刷新
    }
}
