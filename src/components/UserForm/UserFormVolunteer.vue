<template>
  <v-flex xs12 sm6 md4>
    <v-card class="ma-2 pa-2 card">
      <v-card-title class="headline">
        <span>Volunteer</span>
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
      <div
        v-for="(item,index) in info"
        :key="index"
        class="teal lighten-5 pa-2 ma-1"
      >
        <v-text-field
          name="organization"
          label="Organization"
          type="text"
          placeholder="..."
          v-model="item.organization"
          :error-messages="errors.collect('organization')"
          v-validate.continues="{required: true, regex: /^[a-zA-Z0-9- ]*$/}"
        ></v-text-field>
        <v-text-field
          name="position"
          label="Position"
          type="text"
          placeholder="Position"
          v-model="item.position"
          :error-messages="errors.collect('position')"
          v-validate.continues="{required: true, regex: /^[a-zA-Z0-9 ]*$/}"
        ></v-text-field>
        <v-text-field
          name="website"
          label="Website"
          type="url"
          placeholder="Company website"
          v-model="item.website"
          :error-messages="errors.collect('website')"
          v-validate.continues="{url: true}"
        ></v-text-field>
        <v-text-field
          name="startDate"
          label="Start date"
          type="date"
          placeholder="Month/year"
          v-model="item.startDate"
        ></v-text-field>
        <v-text-field
          name="endDate"
          label="End date"
          type="date"
          placeholder="Month/year"
          v-model="item.endDate"
        ></v-text-field>
        <v-textarea
          name="summary"
          label="Summary"
          type="text"
          placeholder="Summary"
          v-model="item.summary"
          :error-messages="errors.collect('summary')"
          v-validate.continues="{regex: /^[a-zA-Z0-9.,!? ]*$/}"
        ></v-textarea>
        <template>
          <v-card-title class="subheading">
            <span>Highlights:</span>
            <v-spacer></v-spacer>
            <span>
              <v-btn
                small
                dark
                color="#24a4b3"
                @click="addItem(
            $event, {highlight:''} ,info[index].highlights
            )"
              >
                Add highlight
                <v-icon small right>add</v-icon>
              </v-btn>
            </span>
          </v-card-title>

          <v-list>
            <v-list-tile v-for="(subitem, sub_index) in item.highlights" :key="sub_index">
              <v-text-field
                name="hightlights"
                label="highlight"
                placeholder="..."
                v-model="subitem.highlight"
              ></v-text-field>
              <v-btn
                icon
                small
                @click="removeItem($event, sub_index, info[index].highlights)"
              >
                <v-icon>delete</v-icon>
              </v-btn>
              <v-btn icon small>
                <v-icon>check_circle_outline</v-icon>
              </v-btn>
            </v-list-tile>
          </v-list>
        </template>
        <v-layout>
          <v-spacer></v-spacer>
          <v-btn dark color="#24a4b3" @click="removeItem($event, index, info)">
            Delete
            <v-icon small right>delete</v-icon>
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
