import Vue from "vue";
import App from "./view02.vue";
import '../common_main.js'

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");
