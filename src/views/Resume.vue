<template>
  <v-layout column align-center>
    <h1>Upload or input your resume here</h1>

    <!-- UPLOAD -->
    <v-flex>
      <JSONUploader v-model="fileContent" ButtonText="Upload json file"></JSONUploader>
    <!-- DownLoadJSON -->
    <v-flex v-if="isEditing === false">
      <DownloadJSONFile v-if="mainUserData ? mainUserData : ''"
        ButtonText="Download json file"
        fileName="userdata"
        :downloadData="mainUserData ? mainUserData : tempData"
      ></DownloadJSONFile>
    </v-flex>
    </v-flex>

    <!-- Userinfo -->
    <v-flex>
      <Userinfo
        :userdata="mainUserData ? mainUserData : tempData"
        :isEditing="isEditing"
        @toggle-edit="toggleEdit"
        v-if="isEditing === false"
      ></Userinfo>

      <!-- UserInputFrom -->
      <UserInputForm
        v-bind:userdata="mainUserData ? mainUserData : tempData"
        :isEditing="isEditing"
        @toggle-edit="toggleEdit"
        @save-form="saveForm"
        v-if="isEditing === true"
      ></UserInputForm>
    </v-flex>

  </v-layout>
</template>

<script>
// @ is an alias to /src
import JSONUploader from "@/components/JSONUploader.vue";
import nullData from "@/assets/nullData.json";
import tempData from "@/assets/templateData.json";
import UserInputForm from "@/components/UserInputForm.vue";
import DownloadJSONFile from "@/components/DownloadJSONFile.vue";
import Userinfo from "@/components/Userinfo.vue";

export default {
  name: "resume",
  components: {
    JSONUploader,
    UserInputForm,
    DownloadJSONFile,
    Userinfo
  },
  data() {
    return {
      fileContent: null,
      mainUserData: null,
      keys: Array,
      isEditing: false,
      tempData: tempData
    };
  },
  methods: {
    toggleEdit(e) {
      this.isEditing = e;
      console.log(this.isEditing, "isEditing in Resume");
    },
    saveForm(e) {
      // Set data here too when saving.
      this.mainUserData = e;
    }
  },
  watch: {
    // whenever fileContent changes, this function will run
    fileContent(val) {
      this.mainUserData = this.fileContent;
    }
  }
};
</script>
