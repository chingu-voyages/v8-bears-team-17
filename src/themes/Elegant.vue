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

      <!-- Skills -->
      <section class="skills">
        <h2>Skills</h2>
        <div v-for="skill in previewData.skills" :key="skill">
          <span>
            <p>
              {{skill.name}} |
              {{skill.level}}
            </p>
          </span>

          <!--skill keywords  -->
          <div>
            <ul>
              <li v-for="keyword in skill.keywords">{{keyword.keyword}}</li>
            </ul>
          </div>
        </div>
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
    </div>

    <div class="right-col">
      <!-- Work experience -->
      <section class="work">
        <h2>Work experience</h2>
        <div v-for="work in previewData.work" :key="work">
          <span>
            <strong>{{work.position}} | {{work.company}}</strong>
          </span>
          <span>
            <p>{{work.startDate}} - {{work.endDate}}</p>
          </span>

          <p>{{work.summary}}</p>
          <!--work highlights  -->
          <ul>
            <li v-for="highlight in work.highlights" :key="highlight">{{highlight.highlight}}</li>
          </ul>
        </div>
      </section>

      <!-- Volunteer experience -->
      <section class="experience">
        <h2>Volunteer experience</h2>
        <div v-for="experience in previewData.volunteer" :key="experience">
          <span>
            <strong>{{experience.position}} | {{experience.company}}</strong>
          </span>
          <span>
            <p>{{experience.startDate}} - {{experience.endDate}}</p>
          </span>
          <p>{{experience.summary}}</p>
          <!--volunteer highlights  -->
          <ul>
            <li v-for="highlight in experience.highlights" :key="highlight">{{highlight.highlight}}</li>
          </ul>
        </div>
      </section>

      <!-- Education -->
      <section class="education">
        <h2>Education</h2>
        <div v-for="education in previewData.education" :key="education">
          <span>
            <strong>{{education.studyType}} in {{education.area}}</strong>
          </span>
          <p>{{education.institution}}</p>
          <span>
            <p>{{education.startDate}}- {{education.endDate}}</p>
          </span>
          <!--education courses  -->
          <h3>Courses</h3>
          <ul>
            <li v-for="course in education.courses" :key="course">{{course.course}}</li>
          </ul>
        </div>
      </section>

      <!-- Publications -->
      <section class="publications">
        <h2>Publications</h2>
        <div v-for="publication in previewData.publications" :key="publication">
          <span>
            <strong>{{publication.name}} | {{publication.publisher}}</strong>
          </span>
          <span>
            <p>{{publication.releaseDate}} | {{publication.website}}</p>
          </span>
          <p>{{publication.summary}}</p>
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

      <!-- References -->
      <section class="references">
        <h2>References</h2>
        <div v-for="reference in previewData.references" :key="reference">
          <p>{{reference.name}} | {{reference.reference}}</p>
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
  padding: 10mm;
  width: 210mm;
  height: 297mm;

  background-color: #fff;
  box-shadow: 5px 5px 5px 5px grey;
  margin: 40px auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.summary {
  grid-column: 2/4;
}
.summary h2 {
  margin: 0;
}
img {
  grid-column: 1/2;
  border-radius: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
}
/* Font & text props */
h1,
h2 {
  margin-top: 1em;
  color: cyan;
}
a {
  text-decoration: none;
  color: rgb(212, 42, 136);
}
i {
  margin-right: 5px;
}

.location,
nav,
footer {
  display: none;
}
#left-col {
  grid-column: 1/2;
}
#right-col {
  grid-column: 2/3;
}
.contact-info ul,
.social-profiles ul {
  list-style: none;
  padding: 0;
}

/* Print styles */

@media print {
  nav {
    display: none !important;
  }
  footer {
    display: none !important;
  }
  h1,
  h2,
  h3 {
    font-weight: bold;
    page-break-after: avoid;
    page-break-inside: avoid;
  }

  h1 + p,
  h2 + p,
  h3 + p {
    page-break-before: avoid;
  }
  p {
    font-size: 10pt;
  }

  @page {
    size: a4;
    margin-top: 1cm;
    margin-bottom: 1cm;
    margin-left: 1cm;
    margin-right: 1cm;
  }
}
</style>
