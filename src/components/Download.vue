<template>
  <a >
     {{ ButtonText }}
  </a>
</template>

<script>
export default {
  name: 'DownloadButton',
  props: {
    // fileName: {
    //   type: String,
    //   required: true
    // },
    // downloadData: {
    //   type: Array,
    //   required: true
    // },
    // DataTitles: {
    //   type: Array,
    //   default () {
    //     return []
    //   }
    // },
    ButtonText: {
      type: String,
      required: true,
    },
  },
  // computed: {
  //   convertData () {
  //     let contentType = '';
  //     let dData = '';
  //     let blob;
  //     let url;
  //     contentType = 'application/json';
  //     dData = JSON.stringify(this.downloadData, null, 2);
  //     blob = new Blob([dData], { type: contentType });
  //     url = window.URL.createObjectURL(blob);
  //     return url;
  //   }
  // }
};
</script>

<style scoped>
.download-button {
  display: flex;
  min-width: 46px;
  max-width: 320px;
  min-height: 46px;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  border: none;
  text-decoration: none;
  color: inherit;
}
</style>
