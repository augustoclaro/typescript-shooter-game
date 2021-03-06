const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

var config = require("../webpack.config.js");
console.log(config.entry);
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler);
server.listen(8080);