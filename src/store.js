import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: '尼斯湖丢件'
    },
    mutations: {
        newName(state, msg) {
            state.name = msg;
        }
    },
    actions: {}
});
