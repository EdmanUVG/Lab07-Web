const path = require("path");


module.exports = {
	entry: {
		main: "./src/index.js",
		vendor: "./src/vendor.js"

	}
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.html$/,
	// 			use: ["html-loader"]
	// 		},
	// 		{
	// 			test: /\.(png|jpe?g|gif)$/i,
	// 			loader: "file-loader",
	// 			options: {
	// 				name: '/images/[name].[hash].[ext]'
	// 			},	
	// 		},
	// 	],
	// },
};