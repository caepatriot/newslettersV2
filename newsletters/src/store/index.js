import Vue from "vue";
import Vuex from "vuex";

// import UsersModule from "../store/modules/users-module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    templates: [
      { title: "Template 1", inputs: [], html: '<div class="template-content"><v-card class="mx-auto my-12" max-width="374"><template slot="progress"><v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear></template><v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img><v-card-title>{{ title }}</v-card-title><v-card-text></v-card-text> <v-divider class="mx-4"></v-divider><v-card-title>{{ content }}</v-card-title></v-card> </div>'},
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