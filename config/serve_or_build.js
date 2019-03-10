//项目域名地址
const test_api_url = '';//开发环境
const serve_api_url = '';//生产环境 build post绝对路径 不需要绝对路径可留空

// development 为开发环境 单一端口域名
//let api_url = process.env.NODE_ENV === 'development' ? '/api' : serve_api_url;

// development 为开发环境 多端口域名开发环境需要留空然后到到调用时自定义调哪个模块api
let api_url = process.env.NODE_ENV === 'development' ? '' : serve_api_url;

let apis = [
    {module_name: '/Member', module_url: test_api_url},//模块1
    {module_name: '/Index', module_url: test_api_url},//模块2
]
exports.PROXYSAPI = apis; //vue.config 调此变量
exports.API_URL = api_url; //post and get 调此变量


