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

  props: ["template"],

  data: () => ({
    model: null,
  }),

  mounted: () => {},

  computed: {
    customizedTemplate() {
      let html = this.template.html;
      let inputs = this.template.inputs;

      inputs.forEach((input) => {
        if (input.type == "text") {
          html = html.replace("{{" + `${input.ref}` + "}}", input.data);
        } else if (input.type == "image") {
          html = html.replace("{{" + `${input.ref}` + "}}", input.data);
        }
      });

      return html;
    },
  },

  watch: {
    // template: function (newVal, oldVal) {
    //   // console.log("Prop changed: ", newVal, " | was: ", oldVal);
    // },
  },

  methods: {
  },
};
</script>
