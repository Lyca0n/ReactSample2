// entry
// outpun bundle 

const path = require('path');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');


module.exports = (env) => {
    const isProduction = env === 'production';
    const cssExtract = new ExtractTextPlugin('styles.css');

    return {
        /**
         * Set main file to bundle 
         */
        entry: "./src/app.js",

        output: {
            /**
             * Set out output file and name for the bundled javascript file
             */
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        mode: "development",
        module: {
            /**
             * use babel-loader to run babel-core which replicate babel-cli functionality, to convert ES6 Syntax to ES5 as well as translating JSX into javascript
             */
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: cssExtract.extract({
                        use:[
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap:true
                                }
                            },
                            {
                                loader:'sass-loader',
                                options:{
                                    sourceMap:true
                                }
                            }                            
                        ]
                    })
                }
            ]
        },
        plugins:[
            cssExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true
        }
    };
};
