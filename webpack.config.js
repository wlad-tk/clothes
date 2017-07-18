const path = require("path");
const webpack = require("webpack");
const BundleTracker  = require("webpack-bundle-tracker");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const CompressionPlugin = require("compression-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const nodeEnv = process.env.NODE_ENV || "development";
const isProduction = nodeEnv === "production";

const buildPath = path.resolve(__dirname, "./build/");
const sourcePath = path.join(__dirname, "./src/");

// Common rules
const rules = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
            loader: "babel-loader",
            options: {
                compact: true,
                plugins: [
                    "transform-runtime",
                    "transform-decorators-legacy",
                    "transform-class-properties",
                    "lodash"
                ],
                presets: [
                    ["es2015", { "modules": false}],
                    "react",
                    "stage-0",
                    ["env", { "targets": { "node": 4 } }]
                ]
            }
        }],
    },
    {
        test: /\.(png|gif|jpg|svg)$/,
        use: "file-loader?name=[path][name].[ext]",
    },
    {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
                { loader: "css-loader", query: { modules: false } },
                { loader: "postcss-loader" }
            ]
        }),
    },
    {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
                { loader: "css-loader" },
                { loader: "less-loader" },
                { loader: "postcss-loader" }
            ],

        }),
    },
    {
        test: /\.json$/,
        loader: "json-loader"
    },
    {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader?hash=sha512&name=[path][hash].[ext]"
    }
];

let plugins;
if (isProduction) {
    // Production plugins
    plugins = [
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(sourcePath, "index.html"),
            path: buildPath,
            filename: "index.html",
            favicon: "favicon.ico",
            chunks: ['index', 'library']
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            options: {
                postcss: [
                    autoprefixer({
                        browsers: [
                            "last 3 version",
                            "ie >= 10",
                        ],
                    }),
                ],
                context: sourcePath,
            },
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
            output: {
                comments: false,
            },
        }),
        new ExtractTextPlugin("css/b.min.css"),
        new BundleTracker({filename: "./build/webpack-stats.json"}),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new CopyWebpackPlugin([
        //         {
        //             from: path.join(sourcePath, "jquery.min.js"),
        //             to: "js"
        //         },
        //         {
        //             from: path.join(sourcePath, "scrolloverflow.min.js"),
        //             to: "js"
        //         },
        //         {
        //             from: path.join(sourcePath, "jquery.fullPage.js"),
        //             to: "js"
        //         },
        //         {
        //             from: path.join(sourcePath, "jquery.blueimp-gallery.min.js"),
        //             to: "js"
        //         },
        //         {
        //             from: path.join(sourcePath, "img/backgrounds/ajax-loader.gif"),
        //             to: "img/backgrounds"
        //         },
        //     ],
        //     {copyUnmodified: true}
        // ),
        new webpack.ProvidePlugin({
            React: "react",
            ReactDOM: "react-dom",
            PureComponent: "react",
            PropTypes: "react",
            _: 'lodash'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'library',
            filename: "js/library.[hash:8].js",
            minChunks(module, count) {
                return module.context && module.context.indexOf('node_modules') >= 0;
            },
            chunks: ['index']
        }),
        // new CompressionPlugin({
        //     asset: "[path].gz",
        //     algorithm: "gzip",
        //     test: /\.js$|\.css$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // }),
    ];
} else {
    // Development plugins
    plugins = [
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(sourcePath, "index.html"),
            path: buildPath,
            filename: "index.html",
            chunks: ['index', 'library']
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: [
                            "last 3 version",
                            "ie >= 10",
                        ],
                    }),
                ],
                context: sourcePath,
            },
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin(),
        new ExtractTextPlugin("css/b.css"),
        new BundleTracker({filename: "./build/webpack-stats.json"}),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProvidePlugin({
            React: "react",
            ReactDOM: "react-dom",
            PureComponent: "react",
            PropTypes: "react",
            _: 'lodash'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'library',
            filename: "js/library.[hash:8].js",
            minChunks(module, count) {
                return module.context && module.context.indexOf('node_modules') >= 0;
            },
            chunks: ['index']
        }),

        // new BundleAnalyzerPlugin({
        //   reportFilename: "report.html",
        // })

        // new CopyWebpackPlugin([
        //     {
        //         from: path.join(sourcePath, "jquery.min.js"),
        //         to: "js"
        //     },
        //     {
        //         from: path.join(sourcePath, "scrolloverflow.min.js"),
        //         to: "js"
        //     },
        //     {
        //         from: path.join(sourcePath, "jquery.fullPage.js"),
        //         to: "js"
        //     },
        //     {
        //         from: path.join(sourcePath, "jquery.blueimp-gallery.min.js"),
        //         to: "js"
        //     },
        //     {
        //         from: path.join(sourcePath, "img/backgrounds/ajax-loader.gif"),
        //         to: "img/backgrounds"
        //     },
        // ],
        //     {copyUnmodified: true}
        // ),
    ];
}

module.exports = {
    devtool: "source-map",
    context: sourcePath,
    entry: {
        index: "./index.js",
    },
    output: {
        path: buildPath,
        publicPath: "/",
        filename: isProduction ? "js/[name]-[hash:8].min.js" : "js/[name]-[hash:8].js", //"bundle.min.js" or "bundle.js"
        // chunkFilename: 'chunk.[id].[hash:8].js'
    },
    module: {
        rules
    },
    resolve: {
        extensions: [".webpack-loader.js", ".web-loader.js", ".loader.js", ".js", ".jsx", ".less", ".css"],
        modules: [
            path.resolve('./node_modules'),
            sourcePath,
        ],
    },
    plugins: plugins,
    devServer: {
        contentBase: "./src",
        watchContentBase: true,
        historyApiFallback: true,
        port: 8090,
        compress: isProduction,
        inline: true,
        hot: true,
        host: "127.0.0.1",
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: true,
            version: false,
            warnings: true,
            colors: {
                green: "\u001b[32m",
            },
        },
    },
};