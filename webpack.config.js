let path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

let conf = {
    entry: ['./src/index.js',
        ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        // publicPath: 'dist/'
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
            {
                test: /\.pug$/,
                use: [
                    'html-loader',
                    {
                        loader: 'pug-html-loader',
                        options: {
                        pretty: true,
                        },
                    },
                  ],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: './src/pug/pages/index.pug',
          filename: 'index.html',
        }),
      ]
};

module.exports = (env, option) => {
    conf.devtool = option.mode === "production" ?
        false : "cheap-module-eval-source-map";
    return conf;
}