<template>
  <div class="main">
    <div class="template-content">
      <!-- Your existing HTML template here with placeholders -->

      <v-card class="mx-auto my-12" max-width="374">
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>

        <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

        <v-card-title>{{ title }}</v-card-title>

        <v-card-text>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>{{ content }}</v-card-title>

      </v-card>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
// import axios from "axios";


export default {
  name: "TemplateComponent",

  props: ['title', 'content'],

  data: () => ({

  }),

  computed: {

  },

  mounted() {

  },

  watch: {
  },

  methods: {

  },
};
</script>
