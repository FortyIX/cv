var webpack = require('webpack');

var config = {
	context: __dirname + '/src', // `__dirname` is root of project and `src` is source
	entry: {
		app: './app.js',
	},
	output: {
		path: __dirname + '/docs', // `dist` is the destination
		publicPath: "/docs/",
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{ test: /\.styl$/, use: [
				'style-loader',
				'css-loader',
				'postcss-loader',
				'stylus-loader'] },
			{ test: /\.css$/, use: [
				'style-loader',
				'css-loader',
			] }
		]
	}
};

module.exports = config;