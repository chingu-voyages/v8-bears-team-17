<template>
    <div>
        <form  > <!--@submit="checkForm">-->

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li >{{ errors }}</li>
    </ul>
  </p>
<!-- Basics -->
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
    <!-- End basics -->
    <!-- Profiles -->
  <div class="profiles">
    <h3>Social profiles</h3>
    <div v-for="(item,index) in userdata.basics.profiles" :key="index" class="social-profile">
    <p>
        <label for="network">Network</label>
        <input class="network" v-model="item.network"
         type="text" name="network">
    </p>
    <p>
        <label for="username">Username</label>
        <input class="username" v-model="item.username"
         type="text" name="username">
    </p>
    <p>
        <label for="url">Url</label>
        <input class="url" v-model="item.url"
         type="text" name="url">
    </p>
    </div>
  </div>
    <!-- End Profiles -->
    <!-- Work -->
</div>
    <div id="work">
    <h2>Work experiences</h2>
    <div v-for="(item,index) in userdata.work" :key="index" class="workExperience">
        <p>
            <label for="company">Company</label>
            <input class="company" v-model="item.company"
            type="text"
            name="company">
        </p>
        <p>
            <label for="position">Position</label>
            <input class="position" v-model="item.position"
            type="text"
            name="position">
        </p>
        <p>
            <label for="website">Website</label>
            <input class="website" v-model="item.website"
            type="text"
            name="website">
        </p>
        <p>
            <label for="startDate">StartDate</label>
            <input class="startDate" v-model="item.startDate"
            type="date"
            name="startDate">
        </p>
        <p>
            <label for="endDate">EndDate</label>
            <input class="endDate" v-model="item.endDate"
            type="date"
            name="endDate">
        </p>
        <p>
            <label for="summary">Summary</label>
            <textarea class="summary" v-model="item.summary"
            name="userdata.work.summary"></textarea>
        </p>
        <p v-for="(subitem,key,index) in item.highlights" :key="index">
            <label for="highlights">Highlight: </label>
            <input type="text" class="highlights" v-model="subitem.highlight"
            name="highlights">
        </p>
    </div>
    </div>
    <!-- End Work -->
    <!-- Volunteer -->
   <div id="volunteer">
    <h2>Volunteer</h2>
    <div v-for="(item,index) in userdata.volunteer" :key="index" class="volunteer">
        <p>
            <label for="organization">Organization</label>
            <input class="organization" v-model="item.organization"
            type="text"
            name="organization">
        </p>
        <p>
            <label for="position">Position</label>
            <input class="position" v-model="item.position"
            type="text"
            name="position">
        </p>
        <p>
            <label for="website">Website</label>
            <input class="website" v-model="item.website"
            type="text"
            name="website">
        </p>
        <p>
            <label for="startDate">StartDate</label>
            <input class="startDate" v-model="item.startDate"
            type="date"
            name="startDate">
        </p>
        <p>
            <label for="endDate">EndDate</label>
            <input class="endDate" v-model="item.endDate"
            type="date"
            name="endDate">
        </p>
        <p>
            <label for="summary">Summary</label>
            <textarea class="summary" v-model="item.summary"
            name="userdata.work.summary"></textarea>
        </p>
        <p v-for="(subitem,key,index) in item.highlights" :key="index">
            <label for="highlights">Highlight: </label>
            <input type="text" class="highlights" v-model="subitem.highlight"
            name="highlights">
        </p>
    </div>
    </div>
    <!-- End Volunteer -->
    <!-- Education -->
    <div id="education">
    <h2>Education</h2>
    <div v-for="(item,index) in userdata.education" :key="index" class="education">
        <p>
            <label for="institution">Institution</label>
            <input class="institution" v-model="item.institution"
            type="text"
            name="institution">
        </p>
        <p>
            <label for="area">Area</label>
            <input class="area" v-model="item.area"
            type="text"
            name="area">
        </p>
        <p>
            <label for="studyType">Study type</label>
            <input class="studyType" v-model="item.studyType"
            type="text"
            name="studyType">
        </p>
        <p>
            <label for="gpa">gpa</label>
            <input class="gpa" v-model="item.gpa"
            type="text"
            name="gpa">
        </p>
        <p>
            <label for="startDate">StartDate</label>
            <input class="startDate" v-model="item.startDate"
            type="date"
            name="startDate">
        </p>
        <p>
            <label for="endDate">EndDate</label>
            <input class="endDate" v-model="item.endDate"
            type="date"
            name="endDate">
        </p>
        <p v-for="(subitem,key,index) in item.courses" :key="index">
            <label for="courses">Course: </label>
            <input type="text" class="courses" v-model="subitem.course"
            name="courses">
        </p>
    </div>
    </div>
    <!-- End Education -->
    <!-- Awards -->
    <div id="awards">
    <h2>Awards</h2>
    <div v-for="(item,index) in userdata.awards" :key="index" class="award">
        <p>
            <label for="title">Title</label>
            <input class="title" v-model="item.title"
            type="text"
            name="title">
        </p>
        <p>
            <label for="date">Date</label>
            <input class="date" v-model="item.date"
            type="date"
            name="date">
        </p>
        <p>
            <label for="awarder">Awarder</label>
            <input class="awarder" v-model="item.awarder"
            type="text"
            name="awarder">
        </p>
        <p>
            <label for="summary">Summary</label>
            <textarea class="summary" v-model="item.summary"
            name="summary"></textarea>
        </p>
    </div>
    </div>
    <!-- End Awards -->
    <!-- Publications -->
    <div id="publications">
    <h2>Publications</h2>
    <div v-for="(item,index) in userdata.publications" :key="index" class="publication">
        <p>
            <label for="name">Name</label>
            <input class="name" v-model="item.name"
            type="text"
            name="name">
        </p>
        <p>
            <label for="publisher">Publisher</label>
            <input class="publisher" v-model="item.publisher"
            type="text"
            name="publisher">
        </p>
        <p>
            <label for="releaseDate">Release date</label>
            <input class="releaseDate" v-model="item.releaseDate"
            type="date"
            name="releaseDate">
        </p>
        <p>
            <label for="website">Website</label>
            <input class="website" v-model="item.website"
            type="text"
            name="website">
        </p>
        <p>
            <label for="summary">Summary</label>
            <textarea class="summary" v-model="item.summary"
            name="summary"></textarea>
        </p>
    </div>
    </div>
    <!-- End publications -->
    <!-- Skills -->
    <div id="skills">
    <h2>Skills</h2>
    <div v-for="(item,index) in userdata.skills" :key="index" class="skills">
        <p>
            <label for="name">Name</label>
            <input class="name" v-model="item.name"
            type="text"
            name="name">
        </p>
        <p>
            <label for="level">Level</label>
            <input class="level" v-model="item.level"
            type="text"
            name="level">
        </p>
        <p v-for="(subitem,key,index) in item.keywords" :key="index">
            <label for="keywords">Keyword: </label>
            <input type="text" class="courses" v-model="subitem.keyword"
            name="keywords">
        </p>
    </div>
    </div>
    <!-- End skills -->
    <!-- Languages -->
    <div id="languages">
    <h2>Languages</h2>
    <div v-for="(item,index) in userdata.languages" :key="index" class="languages">
        <p>
            <label for="language">Language</label>
            <input class="language" v-model="item.language"
            type="text"
            name="language">
        </p>
        <p>
            <label for="fluency">Fluency</label>
            <input class="fluency" v-model="item.fluency"
            type="text"
            name="fluency">
        </p>
    </div>
    </div>
    <!-- End languages -->
    <!-- Interests -->
    <div id="interests">
    <h2>Skills</h2>
    <div v-for="(item,index) in userdata.interests" :key="index" class="interests">
        <p>
            <label for="name">Name</label>
            <input class="name" v-model="item.name"
            type="text"
            name="name">
        </p>
        <p v-for="(subitem,key,index) in item.keywords" :key="index">
            <label for="keywords">Keyword: </label>
            <input type="text" class="courses" v-model="subitem.keyword"
            name="keywords">
        </p>
    </div>
    </div>
    <!-- End skills -->
    <!-- References -->
    <div id="references">
    <h2>References</h2>
    <div v-for="(item,index) in userdata.references" :key="index" class="references">
        <p>
            <label for="name">Name</label>
            <input class="name" v-model="item.name"
            type="text"
            name="name">
        </p>
        <p>
            <label for="reference">Reference</label>
            <input class="reference" v-model="item.reference"
            type="text"
            name="reference">
        </p>
    </div>
    </div>
    <!-- End references -->
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
