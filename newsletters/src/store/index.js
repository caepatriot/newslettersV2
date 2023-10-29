import Vue from "vue";
import Vuex from "vuex";

// import UsersModule from "../store/modules/users-module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    templates: [
      { title: "Template 1", inputs: [], html: '<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="center" bgcolor="#0073e6"><table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #0073e6;"><tr><td align="center" valign="top" style="padding: 40px 10px 40px 10px;"><img src="" alt="Newsletter Image" width="300" height="200" style="display: block;"></td></tr></table></td></tr><tr><td align="center" bgcolor="#f8f8f8"><table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #f8f8f8;"><tr><td align="center" style="padding: 20px 0 30px 0;"><h1>{{title}}</h1></td></tr><tr><td align="left" style="padding: 0 20px 20px 20px;"><p>{{content}}</p></td></tr></table></td></tr></table>' },
      { title: "Template 2", inputs: [], html: '<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="center" bgcolor="#00fabe"><table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #0073e6;"><tr><td align="center" valign="top" style="padding: 40px 10px 40px 10px;"><img src="" alt="Newsletter Image" width="300" height="200" style="display: block;"></td></tr></table></td></tr><tr><td align="center" bgcolor="#f8f8f8"><table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #a8a8a8;"><tr><td align="center" style="padding: 20px 0 30px 0;"><h1>{{title}}</h1></td></tr><tr><td align="left" style="padding: 0 20px 20px 20px;"><p>{{content}}</p></td></tr></table></td></tr></table>' },
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