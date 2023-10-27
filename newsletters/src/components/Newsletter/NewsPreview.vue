<template>
  <v-container>
    <v-sheet class="mx-auto" elevation="8" max-width="500">
      <v-slide-group v-model="model" class="pa-4" active-class="success" show-arrows>
        <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
          <v-card :color="active ? undefined : 'grey lighten-1'" class="ma-4" height="100" width="100" @click="toggle">
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <v-icon v-if="active" color="white" size="48"></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

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

  mounted: () => {
    console.log(this.$store.state.templates);
  },

  data: () => ({
    model: null,
    // templates: $store.state.day
  }),

  computed: {

  },

  watch: {
  },

  methods: {

  },
};
</script>
