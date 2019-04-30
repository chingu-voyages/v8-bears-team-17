<template>
  <v-flex xs12 sm6 md4>
    <v-card class="ma-2 pa-2 card">
      <v-card-title class="headline">
        <span>Education</span>
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
          name="institution"
          type="text"
          label="Institution"
          placeholder="..."
          v-model="item.institution"
          :error-messages="errors.collect('institution')"
          v-validate.continues="{required: true, regex: /^[a-zA-Z0-9- ]*$/}"
        ></v-text-field>
        <v-text-field
          name="area"
          type="text"
          label="Area"
          placeholder="..."
          v-model="item.area"
          :error-messages="errors.collect('area')"
          v-validate.continues="{required: true, regex: /^[a-zA-Z0-9- ]*$/}"
        ></v-text-field>
        <v-text-field
          name="studyType"
          type="text"
          label="Field of study"
          placeholder="..."
          v-model="item.studyType"
          :error-messages="errors.collect('studyType')"
          v-validate.continues="{required: true, regex: /^[a-zA-Z0-9.,!? ]*$/}"
        ></v-text-field>
        <v-text-field name="gpa" type="text"
        label="gpa" placeholder="..." v-model="item.gpa"
        :error-messages="errors.collect('gpa')"
          v-validate.continues="{required: true, regex: /^[a-zA-Z0-9.,!? ]*$/}"></v-text-field>
        <v-text-field
          name="startDate"
          type="date"
          label="Start date"
          placeholder="..."
          v-model="item.startDate"
        ></v-text-field>
        <v-text-field
          name="endDate"
          type="date"
          label="End date"
          placeholder="..."
          v-model="item.endDate"
        ></v-text-field>

        <template>
          <v-card-title class="subheading">
            <span>Courses:</span>
            <v-spacer></v-spacer>
            <span>
              <v-btn
                small
                dark
                color="#24a4b3"
                @click="addItem(
            $event, {course:''} ,info[index].courses
            )"
              >
                Add course
                <v-icon small right>add</v-icon>
              </v-btn>
            </span>
          </v-card-title>

          <v-list>
            <v-list-tile v-for="(item,index) in item.courses" :key="index">
              <v-text-field
                name="course"
                label="course name"
                placeholder="..."
                v-model="item.course"
              ></v-text-field>
              <v-btn
                icon
                small
                @click="removeItem($event, index, info[index].courses)"
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
          <v-btn dark color="#24a4b3" @click="removeItem($event,index, info)">
            Education {{index+1}}
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
