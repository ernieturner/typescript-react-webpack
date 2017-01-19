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
        extensions: [".ts", ".tsx", ".js", "json"]
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'cheap-module-source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            /*{
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            },*/
            {
                test: /\.js$/,
                loaders: ['source-map-loader', 'babel-loader'],
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
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
             _DEVELOPMENT_: true
        })
    ]

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    /*externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },*/
};
