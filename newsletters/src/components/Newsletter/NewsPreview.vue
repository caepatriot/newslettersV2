<template>
  <v-container>

    <div v-if="template != null" v-html="customizedTemplate"></div>

  </v-container>
</template>

<style lang="scss" scoped></style>

<script>
// import axios from "axios";
// import TemplateComponent from './Templates/TemplateComponent.vue';

export default {
  name: "NewsPreview",

  components: {
    // TemplateComponent
  },

  props: ["form", "template"],

  data: () => ({
    model: null,
    // selectedTemplate: null,

    userTitle: "", // User's title input
    userContent: "", // User's content input
  }),

  mounted: () => {},

  computed: {
    customizedTemplate() {
      // Replace placeholders or markers in the selected template with user input
      let template = this.template.html;

      template = template.replace("{{title}}", this.form.title);
      template = template.replace("{{content}}", this.form.content);
      // template = template.replace("{{image}}", this.displayImage());

      return template;
    },
  },

  watch: {},

  methods: {

  },
};
</script>
