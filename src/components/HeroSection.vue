<template>
  <section>
    <v-parallax :src="require('@/assets/hero.jpg')" class="hero-image">
      <v-layout column align-center justify-center>
        <h1 class="display-1 hidden-md-and-up">
          <span class="hero-title">Resumes has never been easier</span>
        </h1>
        <h1 class="display-3 hidden-sm-and-down">
          <span class="hero-title">Resumes has never been easier</span>
        </h1>
        <div class="subheading pl-2 mb-4 hidden-md-and-up">
          Resume builder lets you build your resume from a
          form or JSON file and personalize it through themes.
        </div>
        <div class="headline pl-2 mb-4 hidden-sm-and-down">
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
.hero-image {
  height: 100vh;
}
.hero-image img {
  opacity: 0.25 !important;
}
.hero-title {
  font-family: "Crete Round", serif;
  color: #3c5779;
}
.subheading,
.headline {
  color: #24a4b3;
}
</style>
