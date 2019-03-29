<template>
  <div class="home">
    <div>
      <JSONUploader v-model="fileContent" ButtonText="Upload json file"></JSONUploader>
      <!-- FOR JSON FİLE -->
      <!-- <DownloadJSONFile :download-data="mainUserData"
            file-type="json"
            file-name="Periyodik Tablo - Bazı Elementler"
            class="periodic_table color-3"
      button-text="Download Period Table As JSON"/>-->
      <DownloadJSONFile
        ButtonText="Download json file"
        fileName="userdata"
        :downloadData="mainUserData"
      ></DownloadJSONFile>
      <UserInputForm v-bind:userdata="mainUserData"></UserInputForm>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import JSONUploader from '@/components/JSONUploader.vue';
import nullData from '@/assets/nullData.json';
import UserInputForm from '@/components/UserInputForm.vue';
import DownloadJSONFile from '@/components/DownloadJSONFile.vue';

export default {
  name: 'home',
  components: {
    JSONUploader,
    UserInputForm,
    DownloadJSONFile,
  },
  data() {
    return {
      fileContent: null,
      mainUserData: nullData,
      keys: Array,
    };
  },
  methods: {
    testFun() {
      this.mainUserData.personalData.name = 'Luca Gessi';
      this.keys = Object.keys(this.mainUserData);
    },
  },
  watch: {
    // whenever fileContent changes, this function will run
    fileContent(val) {
      console.log(`name object: ${typeof val}`);
      console.log(`name basics: ${typeof val.basics}`);
      console.log(`name type: ${typeof val.basics.name}`);
      this.mainUserData = this.fileContent;
    },
  },
};
</script>
