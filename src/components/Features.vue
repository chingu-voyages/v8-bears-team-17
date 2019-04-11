<template>
  <v-container>
    <v-layout row justify-space-between>
      <v-img max-width="500" :src="require('@/assets/img1.jpg')" class="mr-3"></v-img>
      <v-img max-width="500" :src="require('@/assets/img2.jpg')" class="ml-3"></v-img>
    </v-layout>
    <v-layout row class="hidden-md-and-up">
      <div class="subheading mb-4 mt-4 feature-text">
        <p>
          Choose a style that suits
          <strong>you</strong>.
        </p>
      </div>
    </v-layout>
    <v-layout row align-center justify-center class="hidden-sm-and-down">
      <div class="display-1 mb-5 mt-5 feature-text-desktop">
        Choose a style that suits
        <strong>you</strong>.
      </div>
    </v-layout>
    <v-layout row justify-space-between>
      <v-img max-width="500" :src="require('@/assets/img3.jpg')" class="mr-3"></v-img>
      <v-img  max-width="500"  :src="require('@/assets/img4.jpg')"  class="ml-3"></v-img>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Features',
};
</script>

<style>
.subheading,
.display-1 {
  color: #24a4b3;
}
.feature-text {
  width: 100%;
  text-align: center;
}
.feature-text-desktop {
  max-width: 20rem;
}
</style>
