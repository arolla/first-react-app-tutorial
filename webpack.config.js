const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'arolla-react-example.bundle.js',
        sourceMapFilename: "todolist.js.map"
    },
    devServer: {
        port: 5500,
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
