const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
	},
});
