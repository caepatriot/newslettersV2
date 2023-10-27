<template>
  <div class="about">
    <v-container>
      <v-row>
        <v-col>
          <NewsForm @submitted="updatePreview($event)"></NewsForm>
        </v-col>
        <v-col>
          <NewsPreview :form="form"></NewsPreview>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped></style>

<script>
import NewsForm from '../components/Newsletter/NewsForm.vue'
import NewsPreview from '../components/Newsletter/NewsPreview.vue'

export default {
  name: "AboutView",

  components: {
    NewsForm,
    NewsPreview
  },

  data: () => ({
    form: ''
  }),

  methods: {
    updatePreview(e) {
      this.form = e;
    }
  },
};
</script>
