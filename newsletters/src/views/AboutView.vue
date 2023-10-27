<template>
  <div class="about">
    <NewsForm></NewsForm>
  </div>
</template>


<style scoped>

</style>

<script>
import NewsForm from '../components/Newsletter/NewsForm.vue'

export default {
  name: "AboutView",

  components: {
    NewsForm,
  },

  data() {
    return {
      
    };
  },
};
</script>
