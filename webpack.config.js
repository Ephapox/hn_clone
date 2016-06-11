var path = require('path');
var webpack = require('webpack');

var ENTRY_PATH = path.resolve('./app');
var BUILD_PATH = path.resolve('./app/build');
var PUBLIC_PATH = '/build/';

module.exports = {
	context: ENTRY_PATH,
	entry: {
		angular: 'angular',
		app: './app',
		'angular-ui-router': 'angular-ui-router'
	},
	output: {
		path: BUILD_PATH,
		publicPath: PUBLIC_PATH,
		filename: '[name].js'
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
				loader: 'style-loader!css-loader!sass-loader'
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
