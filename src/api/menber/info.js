/* post_demo */
import { common_post } from "../common";

export function post_demo(params) {
  /* api 路径 */
  const axios_confgin = {
    url: "/Member/Index/index",
    params: params,
  };
  return common_post(axios_confgin).then(res => {
    console.log(123);
    return res;
  });
}
