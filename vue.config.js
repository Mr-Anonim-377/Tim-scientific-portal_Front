module.exports = {
    lintOnSave: true,
    devServer: {
        port: 80,
        compress: true,
        disableHostCheck: true,
        proxy: process.env.VUE_APP_PROXY,
    },
};
