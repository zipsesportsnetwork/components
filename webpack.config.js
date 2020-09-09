const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const chunks = {
	'test-component': './test-component/index.js',
};

module.exports = {
	mode: 'development',
	entry: chunks,
	output: {
		path: require('path').resolve(__dirname, 'dist'),
		filename: '[name]/bundle.js',
	},
	resolve: {
		extensions: [
			'.js',
			'.vue',
		],
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					{ loader: 'sass-loader', options: { implementation: require('dart-sass') } }
				],
			},
			{
				test: /\.js$/,
				use: [
					'babel-loader',
				],
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		...Object.entries(chunks).map(([name, path]) => new HtmlWebpackPlugin({
			filename: `${name}/index.html`,
			chunks: [name],
			templateContent: '<div id="app"></div>'
		})),
	],
};
