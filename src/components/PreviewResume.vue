<template>
    <div>
    <v-btn :to="{ name: 'DesignA', params: { previewData } }"
    color="success get-started">Preview Design A</v-btn>
    <v-btn :to="{ name: 'DesignB', params: { previewData } }"
      color="success get-started"
    >Preview Design B</v-btn>
  </div>
</template>

<script>
export default {
  name: "PreviewResume",
  props: {
    ButtonText: {
      type: String,
      required: true
    },
    previewData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
