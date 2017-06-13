/* global module */

module.exports = {
    entry: './src/main.js',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(bower_components|node_modules)/,

            // cf. chained loaders : http://webpack.github.io/docs/loaders.html#introduction
            loader: 'imports-loader?this=>window!babel-loader',
        }],
    },
    output: {
        libraryTarget: 'umd',
        library: 'AutoNumeric',
    },
    resolve: {
        extensions: [
            '*',
            '.js',
        ],
    },
    /*externals: {
        // cf. http://webpack.github.io/docs/library-and-externals.html#applications-and-externals
        // and http://webpack.github.io/docs/configuration.html#externals
    },*/
};
