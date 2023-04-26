<template>
  <v-container>
    <div>
      <!-- <select v-model="selectedTemplate">
        <option v-for="(template, index) in templates" :key="index">
          {{ template }}
        </option>
      </select> -->
      <div v-html="selectedTemplate"></div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
select {
  border: 1px solid red;
}
</style>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",

  data: () => ({
    selectedTemplate: "",
    templates: [
      '<style>.test{background:red;}</style><div class="test"><div><h1>CLAUDE<h1></div><div><h1>CLAUDE<h1></div></div>',
      "template2.html",
      "template3.html",
    ],
    currentTemplate: "",
  }),

  mounted() {
    this.loadFile();
  },

  watch: {
    selectedTemplate: function (newValue) {
      this.loadTemplate(newValue);
    },
  },

  methods: {
    loadFile() {
      axios.get(`~/assets/templates/template1.html`)
        .then((response) => {
          // JSON responses are automatically parsed.
          console.log(response);
          // this.posts = response.data;
        })
        .catch((e) => {
          console.log(e);
        });

      // axios({
      //   url: "../assets/templates/template1.html",
      //   method: "GET",
      // }).then((res) => {
      //   // this.selectedTemplate = res;
      //   console.log(res);
      // });
    },

    // loadTemplate(templateName) {
    //   const xhr = new XMLHttpRequest();
    //   xhr.open(
    //     "GET",
    //     `D:/Developement/VueJS/NewslettersV2/newslettersV2/newsletters/src/assets/templates/${templateName}`,
    //     true
    //   );
    //   xhr.onload = () => {
    //     this.currentTemplate = xhr.responseText;
    //     console.log(xhr.responseText);
    //   };
    //   xhr.send();
    // },
  },
};
</script>
