var webpackConfig = require("./webpack/dev.config.js");

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-webpack');

    grunt.initConfig({
        "webpack-dev-server": {
            options: {
                webpack: webpackConfig,
                port: 7000,
                clientLogLevel: "info",
                hot: true,
                publicPath: webpackConfig.output.publicPath,
                historyApiFallback: true
            },
            start: {
                keepalive: true
            }
        },
    })

    grunt.registerTask('default', [
        'webpack-dev-server:start'
    ]);
};
