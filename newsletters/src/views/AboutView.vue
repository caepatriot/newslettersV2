<template>
  <div class="about">
    <v-container fluid>
      <v-row>
        <v-sheet class="mx-auto" max-width="700">
          <v-slide-group multiple show-arrows>
            <v-slide-item v-for="n in $store.state.templates" :key="n.title" v-slot="{ active }">
              <v-btn class="mx-2" :input-value="active" active-class="purple white--text" depressed rounded
                @click="loadTemplate(n)">
                {{ n.title }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </v-sheet></v-row>
      <v-row>
        <v-col>
          <NewsForm id="form-container" @selectedInput="updateSelectedInput($event)" @submitted="updatePreview($event)"
            :template="selectedTemplate"></NewsForm>
        </v-col>
        <v-col>
          <NewsPreview id="preview-container" :template="selectedTemplate"></NewsPreview>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
#form-container {
  position: sticky;
  top: 65px;
}

#preview-container {
  position: sticky;
  top: 65px;
}
</style>

<script>
import NewsForm from "../components/Newsletter/NewsForm.vue";
import NewsPreview from "../components/Newsletter/NewsPreview.vue";

export default {
  name: "AboutView",

  components: {
    NewsForm,
    NewsPreview,
  },

  data: () => ({
    form: "",
    selectedTemplate: null,
  }),

  methods: {
    loadTemplate(template) {
      this.selectedTemplate = template;
    },

    updatePreview(e) {
      this.form = e;
    },

    updateSelectedInput(e) {
      this.selectedTemplate.selectedInput = e;
    }
  },
};
</script>
