const path = require('path');

module.exports = {
    // Entry point of the application
    entry: './src/index.js',
    
    // Output configuration
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    
    // Mode of the build (development or production)
    mode: 'development',
    
    // Module rules (if needed for loaders like Babel, CSS, etc.)
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
