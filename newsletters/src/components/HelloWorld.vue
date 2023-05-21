<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-dialog v-model="dialog" max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on"> New </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Newsletter</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-stepper non-linear v-model="e1">
                  <v-stepper-header>
                    <v-stepper-step editable step="1"> Step 1 </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step editable step="2"> Step 2 </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step editable step="3"> Step 3 </v-stepper-step>
                  </v-stepper-header>

                  <v-stepper-items>
                    <v-stepper-content step="1">
                      <v-card class="mb-12" color="grey lighten-1"> </v-card>

                      <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

                      <v-btn text> Cancel </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                      <v-card class="mb-12">
                        <v-row>
                          <v-col cols="12" sm="12" md="12">
                            <v-text-field
                              label="Title*"
                              required
                            ></v-text-field>
                          </v-col>
                          <!-- <v-col>
                            <v-text-field
                              label="Legal last name*"
                              hint="example of persistent helper text"
                              persistent-hint
                              required
                            ></v-text-field>
                          </v-col> -->
                          <v-col cols="12">
                            <v-textarea
                              name="content"
                              label="Content"
                              value=""
                            ></v-textarea>
                          </v-col>
                          <v-col cols="12">
                            <v-file-input
                              multiple
                              label="Files"
                              truncate-length="15"
                            ></v-file-input>
                          </v-col>
                          <v-col cols="12" sm="4" md="4">
                            <v-checkbox
                              v-model="ex4"
                              label="red"
                              color="red"
                              value="red"
                              hide-details
                            ></v-checkbox>
                            <v-checkbox
                              v-model="ex4"
                              label="red darken-3"
                              color="red darken-3"
                              value="red darken-3"
                              hide-details
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              label="Password*"
                              type="password"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-select
                              :items="['0-17', '18-29', '30-54', '54+']"
                              label="Age*"
                              required
                            ></v-select>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-autocomplete
                              :items="[
                                'Skiing',
                                'Ice hockey',
                                'Soccer',
                                'Basketball',
                                'Hockey',
                                'Reading',
                                'Writing',
                                'Coding',
                                'Basejump',
                              ]"
                              label="Interests"
                              multiple
                            ></v-autocomplete>
                          </v-col>
                          <v-col>
                            <small>*indicates required field</small>
                          </v-col>
                        </v-row>
                      </v-card>

                      <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

                      <v-btn text> Cancel </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                      <v-card
                        class="mb-12"
                        color="grey lighten-1"
                        height="200px"
                      ></v-card>

                      <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

                      <v-btn text> Cancel </v-btn>
                    </v-stepper-content>
                  </v-stepper-items>
                </v-stepper>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Nutrition
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="newsletters"
            :search="search"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
select {
  border: 1px solid red;
}
</style>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",

  data: () => ({
    dialog: true,

    e1: 2,

    search: "",
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Title", value: "title" },
      { text: "Content", value: "content" },
    ],
  }),

  computed: {
    newsletters() {
      return this.$store.newsletters;
    },
  },

  mounted() {
    this.loadFile();
  },

  watch: {
    selectedTemplate: function (newValue) {
      this.loadTemplate(newValue);
    },
  },

  methods: {
    loadFile() {
      axios
        .get(`~/assets/templates/template1.html`)
        .then((response) => {
          // JSON responses are automatically parsed.
          console.log(response);
          // this.posts = response.data;
        })
        .catch((e) => {
          console.log(e);
        });

      // axios({
      //   url: "../assets/templates/template1.html",
      //   method: "GET",
      // }).then((res) => {
      //   // this.selectedTemplate = res;
      //   console.log(res);
      // });
    },

    // loadTemplate(templateName) {
    //   const xhr = new XMLHttpRequest();
    //   xhr.open(
    //     "GET",
    //     `D:/Developement/VueJS/NewslettersV2/newslettersV2/newsletters/src/assets/templates/${templateName}`,
    //     true
    //   );
    //   xhr.onload = () => {
    //     this.currentTemplate = xhr.responseText;
    //     console.log(xhr.responseText);
    //   };
    //   xhr.send();
    // },
  },
};
</script>
