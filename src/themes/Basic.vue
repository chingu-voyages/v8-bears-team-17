<template>
  <div class="basic-theme">
    <section class="personal-data">
      <!-- Profile pic, name and job title -->
      <img :src="previewData.basics.picture" alt="profile picture" class="img">
      <h1>{{previewData.basics.name}}</h1>
      <h2>{{previewData.basics.label}}</h2>

      <!-- Contact info - let's use font-awesome(will implement later) -->
      <h3>Contact information</h3>
      <p>{{previewData.basics.email}}</p>
      <p>{{previewData.basics.phone}}</p>
      <p>{{previewData.basics.website}}</p>
    </section>

    <!-- keeping summary in seperate section for layout flexibility -->
    <section>
      <p>{{previewData.basics.summary}}</p>
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

    <!-- Social network profiles /personally I think this belongs with contact info-->
    <section class="social-profiles">
      <h2>Social profiles</h2>

      <div v-for="profile in previewData.basics.profiles" :key="profile">
        <p>{{profile.network}}</p>
        <p>{{profile.username}}</p>
        <p>{{profile.url}}</p>
      </div>
    </section>

    <!-- Work experience -->
    <section class="experience">
      <h2>Work experience</h2>
      <div v-for="work in previewData.work" :key="work">
        <p>{{work.position}}</p>
        <p>{{work.company}}</p>
        <p>{{work.website}}</p>
        <p>{{work.startDate}}</p>
        <p>{{work.endDate}}</p>
        <p>{{work.summary}}</p>
        <!--work highlights  -->
        <div v-for="highlight in previewData.work.highlights" :key="highlight">
          <ul>
            <li>{{highlight}}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Volunteer experience -->
    <section class="experience">
      <h2>Volunteer experience</h2>
      <div v-for="experience in previewData.volunteer" :key="experience">
        <p>{{experience.position}}</p>
        <p>{{experience.company}}</p>
        <p>{{experience.website}}</p>
        <p>{{experience.startDate}}</p>
        <p>{{experience.endDate}}</p>
        <p>{{experience.summary}}</p>
        <!--volunteer highlights  -->
        <div v-for="highlight in previewData.volunteer.highlights" :key="highlight">
          <ul>
            <li>{{highlight}}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="Education">
      <h2>Education</h2>
      <div v-for="education in previewData.education" :key="education">
        <span>
          <p>{{education.studyType}}</p>
        </span>
        <span>
          <p>{{education.area}}</p>
        </span>
        <p>{{education.institution}}</p>
        <p>{{education.startDate}}</p>
        <p>{{education.endDate}}</p>
        <p>{{education.gpa}}</p>
        <!--education courses  -->
        <div v-for="course in previewData.education.courses" :key="course">
          <ul>
            <li>{{course}}</li>
          </ul>
        </div>
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
    <!-- Publications -->
    <section class="publications">
      <h2>Publications</h2>
      <div v-for="publication in previewData.publications" :key="publication">
        <p>{{publication.name}}</p>
        <p>{{publication.publisher}}</p>
        <p>{{publication.releaseDate}}</p>
        <p>{{publication.website}}</p>
        <p>{{publication.summary}}</p>
      </div>
    </section>
    <!-- Skills -->
    <section class="skills">
      <h2>Skills</h2>
      <div v-for="skill in previewData.skills" :key="skill">
        <p>{{skill.name}}</p>
        <p>{{skill.level}}</p>
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

    <!-- Just for overview -->
    <section>{{previewData}}</section>
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
.basic-theme {
  /**********a4 page simulation**************/
  padding: 10mm;
  width: 210mm;
  height: 297mm;
  background-color: #fff;
  box-shadow: 5px 5px 5px 5px grey;
  margin: 40px auto;
  display: grid;

  /*overflow:hidden;*/
  /**********************/
  /*CSS for print*/
}
.img {
  border-radius: 50%;
}
</style>
