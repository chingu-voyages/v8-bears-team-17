<template>
  <section class="hero-section">
    <v-layout column align-center justify-center class="pa-3">
        <h1 class="display-1 mb-5 hero-title hidden-md-and-up">Resumes has never been easier</h1>
        <h1 class="display-3 mb-5 hero-title hidden-sm-and-down">Resumes has never been easier</h1>
      <article >
        <div class="subheading mb-4 hidden-md-and-up">
          Resume builder lets you build your resume from a
          form or JSON file and personalize it through themes.
        </div>
        <div class="headline mb-4 hidden-sm-and-down">
          Resume builder lets you build your resume from a
          form or JSON file and personalize it through themes.
        </div>
        <v-btn to="/resume" color="success get-started">Get started</v-btn>
      </article>
    </v-layout>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style>
.hero-section {
  height: 100vh;
  background-image: linear-gradient(
      rgba(250, 250, 250, 0.75),
      rgba(250, 250, 250, 0.75)
    ),
    url("../assets/hero.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.layout {
  height: 100%;
}

article {
  max-width: 30rem;
}
h1.hero-title {
  font-family: "Crete Round", serif;
  color: #3c5779;
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
