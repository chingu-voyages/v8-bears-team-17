<template>
  <div class="home">
    <div>
    <input-form v-model="fileContent"></input-form>
    <!-- <div>{{fileContent}}</div> -->
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import InputForm from '@/components/InputForm.vue';

export default {
  name: 'home',
  components: {
    HelloWorld, InputForm,
  },
  data() {
    return {
      fileContent: null,
    };
  },
  watch: {
    // whenever fileContent changes, this function will run
    fileContent(val) {
      console.log(val);
    },
  },
};
</script>
