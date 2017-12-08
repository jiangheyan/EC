var path = require('path');
var webpack = require('webpack');
//编译后自动打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')], // 入口文件路径
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8181
    },
    module: {
        loaders: [
            {
                test: /\.js$/, // babel 转换为兼容性的 js
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest']
                }
            }
        ]
    },
	plugins: [
		new OpenBrowserPlugin({
			url: 'http://localhost:8181'
		})
	]
}