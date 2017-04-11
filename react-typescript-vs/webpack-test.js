

module.exports = {

    entry: "./test/all.tsx",
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'test/bundle.js'
    },
    

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        
    },
   
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },

            {
                test: /\.json$/,
                include: /node_modules/,
                loader: 'json-loader'
            }
        ],


        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
        
    },

   
    externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
    }

}


