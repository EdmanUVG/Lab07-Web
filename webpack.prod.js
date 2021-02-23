const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
	mode: "production",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].bundle.js",
	},
	optimization:  {
		minimizer: [
			new OptimizeCssAssetsPlugin(), 
			new TerserPlugin(),
			new HtmlWebpackPlugin( {
				filename: "index.html",
				template: "./src/template.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new HtmlWebpackPlugin( {
				filename: "lunes.html",
				template: "./src/lunes.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new HtmlWebpackPlugin( {
				filename: "martes.html",
				template: "./src/martes.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new HtmlWebpackPlugin( {
				filename: "miercoles.html",
				template: "./src/miercoles.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new HtmlWebpackPlugin( {
				filename: "jueves.html",
				template: "./src/jueves.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new HtmlWebpackPlugin( {
				filename: "viernes.html",
				template: "./src/viernes.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new HtmlWebpackPlugin( {
				filename: "sabado.html",
				template: "./src/sabado.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new HtmlWebpackPlugin( {
				filename: "domingo.html",
				template: "./src/domingo.html",
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
				]
			},
		]
	}
});