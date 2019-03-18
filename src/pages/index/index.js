import Vue from "vue";
import App from "./index.vue";
import '../../plugins/iview.js'
import store from "../../store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#index");


//import {post_demo} from "@/api/menber/info.js";

/*
export default {
  name: "index",
  mounted() {
    //let _this = this;
    const params = {};
    post_demo(params).then(res => {
      console.log(res);
    });
  }
}*/
