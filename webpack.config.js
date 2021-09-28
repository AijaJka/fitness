/***
 * webpack 配置文件 打包js css fonts img......
 * author 小鸟游六花 2021-9-19
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    //入口
    entry: {
        //公共的
        commonCSS:'./src/js/commonCSS.js/common.js',
        dom:'./src/js/commonCSS.js/dom.js',
        http:'./src/js/commonCSS.js/http.js',
        utils:'./src/js/commonCSS.js/utils.js',
        // 插件
        Captcha:'./src/lib/captcha-mini.js',
        swiper:'./src/lib/swiper/swiper-bundle.js',
        weui:'./src/lib/weui/weui.js',
        MotionData:'./src/lib/MotionData.js',
        //私有的
        index:'./src/js/index.js',
        login:'./src/js/login.js',
        register:'./src/js/register.js',
        home:'./src/js/home.js',
        sport:'./src/js/sport.js',
        mine:'./src/js/mine.js',
        changeInfo:'./src/js/changeInfo.js',
        course:'./src/js/course.js',
        videoplay:'./src/js/videoplay.js'
    },
    //出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath:'./',
    },
    //loader
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 'css-loader','postcss-loader']
            },

            {
                test: /\.styl$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 'css-loader','postcss-loader', 'stylus-loader']
            },

            {
                test: /\.less$/, //配置less处理器
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 'css-loader','postcss-loader', 'less-loader']
            },

            {
                test: /\.(png|jpg|gif)$/, //配置css中的图片打包
                loader: 'url-loader',
                options: {
                    name: '[hash].[ext]',  // 图片输出的名字为全hash
                    limit: 5 * 1024,  // 限制 小于30kb base64处理
                    esModule: false,
                    outputPath: 'img'
                },
            },


            {
                test: /\.html$/,    //配置html文件打包
                loader: 'html-loader'
            },


            // 字体矢量图标
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/, //配置iconfont文件打包
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts'   //输出的目录
                }
            }

        ]
    },
    //插件
    plugins: [
        // new 插件名({
        //     配置  key:value
        // })
        new HtmlWebpackPlugin({   //配置html打包的插件
            template: './src/page/index.html',         //以哪个html文件作为打包的模板
            filename:'index.html',
            chunks:['index','commonCSS','dom',]                        //该html文件使用了哪些入口js文件
        }),
        new HtmlWebpackPlugin({   //配置html打包的插件
            template: './src/page/login.html',         //以哪个html文件作为打包的模板
            filename:'login.html',
            chunks:['login','commonCSS','dom','http','utils']                        //该html文件使用了哪些入口js文件
        }),
        new HtmlWebpackPlugin({   //配置html打包的插件
            template: './src/page/register.html',         //以哪个html文件作为打包的模板
            filename:'register.html',
            chunks:['register','commonCSS','dom','http','Captcha','utils']                        //该html文件使用了哪些入口js文件
        }),
        new HtmlWebpackPlugin({   //配置html打包的插件
            template: './src/page/home.html',         //以哪个html文件作为打包的模板
            filename:'home.html',
            chunks:['home','commonCSS','dom','http','swiper','utils']                        //该html文件使用了哪些入口js文件
        }),
        new HtmlWebpackPlugin({   //配置html打包的插件
            template: './src/page/sport.html',         //以哪个html文件作为打包的模板
            filename:'sport.html',
            chunks:['sport','commonCSS','dom','http','utils']                        //该html文件使用了哪些入口js文件
        }),
        new HtmlWebpackPlugin({   //配置html打包的插件
            template: './src/page/mine.html',         //以哪个html文件作为打包的模板
            filename:'mine.html',
            chunks:['mine','commonCSS','dom','http','utils']                        //该html文件使用了哪些入口js文件
        }),
        new HtmlWebpackPlugin({   //配置html打包的插件
            template: './src/page/changeInfo.html',         //以哪个html文件作为打包的模板
            filename:'changeInfo.html',
            chunks:['changeInfo','commonCSS','dom','http','weui','utils']                        //该html文件使用了哪些入口js文件
        }),
        new HtmlWebpackPlugin({   //配置html打包的插件
            template: './src/page/course.html',         //以哪个html文件作为打包的模板
            filename:'course.html',
            chunks:['course','commonCSS','dom','http','utils']                        //该html文件使用了哪些入口js文件
        }),
        new HtmlWebpackPlugin({   //配置html打包的插件
            template: './src/page/videoplay.html',         //以哪个html文件作为打包的模板
            filename:'videoplay.html',
            chunks:['videoplay','commonCSS','dom','http','utils']                        //该html文件使用了哪些入口js文件
        }),
        new HtmlWebpackPlugin({   //配置html打包的插件
            template: './src/page/MotionData.html',         //以哪个html文件作为打包的模板
            filename:'MotionData.html',
            chunks:['MotionData','commonCSS','dom','http','utils','MotionData']                        //该html文件使用了哪些入口js文件
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css' // 输出到css文件夹里
        }),
        new OptimizeCssAssetsWebpackPlugin(),

        new CleanWebpackPlugin()

    ],
    //环境
    mode: 'development',

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // 启动服务器目录
        compress: true, // 启动gzip
        port: 666,  // 端口  8080 80  8081 8082
        open: true, // 自动打开服务
        publicPath: '/', // 静态资源查找路径
        openPage: 'index.html', // 打开的页面
      },
      target: 'web', // 目标是浏览器
}