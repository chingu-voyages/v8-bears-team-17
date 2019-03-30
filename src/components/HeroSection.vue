<template>
  <!-- <section class="hero"></section> -->
  <section>
    <v-parallax :src="require('@/assets/hero.jpg')" height="100%">
      <v-layout column align-center justify-center class="white-text">
        <h1 class="display-3">
          <span class="hero-title">Resumes has never been easier</span>
        </h1>
        <div class="subheading pl-2 mb-4">
          Resume builder lets you build your resume from a
          form or JSON file and personalize it through themes.
        </div>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style>
.hero-title {
  font-family: "Crete Round", serif;
}
</style>
