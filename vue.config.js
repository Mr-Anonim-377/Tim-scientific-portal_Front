module.exports = {
	// options...
	// lintOnSave: false,
	devServer: {
		port: 80,
		compress: true,
		disableHostCheck: true,
		proxy: 'http://localhost:84',
		// proxy: 'http://future-agro.ru:84',
	},
};
