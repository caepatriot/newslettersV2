import Vue from "vue";
import Vuex from "vuex";

// import UsersModule from "../store/modules/users-module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    templates: [
      {
        title: "Template 1",
        inputs: [
          {
            id: 1,
            type: "text",
            ref: "title",
            label: "Titre",
            data: "",
          },
          {
            id: 2,
            type: "text",
            ref: "content",
            label: "Contenu",
            data: "",
          },
          {
            id: 3,
            type: "text",
            ref: "footer",
            label: "Footer",
            data: "",
          },
          {
            id: 4,
            type: "image",
            ref: "image_1",
            label: "Image",
            file: [],
            fileUrl: "",
          },
          {
            id: 5,
            type: "image",
            ref: "image_2",
            label: "Image",
            file: [],
            fileUrl: "",
          },
        ],
        html: '<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="center" bgcolor="#0073e6"><table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #0073e6;"><tr><td align="center" valign="top" style="padding: 40px 10px 40px 10px;"><img style="object-fit: contain; aspect-ratio: 1 / 1;" src="{{image_1}}" alt="Newsletter Image" width="300" height="200" style="display: block;"/><img style="object-fit: contain; aspect-ratio: 1 / 1;" src="{{image_2}}" alt="Newsletter Image" width="300" height="200" style="display: block;"/></td></tr></table></td></tr><tr><td align="center" bgcolor="#f8f8f8"><table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #f8f8f8;"><tr><td align="center" style="padding: 20px 0 30px 0;"><h1>{{title}}</h1></td></tr><tr><td align="left" style="padding: 0 20px 20px 20px;"><p>{{content}}</p></td></tr><tr><td>{{footer}}</td></tr></table></td></tr></table>',
        css: "table{border:1px solid red}",
      },
      {
        title: "Template 2",
        inputs: [
          {
            id: 1,
            type: "image",
            ref: "image_1",
            label: "Image 1",
            file: [],
            fileUrl: "",
          },
          {
            id: 2,
            type: "area",
            ref: "p_1",
            label: "Paragraphe 1",
            data: "",
          },
          {
            id: 3,
            type: "text",
            ref: "link_1",
            label: "Lien 1",
            data: "",
          },
          {
            id: 4,
            type: "image",
            ref: "image_2",
            label: "Image 2",
            file: [],
            fileUrl: "",
          },
          {
            id: 5,
            type: "area",
            ref: "p_2",
            label: "Paragraphe 2",
            data: "",
          },
          {
            id: 6,
            type: "text",
            ref: "link_2",
            label: "Lien 2",
            data: "",
          },
          {
            id: 7,
            type: "area",
            ref: "p_3",
            label: "Paragraphe 3",
            data: "",
          },
          {
            id: 8,
            type: "text",
            ref: "link_3",
            label: "Lien 3",
            data: "",
          },
          {
            id: 9,
            type: "image",
            ref: "image_3",
            label: "Image 3",
            file: [],
            fileUrl: "",
          },
          {
            id: 10,
            type: "image",
            ref: "image_4",
            label: "Logo 1",
            file: [],
            fileUrl: "",
          },
          {
            id: 11,
            type: "image",
            ref: "image_5",
            label: "Logo 2",
            file: [],
            fileUrl: "",
          },
          {
            id: 12,
            type: "image",
            ref: "image_6",
            label: "Logo 3",
            file: [],
            fileUrl: "",
          },
          {
            id: 13,
            type: "image",
            ref: "image_7",
            label: "Logo 4",
            file: [],
            fileUrl: "",
          },
        ],
        html: '<div style="display: flex; flex-direction: column; width: 100%"><div style=" box-sizing: border-box;  padding-top: 20px;  padding-bottom: 20px;width: 100%;display: flex;flex-direction: column;justify-content: center;align-items: center;"><img style="width: 50%; aspect-ratio: 1/1;" src="{{image_1}}" /><p style="width: 100%; text-align: center; overflow-wrap: break-word">{{p_1}}</p><a style="width: 50%;text-align: center;background-color: #407bff;border-radius: 5px;padding: 5px;text-decoration: none;color: #fff;"href="">{{link_1}}</a></div><div style="box-sizing: border-box;width: 100%; padding: 30px; background-color: #e3e7ee;display: flex; flex-direction: row; justify-content: center;align-items: center;"><img style="max-width: 50%; aspect-ratio: 1/1;" src="{{image_2}}" /><div style="display: flex;flex-direction: column;justify-content: center; padding: 20px;"><p style="width: 100%; text-align: left; overflow-wrap: break-word">{{p_2}}</p><a style="width: 50%;text-align:center;background-color: #407bff;border-radius: 5px;padding: 5px;text-decoration: none;color: #fff;" href="" >{{link_2}}</a></div></div><div style=" box-sizing: border-box; width: 100%; padding: 30px;background-color: #fff;display: flex;flex-direction: row;justify-content: center;align-items: center; "><div style=" display: flex;flex-direction: column;justify-content: center;padding: 20px;"><p style="width: 100%; text-align: left; overflow-wrap: break-word">{{p_3}}</p><a style="width: 50%;text-align: center;background-color: #407bff;border-radius: 5px;padding: 5px;text-decoration: none;color: #fff;"href="">{{link_3}}</a></div><img style="max-width: 50%" src="{{image_3}}"/></div><div style="box-sizing: border-box;width:100%;padding: 30px;background-color: #407bff; display: flex;flex-direction: row;justify-content: center;align-items: center; gap: 5%;"><img src="{{image_4}}" style="aspect-ratio: 1/1; max-width: 10%;"/><img src="{{image_5}}"  style="aspect-ratio: 1/1; max-width: 10%;"/><img src="{{image_6}}" style="aspect-ratio: 1/1; max-width: 10%;"/><img src="{{image_7}}" style="aspect-ratio: 1/1; max-width: 10%;"/></div></div>',
      },
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
