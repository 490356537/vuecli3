import Vue from "vue";
import App from "./index.vue";
import store from "../../store";

import '../common_main.js'


Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App)
}).$mount("#app");
