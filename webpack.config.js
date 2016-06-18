var path = require('path');
var webpack = require('webpack');

var validate = require('webpack-validator');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var PATHS = {
	app: path.join(__dirname, 'app', 'app.js'),
	build: path.join(__dirname, 'app', 'build'),
	assets: '/assets/'
}

module.exports = validate({
	entry: {
		app: PATHS.app,
	},
	output: {
		path: PATHS.build,
		filename: '[name].js',
		publicPath: PATHS.assets
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: 'html'
			},
			{
				test: /\.sass$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new HtmlWebpackPlugin({
			title: 'Hello World',
			template: path.join(__dirname, 'app', 'index.html'),
			inject: false
		}),
		new CleanWebpackPlugin(['app/build'], {
			root: process.cwd()
		})
	],
	resolve: {
		extensions: ['', '.js']
	}
})
