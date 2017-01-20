var path = require('path');
var webpack = require("webpack");

module.exports = {
    devServer: {
        port: 7000
    },
    entry: './app/main.tsx',
    output: {
        path: path.join(__dirname, 'app', 'public', 'dist'),
        publicPath: 'http://localhost:7000/public/dist/',
        filename: '[name].js',
    },
    resolve: {
        modules: ["app/components", "app", "node_modules"],
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'cheap-module-source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    "babel-loader",
                    "awesome-typescript-loader",
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style!css?sourceMap!sass?sourceMap'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|jpeg|ttf)$/,
                loader: 'url?limit=3000'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
             _DEVELOPMENT_: true
        })
    ]
};
