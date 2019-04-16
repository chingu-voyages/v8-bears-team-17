<template>
  <v-app>
    <Navigation/>

    <v-content>
      <router-view></router-view>
    </v-content>
    <SiteFooter/>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue';
import SiteFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    SiteFooter,
  },
  data() {
    return {
      //
    };
  },
};
</script>
