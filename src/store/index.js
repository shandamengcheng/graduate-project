import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tea_info: {
      // login_name: "",
      // login_password: "",
      Teacher_ID: "",
      Teacher_name: "",
      Teacher_college: "",
      Teacher_identity: "",
      Teacher_task_count: "",
    },
  },
  mutations: {
    setTeacherInfo(state, payload) {
      let info = state.tea_info;
      for (let key of Object.keys(info)) {
        info[key] = payload[key];
      }
    },
  },
  getters: {
    getTeacherInfo(state) {
      return state.tea_info;
    },
  },
  actions: {},
  modules: {},
});
