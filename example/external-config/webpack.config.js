export default {
  mode: "production",
  context: import.meta.dirname,
  entry: "./entry",
  output: {
    path: import.meta.dirname + "/dist",
    filename: "bundle.js",
    assetModuleFilename: "[name][ext]"
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset/resource",
        loader: "../../index.js",
        options: {
          configFile: './svgo.config.js'
        }
      }
    ]
  }
}
