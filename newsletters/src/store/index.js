import Vue from "vue";
import Vuex from "vuex";

// import UsersModule from "../store/modules/users-module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    templates: [
      { title: "Template 1", inputs: [], html: "" },
      { title: "Template 2", inputs: [], html: "" },
      { title: "Template 3", inputs: [], html: "" },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    // UsersModule,
  },
});
