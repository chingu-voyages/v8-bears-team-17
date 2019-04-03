<template>
  <v-container>
    <v-layout row>
      <v-img :src="require('@/assets/img1.jpg')" class="mr-4"></v-img>
      <v-img :src="require('@/assets/img2.jpg')"></v-img>
    </v-layout>
    <v-layout row>
      <div class="subheading mb-4 mt-4 hidden-md-and-up feature-text">
        <p>
          Choose a style that suits
          <strong>you</strong>.
        </p>
      </div>
    </v-layout>
    <v-layout row>
      <div class="headline pl-2 mb-4 hidden-sm-and-down">
        Choose a style that suits
        <strong>you</strong>.
      </div>
    </v-layout>
    <v-layout row>
      <v-img :src="require('@/assets/img3.jpg')" class="mr-4"></v-img>
      <v-img :src="require('@/assets/img4.jpg')"></v-img>
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
.headline {
  color: #24a4b3;
}
.feature-text {
  width: 100%;
  text-align: center;
}
</style>
