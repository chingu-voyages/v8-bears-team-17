<template>
    <div>
        <form  > <!--@submit="checkForm">-->

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li >{{ errors }}</li>
    </ul>
  </p>
<div id="personalData">
  <h2>Personal data</h2>
  <p>
    <label for="name">Name</label>
    <input id="name" v-model="userdata.basics.name"
      type="text"
      name="name">
  </p>
  <p>
    <label for="label">Label</label>
    <input id="label" v-model="userdata.basics.label" type="text" name="label">
  </p>
  <p>
    <label for="picture">Picture</label>
    <input id="picture" v-model="userdata.basics.picture" type="text" name="picture">
  </p>
  <p>
    <label for="email">Email</label>
    <input id="email" v-model="userdata.basics.email" type="text" name="email">
  </p>
  <p>
    <label for="phone">Phone</label>
    <input id="phone" v-model="userdata.basics.phone" type="text" name="phone">
  </p>
  <p>
    <label for="website">Website</label>
    <input id="website" v-model="userdata.basics.website" type="text" name="website">
  </p>
  <p>
    <label for="summary">Summary</label>
    <textarea id="summary" v-model="userdata.basics.summary" type="text" name="summary">
    </textarea>
  </p>
  <div class="location">
    <h3>Location</h3>
    <p>
        <label for="address">Address</label>
        <input class="address" v-model="userdata.basics.location.address"
         type="text" name="address">
    </p>
    <p>
        <label for="postalCode">PostalCode</label>
        <input class="postalCode" v-model="userdata.basics.location.postalcode"
         type="text" name="postalCode">
    </p>
    <p>
        <label for="city">City</label>
        <input class="city" v-model="userdata.basics.location.city"
         type="text" name="city">
    </p>
    <p>
        <label for="countryCode">CountryCode</label>
        <input class="countryCode" v-model="userdata.basics.location.countryCode"
         type="text" name="countryCode">
    </p>
    <p>
        <label for="region">Region</label>
        <input class="region" v-model="userdata.basics.location.region"
         type="text" name="region">
    </p>
  </div>
  <div class="profiles">
    <h3>Social profiles</h3>
    <p>
        <label for="network">Network</label>
        <input class="network" v-model="userdata.basics.profiles.network"
         type="text" name="network">
    </p>
    <p>
        <label for="username">Username</label>
        <input class="username" v-model="userdata.basics.profiles.username"
         type="text" name="username">
    </p>
    <p>
        <label for="url">Url</label>
        <input class="url" v-model="userdata.basics.profiles.url"
         type="text" name="url">
    </p>
  </div>

</div>
    <div id="work">
    <h2>Work experiences</h2>
    <div class="workExperience">
        <p>
            <label for="company">Company</label>
            <input class="company" v-model="userdata.work.company"
            type="text"
            name="company">
        </p>
        <p>
            <label for="position">Position</label>
            <input class="position" v-model="userdata.work.position"
            type="text"
            name="position">
        </p>
        <p>
            <label for="website">Website</label>
            <input class="website" v-model="userdata.work.website"
            type="text"
            name="website">
        </p>
        <p>
            <label for="startDate">StartDate</label>
            <input class="startDate" v-model="userdata.work.startDate"
            type="date"
            name="startDate">
        </p>
        <p>
            <label for="endDate">EndDate</label>
            <input class="endDate" v-model="userdata.work.endDate"
            type="date"
            name="endDate">
        </p>
        <p>
            <label for="summary">Sumamry</label>
            <textarea class="summary" v-model="summary"
            name="userdata.work.summary"></textarea>
        </p>
        <p>
            <label for="highlights">highlights</label>
            <input type="text" class="highlights" v-model="userdata.work.highlights"
            name="highlights">
        </p>
    </div>
    </div>
</form>
</div>
</template>

<script>
export default {
  props: {
    userdata: {
      type: Object,
    },
  },
  data() {
    return {
      errors: [],
    };
  },
  methods: {

  },
};
</script>

<style scoped>


</style>
