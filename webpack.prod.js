const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	mode: "production",
	entry: {
		index: './src/start-index.js',
		intro: './src/start-intro.js',
		earth: './src/start-earth.js',
		mars: './src/start-mars.js',
		moon: './src/start-moon.js',
		night: './src/start-night.js',
		solar: './src/start-solar.js',
		thanks: './src/start-thanks.js'
	},
	output: {
		filename: "[name].[contenthash].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	optimization:  {
		minimizer: [
			new OptimizeCssAssetsPlugin(), 
			new TerserPlugin(),
			new HtmlWebpackPlugin( {
				template: "./src/views/index.html",
				filename: "index.html",
				chunks: ["index"],
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new HtmlWebpackPlugin( {
				template: "./src/views/intro.html",
				filename: "intro.html",
				chunks: ["intro"],
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new HtmlWebpackPlugin( {
				template: "./src/views/earth.html",
				filename: "earth.html",
				chunks: ["earth"],
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new HtmlWebpackPlugin( {
				filename: "mars.html",
				template: "./src/views/mars.html",
				chunks: ["mars"],
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new HtmlWebpackPlugin( {
				filename: "moon.html",
				template: "./src/views/moon.html",
				chunks: ["moon"],
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new HtmlWebpackPlugin( {
				template: "./src/views/night.html",
				filename: "night.html",
				chunks: ["night"],
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new HtmlWebpackPlugin( {
				template: "./src/views/solar.html",
				filename: "solar.html",
				chunks: ["solar"],
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new HtmlWebpackPlugin( {
				filename: "thanks.html",
				template: "./src/views/thanks.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
		]
	},
	plugins: [
				new MiniCssExtractPlugin({ filename: "[name].[contenthash].bundle.css"}),
			 	new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,    // 3. Extract CSS into files
					"css-loader",     				// 2. Turns css into como js
					"sass-loader"     				// 1. Turn sass into css
				],
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(jpeg|png|jpg|svg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]'
					},
				},
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /(node_modules)/,
			},
		],
	},
};