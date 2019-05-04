<template>
  <div>
    <v-btn
      :to="{ name: 'Elegant', params: { previewData } }"
      color="success get-started"
    >Preview elegant resume</v-btn>
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
