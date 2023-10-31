<template>
  <v-container>
    <form v-if="template">
      <v-text-field v-for="input in textInputs" :key="input.id" v-model="input.data" :error-messages="titleErrors"
        :counter="30" :label="input.label" required @input="$v.form.title.$touch()"
        @blur="$v.form.title.$touch()"></v-text-field>
      <v-file-input v-for="(input, index) in imageInputs" :key="index" @change="onFileChange(input.file, index)"
        v-model="input.file"></v-file-input>


      <!-- <v-text-field
        v-model="form.title"
        :error-messages="titleErrors"
        :counter="30"
        label="Title"
        required
        @input="$v.form.title.$touch()"
        @blur="$v.form.title.$touch()"
      ></v-text-field>
      <v-textarea
        v-model="form.content"
        :error-messages="contentErrors"
        label="Content"
        required
        @input="$v.form.content.$touch()"
        @blur="$v.form.content.$touch()"
      ></v-textarea> -->
      <!-- <v-file-input multiple accept="image/*" label="Pièces"></v-file-input> -->
      <!-- <v-text-field label="Lien"></v-text-field>
      <v-text-field label="Contact"></v-text-field>
      <v-text-field label="Répondre à"></v-text-field>
      <v-text-field label="Emetteur"></v-text-field> -->

      <!-- <v-checkbox
      v-model="checkbox"
      :label="`Checkbox 1: ${checkbox.toString()}`"
    ></v-checkbox> -->

      <!-- <v-checkbox
        v-model="form.checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.form.checkbox.$touch()"
        @blur="$v.form.checkbox.$touch()"
      ></v-checkbox> -->

      <!-- <v-btn class="mr-4" @click="emitChange"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn> -->
    </form>
  </v-container>
</template>

<style lang="scss" scoped></style>

<script>
// import axios from "axios";

// import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
// import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  name: "NewsForm",

  mixins: [validationMixin],

  props: ["template"],

  validations: {
    form: {
      title: { required, maxLength: maxLength(30) },
      content: { required },
      checkbox: {
        checked(val) {
          return val;
        },
      },
    },

    title: { required, maxLength: maxLength(30) },
    email: { required, email },
    content: { required },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({}),

  computed: {
    textInputs: function () {
      return this.template.inputs.filter((i) => i.type === "text");
    },

    imageInputs: function () {
      return this.template.inputs.filter((i) => i.type === "image");
    },

    checkboxErrors() {
      const errors = [];
      if (!this.$v.form.checkbox.$dirty) return errors;
      !this.$v.form.checkbox.checked &&
        errors.push("You must agree to continue!");
      return errors;
    },

    selectErrors() {
      const errors = [];
      if (!this.$v.form.select.$dirty) return errors;
      !this.$v.form.select.required && errors.push("Item is required");
      return errors;
    },

    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.form.title.maxLength &&
        errors.push("Title must be at most 10 characters long");
      !this.$v.form.title.required && errors.push("Title is required.");
      return errors;
    },
    contentErrors() {
      const errors = [];
      if (!this.$v.content.$dirty) return errors;
      !this.$v.form.content.required && errors.push("Content is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.form.email.email && errors.push("Must be valid e-mail");
      !this.$v.form.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  mounted() {
    this.$emit("submitted", this.form);
  },

  watch: {
    template: function (newVal) {
      // watch it
      this.extractInputsFromHtml(newVal);
    },
  },

  methods: {

    onFileChange(file, index) {
      this.imageInputs[index].fileUrl = URL.createObjectURL(file);
    },

    extractInputsFromHtml(template) {
      // return placeholders;
      let html = template.html;
      const regex = /{{(.*?)}}/g;
      const placeholdersWithValues = {};
      let match;

      while ((match = regex.exec(html)) !== null) {
        const placeholder = match[0];
        const placeholderKey = match[1].trim(); // Remove leading/trailing whitespace
        placeholdersWithValues[placeholderKey] = placeholder;
      }

      return placeholdersWithValues;
    },

    emitChange() {
      // this.$emit("submitted", this.form);
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.title = "";
      this.content = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>
