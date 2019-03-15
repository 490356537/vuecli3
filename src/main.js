import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* vue-cli-plugin-iview 插件的默认调用位置 */
//import './plugins/iview.js'

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
