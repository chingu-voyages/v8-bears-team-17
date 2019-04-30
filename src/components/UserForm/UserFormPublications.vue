<template>
  <v-flex xs12 sm6 md4>
    <v-card class="ma-2 pa-2 card">
      <v-card-title class="headline">
        <span>Publication</span>
        <v-spacer></v-spacer>
        <span>
          <v-btn
            small
            block
            dark
            color="#24a4b3"
            @click="addItem($event, info[0], info)"
          >
            <v-icon>add</v-icon>
          </v-btn>
        </span>
      </v-card-title>
      <v-list v-for="(item,index) in info" :key="index">
        <div class="teal lighten-5 pa-2 ma-1">
          <v-text-field
            name="publication"
            label="Publication"
            type="text"
            placeholder="..."
            v-model="item.name"
            :error-messages="errors.collect('publication')"
          v-validate.continues="{required: true, regex: /^[a-zA-Z0-9 ]*$/}"
          ></v-text-field>
          <v-text-field
            name="publisher"
            label="Publisher"
            type="text"
            placeholder="..."
            v-model="item.publisher"
            :error-messages="errors.collect('publisher')"
          v-validate.continues="{required: true, regex: /^[a-zA-Z0-9 ]*$/}"
          ></v-text-field>
          <v-text-field
            name="releaseDate"
            label="Release date"
            type="date"
            placeholder="..."
            v-model="item.releaseDate"
          ></v-text-field>
          <v-text-field
            name="website"
            label="Website"
            type="url"
            placeholder="www."
            v-model="item.website"
            :error-messages="errors.collect('website')"
          v-validate.continues="{url: true}"
          ></v-text-field>
          <v-textarea
            name="summary"
            label="Summary"
            type="text"
            placeholder="..."
            v-model="item.summary"
            :error-messages="errors.collect('summary')"
          v-validate.continues="{regex: /^[a-zA-Z0-9.,!? ]*$/}"
          ></v-textarea>
          <v-layout>
            <v-spacer></v-spacer>
            <v-btn
              dark
              color="#24a4b3"
              @click="removeItem($event, info[0], info)"
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
