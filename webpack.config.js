var path = require('path');

module.exports = {
    entry: [
        './app/assets/javascripts/frontend/Main.jsx'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'app/assets/javascripts')
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        ]
    }
};