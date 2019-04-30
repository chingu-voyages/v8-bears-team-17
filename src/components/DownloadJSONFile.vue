<template>
  <div>
    <v-btn color="#24a4b3">
      <a :href="convertData" :download="`${fileName}.json`">{{ButtonText}}</a>
      <v-icon right color="white">cloud_download</v-icon>
    </v-btn>
  </div>
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
a {
  text-decoration: none;
  color: white;
}
</style>
