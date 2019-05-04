<template>
    <div>
    <v-btn :to="{ name: 'DesignC', params: { previewData } }"
    color="success get-started">Preview Design C</v-btn>
    <v-btn :to="{ name: 'Basic', params: { previewData } }"
    color="success get-started">Preview Design A</v-btn>
    </div>
</template>

<script>
export default {
  name: 'PreviewResume',
  props: {
    ButtonText: {
      type: String,
      required: true,
    },
    previewData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
