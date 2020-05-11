const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		bundle: './src/js/index.js',
		//otherjs: './src/js/otherjs.js',
	},
	mode: 'production',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	externals: {
		"jquery": "jQuery"
	},
	plugins: [
	  new MiniCssExtractPlugin()
	],
	module: {
    rules: [
		{
		  test:/\.(s*)css$/,
		  use: [
			MiniCssExtractPlugin.loader, // instead of style-loader
			'css-loader',
			'sass-loader',
		  ]
		},
		{
		  test: /\.(gif|png|jpe?g|svg|woff|woff2|eot|ttf)$/i,
		  use: [
			'file-loader',
			{
			  loader: 'image-webpack-loader',
			  options: {
				mozjpeg: {
				  progressive: true,
				  quality: 65
				},
				// optipng.enabled: false will disable optipng
				optipng: {
				  enabled: false,
				},
				pngquant: {
				  quality: [0.65, 0.90],
				  speed: 4
				},
				gifsicle: {
				  interlaced: false,
				},
				// the webp option will enable WEBP
				webp: {
				  quality: 75
				}
			  }
			},
		  ],
		},
		//{ test: /\.(woff|woff2|eot|ttf)$/, use: ['url-loader?limit=100000'] },
    ],
  },
	
	
	
	
	
	
  /*module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },*/
};