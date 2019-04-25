<template>
    <v-container xs12>
      <v-layout row wrap>
        <UserinfoCard
        :info="basicsWithoutLocationProfiles(userdata.basics)"
        cardTitle="Personal Data" />
        <UserinfoCard :info="userdata.basics.location"
        cardTitle="Location" />
        <UserinfoListCard :info="userdata.basics.profiles"
        cardTitle="Social Profiles" />
        <UserinfoListCard :info="userdata.work"
        cardTitle="Work" />
        <UserinfoListCard :info="userdata.volunteer"
        cardTitle="Volunteer" />
        <UserinfoListCard :info="userdata.education"
        cardTitle="Education" />
        <UserinfoListCard :info="userdata.awards"
        cardTitle="Awards" />
        <UserinfoListCard :info="userdata.publications"
        cardTitle="Publications" />
        <UserinfoListCard :info="userdata.skills"
        cardTitle="Skills" />
        <UserinfoListCard :info="userdata.languages"
        cardTitle="Languages" />
        <UserinfoListCard :info="userdata.interests"
        cardTitle="Interests" />
        <UserinfoListCard :info="userdata.references"
        cardTitle="References" />
      </v-layout>
    </v-container>
</template>

<script>
import UserinfoCard from './UserinfoCard.vue';
import UserinfoListCard from './UserinfoListCard.vue';

export default {
  components: {
    UserinfoCard,
    UserinfoListCard,
  },
  props: {
    userdata: {
      type: Object,
    },
  },
  methods: {
    basicsWithoutLocationProfiles(data) {
      const disallowed = ['location', 'profiles'];

      const filtered = Object.keys(data)
        .filter(key => !disallowed.includes(key))
        .reduce((obj, key) => {
          // eslint-disable-next-line
          obj[key] = data[key];
          return obj;
        }, {});
      return filtered;
    },
  },
};
</script>

<style>
</style>
