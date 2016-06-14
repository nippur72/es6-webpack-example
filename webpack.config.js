
var webpack = require('webpack');

module.exports = {
    module: {

        loaders:[
            {
                test: /\.rt/,
                loader: "react-templates-loader?modules=commonjs"
            }
        ],

        postLoaders:[
            {
                test: /\.js/,                
                exclude: /(node_modules|bower_components)/,
                loader:'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]

    },

    entry: "./app.js",        
/*
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js",".html" ]
    },
*/
    output: {
        libraryTarget: "this",
        //path: ".",
        filename: "app.bundled.js",
    }
}
