module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		// may cause issue
		path: __dirname,
		filename: './public/bundle.js'
	}
};
