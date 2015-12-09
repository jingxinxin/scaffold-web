import path from 'path';
// var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');
var TEM_PATH = path.resolve(ROOT_PATH,'templates');

module.exports = {
	entry:{
		//three entry files app,mobile and vendors
		index:path.resolve(APP_PATH,'index.js'),
		mobile:path.resolve(APP_PATH,'mobile.js'),
		//package the need of library to vendors
		vendors:['jquery','moment']
	},
	output:{
		path:BUILD_PATH,
		filename:'[name].js'
	},
	plugins:[
		//这个使用uglifyJs压缩你的js代码
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    //把入口文件里面的数组打包成verdors.js
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
		new HtmlwebpackPlugin(
			{
				title:'Hello World app',
				template:path.resolve(TEM_PATH,'index.html'),
				filename:'index.html',
				chunks:['index','vendors'],
				inject:'body'
			}
		),
		new HtmlwebpackPlugin(
			{
				title:'Hello Mobile app',
				template:path.resolve(TEM_PATH,'mobile.html'),
				filename:'mobile.html',
				chunks:['mobile','vendors'],
				inject:'body'
			}
		)
	],
	devServer:{
		historyApiFallback:true,
		hot:true,
		inline:true,
		progress:true
	},
	module:{
		perLoaders:[
			{
				test:/\jsx?$/,
				include:APP_PATH,
				loader:'jshint-loader'
			}
		],
		loaders:[
			{
				test: /\.jsx?$/,
				loader: 'babel',
				include: APP_PATH,
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			},
			{
				test:/\.scss$/,
				loaders:['style','css','sass'],
				include:APP_PATH
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url?limit=40000'
			}
		]
	},
	//deploy the options of jshint to support the check of es6
	jshint:{
		"esnext": true
	},
	devtool:'eval-source-map'
};
