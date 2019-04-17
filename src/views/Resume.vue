<template>
  <v-layout column align-center>
    <h1>Upload or input your resume here</h1>
    <v-flex>
      <JSONUploader v-model="fileContent" ButtonText="Upload json file"></JSONUploader>
    </v-flex>

    <v-flex>
      <UserInputForm v-bind:userdata="mainUserData"></UserInputForm>
    </v-flex>
    <v-flex>
      <DownloadJSONFile
        ButtonText="Download json file"
        fileName="userdata"
        :downloadData="mainUserData"
      ></DownloadJSONFile>
    </v-flex>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import JSONUploader from "@/components/JSONUploader.vue";
import nullData from "@/assets/nullData.json";
import UserInputForm from "@/components/UserInputForm.vue";
import DownloadJSONFile from "@/components/DownloadJSONFile.vue";

export default {
  name: "resume",
  components: {
    JSONUploader,
    UserInputForm,
    DownloadJSONFile
  },
  data() {
    return {
      fileContent: null,
      mainUserData: nullData,
      keys: Array
    };
  },
  methods: {
    testFun() {
      this.mainUserData.personalData.name = "Luca Gessi";
      this.keys = Object.keys(this.mainUserData);
    }
  },
  watch: {
    // whenever fileContent changes, this function will run
    fileContent(val) {
      console.log(`name object: ${typeof val}`);
      console.log(`name basics: ${typeof val.basics}`);
      console.log(`name type: ${typeof val.basics.name}`);
      this.mainUserData = this.fileContent;
    }
  }
};
</script>
