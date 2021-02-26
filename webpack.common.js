const path = require("path");


module.exports = {
	entry: {
		main: './src/index.js',
		vendor: './src/vendor.js'

	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(jpeg|png|jpg|svg|gif)$/i,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'img/',
						publicPath: 'img/'
					}
				}
			}
		],
	},
};