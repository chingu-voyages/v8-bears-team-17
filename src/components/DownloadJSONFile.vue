<template>
    <a :href="convertData"
       :download="`${fileName}.json`">
        {{ButtonText}}
    </a>
</template>

<script>
export default {
  name: 'DownloadJSONFile',
  props: {
    ButtonText: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    downloadData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    convertData() {
      console.log('Dentro convertData');
      let contentType = '';
      contentType = 'application/json';
      const dData = JSON.stringify(this.downloadData, null, 2);
      const blob = new Blob([dData], { type: contentType });
      const url = window.URL.createObjectURL(blob);
      return url;
    },
  },
};
</script>

<style scoped>

</style>
