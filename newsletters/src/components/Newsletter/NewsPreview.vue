<template>
  <v-container>
    <v-btn v-if="template != null" @click="generateHTML()">Generate HTML</v-btn>
    <div
      id="template"
      v-if="template != null"
      v-html="customizedTemplate"
    ></div>
  </v-container>
</template>

<style lang="css" scoped>
.selected {
  border: 2px solid red !important;
  background-color: blue;
}

#template >>> .selected {
  border: 2px solid red;
}
</style>


<script>
import axios from "axios";
// import TemplateComponent from './Templates/TemplateComponent.vue';

export default {
  name: "NewsPreview",

  components: {
    // TemplateComponent
  },

  props: ["template"],

  data: () => ({
    model: null,
    extractedHtml: "",
  }),

  mounted: () => {},

  computed: {
    customizedTemplate() {
      let html = this.template.html;
      let inputs = this.template.inputs;

      inputs.forEach((input) => {
        if (input.type == "link") {
          html = html.replace("{{" + `${input.ref}` + "}}", input.title);
          html = html.replace('href=""', 'href="' + input.url + '"');
        } else if (input.type == "area") {
          html = html.replace("{{" + `${input.ref}` + "}}", input.data);
        } else if (input.type == "image") {
          html = html.replace("{{" + `${input.ref}` + "}}", input.fileUrl);
        }
      });

      return html;
    },
  },

  watch: {
    template: {
      handler(newVal) {
        if (newVal.selectedInput != null) {
          this.scrollToInput(newVal.selectedInput);
        }
      },
      deep: true,
    },
  },

  methods: {
    scrollToInput(input) {
      var ref = input.ref;
      this.$nextTick(() => {
        const element = document
          .querySelector('[ref="' + ref + '"]')
          .closest("table");
        if (element) {
          const allelements = document.querySelectorAll("*");
          allelements.forEach((element) => {
            element.classList.remove("selected");
          });
          element.classList.add("selected");
          // const y = element.getBoundingClientRect().top + window.scrollY + "10px";
          // window.scrollTo({ top: y, behavior: 'smooth' });
          // element.scrollIntoView();
        } else {
          console.log("Element not found.");
        }

        // if (ref) {
        //   console.log(ref);
        //   console.log(this.$refs);

        // this.$refs.ref.focus();
        // }
      });

      // this.$nextTick(() => {
      //   var ref = input.ref;

      //   console.log(ref);
      //   console.log(this.$refs);
      //   // this.$refs[ref].scrollIntoView({ behavior: 'smooth' });

      //   // Use $refs to access the dynamically loaded element
      //   const element = this.$refs[ref];
      //   if (element) {
      //     console.log('Dynamically loaded element:', element);
      //     // You can now manipulate the element or perform other actions.
      //   } else {
      //     console.log('Element not found.');
      //   }
      // })

      // var targetRef = input.ref;
      // console.log(this.$refs);
      // if (targetRef != null) {
      //   // this.$refs.targetRef.scrollIntoView({ behavior: 'smooth' });

      //   // document.getElementById("${targetRef}`").scrollIntoView();
      // }
    },

    generateHTML() {
      // Replace this with your logic to extract the HTML
      // You can use document.getElementById or other DOM methods to get the desired element
      const extractedElement = document.getElementById("template");

      if (extractedElement) {
        // Get the HTML content from the element
        this.extractedHtml = extractedElement.outerHTML;
        console.log(this.extractedHtml);
      } else {
        this.extractedHtml = "Element not found.";
      }

      const dataToSend = {
        htmlContent: this.extractedHtml,
      };

      axios
        .post("http://localhost:8081/sendmail", dataToSend, {
          headers: {
            "Content-Type": "application/json", // Set the content type for the request
          },
        })
        .then((response) => {
          console.log(response.data);
          // Handle the response from the Spring Boot backend
        })
        .catch((error) => {
          console.error(error);
          // Handle any errors
        });
    },
  },
};
</script>
