<template>
  <div class="main-container justify-center">
    <v-card id="create-news-card" class="cards" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">Send new</div>
          <!-- <v-list-item-title class="text-h5 mb-1"> Send new </v-list-item-title> -->
          <v-list-item-subtitle></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="40" color="grey"></v-list-item-avatar>
      </v-list-item>
      <div>
        <span>test</span>
      </div>
    </v-card>
    <v-card id="view-news-card" class="cards" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">See all news</div>
          <!-- <v-list-item-title class="text-h5 mb-1">
            See all news
          </v-list-item-title> -->
          <v-list-item-subtitle></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="40" color="grey"></v-list-item-avatar>
      </v-list-item>
    </v-card>
    <v-card id="settings-card" class="cards" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">Settings</div>
          <v-list-item-title class="text-h5 mb-1"> Settings </v-list-item-title>
          <v-list-item-subtitle></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="40" color="grey"></v-list-item-avatar>
      </v-list-item>
    </v-card>
    <v-card id="settings-card" class="cards" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">Settings</div>
          <!-- <v-list-item-title class="text-h5 mb-1"> Settings </v-list-item-title> -->
          <v-list-item-subtitle></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="40" color="grey"></v-list-item-avatar>
      </v-list-item>
    </v-card>
    <v-card id="stats-card" class="cards" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">Stats</div>
          <!-- <v-list-item-title class="text-h5 mb-1"> Stats </v-list-item-title> -->
          <v-list-item-subtitle></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>
    </v-card>
  </div>
</template>

<style scoped>
.main-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
}
.cards {
  height: 100%;
}

#create-news-card {
  grid-column: span 2;
  grid-row: span 2;
}

#view-news-card {
  grid-column: span 1;
  grid-row: span 1;
}

#settings-card {
  grid-column: 3/4;
  grid-row: 2/3;
}

#stats-card {
  grid-column: 4/7;
  grid-row: 1/3;
}
</style>

<script>
// import HelloWorld from '../components/HelloWorld'

export default {
  name: "HomeView",

  components: {
    // HelloWorld,
  },

  data() {
    return {
      nbrOfCards: 10,
    };
  },
};
</script>
