'use strict';

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//导出css文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//清除dist目录
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css
const HtmlWebpackPlugin = require('html-webpack-plugin');//压缩html
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');//分离react、reactdom到cdn文件
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');//打包编译时的人性化提示。
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');//打包后的耗时分析
const smp = new SpeedMeasureWebpackPlugin();
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');//打包后包的大小分析
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');//将dll加入到html
console.info("aaaaa========",__dirname);
//多页面打包
const glob = require('glob');
const projectRoot = process.cwd();
const setMPA = () => {
    const entry = {};
    const htmlWebpackPlugins = [];
    const entryFiles = glob.sync(path.join(projectRoot, './src/*/index.js'));

    Object.keys(entryFiles)
        .map((index) => {
            const entryFile = entryFiles[index];
            // '/Users/cpselvis/my-project/src/index/index.js'

            const match = entryFile.match(/src\/(.*)\/index\.js/);
            const pageName = match && match[1];

            entry[pageName] = entryFile;
            return htmlWebpackPlugins.push(
                new HtmlWebpackPlugin({
                    inlineSource: '.css$',
                    template: path.join(projectRoot, `./src/${pageName}/index.html`),
                    filename: `${pageName}.html`,
                    chunks: ['vendors', pageName],
                    inject: true,
                    minify: {
                        html5: true,
                        collapseWhitespace: true,
                        preserveLineBreaks: false,
                        minifyCSS: true,
                        minifyJS: true,
                        removeComments: false,
                    },
                })
            );
        });

    return {
        entry,
        htmlWebpackPlugins,
    };
};

const { entry, htmlWebpackPlugins } = setMPA();

module.exports = smp.wrap({
    entry: entry,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /.js$/,
                use:  [
                    'babel-loader',
                    // 'eslint-loader'
                ]
            },
            {
                test: /.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')({
                                    browsers: ['last 2 version', '>1%', 'ios 7']
                                })
                            ]
                        },
                    },
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 75,
                            remPrecision: 8,
                        },
                    },
                ]
            },
            {
                test: /.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]',
                        },
                    },
                ],
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]',
                        },
                    },
                ],
            }
            ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        new CleanWebpackPlugin(),

        // new HtmlWebpackExternalsPlugin({
        //     externals: [
        //         {
        //             module: 'react',
        //             entry: 'https://now8.gtimg.com/now/lib/16.2.0/react.min.js',
        //             global: 'React',
        //         },
        //         {
        //             module: 'react-dom',
        //             entry: 'https://now8.gtimg.com/now/lib/16.2.0/react-dom.min.js',
        //             global: 'ReactDOM',
        //         },
        //     ]
        // }),
        // new FriendlyErrorsWebpackPlugin(),
        // new BundleAnalyzerPlugin(),
        new webpack.DllReferencePlugin({
            manifest: require('./build/library/library.json')
        }),
        new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname, './build/library/*.dll.js'),
        }),
    ].concat(htmlWebpackPlugins),
    // optimization: {
    //     splitChunks: {
    //         minSize: 0,//最小体积
    //         cacheGroups: {
    //             commons: {
    //                 name: 'commons',
    //                 chunks: 'all',
    //                 minChunks: 2//引用次数
    //             }
    //         }
    //     }
    // },
    devtool:"source-map",
    // stats: 'errors-only'
});
