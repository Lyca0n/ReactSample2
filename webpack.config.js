// entry
// outpun bundle 

const path = require('path');

module.exports ={
        /**
         * Set main file to bundle 
         */
    entry :"./src/app.js",
    
    output: {
        /**
         * Set out output file and name for the bundled javascript file
         */
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    mode:"development",
    module:{
        /**
         * use babel-loader to run babel-core which replicate babel-cli functionality, to convert ES6 Syntax to ES5 as well as translating JSX into javascript
         */
        rules:[
            {
                loader:'babel-loader',
                test: /\.js$/,
                exclude : /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool:'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback:true
      }
};