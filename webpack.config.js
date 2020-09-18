const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

// A map of overlay name to JS entrypoint. For example, the output file
// `Debug info.html` is generated from the entrypoint `test-component/index.js`.
// We use friendlier names to make life slightly easier for our broadcasters.
const chunks = {
	'Debug info': './test-component/index.js',
	'Team 1 Players': './team-one-players/index.js',
	'Team 2 Players': './team-two-players/index.js',
	'Targeted Player': './stat-box/index.js'
};

module.exports = {
	mode: 'development',
	entry: chunks,
	output: {
		// Weird hack to get script-ext-html-webpack-plugin working with
		// multiple generated HTML files
		publicPath: '/',
		// The location where all our output lives
		path: require('path').resolve(__dirname, 'dist'),
		// What to name each bundled JS file (this is only used intermediately,
		// the bundle files are eventually inlined into the generated HTML files
		// and discarded)
		filename: '[chunkhash].js',
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
			// vue loader is responsible for turning .vue SFCs into HTML, CSS, and JS chunks
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			// plain CSS
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			// Sass is compiled to CSS via dart-sass
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					{ loader: 'sass-loader', options: { implementation: require('dart-sass') } }
				],
			},
			// JS is transpiled with Babel so we can use ESNext fanciness without worry
			{
				test: /\.js$/,
				use: [
					'babel-loader',
				],
			},
		],
	},
	plugins: [
		// Required helper for vue-loader
		new VueLoaderPlugin(),
		// Generate an HTML file for each individual component defined at the
		// top of this file, with a `<script src="">` pointing to the matching
		// JS bundle
		...Object.entries(chunks).map(([name, path]) => new HtmlWebpackPlugin({
			filename: `${name}.html`,
			chunks: [name],
			templateContent: '<div id="app"></div>'
		})),
		// Inline all JS files into the HTML files that reference them
		new ScriptExtHtmlWebpackPlugin({
			inline: '.js'
		}),
	],
};
