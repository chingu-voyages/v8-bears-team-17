<template>
    <main>
        <div>
            <v-btn @click="downloadPDF">Export as PDF</v-btn>
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
                            {{previewData.basics.location.region}},
                            {{previewData.basics.location.countryCode}},
                            {{previewData.basics.location.postalCode}}
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
                <h2>Work Experience</h2>
                <hr>
                <article v-for="experience in previewData.work" :key="experience.company">
                    <div>
                        <p><span class="bold">{{experience.position}}</span> @ {{experience.company}} ({{experience.website}})</p>
                        <p>({{experience.startDate}} - {{experience.startDate}})</p>
                    </div>
                    <p class="summary-of-responsibilities">{{experience.summary}}</p>
                    <ul>
                        <li v-for="highlight in experience.highlights" :key="highlight" class="job-hightlight">{{highlight.highlight}}</li>
                    </ul>
                </article>
            </section>

            <!-- VOLUNTEER EXPERIENCE -->
            <section class="volunteer-experience">
                <h2>Volunteer Experience</h2>
                <hr>
                <article v-for="experience in previewData.volunteer" :key="experience.organization">
                    <div>
                        <p><span class="bold">{{experience.position}}</span> @ {{experience.organization}} ({{experience.website}})</p>
                        <p>({{experience.startDate}} - {{experience.startDate}})</p>
                    </div>
                    <p class="summary-of-responsibilities">{{experience.summary}}</p>
                    <ul>
                        <li v-for="highlight in experience.highlights" :key="highlight" class="job-hightlight">{{highlight.highlight}}</li>
                    </ul>
                </article>
            </section>

            <!-- EDUCATION -->
            <section class="relevant-education">
                <h2>Education</h2>
                <hr>
                <article class="education" v-for="education in previewData.education" :key="education.institution">
                    <div>
                        <p><span class="bold">{{education.institution}}</span>
                            <br/><em>{{education.studyType}}</em>, {{education.area}}, {{education.gpa}} GPA
                        </p>
                        <p>({{education.startDate}} - {{education.endDate}})</p>
                    </div>

                    <ul class="courses">
                        <li class="course" v-for="course in education.courses" :key="course">{{course.course}}</li>
                    </ul>
                </article>
            </section>

            <!-- AWARDS -->
            <section class="awards">
                <h2>Awards</h2>
                <hr>
                <article class="award" v-for="award in previewData.awards" :key="award.title">
                    <div>
                        <p><span class="bold">{{award.title}}</span><br/>{{award.awarder}}</p>
                        <p>({{award.date}})</p>
                    </div>
                    <p class="summary">{{award.summary}}</p>
                </article>
            </section>

            <!-- PUBLICATIONS -->
            <section class="publications">
                <h2>Publications</h2>
                <hr>
                <article class="publication" v-for="publication in previewData.publications" :key="publication.name">
                    <div>
                        <p><span class="bold">{{publication.name}}</span><br/>{{publication.publisher}}, {{publication.website}}</p>
                        <p>({{publication.releaseDate}})</p>
                    </div>
                    <p class="summary">{{publication.summary}}</p>
                </article>
            </section>

            <!-- SKILLS -->
            <section class="skills">
                <h2>Skills</h2>
                <hr>
                <article v-for="skill in previewData.skills" :key="skill.name">
                    <p><span class="bold">{{skill.name}}:</span> {{getListOfSkills()}}</p>
                </article>
            </section>

            <!-- LANGUAGES -->
            <section class="languages">
                <h2>Languages</h2>
                <hr>
                <article class="language" v-for="language in previewData.languages" :key="language.language">
                    <p>{{language.language}}, {{language.fluency}}</p>
                </article>
            </section>

            <!-- INTERESTS -->
            <section class="interests">
                <h2>Other Interests</h2>
                <hr>
                <article class="interest" v-for="interest in previewData.interests" :key="interest.name">
                    <p class="name-of-interest bold">{{interest.name}}</p>
                    <ul class="keywords">
                        <li class="keyword" v-for="keyword in interest.keywords" :key="keyword">{{keyword.keyword}}</li>
                    </ul>
                </article>
            </section>

            <!-- REFERENCES -->
            <section class="references">
                <h2>References</h2>
                <hr>
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

const pdfMake = window.pdfMake;

export default {
  props: {
    previewData: {
      type: Object,
      required: true,
    },
  },
  data: function() {
      return {
        pdfObj: {},
        basics: this.previewData.basics,
      }
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
    getListOfSkills() {
        let listOfSkills = [];
        const data = this.previewData,
            skillsArray = data.skills;
        skillsArray.forEach(function(skill) {
            skill.keywords.forEach(function(keyword) {
                listOfSkills.push(keyword.keyword);
            })
        });
        return listOfSkills.join(", ");
    },
    image2URI() {
        const canvas = document.createElement("canvas"),
            context = canvas.getContext('2d');

        (function make_base() {
            const base_image = new Image();
            base_image.src = '../assets/img4.jpg';
            context.drawImage(base_image, 200, 100);
        })();
        return (canvas.toDataURL("image/jpeg"));
    },
    createPDF() {
        const docDefinition = {
            pageSize: 'A4',
            pageMargins: [ 40, 60, 40, 60 ],
            header: [
                // { image: this.image2URI()},
                { text: this.basics.name, style: 'header'},
            ],
            content: [
                { text: `${this.basics.location.address}, ${this.basics.location.city}, ${this.basics.location.region}, ${this.basics.location.countryCode}, ${this.basics.location.postalCode}`, alignment: 'center' },

                { columns: [
                    {
                        width: '*',
                        text: 'First column'
                    },
                    {
                        width: '*',
                        text: 'Second column',
                        alignment: 'right',
                    },
                ],
                columnGap: 10
                },

                { text: 'Work Experience', style: 'subheader'},
                { table : {
                    headerRows : 1,
                    widths: [520],
                    body : [
                            [''],
                            ['']
                            ],
                },
                layout : 'headerLineOnly',
                margin: [0, 10, 0, 8],
                },
                { columns: [
                    {
                        width: '*',
                        text: 'First column'
                    },
                    {
                        width: '*',
                        text: 'Second column',
                        alignment: 'right',
                    },
                ],
                columnGap: 10
                },
                "Description",
                { ul: [
                    'Item 1',
                    'Item 2',
                    'Item 3',
                ]},

                { text: 'Volunteer Experience', style: 'subheader'},
                { table : {
                    headerRows : 1,
                    widths: [520],
                    body : [
                            [''],
                            ['']
                            ]
                },
                layout : 'headerLineOnly',
                margin: [0, 10, 0, 8],
                },
                { columns: [
                    {
                        width: '*',
                        text: 'First column'
                    },
                    {
                        width: '*',
                        text: 'Second column',
                        alignment: 'right',
                    },
                ],
                columnGap: 10
                },
                "Description",
                { ul: [
                    'Item 1',
                    'Item 2',
                    'Item 3',
                ]},

                { text: 'Education', style: 'subheader'},
                { table : {
                    headerRows : 1,
                    widths: [520],
                    body : [
                            [''],
                            ['']
                            ]
                },
                layout : 'headerLineOnly',
                margin: [0, 10, 0, 8],
                },
                { columns: [
                    {
                        width: '*',
                        text: 'First column'
                    },
                    {
                        width: '*',
                        text: 'Second column',
                        alignment: 'right',
                    },
                ],
                columnGap: 10
                },
                "Description",
                { ul: [
                    'Item 1',
                    'Item 2',
                    'Item 3',
                ]},

                { text: 'Awards', style: 'subheader'},
                { table : {
                    headerRows : 1,
                    widths: [520],
                    body : [
                            [''],
                            ['']
                            ]
                },
                layout : 'headerLineOnly',
                margin: [0, 10, 0, 8],
                },
                { columns: [
                    {
                        width: '*',
                        text: 'First column'
                    },
                    {
                        width: '*',
                        text: 'Second column',
                        alignment: 'right',
                    },
                ],
                columnGap: 10
                },
                "Description",

                { text: 'Publications', style: 'subheader'},
                { table : {
                    headerRows : 1,
                    widths: [520],
                    body : [
                            [''],
                            ['']
                            ]
                },
                layout : 'headerLineOnly',
                margin: [0, 10, 0, 8],
                },
                { columns: [
                    {
                        width: '*',
                        text: 'First column'
                    },
                    {
                        width: '*',
                        text: 'Second column',
                        alignment: 'right',
                    },
                ],
                columnGap: 10
                },
                "Description",

                { text: 'Skills', style: 'subheader'},
                { table : {
                    headerRows : 1,
                    widths: [520],
                    body : [
                            [''],
                            ['']
                            ]
                },
                layout : 'headerLineOnly',
                margin: [0, 10, 0, 8],
                },
                { text: [
                    { text: 'Skill: ', bold: true },
                    'This paragraph is defined as an array of elements to make it possible to ',
                ]},

                { text: 'Languages', style: 'subheader'},
                { table : {
                    headerRows : 1,
                    widths: [520],
                    body : [
                            [''],
                            ['']
                            ]
                },
                layout : 'headerLineOnly',
                margin: [0, 10, 0, 8],
                },
                'Description',

                { text: 'Interests', style: 'subheader'},
                { table : {
                    headerRows : 1,
                    widths: [520],
                    body : [
                            [''],
                            ['']
                            ]
                },
                layout : 'headerLineOnly',
                margin: [0, 10, 0, 8],
                },
                'Description',
                { ul: [
                    'Item 1',
                    'Item 2',
                    'Item 3',
                ]},

                { text: 'References', style: 'subheader'},
                { table : {
                    headerRows : 1,
                    widths: [520],
                    body : [
                            [''],
                            ['']
                            ]
                },
                layout : 'headerLineOnly',
                margin: [0, 10, 0, 8],
                },
                'Name',
                'Reference',

            ],
            styles: {
                header: {
                    fontSize: 20,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 35, 0, 0]
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0]
                },
                story: {
                    italic: true,
                    alignment: 'center',
                    width: '50%',
                },
            },
        }
        this.pdfObj = pdfMake.createPdf(docDefinition);
    },

    downloadPDF() {
      this.createPDF();
      this.pdfObj.download();
    }
  },
};
</script>

<style scoped>
@import '../assets/css/Basic.css';
</style>
