const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: "development",
	devServer: {
    	contentBase: './dist',
   },
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
	}
});