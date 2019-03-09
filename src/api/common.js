import axios from "axios";

/* ajax post请求 */
export function common_post(axios_confgin) {
  /*服务器地址*/
  const config = {
    baseURL: '/api', //
  };

  /* 创建 form data 格式 */
  let form_data = new FormData();
  for (let i in axios_confgin.params) {
    form_data.append(i, axios_confgin.params[i]);
  }

  /*标明语言api*/
  /*if(localStorage.getItem('play_lang')=='zh'){
        axios_confgin.url =axios_confgin.url + '?lang=zh-cn'
    }else if(localStorage.getItem('play_lang')=='en'){
        axios_confgin.url =axios_confgin.url + '?lang=en-us'
    }else if(localStorage.getItem('play_lang')=='tw'){
        axios_confgin.url =axios_confgin.url + '?lang=zh-tw'
    }else{
        axios_confgin.url =axios_confgin.url + '?lang=en-us'
    }*/

  return axios.post('/api'+ axios_confgin.url, form_data).then(res => {
    return Promise.resolve(res.data);
  });
}
