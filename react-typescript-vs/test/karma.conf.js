//var webpackConfig = require('../webpack-test.js');

//module.exports = function (config) {
//    config.set({
//        basePath: '../',
//        frameworks: ['mocha', 'chai', 'sinon'],
//        files: [
//          //'test/bundle.js',
//          //'test/test.js',
//          'test/**/*.tsx',
//          'test/**/*.ts'
//        ],
//        exclude: [
//        ],
//        preprocessors: {
//            'test/**/*.tsx': ['webpack'],
//            'test/**/*.ts': ['webpack']
//        },
//        webpack: {
//            module: webpackConfig.module,
//            resolve: webpackConfig.resolve
//        },
//        reporters: ['spec'],
//        port: 9876,
//        colors: true,
//        logLevel: config.LOG_INFO,
//        autoWatch: true,
//        browsers: ['PhantomJS'],
//        singleRun: true, 
//        concurrency: Infinity
//    })
//}




//module.exports = function (config) {
//    config.set({
//        basePath: '../',
//        frameworks: ['mocha', 'chai', 'sinon'],
//        files: [
//          'test/bundle.js',
          
//        ],
//        exclude: [
//        ],
        
//        reporters: ['spec'],
//        port: 9876,
//        colors: true,
//        logLevel: config.LOG_INFO,
//        autoWatch: true,
//        browsers: ['PhantomJS'],
//        singleRun: true,
//        concurrency: Infinity
//    })
//}


var webpackConfig = require('../webpack-test.js');

module.exports = function (config) {
    config.set({
        basePath: '../',
        frameworks: ['mocha', 'chai', 'sinon'],
        files: [
          'test/all.tsx',
         
        ],
        exclude: [
        ],
        preprocessors: {
            'test/**/*.tsx': ['webpack'],
            'test/**/*.ts': ['webpack']
        },
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve,
            externals: webpackConfig.externals
        },
       
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true, 
        concurrency: Infinity,
        

        
    })
}

//module.exports = function (config) {
//    config.set({
//        basePath: '../',
//        frameworks: ['mocha', 'chai', 'sinon'],
//        files: [
//          'test/all.tsx',

//        ],
//        exclude: [
//        ],
//        preprocessors: {
//            'test/**/*.tsx': ['webpack'],
//            'test/**/*.ts': ['webpack']
//        },
//        webpack: {
//            module: {
//                loaders: [
//                    // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
//                    { test: /\.tsx?$/, loader: "ts-loader" },

//                    {
//                        test: /\.json$/,
//                        include: /node_modules/,
//                        loader: 'json-loader'
//                    }
//                ],


//                preLoaders: [
//                    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
//                    { test: /\.js$/, loader: "source-map-loader" }
//                ]

//            },
//            resolve: {
//                // Add '.ts' and '.tsx' as resolvable extensions.
//                extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
//            }
//        },

//        reporters: ['spec'],
//        port: 9876,
//        colors: true,
//        logLevel: config.LOG_INFO,
//        autoWatch: true,
//        browsers: ['PhantomJS'],
//        singleRun: true,
//        concurrency: Infinity,



//    })
//}