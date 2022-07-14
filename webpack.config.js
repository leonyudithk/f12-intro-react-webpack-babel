const path = require('path');

//plugins 
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports={
    entry: './src/index.js',

    output:{
            path: path.resolve(__dirname, 'build'),
            filename: 'buidle.js'
    },

    resolve:{
        extensions: ['.js', '.jsx']
    },

    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader'}
            },
            {
                test: /\.html$/,
                use: { loader: 'html-loader'} 
            },
            {
                test: /\.css$/,
                use: [
                    { 
                        loader: miniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            },


        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        static: path.join(__dirname, 'build'),
        compress: true,
        historyApiFallback: true,
        port: 3005

    }


}