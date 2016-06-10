var path = require('path');
var webpack = require('webpack');

var ENTRY_PATH = path.resolve('./app');
var BUILD_PATH = path.resolve('./app/build');
var PUBLIC_PATH = '/public/assets';

module.exports = {
	context: ENTRY_PATH,
	entry: {
		app: './index'
	},
	output: {
		path: BUILD_PATH,
		publicPath: PUBLIC_PATH,
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['', '.js']
	}
}
