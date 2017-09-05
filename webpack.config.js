/**
 * Created by Administrator on 2017/3/10.
 */
var webpack = require("webpack");
var path = require("path");

module.exports = {
    devtool: 'source-map', //生成source-map
    entry : [
       'webpack-hot-middleware/client?reload=true',
       'babel-polyfill',
        './app/main.js'
    ],
    output: {
        path : __dirname + '/public',
        filename: 'bundle.js',
        publicPath: "/public/",
        chunkFilename: 'bundle.js'
    },

    resolve: {
        modules: [__dirname + '/app', 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                include: __dirname + '/app',
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
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        contentBase: "./public",//本地服务器加载页面所在目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true//实时刷新
    }
}
