const path = require("path");


module.exports = {
	entry: {
		main: "./src/index.js",
		vendor: "./src/vendor.js"

	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.(jpeg|png|jpg|svg|gif)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[hash:6].[ext]',
					outputPath: 'images',
					publicPath: 'images',
					emitFile: true,
					esModule: false
				}
			}
		],
	},
};