const webpack = require("webpack");
const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

function getClientEnv(nodeEnv) {
  return {
    "process.env": JSON.stringify(
      Object.keys(process.env)
        .filter((key) => /^REACT_APP/i.test(key))
        .reduce(
          (env, key) => {
            env[key] = process.env[key];
            return env;
          },
          {
            NODE_ENV: nodeEnv,
          },
        ),
    ),
  };
}

module.exports = (webpackEnv) => {
  const isEnvDevelopment = process.env.NODE_ENV === "development";
  const isEnvProduction = process.env.NODE_ENV === "production";
  const clientEnv = getClientEnv(webpackEnv);

  return {
    mode: isEnvDevelopment ? "development" : "production",
    resolve: {
      extensions: [".js", ".jsx", ".tsx", ".ts", ".json"],
      modules: [path.join(__dirname, "src"), "node_modules"],
      alias: {
        "@apis": path.resolve(__dirname, "src", "apis"),
        "@common": path.resolve(__dirname, "src", "common"),
        "@components": path.resolve(__dirname, "src", "components"),
        "@hooks": path.resolve(__dirname, "src", "hooks"),
        "@pages": path.resolve(__dirname, "src", "pages"),
        "@static": path.resolve(__dirname, "src", "static"),
        "@store": path.resolve(__dirname, "src", "store"),
        "@utils": path.resolve(__dirname, "src", "utils"),
      },
    },
    devtool: isEnvDevelopment ? "inline-source-map" : "hidden-source-map",
    devServer: {
      port: 3000,
      historyApiFallback: true,
      publicPath: "/dist/",
      open: true,
      overlay: true,
      stats: "errors-warnings",
    },
    entry: {
      app: path.join(__dirname, "src", "index"),
    },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"],
            },
            {
              test: /\.(js|jsx)?$/,
              use: [
                {
                  loader: "babel-loader",
                  options: {
                    presets: [
                      [
                        "@babel/preset-env",
                        {
                          targets: { browsers: ["last 2 chrome versions"] },
                          debug: isEnvDevelopment,
                        },
                      ],
                      "@babel/preset-react",
                    ],
                  },
                },
              ],
              exclude: path.join(__dirname, "node_modules"),
            },
            {
              test: /\.(ts|tsx)?$/,
              use: [
                {
                  loader: "babel-loader",
                  options: {
                    presets: [
                      [
                        "@babel/preset-env",
                        {
                          targets: { browsers: ["last 2 chrome versions"] },
                          debug: isEnvDevelopment,
                        },
                      ],
                      "@babel/preset-react",
                      "@babel/preset-typescript",
                    ],
                  },
                },
              ],
              exclude: path.join(__dirname, "node_modules"),
            },
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: "url-loader",
              options: {
                limit: 10000,
                outputPath: "static/media",
                name: "[name].[hash:8].[ext]",
              },
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: "file-loader",
                  options: {
                    name: "static/media/[name].[hash:8].[ext]",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    plugins: [
      isEnvDevelopment && new ReactRefreshWebpackPlugin(),
      isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
      isEnvProduction && new BundleAnalyzerPlugin(),
      isEnvProduction && new webpack.LoaderOptionsPlugin({ minimize: true }),
      new webpack.DefinePlugin(clientEnv),
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          files: "./src/**/*.{ts,tsx,js,jsx}",
        },
      }),
    ].filter(Boolean),
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js",
      publicPath: "/dist/",
    },
  };
};

// const webpack = require("webpack");
// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// const ManifestPlugin = require("webpack-manifest-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// const appIndex = path.resolve(__dirname, "src", "index.tsx");
// const appHtml = path.resolve(__dirname, "public", "index.html");
// const appBuild = path.resolve(__dirname, "build");
// const appPublic = path.resolve(__dirname, "public");

// function getClientEnv(nodeEnv) {
//   return {
//     "process.env": JSON.stringify(
//       Object.keys(process.env)
//         .filter((key) => /^REACT_APP/i.test(key))
//         .reduce(
//           (env, key) => {
//             env[key] = process.env[key];
//             return env;
//           },
//           {
//             NODE_ENV: nodeEnv,
//           },
//         ),
//     ),
//   };
// }

// module.exports = (webpackEnv) => {
//   const isEnvDevelopment = process.env.NODE_ENV === "development";
//   const isEnvProduction = process.env.NODE_ENV === "production";
//   const clientEnv = getClientEnv(webpackEnv);

//   return {
//     mode: isEnvDevelopment ? "development" : "production",
//     resolve: {
//       extensions: [".js", ".jsx", ".tsx", ".ts", ".json"],
//       modules: [path.join(__dirname, "src"), "node_modules"],
//       alias: {
//         "@hooks": path.resolve(__dirname, "src", "hooks"),
//         "@components": path.resolve(__dirname, "src", "components"),
//         "@pages": path.resolve(__dirname, "src", "pages"),
//         "@utils": path.resolve(__dirname, "src", "utils"),
//         "@static": path.resolve(__dirname, "src", "static"),
//       },
//     },
//     devtool: isEnvDevelopment ? "inline-source-map" : "hidden-source-map",
//     devServer: {
//       port: 3000,
//       historyApiFallback: true,
//       // contentBase: appPublic,
//       open: true,
//       overlay: true,
//       stats: "errors-warnings",
//     },
//     cache: {
//       type: isEnvDevelopment ? "memory" : isEnvProduction && "filesystem",
//     },
//     optimization: {
//       minimize: isEnvProduction,
//       minimizer: [new TerserPlugin()],
//       splitChunks: {
//         chunks: "all",
//       },
//     },
//     entry: appIndex,
//     module: {
//       rules: [
//         {
//           oneOf: [
//             {
//               test: /\.css$/,
//               use: ["style-loader", "css-loader"],
//             },
//             {
//               test: /\.(js|jsx)?$/,
//               use: [
//                 "cache-loader",
//                 {
//                   loader: "babel-loader",
//                   options: {
//                     presets: ["@babel/preset-env", "@babel/preset-react"],
//                   },
//                 },
//               ],
//               exclude: path.join(__dirname, "node_modules"),
//             },
//             {
//               test: /\.(ts|tsx)$/,
//               use: [
//                 "cache-loader",
//                 {
//                   loader: "ts-loader",
//                   options: {
//                     transpileOnly: !!isEnvDevelopment,
//                   },
//                 },
//               ],
//               exclude: path.join(__dirname, "node_modules"),
//             },
//             {
//               test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
//               loader: "url-loader",
//               options: {
//                 limit: 10000,
//                 outputPath: "static/media",
//                 name: "[name].[hash:8].[ext]",
//               },
//             },
//             {
//               test: /\.(png|jpe?g|gif)$/i,
//               use: [
//                 {
//                   loader: "file-loader",
//                   options: {
//                     name: "static/media/[name].[hash:8].[ext]",
//                   },
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     plugins: [
//       isEnvDevelopment && new ReactRefreshWebpackPlugin(),
//       isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
//       new HtmlWebpackPlugin({ template: appHtml }),
//       new webpack.DefinePlugin(clientEnv),
//       new ForkTsCheckerWebpackPlugin({
//         eslint: {
//           files: "./src/**/*.{ts,tsx,js,jsx}",
//         },
//       }),
//       new ManifestPlugin({
//         fileName: "asset-manifest.json",
//         publicPath: appPublic,
//         generate: (seed, files, entrypoints) => {
//           const manifestFiles = files.reduce((manifest, file) => {
//             manifest[file.name] = file.path;
//             return manifest;
//           }, seed);
//           const entrypointFiles = entrypoints.main.filter((fileName) => !fileName.endsWith(".map"));
//           return {
//             files: manifestFiles,
//             entrypoints: entrypointFiles,
//           };
//         },
//       }),
//       isEnvProduction && new BundleAnalyzerPlugin(),
//     ].filter(Boolean),
//     output: {
//       path: appBuild,
//       filename: isEnvProduction ? "static/js/[name].[contenthash:8].js" : isEnvDevelopment && "static/js/bundle.js",
//       chunkFilename: isEnvProduction
//         ? "static/js/[name].[contenthash:8].chunk.js"
//         : isEnvDevelopment && "static/js/[name].chunk.js",
//     },
//   };
// };
