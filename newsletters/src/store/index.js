import Vue from "vue";
import Vuex from "vuex";

// import UsersModule from "../store/modules/users-module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    templates: [
      { title: "Template 1", inputs: [], html: '<div data-v-6f685e67="" class="v-image v-responsive theme--light" style="height: 250px;"><div class="v-responsive__sizer" style="padding-bottom: 75%;"></div><div class="v-image__image v-image__image--cover" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/cards/cooking.png&quot;); background-position: center center;"></div><div class="v-responsive__content" style="width: 900px;"></div></div><div data-v-6f685e67="" class="v-card__title"></div><div data-v-6f685e67="" class="v-card__text"></div><hr data-v-6f685e67="" role="separator" aria-orientation="horizontal" class="mx-4 v-divider theme--light"><div data-v-6f685e67="" class="v-card__title"></div>' },
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