const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.js",

	plugins: [
		new HtmlWebpackPlugin({
			title: "Output Management",
		}),
		new MiniCssExtractPlugin({ filename: "[name].css" }),
	],

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "images",
					},
				},
			},
		],
	},
	optimization: {
		runtimeChunk: "single",
	},
};
