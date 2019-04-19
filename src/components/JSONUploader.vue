<template>
  <div>
    <!--triggers ref on input element so we display a button -->
    <v-btn dark color="#24a4b3" v-on:click="$refs.JSONFile.click()">
      {{ButtonText}}
      <v-icon right small color="white">cloud_upload</v-icon>
    </v-btn>
    <!-- Now, the file input that we hide. -->
    <input ref="JSONFile" type="file" @change="handleFileChange">

    <!-- displaying errors/filename-->
    <label class="selected">
      <!-- https://alligator.io/vuejs/file-select-component/  > used ref instead!!!-->
      <!-- We can't use a normal button element here, as it would become the target of the label. -->

      <!-- Display the filename if a file has been selected. -->
      <span v-if="fileTitle">Uploaded file: {{fileTitle}}</span>
      <span v-else></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "JSONUploader",
  props: {
    // Using value here allows us to be v-model compatible.
    // value: File
    // uploadedData: Object,
    ButtonText: String
  },
  data() {
    return {
      fileTitle: null
    };
  },
  methods: {
    handleFileChange(ev) {
      console.log("On handleFileChange");
      const file = ev.target.files[0];
      const reader = new FileReader();
      const mainScope = this;
      reader.onload = function(e) {
        console.log("onload event!");
        try {
          const JSONFile = JSON.parse(e.target.result);
          mainScope.$emit("input", JSONFile);
          mainScope.fileTitle = file.name;
          // mainScope.rawData = JSONFile;
        } catch (err) {
          console.log("Error during parsing");
        }
      };
      reader.readAsText(file);
    }
  }
};
</script>

<style scoped>
.selected {
  padding: 1rem;

  border-radius: 0.3rem;

  text-align: center;
  font-weight: bold;
}

/* Don't forget to hide the original file input! */
input {
  display: none;
}
</style>
