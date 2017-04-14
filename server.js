/**
 * Created by Administrator on 2017/3/12.
 */
var express = require("express");
var webpack = require("webpack");
var path = require("path");

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpackConfig = require("./webpack.config");

var app = express();

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler,{
    noInfo: true,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('public'));

app.listen(3000);