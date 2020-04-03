const path = require("path");
const nodeExternals = require("webpack-node-externals");
const SwaggerJsdocSyncWebpackPlugin = require("swagger-jsdoc-sync-webpack-plugin");

module.exports = {
  entry: {
    server: ["babel-polyfill", "./main.js"],
  },
  output: {
    path: path.join(__dirname),
    publicPath: "/",
    filename: "index.js"
  },
  target: "node",
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  resolve: {
    alias: {
      "~": path.resolve(__dirname),
      "@": path.resolve(__dirname, "src"),
      "Controllers": path.resolve(__dirname, "src", "controllers"),
      "Middlewares": path.resolve(__dirname, "src", "middlewares"),
      "Routes": path.resolve(__dirname, "src", "routes"),
      "Services": path.resolve(__dirname, "src", "services"),
      "Utils": path.resolve(__dirname, "src", "utils"),
    }
  },
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new SwaggerJsdocSyncWebpackPlugin(require("./swagger.config")),
  ],
};
