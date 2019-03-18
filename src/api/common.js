import axios from "axios";
const config = require("../../config/serve_or_build");  // build 需要域名

/* ajax post请求 */
export function common_post(axios_confgin) {

    /* 创建 form data 格式 */
    let form_data = new FormData();
    for (let i in axios_confgin.params) {
        form_data.append(i, axios_confgin.params[i]);
    }

    return axios.post(config.API_URL + axios_confgin.url, form_data).then(res => {
        return Promise.resolve(res.data);
    });
}
