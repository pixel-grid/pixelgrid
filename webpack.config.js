const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, 'html/index.ts')
    },

    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: '[name].js'
    },

    devtool: 'source-map',

    devServer: {
        host: '0.0.0.0',
        port: 3000,
        open: true,
        contentBase: path.join(__dirname, 'dist')
    },

    module: {
        rules: [
            /**
             * TS
             */
            {
                test: /\.ts$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'html')
                ],
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    plugins: [
        /**
         * HTML
         */
        new CopyPlugin([{ from: 'html/', test: /\.html$/ }])
    ]
};
