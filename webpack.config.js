var path = require('path');
var webpack = require('webpack');

var ENTRY_PATH = path.resolve('./app');
var BUILD_PATH = path.resolve('./app/build');
var PUBLIC_PATH = '/build/';

module.exports = {
	context: ENTRY_PATH,
	entry: {
		app: './app'
	},
	output: {
		path: BUILD_PATH,
		publicPath: PUBLIC_PATH,
		filename: 'bundle.js'
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
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['', '.js']
	}
}
