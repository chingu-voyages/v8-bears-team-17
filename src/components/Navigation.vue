<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>Resume Builder</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat text-uppercase to="/">Home</v-btn>
      <v-btn flat text-uppercase to="/about">About</v-btn>
      <v-btn flat text-uppercase to="/contact">Contact</v-btn>
      <v-btn flat text-uppercase to="/resume">Get Started</v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style>
</style>
