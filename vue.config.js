// vue.config.js


if (process.env.NODE_ENV === 'development') {
    let api = '/api/'
} else {
    let api = ''
}
module.exports = {
    //runtimeCompiler: true,
    publicPath: "./", // 配置基本url



    devServer: {
        //disableHostCheck: true,
        open: true, //运行打开浏览器
        inline: true, //开启页面自动刷新
        proxy: {
            '/api': {//代理api
                target: "http://bwfw.x-punk.top",//服务器api地址
                changeOrigin: false,//是否跨域
                ws: true, // proxy websockets
                pathRewrite: {//重写路径
                    '^/api': ''
                }
            },
        }
    },
    pages: {
        index: {
            entry: "src/pages/index/index.js",
            template: "src/pages/index/index.html",
            filename: "index.html"
        },
        view01: {
            entry: "src/pages/view01/view01.js",
            template: "src/pages/view01/view01.html",
            filename: "view01.html"
        },
        view02: {
            entry: "src/pages/view02/view02.js",
            template: "src/pages/view02/view02.html",
            filename: "view02.html"
        }
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        //subpage: 'src/subpage/main.js'
    }
};
