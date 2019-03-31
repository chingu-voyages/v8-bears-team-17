<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase hidden-sm-and-down">
      <span class="logo-title">Resume Builder</span>
    </v-toolbar-title>
    <v-toolbar-title class="title text-uppercase hidden-md-and-up">
      <span class="logo-title">Resume Builder</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat text-uppercase to="/" class="nav-item">
        <span>Home</span>
      </v-btn>
      <v-btn flat text-uppercase to="/about" class="nav-item">
        <span>About</span>
      </v-btn>
      <v-btn flat text-uppercase to="/contact" class="nav-item">
        <span>Contact</span>
      </v-btn>
      <v-btn flat text-uppercase to="/resume" class="nav-item">
        <span>Get Started</span>
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon class="hidden-md-and-up menu-icon"></v-toolbar-side-icon>
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
  color: #24a4b3;
}
.nav-item {
  font-family: "Crete Round", serif;
}
.nav-item span {
  color: #24a4b3;
}

.menu-icon i.v-icon {
  color: #24a4b3;
}
</style>
