/**
 * Created by Administrator on 2017/3/10.
 */
module.exports = {
    devtool: 'eval-source-map', //生成source-map
    entry : __dirname + '/app/main.js',
    output: {
        path : __dirname + '/public',
        filename: 'bundle.js'
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
    devServer: {
        contentBase: "./public",//本地服务器加载页面所在目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true//实时刷新
    }
}
