<template>
    <div class="design">
        <div>
            <v-btn @click="exportPDF">Export as PDF</v-btn>
        </div>

        <div id="preview" class="designc">

            <!-- PERSONAL DATA -->
            <section class="personal">
                <div class="resume-image">
                    <img :src="previewData.basics.picture" alt="Picture" />
                </div>
                <div>
                    <h1 class="names">{{previewData.basics.name}}</h1>
                    <h2 class="occupation">{{ previewData.basics.label }}</h2>
                    <p class="location">
                        {{previewData.basics.location.address}},
                        <br />
                        {{previewData.basics.location.city}},
                        <br />
                        {{previewData.basics.location.region}}
                        <br />
                        Postal Code: {{previewData.basics.location.postalCode}}
                        <br />
                        Country Code: {{previewData.basics.location.countryCode}}
                    </p>
                </div>
                <section class="personal-data">
                    <div class="contact">
                        <section class="contact-details">
                            <p class="email"> {{previewData.basics.email}}</p>
                            <p class="phone">Phone: {{previewData.basics.phone}}</p>
                            <p class="website">Website: {{previewData.basics.website}}</p>
                        </section>

                        <section class="social-profiles">
                            <p :class="profile.network"
                            v-for="(profile, index) in previewData.basics.profiles"
                            :key="index">
                                {{profile.network}}: {{profile.url}}
                            </p>
                        </section>
                    </div>
                </section>
            </section>
            <hr>
            <section class="qualifications">
                <!-- WORK EXPERIENCE -->
                <section v-if="previewData.work.length > 0" class="work-experience">
                    <h2>Work Experience</h2>
                    <!-- <hr> -->
                    <article v-for="(experience, index) in previewData.work" :key="index">
                        <div>{{experience.position}}</div>
                        <div>{{experience.company}}</div>
                        <div>{{experience.website}}</div>
                        <div>
                            <p class="date"><i>{{experience.startDate}} - {{experience.startDate}}</i></p>
                        </div>
                        <p class="summary-of-responsibilities">{{experience.summary}}</p>
                        <ul
                        v-for="(highlight, index) in experience.highlights"
                        :key="index">
                            <li class="job-hightlight">{{highlight.highlight}}</li>
                        </ul>
                    </article>
                </section>

                <!-- VOLUNTEER EXPERIENCE -->
                <section v-if="previewData.volunteer.length > 0" class="volunteer-experience">
                    <h2>Volunteer Experience</h2>
                    <!-- <hr> -->
                    <article v-for="(experience, index) in previewData.volunteer" :key="index">
                        <div>{{experience.position}}</div>
                        <div>{{experience.organization}}</div>
                        <div>{{experience.website}}</div>
                        <div>
                            <p class="date"><i>{{experience.startDate}} - {{experience.startDate}}</i></p>
                        </div>
                        <p class="summary-of-responsibilities">{{experience.summary}}</p>
                        <ul>
                            <li v-for="(highlight, index) in experience.highlights" :key="index" class="job-hightlight">{{highlight.highlight}}</li>
                        </ul>
                    </article>
                </section>

                <!-- EDUCATION -->
                <section v-if="previewData.education.length > 0" class="relevant-education">
                    <h2>Education</h2>
                    <!-- <hr> -->
                    <article class="education" v-for="(education, index) in previewData.education" :key="index">
                        <div>{{education.area}}</div>
                        <div>{{education.institution}}</div>
                        <div>{{education.studyType}}</div>
                        <!-- <div>{{education.gpa}}</div> -->
                        <div>
                        <p class="date"><i>{{education.startDate}} - {{education.endDate}}</i></p>
                        </div>
                        <!-- <ul class="courses">
                            <li class="course" v-for="course in education.courses" :key="course">{{course.course}}</li>
                        </ul> -->
                    </article>
                </section>

                <!-- AWARDS -->
                <section v-if="previewData.awards.length > 0" class="awards">
                    <h2>Awards</h2>
                    <article class="award" v-for="(award, index) in previewData.awards" :key="index">
                        <div>{{award.title}}</div>
                        <div class="date"><i>{{award.date}}</i></div>
                        <div>{{award.awarder}}</div>
                        <div>{{award.summary}}</div>
                    </article>
                </section>

                <!-- PUBLICATIONS -->
                <section v-if="previewData.publications.length > 0" class="publications">
                    <h2>Publications</h2>
                    <article class="publication" v-for="(publication, index) in previewData.publications" :key="index">
                        <div class="name">{{publication.name}}</div>
                        <section class="publisher-details">
                            <div class="publisher-name">{{publication.publisher}}</div>
                            <div class="publisher-website">{{publication.website}}</div>
                        </section>
                        <div class="date"><i>{{publication.releaseDate}}</i></div>
                        <p class="summary">{{publication.summary}}</p>
                    </article>
                </section>

                <!-- SKILLS -->
                <section v-if="previewData.skills.length > 0" class="skills">
                    <h2>Skills</h2>
                    <article class="skill" v-for="(skill, index) in previewData.skills" :key="index">
                        <p class="skill">{{skill.name}}</p>
                        <ul class="keywords">
                            <li class="keyword" v-for="(keyword, index) in skill.keywords" :key="index">{{keyword.keyword}}</li>
                        </ul>
                    </article>
                </section>

                <!-- LANGUAGES -->
                <section v-if="previewData.languages.length > 0" class="languages">
                    <h2>Languages</h2>
                    <article class="language" v-for="(language, index) in previewData.languages" :key="index">
                        <p class="language-name">{{language.language}}</p>
                        <p class="language-fluency">{{language.fluency}}</p>
                    </article>
                </section>

                <!-- INTERESTS -->
                <section v-if="previewData.interests.length > 0" class="interests">
                    <h2>Other Interests</h2>
                    <article class="interest" v-for="(interest, index) in previewData.interests" :key="index">
                        <p class="name-of-interest">{{interest.name}}</p>
                        <ul class="keywords">
                            <li class="keyword" v-for="(keyword, index) in interest.keywords" :key="index">{{keyword.keyword}}</li>
                        </ul>
                    </article>
                </section>

                <!-- REFERENCES -->
                <section v-if="previewData.references.length > 0" class="references">
                    <h2>References</h2>
                    <article class="reference" v-for="(reference, index) in previewData.references" :key="index">
                        <p class="name-of-reference">{{reference.name}}</p>
                        <p class="contact-of-reference">{{reference.reference}}</p>
                    </article>
                </section>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    previewData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    exportPDF() {
      window.print();
    },
  },
};
</script>

<style scoped>
@import "../assets/css/designc.css";
@import "../assets/css/print.css";
@media print {
  .design {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .design > :first-child {
    margin-bottom: 0;
  }
}
</style>
