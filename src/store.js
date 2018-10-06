import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 初始化状态
        count: 1,
        num: 1
    },
    mutations: {
        // 处理状态
        increment(state, num) {
            state.count++;
            state.num = num;
        }
    },
    actions: {
        // 提交改变后的状态
        inc({ commit }, obj) {
            commit('increment', obj);
        }
    }
});