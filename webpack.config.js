var path = require('path');
var webpack = require('webpack');
//编译后自动打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// 单独样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {    // 入口文件
        index: [
            'webpack-dev-server/client?http://localhost:8181',
            'webpack/hot/dev-server',
            path.resolve(__dirname, './app/index.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
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
            },{
                test: /\.jsx$/,
                loader: ['react-hot-loader', 'babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules')
            },{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader') //webpack是现将css模块依赖解析完得到计算结果再创建style标签，而webpack执行顺序从右到左，因此css-loader放在右边
            },{
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            }
        ]
    },
	plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
		new OpenBrowserPlugin({
			url: 'http://localhost:8181'
		}),
        new ExtractTextPlugin("main.css", {
            allChunks: true,
            disable: false
        }),
	]
}