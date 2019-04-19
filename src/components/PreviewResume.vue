<template>
    <a>
        {{ButtonText}}
    </a>
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
