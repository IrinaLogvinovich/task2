let path = require('path');

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                'style-loader',
                'css-loader',
                'sass-loader',
                ],
            },
        ]
    }
};

module.exports = (env, option) => {
    conf.devtool = option.mode === "production" ?
        false : "cheap-module-eval-source-map";
        return conf;
}