const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');

module.exports={
	entry: 
		path.resolve(__dirname, 'src/js/index.js'),
		
	
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.js$/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
	},
	plugins : [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html')
		}),
		new CleanWebpackPlugin()
	],
	mode: 'development'
};