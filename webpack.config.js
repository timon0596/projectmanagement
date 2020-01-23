const path = require('path');
const HWP=require('html-webpack-plugin');
const webpack = require('webpack');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

// const autoprefixer = require('autoprefixer');
module.exports={
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname,'')
	},
	module:{
		rules: [
			{
				test:/\.pug$/,
				loader: 'pug-loader',
				options: {pretty: true}
			},
			{
				test:/\.js$/,
				loader: 'babel-loader',
				exclude:'/node_modules/'
			},
			{
			    test: /\.(scss|sass)$/,
			    use: [
				    {loader: miniCssExtractPlugin.loader},{loader: 'css-loader'},
				    {
				    	loader: 'postcss-loader', // Run post css actions
				    	options: {
				    		plugins: function () {
				    			return [
					            	require('precss'),
					            	require('autoprefixer')
				          		];
				        	},
				        	useRelativePath: true
				      	}
				    },
				    {
				      loader: 'sass-loader' // compiles SASS to CSS
				    }
			    ]
	  		},
	  		{
				test:/\.css$/,
				use:[
						"style-loader",
						"css-loader"
					]
			},
			{
	         test: /\.(woff|svg|ttf|eot|woff2)$/,
	         exclude: [path.resolve(__dirname, "src/img"),path.resolve(__dirname, "node_modules")],
	         use: [
	         	'file-loader'
	         ]         
	       	},
	       	{
				test: /\.(jpg|png|svg)$/,
				exclude: [path.resolve(__dirname, "src/fonts")],
				use: [ {
			  		loader: "file-loader",
					options: {
				    	name: "[name].[ext]",
				    	outputPath: './img/',
				    	useRelativePath: true
					}
				}]
	  		}
  		]
	},
	plugins:[
		new miniCssExtractPlugin({filename: "[name].css"}),
		new HWP({
			template: './src/index.pug',
			filename: 'index.html'
		}),
		new HWP({
			template: './src/persCab.pug',
			filename: 'persCab.html'
		}),
		new HWP({
			template: './src/components/project.pug',
			filename: 'project.html'
		}),
		new HWP({
			template: './src/components/accessions.pug',
			filename: 'accessions.html'
		}),
		new HWP({
			template: './src/components/create_task.pug',
			filename: 'create_task.html'
		}),
		new HWP({
			template: './src/components/last_tasks.pug',
			filename: 'last_tasks.html'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		})	
	]
}