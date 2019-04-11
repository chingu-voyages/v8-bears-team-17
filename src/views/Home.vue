<template>
  <div>
    <HeroSection/>
    <Features/>
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import Features from '../components/Features.vue';

export default {
  name: 'Home',
  components: {
    HeroSection,
    Features,
  },
};
</script>
