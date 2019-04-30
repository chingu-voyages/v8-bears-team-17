<template>
  <v-flex xs12 sm6 md4>
    <v-card class="ma-2 pa-2 card">
      <v-card-title class="headline">
        <span>Skills</span>
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
            name="name"
            label="Skill name"
            type="text"
            placeholder="..."
            v-model="item.name"
            :error-messages="errors.collect('name')"
          v-validate.continues="{required: true, regex: /^[a-zA-Z0-9 ]*$/}"
          ></v-text-field>
          <v-text-field
            name="level"
            label="Level"
            type="text"
            placeholder="..."
            v-model="item.level"
            :error-messages="errors.collect('level')"
          v-validate.continues="{regex: /^[a-zA-Z0-9 ]*$/}"
          ></v-text-field>

          <template>
            <v-card-title class="subheading">
              <span>Keywords:</span>
              <v-spacer></v-spacer>
              <span>
                <v-btn
                  small
                  dark
                  color="#24a4b3"
                  @click="addItem(
            $event, {keyword:''} , info[index].keywords
            )"
                >
                  Add course
                  <v-icon small right>add</v-icon>
                </v-btn>
              </span>
            </v-card-title>

            <v-list>
              <v-list-tile v-for="(subitem,key,sub_index) in item.keywords" :key="sub_index">
                <v-text-field
                  name="keyword"
                  label="Keyword"
                  placeholder="..."
                  v-model="subitem.keyword"
                ></v-text-field>
                <v-btn
                  icon
                  small
                  @click="removeItem(
                  $event,sub_index,info[index].keywords)"
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
            <v-btn
              dark
              color="#24a4b3"
              @click="removeItem($event,info[0], info)"
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
