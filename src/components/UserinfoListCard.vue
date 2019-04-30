<template>
  <v-flex xs12 sm6 md4>
    <v-card class="ma-2 pa-2">
      <v-card-title class="headline">{{ cardTitle }}</v-card-title>
      <div class="teal lighten-5 pa-2 ma-1"
      v-for="(item, index) in info" :key="index">
        <v-card-text v-for="(value, key, index) in item"
         :key="index">
          <p class="label-text text-uppercase"
          >{{ capitalizeFirstLetter(key) }}</p>
          <p class="body-2"
          v-if="typeof value === 'string'">{{ value }}</p>
          <div v-else
          v-for="(item, idx) in value" :key="idx">
          <span v-for="(val, key, index) in item"
           :key="index">{{ val}} </span>
          </div>
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
      type: Array,
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
