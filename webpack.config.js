const StylexPlugin = require("@stylexjs/webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
function config(env, argv) {
  return {
    entry: {
      main: "./src/index.js",
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },

        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },

    plugins: [
      // Ensure that the stylex plugin is used before Babel
      new StylexPlugin({
        filename: "omkar.css",
        // get webpack mode and set value for dev
        dev: argv.mode === "development",

        // Use statically generated CSS files and not runtime injected CSS.
        // Even in development.
        // optional. default: 'x'
        classNamePrefix: "x-om",
        // Required for CSS variable support
        unstable_moduleResolution: {
          // type: 'commonJS' | 'haste'
          // default: 'commonJS'
          type: "commonJS",
          // The absolute path to the root directory of your project
          rootDir: path.join("__dirname"),
        },
      }),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        inject: "head",
        template: path.join(__dirname, "public", "index.html"),
      }),
    ],
  };
}

module.exports = config;
