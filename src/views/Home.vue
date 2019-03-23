<template>
  <div class="home">
    <div>
    <JSONUploader v-model="fileContent"></JSONUploader>
    <UserInputForm v-bind:userdata="mainUserData"></UserInputForm>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import JSONUploader from '@/components/JSONUploader.vue';
import nullData from '@/assets/nullData.json';
import UserInputForm from '@/components/UserInputForm.vue';

export default {
  name: 'home',
  components: {
    JSONUploader, UserInputForm,
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
      console.log(val);
      // Parse fileContent to match userData format
    },
  },
};
</script>
