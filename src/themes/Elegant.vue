<template>
  <div class="elegant">
    <section class="img">
      <!-- Profile pic, name and job title -->
      <img
        v-if="previewData.basics.picture"
        :src="previewData.basics.picture"
        alt="profile picture"
      >
    </section>

    <!-- keeping summary in seperate section for layout flexibility -->
    <section class="summary">
      <h2>Summary</h2>
      <p>{{previewData.basics.summary}}</p>
    </section>

    <div id="left-col">
      <!-- Contact info - let's use font-awesome(will implement later) -->
      <h1>{{previewData.basics.name}}</h1>
      <h2>{{previewData.basics.label}}</h2>
      <section class="contact-info">
        <h2>Contact information</h2>
        <ul>
          <li>
            <i class="fas fa-at"></i>
            {{previewData.basics.email}}
          </li>
          <li>
            <i class="fas fa-phone"></i>
            {{previewData.basics.phone}}
          </li>
          <li>
            <i class="fas fa-globe"></i>
            <a :href="previewData.basics.website">{{previewData.basics.website}}</a>
          </li>
        </ul>
      </section>
      <!-- Social network profiles /personally I think this belongs with contact info-->
      <section class="social-profiles">
        <ul v-for="profile in previewData.basics.profiles" :key="profile">
          <li>
            <!-- TODO: make dynamic -->
            <i class="fab fa-twitter"></i>
            <a :href="profile.url">{{profile.url}}</a>
          </li>
        </ul>
      </section>
      <!-- Location data -->
      <section class="location">
        <address>
          <p>{{previewData.basics.location.address}}</p>
          <p>{{previewData.basics.location.postalCode}}</p>
          <p>{{previewData.basics.location.city}}</p>
          <p>{{previewData.basics.location.region}}</p>
          <p>{{previewData.basics.location.countryCode}}</p>
        </address>
      </section>

      <!-- Languages -->
      <section class="languages">
        <h2>Language skills</h2>
        <div v-for="language in previewData.languages" :key="language">
          <p>{{language.language}}</p>
          <p>{{language.fluency}}</p>
        </div>
      </section>

      <!-- Awards -->
      <section class="awards">
        <h2>Awards</h2>
        <div v-for="award in previewData.awards" :key="award">
          <p>{{award.title}}</p>
          <p>{{award.date}}</p>
          <p>{{award.awarder}}</p>
          <p>{{award.summary}}</p>
        </div>
      </section>
      <!-- References -->
      <section class="references">
        <h2>References</h2>
        <div v-for="reference in previewData.references" :key="reference">
          <p>{{reference.name}} | {{reference.reference}}</p>
        </div>
      </section>
      <!-- Interests -->
      <section class="interests">
        <h2>Interests</h2>
        <div v-for="interest in previewData.interests" :key="interest">
          <p>{{interest.name}}</p>
          <ul>
            <li v-for="keyword in interest.keywords">{{keyword.keyword}}</li>
          </ul>
        </div>
      </section>
    </div>
    <!-- End right-col -->

    <div class="right-col">
      <!-- Skills -->
      <section class="skills">
        <h2>
          <i class="fas fa-tools"></i>Skills
        </h2>
        <div v-for="skill in previewData.skills" :key="skill">
          <span>
            <p>
              {{skill.name}} |
              {{skill.level}}
            </p>
          </span>

          <!--skill keywords  -->

          <v-chip dark class="pink" v-for="keyword in skill.keywords">{{keyword.keyword}}</v-chip>
        </div>
      </section>
      <!-- Work experience -------------------------------------------------------------------------------->
      <section class="work">
        <h2>
          <i class="fas fa-briefcase"></i>Work experience
        </h2>
        <div v-for="work in previewData.work" :key="work">
          <span class="subheading">{{work.position}} | {{work.company}}</span>
          <span class="date">{{work.startDate}} - {{work.endDate}}</span>

          <p>{{work.summary}}</p>
          <!--work highlights  ----------------------------------------------------------------------->
          <ul>
            <li v-for="highlight in work.highlights" :key="highlight">{{highlight.highlight}}</li>
          </ul>
        </div>
      </section>
      <!-- Education -------------------------------------------------------------------------------------------->
      <section class="education">
        <h2>
          <i class="fas fa-graduation-cap"></i>Education
        </h2>
        <div v-for="education in previewData.education" :key="education">
          <span class="subheading">{{education.studyType}} in {{education.area}}</span>
          <p>{{education.institution}}</p>

          <span class="date">{{education.startDate}}- {{education.endDate}}</span>
          <!--education courses  -->
          <h3>Courses</h3>
          <ul>
            <li v-for="course in education.courses" :key="course">{{course.course}}</li>
          </ul>
        </div>
      </section>
      <!-- Volunteer experience -->
      <section class="experience">
        <h2>
          <i class="fas fa-hands-helping"></i>Volunteer experience
        </h2>
        <div v-for="experience in previewData.volunteer" :key="experience">
          <span class="subheading">{{experience.position}} | {{experience.company}}</span>
          <span class="date">{{experience.startDate}} - {{experience.endDate}}</span>
          <p>{{experience.summary}}</p>
          <!--volunteer highlights  -->
          <ul>
            <li v-for="highlight in experience.highlights" :key="highlight">{{highlight.highlight}}</li>
          </ul>
        </div>
      </section>

      <!-- Publications -->
      <section class="publications">
        <h2>
          <i class="far fa-newspaper"></i>Publications
        </h2>
        <div v-for="publication in previewData.publications" :key="publication">
          <span class="subheading">{{publication.name}} | {{publication.publisher}}</span>
          <span class="date">{{publication.releaseDate}} | {{publication.website}}</span>
          <p>{{publication.summary}}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    previewData: {
      type: Object,
      required: true
    }
  },
  //TODO: format date to month/year
  filters: {
    dateFormat: function(value) {
      if (!value) return "";
      value = value.toString();
      let dateFormatted = "";
      console.log(value);
    }
  },
  created() {},
  computed: {
    test() {
      const dData = JSON.stringify(this.previewData, null, 2);
      console.log(dData);
      return dData;
    }
  }
};
</script>

<style scoped>
/* Simulate A4 */
.elegant {
  font-family: "Roboto" !important;
  padding: 10mm;
  width: 210mm;
  height: 297mm;

  background-color: #fff;
  box-shadow: 5px 5px 5px 5px grey;
  margin: 40px auto;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 1cm;
}

.summary {
  grid-column: 3/6;
  padding-right: 4cm;
}
.summary h2 {
  margin: 0;
}
img {
  grid-column: 1/3;
  border-radius: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
}
#left-col {
  grid-column: 1/3;
}
#right-col {
  grid-column: 3/6;
  padding-right: 4cm;
}
/* Font & text props */
h1,
h2 {
  margin-top: 1em;
  color: cyan;
  font-weight: 400;
}
.subheading {
  color: black;
}
a {
  text-decoration: none;
  color: rgb(212, 42, 136);
  cursor: pointer;
}
.date {
  font-size: 10pt;
}
i {
  margin-right: 5px;
}

.location {
  display: none;
}

.contact-info ul,
.social-profiles ul {
  list-style: none;
  padding: 0;
}
.work {
  width: 13cm;
}
.work::before {
  border-bottom: 1px solid pink;
}

.work > div {
  display: flex;
  flex-direction: column;
}

/* Print styles */

@media print {
  nav {
    display: none !important;
    margin: 0;
    padding: 0;
  }
  footer {
    display: none !important;
    margin: 0;
    padding: 0;
  }
  .elegant {
    background-color: #fff;
    box-shadow: none;
  }
  h1,
  h2,
  h3 {
    page-break-after: avoid;
    page-break-inside: avoid;
  }

  h1 + p,
  h2 + p,
  h3 + p {
    page-break-before: avoid;
  }
  p {
    font-weight: 300;
    font-size: 10pt;
    line-height: 17pt;
  }

  @page {
    size: a4;
  }
}
</style>
