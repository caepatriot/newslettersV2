<template>
  <v-container>
    <v-card class="mx-auto" style="max-width: 80%">
      <v-form ref="form" v-model="form" class="pa-4 pt-6">
        <v-text-field
          v-model="to"
          filled
          color="deep-purple"
          label="Destinataire"
          style="min-height: 96px"
          type="email"
        ></v-text-field>
        <v-text-field
          v-model="subject"
          filled
          color="deep-purple"
          label="Sujet"
          style="min-height: 96px"
          type="text"
        ></v-text-field>
        <v-textarea
          v-model="body"
          auto-grow
          filled
          color="deep-purple"
          label="Contenu"
          rows="10"
        ></v-textarea>
        <v-file-input show-size multiple label="File input"></v-file-input>
        <v-text-field
          v-model="phone"
          filled
          color="deep-purple"
          label="Phone number"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="[rules.email]"
          filled
          color="deep-purple"
          label="Email address"
          type="email"
        ></v-text-field>
        <!-- <v-checkbox
          v-model="agreement"
          :rules="[rules.required]"
          color="deep-purple"
        >
          <template v-slot:label>
            I agree to the&nbsp;
            <a href="#" @click.stop.prevent="dialog = true">Terms of Service</a>
            &nbsp;and&nbsp;
            <a href="#" @click.stop.prevent="dialog = true">Privacy Policy</a>*
          </template>
        </v-checkbox> -->
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text @click="$refs.form.reset()"> Clear </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="form"
          :loading="isLoading"
          class="white--text"
          color="deep-purple accent-4"
          depressed
          @click="loadFile()"
        >
          Submit
        </v-btn>
      </v-card-actions>
      <!-- <v-dialog v-model="dialog" absolute max-width="400" persistent>
        <v-card>
          <v-card-title class="text-h5 grey lighten-3"> Legal </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text @click="(agreement = false), (dialog = false)">
              No
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              class="white--text"
              color="deep-purple accent-4"
              @click="(agreement = true), (dialog = false)"
            >
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog> -->
    </v-card>
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
  name: "FormularComponent",

  data: () => ({
    agreement: false,
    to: "caepatriot@gmail.com",
    subject: "test subject",
    body: "Hello",
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    password: undefined,
    phone: undefined,
    rules: {
      email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
      length: (len) => (v) =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      password: (v) =>
        !!(v || "").match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
        ) ||
        "Password must contain an upper case letter, a numeric character, and a special character",
      required: (v) => !!v || "This field is required",
    },
  }),

  mounted() {},

  watch: {},

  methods: {
    loadFile() {
      const newsletter = {
        email: this.to,
        subject: this.subject,
        body: '<!DOCTYPE html><html><head><title>Page Title</title></head><body><h1>' + this.body + '</h1></body></html>',
      };

      // var params = new URLSearchParams();
      // params.append("email",  this.to);
      // params.append("subject", this.subject);
      // params.append("body", '<p style="color=red"' + this.body + "<p>");

      axios
        .post("http://localhost:8081/sendmail", newsletter)
        .then((response) => (console.log(response)));

      // axios
      //   .get(`~/assets/templates/template1.html`)
      //   .then((response) => {
      //     // JSON responses are automatically parsed.
      //     console.log(response);
      //     // this.posts = response.data;
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });

      // axios({
      //   url: "../assets/templates/template1.html",
      //   method: "GET",
      // }).then((res) => {
      //   // this.selectedTemplate = res;
      //   console.log(res);
      // });
    },
  },
};
</script>
