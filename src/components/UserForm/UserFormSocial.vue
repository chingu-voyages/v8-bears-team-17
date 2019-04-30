<template>
  <v-flex xs12 sm6 md4>
    <v-card class="ma-2 pa-2">
      <v-card-title class="headline">
        <span>Social profiles</span>
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
      <div
        v-for="(item,index) in info"
        :key="index"
        class="teal lighten-5 pa-2 ma-1"
      >
        <v-text-field
          name="network"
          label="Social media"
          type="text"
          placeholder="..."
          v-model="item.network"
          :error-messages="errors.collect('network')"
          v-validate.continues="{required: true, regex: /^[a-zA-Z0-9 ]*$/}"
        ></v-text-field>
        <v-text-field
          name="username"
          label="User name"
          type="text"
          placeholder="..."
          v-model="item.username"
          :error-messages="errors.collect('username')"
          v-validate.continues="{required: true, regex: /^[a-zA-Z0-9-]*$/}"
        ></v-text-field>
        <v-text-field name="url" label="Url"
        type="url" placeholder="..."
        v-model="item.url"
        :error-messages="errors.collect('url')"
          v-validate.continues="{url: true}"
          ></v-text-field>
        <v-layout>
          <v-spacer></v-spacer>
          <v-btn
            dark
            color="#24a4b3"
            @click="removeItem($event,index, info)"
          >
            <v-icon>delete</v-icon>
          </v-btn>
          <v-btn dark color="#24a4b3">Ok</v-btn>
        </v-layout>
      </div>
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
