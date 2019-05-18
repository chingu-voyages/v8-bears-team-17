<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up menu-icon"></v-toolbar-side-icon>
      <router-link to="/">
      <v-toolbar-title class="headline text-uppercase hidden-sm-and-down">
        <span class="logo-title">Resume Builder</span>
      </v-toolbar-title>
      </router-link>
      <router-link to="/">
      <v-toolbar-title class="title text-uppercase hidden-md-and-up">
        <span class="logo-title">Resume Builder</span>
      </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          text-uppercase
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          class="nav-item"
        >
          <span>{{link.text}}</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer app clipped disable-resize-watcher v-model="drawer">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Home", route: "/" },
        { icon: "dashboard", text: "Get started", route: "/resume" }
      ]
    };
  }
};
</script>

<style>
.logo-title {
  font-family: "Gravitas One", cursive;
  color: #24a4b3;
}
.nav-item {
  font-family: "Crete Round", serif;
}

a.primary--text {
  color: #24a4b3 !important;
}

.menu-icon,
.nav-item span {
  color: #24a4b3 !important;
}

.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}

.router-link-active {
  text-decoration: none;
}
</style>
