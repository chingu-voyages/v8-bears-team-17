<template>
  <main>
    <div>
      <v-btn class="no-print" @click="exportPDF">Export as PDF</v-btn>
    </div>

    <div class="elegant container">
      <!-- LEFT-COL------------------------------------------------------------------------------------- -->
      <div class="left-col">
        <section class="img">
          <!-- Profile pic, name and job title -->
          <img
            v-if="previewData.basics.picture"
            :src="previewData.basics.picture"
            alt="profile picture"
          >
        </section>
        <!-- NAME & TITLE -->
        <section>
          <h1>{{previewData.basics.name}}</h1>
          <h2 class="pink--text font-weight-thin">{{previewData.basics.label}}</h2>
        </section>
        <!-- CONTACT INFO-->
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
        <!-- SOCIAL PROFILES-->
        <section class="social-profiles">
          <ul v-for="profile in previewData.basics.profiles" :key="profile">
            <li>
              <!-- TODO: make dynamic -->
              <i :class="icons"></i>
              <a :href="profile.url">{{profile.url}}</a>
            </li>
          </ul>
        </section>
        <!-- LOCATION -->
        <section class="location">
          <address>
            <p>{{previewData.basics.location.address}}</p>
            <p>{{previewData.basics.location.postalCode}}</p>
            <p>{{previewData.basics.location.city}}</p>
            <p>{{previewData.basics.location.region}}</p>
            <p>{{previewData.basics.location.countryCode}}</p>
          </address>
        </section>
        <!-- LANGUAGES -->
        <section class="languages">
          <h2>Language skills</h2>
          <div v-for="language in previewData.languages" :key="language">
            <p>
              <b>{{language.language}}</b>
            </p>
            <p>{{language.fluency}}</p>
          </div>
        </section>
        <!-- AWARDS -->
        <section class="awards">
          <h2>Awards</h2>
          <div v-for="award in previewData.awards" :key="award">
            <p>
              <b>{{award.title}}</b>
            </p>
            <div>
              <span>
                <p>{{award.awarder}}</p>
              </span>
              <span>
                <p class="date">{{award.date}}</p>
              </span>
            </div>
            <p>{{award.summary}}</p>
          </div>
        </section>
        <!-- REFERENCES -->
        <section class="references">
          <h2>References</h2>
          <div v-for="reference in previewData.references" :key="reference">
            <p>
              <b>{{reference.name}}</b>
            </p>
            <p>{{reference.reference}}</p>
          </div>
        </section>
        <!-- INTERESTS -->
        <section class="interests">
          <h2>Interests</h2>
          <div v-for="interest in previewData.interests" :key="interest">
            <p>{{interest.name}}</p>

            <v-chip outline class="pink" v-for="keyword in interest.keywords">{{keyword.keyword}}</v-chip>
          </div>
        </section>
      </div>
      <!-- END LEFT-COL-->

      <!-- RIGHT-COL------------------------------------------------------------------------ -->

      <div class="right-col">
        <!-- SUMMARY -->
        <section class="summary">
          <h2>
            <i class="fas fa-user"></i>Summary
          </h2>
          <p>{{previewData.basics.summary}}</p>
        </section>
        <!-- SKILLS -->
        <section class="skills">
          <h2>
            <i class="fas fa-tools"></i>Skills
          </h2>
          <div v-for="skill in previewData.skills" :key="skill">
            <span>
              <p>{{skill.name}}</p>
            </span>

            <!--skill keywords  -->

            <v-chip outline class="pink" v-for="keyword in skill.keywords">{{keyword.keyword}}</v-chip>
          </div>
        </section>
        <!-- WORK-->
        <section class="work">
          <h2>
            <i class="fas fa-briefcase"></i>Work experience
          </h2>
          <div v-for="work in previewData.work" :key="work">
            <span class="subheading">{{work.position}}</span>
            <div>
              <p>{{work.company}}</p>
              <p class="date">{{work.startDate}} - {{work.endDate}}</p>
            </div>

            <p>{{work.summary}}</p>
            <!--WORK HIGHTLIGHTS-->
            <ul>
              <li v-for="highlight in work.highlights" :key="highlight">{{highlight.highlight}}</li>
            </ul>
          </div>
        </section>
        <!-- EDUCATION-->
        <section class="education">
          <h2>
            <i class="fas fa-graduation-cap"></i>Education
          </h2>
          <div v-for="education in previewData.education" :key="education">
            <span class="subheading">{{education.studyType}} in {{education.area}}</span>
            <div>
              <p>{{education.institution}}</p>
              <p class="date">{{education.startDate}}- {{education.endDate}}</p>
            </div>

            <!--education courses  -->
            <span class=".body-2">Courses</span>
            <ul>
              <li v-for="course in education.courses" :key="course">{{course.course}}</li>
            </ul>
          </div>
        </section>
        <!-- VOLUNTEER -->
        <section class="experience">
          <h2>
            <i class="fas fa-hands-helping"></i>Volunteer experience
          </h2>
          <div v-for="experience in previewData.volunteer" :key="experience">
            <span class="subheading">{{experience.position}}</span>
            <div>
              <p>{{experience.organization}}</p>
              <p class="date">{{experience.startDate}} - {{experience.endDate}}</p>
            </div>
            <p>{{experience.summary}}</p>
            <!--volunteer highlights  -->
            <ul>
              <li
                v-for="highlight in experience.highlights"
                :key="highlight"
              >{{highlight.highlight}}</li>
            </ul>
          </div>
        </section>
        <!-- PUBLICATIONS -->
        <section class="publications">
          <h2>
            <i class="far fa-newspaper"></i>Publications
          </h2>
          <div v-for="publication in previewData.publications" :key="publication">
            <span class="subheading">{{publication.name}}</span>
            <div>
              <p>{{publication.publisher}}</p>
              <p class="date">{{publication.releaseDate}}</p>
            </div>
            <a :href="publication.website">{{publication.website}}</a>

            <p>{{publication.summary}}</p>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import jsPDF from "jspdf";

export default {
  data() {
    return {
      icons: "fab fa-" + "twitter"
    };
  },
  props: {
    previewData: {
      type: Object,
      required: true
    }
  },

  methods: {
    exportPDF() {
      // eslint-disable-next-line
      window.print();
      console.log("got here");
    }
  }
};
</script>

<style scoped>
/* Simulates A4 for preview */
.container {
  width: 210mm;
  height: 297mm;
  margin: 40px auto;
  background-color: #fff;
  box-shadow: 5px 5px 5px 5px grey;
}
.elegant {
  font-family: "Roboto" !important;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1cm;
}

.summary {
  margin-bottom: 0;
}
.summary h2 {
  margin: 0;
}
img {
  margin-top: 5px;
  border-radius: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  border: 1px solid cyan;
}
.left-col {
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
}
.right-col {
  grid-column: 2/4;
  display: flex;
  flex-direction: column;
}
section {
  margin-bottom: 1em;
}
v-chip {
  margin: 0;
}

.languages div,
.awards div > div,
.education div > div,
.work div > div,
.experience div > div,
.publications div > div {
  display: flex;
  justify-content: space-between;
}

.awards p,
.references div p {
  display: flex;
  flex-direction: column;
  margin: 0;
}
/* Font & text props */
p,
li {
  font-weight: 300;
  font-size: 10pt;
  line-height: 17pt;
}
h1,
h2 {
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

.work > div {
  display: flex;
  flex-direction: column;
}

/* Print styles */

@media print {
  .no-print {
    visibility: hidden;
    display: none !important;
  }
  .elegant {
    box-shadow: none;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
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

  @page {
    size: a4;
    margin: 2cm;
    margin-top: 0;
  }
}
</style>


