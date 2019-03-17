<template>
    <div>
    <label class="file-select">
    <!-- https://alligator.io/vuejs/file-select-component/ -->
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
    <div class="select-button">
      <!-- Display the filename if a file has been selected. -->
      <span v-if="value">Selected File: {{value.name}}</span>
      <span v-else>Select File</span>
    </div>
    <!-- Now, the file input that we hide. -->
    <input type="file" @change="handleFileChange"/>
  </label>
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  props: {
    // Using value here allows us to be v-model compatible.
    // value: File
    value: File,
  },
  methods: {
    handleFileChange(e) {
      // const file = ev.target.files[0];
      // const reader = new FileReader();
      console.log('Input change');
      this.$emit('input', e.target.files[0]);
      // reader.onload = e => {this.$emit("load", e.target.result);console.log("onload event!");};
      // reader.readAsText(file);
    },
  },
};
</script>

<style scoped>
.file-select > .select-button {
  padding: 1rem;

  color: white;
  background-color: #2EA169;

  border-radius: .3rem;

  text-align: center;
  font-weight: bold;
}

/* Don't forget to hide the original file input! */
.file-select > input[type="file"] {
  display: none;
}
</style>
