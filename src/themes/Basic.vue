<template>
    <main>
        <div>
            <v-btn @click="exportPDF">Export as PDF</v-btn>
        </div>

        <div id="preview" class="basic-theme">

            <!-- PERSONAL DATA -->
            <section class="personal-data">
                <div class="img-names-location">
                    <div class="resume-image">
                        <img src="previewData.basics.picture" alt="Picture">
                    </div>
                    <div class="names-and-location">
                        <h1 class="names">{{previewData.basics.name}}</h1>
                        <p class="location">
                            {{previewData.basics.location.address}},
                            {{previewData.basics.location.city}},
                            {{previewData.basics.location.region}}
                            <br />
                            Country Code: {{previewData.basics.location.countryCode}}
                            <br />
                            Postal Code: {{previewData.basics.location.postalCode}}
                        </p>
                    </div>
                </div>

                <div class="contact">
                <section class="contact-details">
                    <p class="email">Email: {{previewData.basics.email}}</p>
                    <p class="phone">Phone: {{previewData.basics.phone}}</p>
                    <p class="website">Website: {{previewData.basics.website}}</p>
                </section>

                <section class="social-profiles">
                    <p :class="profile.network"
                    v-for="profile in previewData.basics.profiles"
                    :key="profile.name">
                        {{profile.network}}: {{profile.url}}
                    </p>
                </section>
                </div>
            </section>

            <!-- WORK EXPERIENCE -->
            <section class="work-experience">
                <article v-for="experience in previewData.work" :key="experience.company">
                    <div>
                        <p>{{experience.position}} @ {{experience.company}} ({{experience.website}})</p>
                        <p>{{experience.startDate}} - {{experience.startDate}}</p>
                    </div>
                    <p class="summary-of-responsibilities">{{experience.summary}}</p>
                    <ul>
                        <li v-for="highlight in experience.highlights" :key="highlight" class="job-hightlight">{{highlight.highlight}}</li>
                    </ul>
                </article>
            </section>

            <!-- VOLUNTEER EXPERIENCE -->
            <section class="volunteer-experience">
                <article v-for="experience in previewData.volunteer" :key="experience.organization">
                    <div>
                        <p>{{experience.position}} @ {{experience.organization}} ({{experience.website}})</p>
                        <p>{{experience.startDate}} - {{experience.startDate}}</p>
                    </div>
                    <p class="summary-of-responsibilities">{{experience.summary}}</p>
                    <ul>
                        <li v-for="highlight in experience.highlights" :key="highlight" class="job-hightlight">{{highlight.highlight}}</li>
                    </ul>
                </article>
            </section>

            <!-- EDUCATION -->
            <section class="relevant-education">
                <article class="education" v-for="education in previewData.education" :key="education.institution">
                    <p class="institution">{{education.institution}}</p>
                    <p class="area">{{education.area}}</p>
                    <p class="study-type">{{education.studyType}}</p>
                    <p class="gpa">{{education.gpa}}</p>
                    <p class="duration">{{education.startDate}} - {{education.endDate}}</p>

                    <ul class="courses">
                        <li class="course" v-for="course in education.courses" :key="course">{{course.course}}</li>
                    </ul>
                </article>
            </section>

            <!-- AWARDS -->
            <section class="awards">
                <article class="award" v-for="award in previewData.awards" :key="award.title">
                    <p class="title">{{award.title}}</p>
                    <p class="date">{{award.date}}</p>
                    <p class="awarder">{{award.awarder}}</p>
                    <p class="summary">{{award.summary}}</p>
                </article>
            </section>

            <!-- PUBLICATIONS -->
            <section class="publications">
                <article class="publication" v-for="publication in previewData.publications" :key="publication.name">
                    <p class="name">{{publication.name}}</p>
                    <section class="publisher-details">
                        <p class="publisher-name">{{publication.publisher}}</p>
                        <p class="publisher-website">{{publication.website}}</p>
                    </section>
                    <p class="release-date">{{publication.releaseDate}}</p>
                    <p class="summary">{{publication.summary}}</p>
                </article>
            </section>

            <!-- SKILLS -->
            <section class="skills">
                <article class="skill" v-for="skill in previewData.skills" :key="skill.name">
                    <p class="skill">{{skill.name}}</p>
                    <p class="skill-level">{{skill.level}}</p>
                    <ul class="keywords">
                        <li class="keyword" v-for="keyword in skill.keywords" :key="keyword">{{keyword.keyword}}</li>
                    </ul>
                </article>
            </section>

            <!-- LANGUAGES -->
            <section class="languages">
                <article class="language" v-for="language in previewData.languages" :key="language.language">
                    <p class="language-name">{{language.language}}</p>
                    <p class="language-fluency">{{language.fluency}}</p>
                </article>
            </section>

            <!-- INTERESTS -->
            <section class="interests">
                <article class="interest" v-for="interest in previewData.interests" :key="interest.name">
                    <p class="name-of-interest">{{interest.name}}</p>
                    <ul class="keywords">
                        <li class="keyword" v-for="keyword in interest.keywords" :key="keyword">{{keyword.keyword}}</li>
                    </ul>
                </article>
            </section>

            <!-- REFERENCES -->
            <section class="references">
                <article class="reference" v-for="reference in previewData.references" :key="reference.name">
                    <p class="name-of-reference">{{reference.name}}</p>
                    <p class="contact-of-reference">{{reference.reference}}</p>
                </article>
            </section>
            <section>

            </section>
        </div>
    </main>
</template>

<script>
import jsPDF from 'jspdf';

export default {
  props: {
    previewData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    test() {
      const dData = JSON.stringify(this.previewData, null, 2);
      console.log(dData);
      return dData;
    },
  },
  methods: {
    exportPDF() {
      // eslint-disable-next-line
      const doc = new jsPDF();
      const source = window.document.getElementById('preview');
      console.log('Source', source);
      doc.fromHTML(source, 10, 10);
      doc.save('resume.pdf');
    },
  },
};
</script>

<style scoped>
.basic-theme {
    width: 85%;
    height: 100%;
    margin: 0;
    padding: 0;
    border-radius: 2px solid grey;
}
.personal-data .img-names-location {
    display: flex;
}
.resume-image {
    height: 10em;
    width: 10em;
    border-radius: 10px;
    background-color: red;
}
</style>
