<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span class="logo-title">Resume Builder</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat text-uppercase to="/" class="nav-item">Home</v-btn>
      <v-btn flat text-uppercase to="/about" class="nav-item">About</v-btn>
      <v-btn flat text-uppercase to="/contact" class="nav-item">Contact</v-btn>
      <v-btn flat text-uppercase to="/resume" class="nav-item">Get Started</v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped>
.logo-title {
  font-family: "Gravitas One", cursive;
}
.nav-item {
  font-family: "Crete Round", serif;
}
</style>
