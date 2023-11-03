<template>
  <v-container>
    <v-btn v-if="template != null" @click="generateHTML()">Generate HTML</v-btn>
    <div id="html-template" v-if="template != null" v-html="customizedTemplate"></div>
  </v-container>
</template>



<script>
// import axios from "axios";
// import TemplateComponent from './Templates/TemplateComponent.vue';

export default {
  name: "NewsPreview",

  components: {
    // TemplateComponent
  },

  props: ["template"],

  data: () => ({
    model: null,
    extractedHtml: ''
  }),

  mounted: () => { },

  computed: {
    customizedTemplate() {
      let html = this.template.html;
      let inputs = this.template.inputs;

      inputs.forEach((input) => {
        if (input.type == "text") {
          html = html.replace("{{" + `${input.ref}` + "}}", input.data);
        } else if (input.type == "area") {
          html = html.replace("{{" + `${input.ref}` + "}}", input.data);
        } else if (input.type == "image") {
          html = html.replace("{{" + `${input.ref}` + "}}", input.fileUrl);
        }
      });

      return html;
    },
  },

  watch: {
  },

  methods: {

    generateHTML() {
      // Replace this with your logic to extract the HTML
      // You can use document.getElementById or other DOM methods to get the desired element
      const extractedElement = document.getElementById('html-template');

      if (extractedElement) {
        // Get the HTML content from the element
        this.extractedHtml = extractedElement.outerHTML;
        console.log(this.extractedHtml);
      } else {
        this.extractedHtml = 'Element not found.';
      }
    },
  },
};
</script>
