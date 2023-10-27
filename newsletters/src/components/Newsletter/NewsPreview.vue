<template>
  <v-container>
    <TemplateComponent :title="form.title" :content="form.content"></TemplateComponent>
  </v-container>
</template>

<style lang="scss" scoped></style>

<script>
// import axios from "axios";

import TemplateComponent from './Templates/TemplateComponent.vue';

export default {
  name: "NewsPreview",

  components: {
    TemplateComponent
  },

  props: ['form'],

  data: () => ({

  }),

  computed: {

  },

  mounted() {
    console.log(this.form);
  },

  watch: {
    form(newForm, oldForm) {
      console.log(newForm);
      console.log(oldForm);
    }
  },

  methods: {

  },
};
</script>
