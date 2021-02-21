const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: "./src/index.js",
		vendor: "./src/vendor.js"

	},
	plugins: [
		new HtmlWebpackPlugin( {
			template: "./src/template.html"
		})
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
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: {
					loader: "file-loader",
					options: {
						name: '[name].[hash].[ext]',
						outputPath: "images",
					},	
				},
			},
		],
	},
};