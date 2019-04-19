<template>
    <!-- <a :href="loadBasicTheme">
        {{ButtonText}}
    </a> -->
    <v-btn to="/basicTheme" color="success get-started">Preview resume</v-btn>
</template>

<script>
export default {
  name: 'PreviewResume',
  props: {
    ButtonText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
