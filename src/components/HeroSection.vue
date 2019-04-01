<template>
  <section>
    <v-parallax :src="require('@/assets/hero.jpg')" class="hero-image">
      <v-layout column align-center justify-center>
        <h1 class="display-1 mb-5 hero-title hidden-md-and-up">Resumes has never been easier</h1>
        <h1 class="display-3 hero-title hidden-sm-and-down">Resumes has never been easier</h1>
        <div class="subheading mb-4 hidden-md-and-up">
          Resume builder lets you build your resume from a
          form or JSON file and personalize it through themes.
        </div>
        <div class="headline mb-4 hidden-sm-and-down">
          Resume builder lets you build your resume from a
          form or JSON file and personalize it through themes.
        </div>
        <v-btn color="success get-started">Get started</v-btn>
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
  height: calc(100vh + 56px) !important;
}
.hero-image img {
  opacity: 0.25 !important;
}
h1.hero-title {
  font-family: "Crete Round", serif;
  color: #3c5779;
  margin-top: -40%;
}
.subheading,
.headline {
  color: #24a4b3;
}
button.get-started {
  align-self: flex-start;
  margin-left: 0;
}
</style>
