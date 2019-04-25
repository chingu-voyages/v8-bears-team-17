<template>
  <v-flex xs12 sm6 md4>
    <v-card class="ma-2 pa-2">
      <v-card-title class="headline">{{ cardTitle }}</v-card-title>
      <div class="teal lighten-5 pa-2 ma-1">
        <v-card-text v-for="(value, key, index) in info"
        :key="index">
          <p class="label-text text-uppercase"
          >{{ capitalizeFirstLetter(key) }}</p>
          <p class="body-2">{{ value }}</p>
          <v-divider></v-divider>
        </v-card-text>
        <v-spacer></v-spacer>
      </div>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
    },
    cardTitle: {
      type: String,
    },
  },
  methods: {
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
};
</script>

<style>
.card {
  align-items: stretch;
}
.label-text {
  font-size: 10px;
}
</style>
