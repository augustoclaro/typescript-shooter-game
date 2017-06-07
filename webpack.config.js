const webpack = require('webpack');

module.exports = {
    entry: {
        app: ["./index.ts"]
    },
	resolve: {
		extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
	},
    output: {
        filename: 'output.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: "ts-loader"
        }]
    }
};