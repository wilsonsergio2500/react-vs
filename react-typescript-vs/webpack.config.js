//module.exports = {
//  entry: [
//    './src/index.js'
//  ],
//  output: {
//    path: __dirname,
//    publicPath: '/',
//    filename: 'bundle.js'
//  },
//  module: {
//    loaders: [{
//      exclude: /node_modules/,
//      loader: 'babel',
//      query: {
//        presets: ['react', 'es2015', 'stage-1']
//      }
//    }]
//  },
//  resolve: {
//    extensions: ['', '.js', '.jsx']
//  },
//  devServer: {
//    historyApiFallback: true,
//    contentBase: './'
//  }
//};

module.exports = {
   
    entry: "./src/index.tsx",
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },
           

        ],
        

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
    
    
}