module.exports = {
	// options...
	// lintOnSave: false,
	devServer: {
		port: 80,
		compress: true,
		disableHostCheck: true,
		// proxy: 'http://193.232.106.89:81/',
		proxy: 'http://future-agro.ru:84',
	},
};
