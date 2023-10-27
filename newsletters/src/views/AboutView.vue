<template>
  <div class="about">
    <v-container>
      <v-row>
        <v-col>
          <NewsForm @submitted="test($event)"></NewsForm>
        </v-col>
        <v-col>
          <NewsPreview></NewsPreview>
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

  data() {
    return {

    };
  },
  methods: {
    test(e){
      alert(e.title + " " + e.content);
    }
  },
};
</script>
