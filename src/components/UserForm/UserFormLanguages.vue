<template>
  <v-flex xs12 sm6 md4>
    <v-card class="ma-2 pa-2 card">
      <v-card-title class="headline">
        <span>Languages</span>
        <v-spacer></v-spacer>
        <span>
          <v-btn
            small
            block
            dark
            color="#24a4b3"
            @click="addItem($event,info[0], info)"
          >
            <v-icon>add</v-icon>
          </v-btn>
        </span>
      </v-card-title>
      <v-list v-for="(item,index) in info" :key="index">
        <div class="teal lighten-5 pa-2 ma-1">
          <v-text-field type="text" label="Language"
          name="language" v-model="item.language" :error-messages="errors.collect('language')"
          v-validate.continues="{required: true, regex: /^[a-zA-Z0-9 ]*$/}"></v-text-field>
          <v-text-field type="text" label="Fluency"
          name="fluency" v-model="item.fluency" :error-messages="errors.collect('fluency')"
          v-validate.continues="{required: true, regex: /^[a-zA-Z0-9 ]*$/}"></v-text-field>
          <v-layout>
            <v-spacer></v-spacer>
            <v-btn
              dark
              color="#24a4b3"
              @click="removeItem($event,index , info)"
            >
              Delete
              <v-icon small right>delete</v-icon>
            </v-btn>
            <v-btn dark color="#24a4b3">Ok</v-btn>
          </v-layout>
        </div>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
    },
  },
  inject: ['$validator'],
  data() {
    return {
      info: this.data,
    };
  },
  methods: {
    // Generic add item
    addItem(e, source, target) {
      e.preventDefault();
      target.push(JSON.parse(JSON.stringify(source)));
    },
    // Generic remove item
    removeItem(e, index, target) {
      e.preventDefault();
      target.splice(index, 1);
    },
  },
};
</script>

<style>
</style>
