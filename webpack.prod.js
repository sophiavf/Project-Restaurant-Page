const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = merge(common, {
	mode: "production",

	output: {
		filename: "[name].[contentHash].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin()],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
	optimization: {
		minimizer: [
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.sharpMinify,
					options: {
						encodeOptions: {
							jpeg: {
								// https://sharp.pixelplumbing.com/api-output#jpeg
								quality: 100,
							},
						},
					},
				},
			}),
		],
	},
});
