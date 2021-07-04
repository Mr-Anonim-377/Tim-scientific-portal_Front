module.exports = {
    lintOnSave: true,
    devServer: {
        port: 80,
        compress: true,
        disableHostCheck: true,
        proxy: 'http://future-agro.ru:84'
    }
};
