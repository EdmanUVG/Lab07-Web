const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: "development",
	devServer: {
    	contentBase: './dist',
   },
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
	},
	plugins: [
		new HtmlWebpackPlugin( {
			filename: "index.html",
			template: "./src/template.html"
		}),
		new HtmlWebpackPlugin( {
			filename: "lunes.html",
			template: "./src/lunes.html",
			chunks: []
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader",   // 3. Injects styles into DOM
					"css-loader",     // 2. Turns css into como js
					"sass-loader"     // 1. Turn sass into css
				]
			},
		]
	}
});