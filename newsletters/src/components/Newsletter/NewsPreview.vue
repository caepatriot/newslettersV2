<template>
  <v-container>
    <!-- <v-btn @click="test()"></v-btn> -->
    <v-sheet class="mx-auto" max-width="700">
      <v-slide-group multiple show-arrows>
        <v-slide-item v-for="n in $store.state.templates" :key="n.title" v-slot="{ active }">
          <v-btn class="mx-2" :input-value="active" active-class="purple white--text" depressed rounded @click="loadTemplate(n)" >
            {{ n.title }}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

    <div v-if="selectedTemplate != null" v-html="selectedTemplate.html"></div>

    <!-- <TemplateComponent :title="form.title" :content="form.content"></TemplateComponent> -->

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

  props: ['form'],

  data: () => ({
    model: null,
    selectedTemplate: null
  }),

  mounted: () => {
  },

  computed: {

  },

  watch: {

  },

  methods: {

    loadTemplate(template) {
      this.selectedTemplate = template;
    },

    test() {
      console.log(this.$store.state.templates);
    }

  },
};
</script>
