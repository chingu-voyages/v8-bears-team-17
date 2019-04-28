<template>
  <v-form>
    <!--@submit="checkForm">-->
    <!--error handling, not sure if the snackbar thing works!
    //TODO: add height=100% to all cards or find better solution
    //TODO: Fix the non functioning remove button -> interests keyword
    //TODO: fix snackbar
    //TODO: Decide id personal data and location should have add buttons
    //TODO: implement ok/edit button, so that the input values will be shown to user upon click, button changes to edit
    Actually this shouldn't be in this component, I think, but rather the resume.vue?-->

    <v-snackbar v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li>{{ errors }}</li>
      </ul>
    </v-snackbar>

    <v-container xs12>
      <v-layout row wrap>
        <!-- Basics -->
        <v-flex xs12 sm6 md4>
          <v-card class="ma-2 pa-2">
            <v-card-title class="headline">Personal data</v-card-title>
            <div class="teal lighten-5 pa-2 ma-1">
              <v-text-field
                name="name"
                label="Name"
                type="text"
                placeholder="Your Name"
                v-model="userdata.basics.name"
              ></v-text-field>
              <v-text-field
                name="label"
                label="Label"
                type="text"
                placeholder="e.g. Humble Rockstar"
                v-model="userdata.basics.label"
              ></v-text-field>
              <v-text-field
                name="picture"
                label="Picture"
                placeholder="Your Profile picture"
                v-model="selectedImage"
                @click="pickImage"
              ></v-text-field>
              <input
                type="file"
                ref="image"
                style="display: none"
                @change="onImageSelected" />
              <v-btn @click="onImageUpload" block>
                <v-icon left>cloud_upload</v-icon>Upload!
              </v-btn>
              <v-text-field
                name="email"
                label="email"
                type="email"
                placeholder="Your@email.com"
                v-model="userdata.basics.email"
              ></v-text-field>
              <v-text-field
                name="phone"
                label="phone"
                type="tel"
                placeholder="Your phone number"
                v-model="userdata.basics.phone"
              ></v-text-field>
              <v-text-field
                name="website"
                label="Website"
                type="url"
                placeholder="www.yourwebsite.com"
                v-model="userdata.basics.website"
              ></v-text-field>
              <v-textarea
                name="summary"
                label="Summary"
                type="text"
                placeholder="Your summary"
                v-model="userdata.basics.summary"
              ></v-textarea>
              <v-layout>
                <v-spacer></v-spacer>
                <v-btn dark color="#24a4b3" @click="removeItem()">
                  <v-icon>delete</v-icon>
                </v-btn>
                <v-btn dark color="#24a4b3">Ok</v-btn>
              </v-layout>
            </div>
          </v-card>
        </v-flex>
        <!--Location-->
        <v-flex xs12 sm6 md4>
          <v-card class="ma-2 pa-2" height="100%">
            <v-card-title class="headline">Location</v-card-title>
            <div class="teal lighten-5 pa-2 ma-1">
              <v-text-field
                name="address"
                label="Address"
                type="text"
                placeholder="e.g. Appelstreet 2"
                v-model="userdata.basics.location.address"
              ></v-text-field>
              <v-text-field
                name="postalcode"
                label="Postal Code"
                type="text"
                placeholder="e.g."
                v-model="userdata.basics.location.postalcode"
              ></v-text-field>
              <v-text-field
                name="city"
                label="City"
                type="text"
                placeholder="e.g. Copenhagen"
                v-model="userdata.basics.location.city"
              ></v-text-field>
              <v-text-field
                name="countrycode"
                label="Country Code"
                type="text"
                placeholder="e.g. "
                v-model="userdata.basics.location.countrycode"
              ></v-text-field>
              <v-text-field
                name="region"
                label="Region"
                type="text"
                placeholder="e.g."
                v-model="userdata.basics.location.region"
              ></v-text-field>
              <v-layout>
                <v-spacer></v-spacer>
                <v-btn dark color="#24a4b3" @click="removeItem()">
                  <v-icon>delete</v-icon>
                </v-btn>
                <v-btn dark color="#24a4b3">Ok</v-btn>
              </v-layout>
            </div>
          </v-card>
        </v-flex>
        <!-- End basics -->
        <!-- Profiles -->
        <v-flex xs12 sm6 md4>
          <v-card class="ma-2 pa-2">
            <v-card-title class="headline">
              <span>Social profiles</span>
              <v-spacer></v-spacer>
              <span>
                <v-btn
                  small
                  block
                  dark
                  color="#24a4b3"
                  @click="addItem($event,newEmptyData.basics.profiles[0],userdata.basics.profiles)"
                >
                  <v-icon>add</v-icon>
                </v-btn>
              </span>
            </v-card-title>

            <div
              v-for="(item,index) in userdata.basics.profiles"
              :key="index"
              class="teal lighten-5 pa-2 ma-1"
            >
              <v-text-field
                name="network"
                label="Social media"
                type="text"
                placeholder="..."
                v-model="item.network"
              ></v-text-field>
              <v-text-field
                name="username"
                label="User name"
                type="text"
                placeholder="..."
                v-model="item.network.username"
              ></v-text-field>
              <v-text-field name="url" label="Url" type="url" placeholder="..." v-model="item.url"></v-text-field>
              <v-layout>
                <v-spacer></v-spacer>
                <v-btn
                  dark
                  color="#24a4b3"
                  @click="removeItem($event,index,userdata.basics.profiles)"
                >
                  <v-icon>delete</v-icon>
                </v-btn>
                <v-btn dark color="#24a4b3">Ok</v-btn>
              </v-layout>
            </div>
          </v-card>
        </v-flex>
        <!-- End Profiles -->

        <!-- Work -->
        <v-flex xs12 sm6 md4>
          <v-card class="ma-2 pa-2 card">
            <v-card-title class="headline">
              <span>Work</span>
              <v-spacer></v-spacer>
              <span>
                <v-btn
                  small
                  block
                  dark
                  color="#24a4b3"
                  @click="addItem($event,newEmptyData.work[0],userdata.work)"
                >
                  <v-icon>add</v-icon>
                </v-btn>
              </span>
            </v-card-title>

            <div
              v-for="(item,work_index) in userdata.work"
              :key="work_index"
              class="teal lighten-5 pa-2 ma-1"
            >
              <v-text-field
                name="company"
                label="Company"
                type="text"
                placeholder="Company"
                v-model="item.company"
              ></v-text-field>
              <v-text-field
                name="postition"
                label="Position"
                type="text"
                placeholder="Position"
                v-model="item.position"
              ></v-text-field>
              <v-text-field
                name="website"
                label="Website"
                type="url"
                placeholder="Company website"
                v-model="item.website"
              ></v-text-field>
              <v-text-field
                name="startDate"
                label="Start date"
                type="date"
                placeholder="Month/year"
                v-model="item.startDate"
              ></v-text-field>
              <v-text-field
                name="endDate"
                label="End date"
                type="date"
                placeholder="Month/year"
                v-model="item.endDate"
              ></v-text-field>
              <v-textarea
                name="summary"
                label="Summary"
                type="text"
                placeholder="Summary"
                v-model="item.summary"
              ></v-textarea>
              <template>
                <v-card-title class="subheading">
                  <span>Highlights:</span>
                  <v-spacer></v-spacer>
                  <span>
                    <v-btn
                      small
                      dark
                      color="#24a4b3"
                      @click="addItem(
                  $event, {highlight:''} ,userdata.work[work_index].highlights
                  )"
                    >
                      Add highlight
                      <v-icon small right>add</v-icon>
                    </v-btn>
                  </span>
                </v-card-title>

                <v-list>
                  <v-list-tile
                    v-for="(subitem,highlight_index) in item.highlights"
                    :key="highlight_index"
                  >
                    <v-text-field
                      name="hightlights"
                      label="highlight"
                      placeholder="..."
                      v-model="subitem.highlight"
                    ></v-text-field>
                    <v-btn
                      icon
                      small
                      @click="removeItem(
                        $event,highlight_index,userdata.work[work_index].highlights)"
                    >
                      <v-icon>delete</v-icon>
                    </v-btn>
                    <v-btn icon small>
                      <v-icon>check_circle_outline</v-icon>
                    </v-btn>
                  </v-list-tile>
                </v-list>
              </template>

              <!-- button group -->
              <v-layout>
                <v-spacer></v-spacer>
                <v-btn dark color="#24a4b3" @click="removeItem($event,work_index,userdata.work)">
                  Delete
                  <v-icon small right>delete</v-icon>
                </v-btn>
                <v-btn dark color="#24a4b3">Ok</v-btn>
              </v-layout>
            </div>
          </v-card>
        </v-flex>
        <!-- End Work -->
        <!-- Volunteer -->
        <v-flex xs12 sm6 md4>
          <v-card class="ma-2 pa-2 card">
            <v-card-title class="headline">
              <span>Volunteer</span>
              <v-spacer></v-spacer>
              <span>
                <v-btn
                  small
                  block
                  dark
                  color="#24a4b3"
                  @click="addItem($event,newEmptyData.volunteer[0],userdata.volunteer)"
                >
                  <v-icon>add</v-icon>
                </v-btn>
              </span>
            </v-card-title>
            <div
              v-for="(item,index) in userdata.volunteer"
              :key="index"
              class="teal lighten-5 pa-2 ma-1"
            >
              <v-text-field
                name="Organization"
                label="Organization"
                type="text"
                placeholder="..."
                v-model="item.organization"
              ></v-text-field>
              <v-text-field
                name="postition"
                label="Position"
                type="text"
                placeholder="Position"
                v-model="item.position"
              ></v-text-field>
              <v-text-field
                name="website"
                label="Website"
                type="url"
                placeholder="Company website"
                v-model="item.website"
              ></v-text-field>
              <v-text-field
                name="startDate"
                label="Start date"
                type="date"
                placeholder="Month/year"
                v-model="item.startDate"
              ></v-text-field>
              <v-text-field
                name="endDate"
                label="End date"
                type="date"
                placeholder="Month/year"
                v-model="item.endDate"
              ></v-text-field>
              <v-textarea
                name="summary"
                label="Summary"
                type="text"
                placeholder="Summary"
                v-model="item.summary"
              ></v-textarea>
              <template>
                <v-card-title class="subheading">
                  <span>Highlights:</span>
                  <v-spacer></v-spacer>
                  <span>
                    <v-btn
                      small
                      dark
                      color="#24a4b3"
                      @click="addItem(
                  $event, {highlight:''} ,userdata.volunteer[index].highlights
                  )"
                    >
                      Add highlight
                      <v-icon small right>add</v-icon>
                    </v-btn>
                  </span>
                </v-card-title>

                <v-list>
                  <v-list-tile v-for="(subitem,sub_index) in item.highlights" :key="sub_index">
                    <v-text-field
                      name="hightlights"
                      label="highlight"
                      placeholder="..."
                      v-model="subitem.highlight"
                    ></v-text-field>
                    <v-btn
                      icon
                      small
                      @click="removeItem($event,sub_index,userdata.volunteer[index].highlights)"
                    >
                      <v-icon>delete</v-icon>
                    </v-btn>
                    <v-btn icon small>
                      <v-icon>check_circle_outline</v-icon>
                    </v-btn>
                  </v-list-tile>
                </v-list>
              </template>
              <!-- button group -->
              <v-layout>
                <v-spacer></v-spacer>
                <v-btn dark color="#24a4b3" @click="removeItem($event,index,userdata.volunteer)">
                  Delete
                  <v-icon small right>delete</v-icon>
                </v-btn>
                <v-btn dark color="#24a4b3">Ok</v-btn>
              </v-layout>
            </div>
          </v-card>
        </v-flex>
        <!-- End Volunteer -->
        <!-- Education -->
        <v-flex xs12 sm6 md4>
          <v-card class="ma-2 pa-2 card">
            <v-card-title class="headline">
              <span>Education</span>
              <v-spacer></v-spacer>
              <span>
                <v-btn
                  small
                  block
                  dark
                  color="#24a4b3"
                  @click="addItem($event,newEmptyData.work[0],userdata.education)"
                >
                  <v-icon>add</v-icon>
                </v-btn>
              </span>
            </v-card-title>

            <div
              v-for="(item,index) in userdata.education"
              :key="index"
              class="teal lighten-5 pa-2 ma-1"
            >
              <v-text-field
                name="institution"
                type="text"
                label="Institution"
                placeholder="..."
                v-model="item.institution"
              ></v-text-field>
              <v-text-field
                name="area"
                type="text"
                label="Area"
                placeholder="..."
                v-model="item.area"
              ></v-text-field>
              <v-text-field
                name="studyType"
                type="text"
                label="Field of study"
                placeholder="..."
                v-model="item.studyType"
              ></v-text-field>
              <v-text-field name="gpa" type="text"
              label="gpa" placeholder="..." v-model="item.gpa"></v-text-field>
              <v-text-field
                name="startDate"
                type="date"
                label="Start date"
                placeholder="..."
                v-model="item.startDate"
              ></v-text-field>
              <v-text-field
                name="endDate"
                type="date"
                label="End date"
                placeholder="..."
                v-model="item.endDate"
              ></v-text-field>

              <template>
                <v-card-title class="subheading">
                  <span>Courses:</span>
                  <v-spacer></v-spacer>
                  <span>
                    <v-btn
                      small
                      dark
                      color="#24a4b3"
                      @click="addItem(
                  $event, {course:''} ,userdata.education[index].courses
                  )"
                    >
                      Add course
                      <v-icon small right>add</v-icon>
                    </v-btn>
                  </span>
                </v-card-title>

                <v-list>
                  <v-list-tile v-for="(item,index) in item.courses" :key="index">
                    <v-text-field
                      name="course"
                      label="course name"
                      placeholder="..."
                      v-model="item.course"
                    ></v-text-field>
                    <v-btn
                      icon
                      small
                      @click="removeItem(
                        $event,index,userdata.education[index].courses)"
                    >
                      <v-icon>delete</v-icon>
                    </v-btn>
                    <v-btn icon small>
                      <v-icon>check_circle_outline</v-icon>
                    </v-btn>
                  </v-list-tile>
                </v-list>
              </template>

              <!-- button group -->
              <v-layout>
                <v-spacer></v-spacer>
                <v-btn dark color="#24a4b3" @click="removeItem($event,index,userdata.education)">
                  Education {{index+1}}
                  <v-icon small right>delete</v-icon>
                </v-btn>
                <v-btn dark color="#24a4b3">Ok</v-btn>
              </v-layout>
            </div>
          </v-card>
        </v-flex>
        <!-- End Education -->

        <!-- Awards -->
        <v-flex xs12 sm6 md4>
          <v-card class="ma-2 pa-2 card">
            <v-card-title class="headline">
              <span>Awards</span>
              <v-spacer></v-spacer>
              <span>
                <v-btn
                  small
                  block
                  dark
                  color="#24a4b3"
                  @click="addItem($event,newEmptyData.awards[0],userdata.awards)"
                >
                  <v-icon>add</v-icon>
                </v-btn>
              </span>
            </v-card-title>

            <div
              v-for="(item,index) in userdata.awards"
              :key="index"
              class="teal lighten-5 pa-2 ma-1"
            >
              <v-text-field
                xs12
                name="title"
                label="Title"
                type="text"
                placeholder="..."
                v-model="item.title"
              ></v-text-field>
              <v-text-field
                name="Date"
                label="Date"
                type="date"
                placeholder="..."
                v-model="item.date"
              ></v-text-field>
              <v-text-field
                name="awarder"
                label="Awarder"
                type="text"
                placeholder="..."
                v-model="item.awarder"
              ></v-text-field>
              <v-textarea
                name="summary"
                label="Summary"
                type="text"
                placeholder="..."
                v-model="item.summary"
              ></v-textarea>
              <!-- button group -->
              <v-layout>
                <v-spacer></v-spacer>
                <v-btn dark color="#24a4b3" @click="removeItem($event,index,userdata.awards)">
                  Delete
                  <v-icon small right>delete</v-icon>
                </v-btn>
                <v-btn dark color="#24a4b3">Ok</v-btn>
              </v-layout>
            </div>
          </v-card>
        </v-flex>
        <!-- End Awards -->
        <!-- Publications -->
        <v-flex xs12 sm6 md4>
          <v-card class="ma-2 pa-2 card">
            <v-card-title class="headline">
              <span>Publication</span>
              <v-spacer></v-spacer>
              <span>
                <v-btn
                  small
                  block
                  dark
                  color="#24a4b3"
                  @click="addItem($event,newEmptyData.publications[0],userdata.publications)"
                >
                  <v-icon>add</v-icon>
                </v-btn>
              </span>
            </v-card-title>

            <v-list v-for="(item,index) in userdata.publications" :key="index">
              <div class="teal lighten-5 pa-2 ma-1">
                <v-text-field
                  name="publication"
                  label="Publication"
                  type="text"
                  placeholder="..."
                  v-model="item.name"
                ></v-text-field>
                <v-text-field
                  name="publisher"
                  label="Publisher"
                  type="text"
                  placeholder="..."
                  v-model="item.publisher"
                ></v-text-field>
                <v-text-field
                  name="releaseDate"
                  label="Release date"
                  type="date"
                  placeholder="..."
                  v-model="item.releaseDate"
                ></v-text-field>
                <v-text-field
                  name="Website"
                  label="Website"
                  type="url"
                  placeholder="www."
                  v-model="item.website"
                ></v-text-field>
                <v-textarea
                  name="summary"
                  label="Summary"
                  type="text"
                  placeholder="..."
                  v-model="item.summary"
                ></v-textarea>
                <!-- button group -->
                <v-layout>
                  <v-spacer></v-spacer>
                  <v-btn
                    dark
                    color="#24a4b3"
                    @click="removeItem($event,newEmptyData.publications[0],userdata.publications)"
                  >
                    Delete
                    <v-icon small right>delete</v-icon>
                  </v-btn>
                  <v-btn dark color="#24a4b3">Ok</v-btn>
                </v-layout>
              </div>
            </v-list>
          </v-card>
        </v-flex>
        <!-- End publications -->
        <!-- Skills -->
        <v-flex xs12 sm6 md4>
          <v-card class="ma-2 pa-2 card">
            <v-card-title class="headline">
              <span>Skills</span>
              <v-spacer></v-spacer>
              <span>
                <v-btn
                  small
                  block
                  dark
                  color="#24a4b3"
                  @click="addItem($event, newEmptyData.skills[0],userdata.skills)"
                >
                  <v-icon>add</v-icon>
                </v-btn>
              </span>
            </v-card-title>

            <v-list v-for="(item,index) in userdata.skills" :key="index">
              <div class="teal lighten-5 pa-2 ma-1">
                <v-text-field
                  name="name"
                  full-width
                  label="Skill name"
                  type="text"
                  placeholder="..."
                  v-model="item.name"
                ></v-text-field>
                <v-text-field
                  full-width
                  name="level"
                  label="Level"
                  type="text"
                  placeholder="..."
                  v-model="item.level"
                ></v-text-field>

                <template>
                  <v-card-title class="subheading">
                    <span>Keywords:</span>
                    <v-spacer></v-spacer>
                    <span>
                      <v-btn
                        small
                        dark
                        color="#24a4b3"
                        @click="addItem(
                  $event, {keyword:''} ,userdata.skills[index].keywords
                  )"
                      >
                        Add keyword
                        <v-icon small right>add</v-icon>
                      </v-btn>
                    </span>
                  </v-card-title>

                  <v-list>
                    <v-list-tile v-for="(subitem,key,sub_index) in item.keywords" :key="sub_index">
                      <v-text-field
                        name="keyword"
                        label="Keyword"
                        placeholder="..."
                        v-model="subitem.keyword"
                      ></v-text-field>
                      <v-btn
                        icon
                        small
                        @click="removeItem(
                        $event,sub_index,userdata.skills[index].keywords)"
                      >
                        <v-icon>delete</v-icon>
                      </v-btn>
                      <v-btn icon small>
                        <v-icon>check_circle_outline</v-icon>
                      </v-btn>
                    </v-list-tile>
                  </v-list>
                </template>

                <!-- button group -->
                <v-layout>
                  <v-spacer></v-spacer>
                  <v-btn
                    dark
                    color="#24a4b3"
                    @click="removeItem($event,newEmptyData.skills[0],userdata.skills)"
                  >
                    Delete
                    <v-icon small right>delete</v-icon>
                  </v-btn>
                  <v-btn dark color="#24a4b3">Ok</v-btn>
                </v-layout>
              </div>
            </v-list>
          </v-card>
        </v-flex>
        <!-- End skills -->
        <!-- Languages -->
        <v-flex xs12 sm6 md4>
          <v-card class="ma-2 pa-2 card">
            <v-card-title class="headline">
              <span>Languages</span>
              <v-spacer></v-spacer>
              <span>
                <v-btn
                  small
                  block
                  dark
                  color="#24a4b3"
                  @click="addItem($event,newEmptyData.languages[0],userdata.languages)"
                >
                  <v-icon>add</v-icon>
                </v-btn>
              </span>
            </v-card-title>

            <v-list v-for="(item,index) in userdata.languages" :key="index">
              <div class="teal lighten-5 pa-2 ma-1">
                <v-text-field type="text" label="Language" name="language" v-model="item.language"></v-text-field>
                <v-text-field type="text" label="Fluency" name="fluency" v-model="item.fluency"></v-text-field>
                <!-- button group -->
                <v-layout>
                  <v-spacer></v-spacer>
                  <v-btn
                    dark
                    color="#24a4b3"
                    @click="removeItem($event,index , userdata.languages)"
                  >
                    Delete
                    <v-icon small right>delete</v-icon>
                  </v-btn>
                  <v-btn dark color="#24a4b3">Ok</v-btn>
                </v-layout>
              </div>
            </v-list>
          </v-card>
        </v-flex>
        <!-- End languages -->
        <!-- Interests -->
        <v-flex xs12 sm6 md4>
          <v-card class="ma-2 pa-2 card">
            <!-- card title + add button -->
            <v-card-title class="headline">
              <span>Interests</span>
              <v-spacer></v-spacer>
              <span>
                <v-btn
                  small
                  block
                  dark
                  color="#24a4b3"
                  @click="addItem($event,newEmptyData.interests[0],userdata.interests)"
                >
                  <v-icon>add</v-icon>
                </v-btn>
              </span>
            </v-card-title>
            <div
              v-for="(item,index) in userdata.interests"
              :key="index"
              class="teal lighten-5 pa-2 ma-1"
            >
              <v-text-field
                name="name"
                label="interest"
                type="text"
                placeholder="Interest"
                v-model="item.name"
              ></v-text-field>
              <template>
                <v-card-title class="subheading">
                  <span>Add keyword:</span>
                  <v-spacer></v-spacer>
                  <span>
                    <v-btn
                      small
                      dark
                      color="#24a4b3"
                      @click="addItem($event, {keyword:''} ,item.keywords)"
                    >
                      Add keyword
                      <v-icon small right>add</v-icon>
                    </v-btn>
                  </span>
                </v-card-title>

                <v-list>
                  <v-list-tile v-for="(subitem,key,index) in item.keywords" :key="index">
                    <v-text-field
                      name="keyword"
                      label="Keyword"
                      type="text"
                      v-model="subitem.keyword"
                    ></v-text-field>

                    <!-- doesn't work -->
                    <v-btn
                      icon
                      small
                      @click="removeItem(
               $event,index,userdata.interests[index].keywords)"
                    >
                      <v-icon>delete</v-icon>
                    </v-btn>
                    <v-btn icon small>
                      <v-icon>check_circle_outline</v-icon>
                    </v-btn>
                  </v-list-tile>
                </v-list>
              </template>

              <!-- button group -->
              <v-layout>
                <v-spacer></v-spacer>
                <v-btn dark color="#24a4b3" @click="removeItem($event,index,userdata.interests)">
                  Interest {{index+1}}
                  <v-icon small right>delete</v-icon>
                </v-btn>
                <v-btn dark color="#24a4b3">Ok</v-btn>
              </v-layout>
            </div>
          </v-card>
        </v-flex>
        <!-- End interests -->

        <!-- References -->
        <v-flex xs12 sm6 md4>
          <v-card class="ma-2 pa-2 card">
            <v-card-title class="headline">
              <span>References</span>
              <v-spacer></v-spacer>
              <span>
                <v-btn
                  small
                  block
                  dark
                  color="#24a4b3"
                  @click="addItem($event, newEmptyData.references[0], userdata.references)"
                >
                  <v-icon>add</v-icon>
                </v-btn>
              </span>
            </v-card-title>

            <div
              v-for="(item,index) in userdata.references"
              :key="index"
              class="teal lighten-5 pa-2 ma-1"
            >
              <v-text-field name="name" label="Name"
              type="text" v-model="item.name"></v-text-field>
              <v-text-field name="reference" label="Reference"
              type="text" v-model="item.reference"></v-text-field>

              <v-layout>
                <v-spacer></v-spacer>
                <v-btn dark color="#24a4b3" @click="removeItem($event,index,userdata.references)">
                  Reference {{index+1}}
                  <v-icon small right>delete</v-icon>
                </v-btn>
                <v-btn dark color="#24a4b3">Ok</v-btn>
              </v-layout>
            </div>
          </v-card>
        </v-flex>
        <!-- End references -->
      </v-layout>
    </v-container>
  </v-form>
</template>


<script>
import templeateData from '@/assets/templeateData.json';
import axios from 'axios';

export default {
  props: {
    userdata: {
      type: Object,
    },
  },
  data() {
    return {
      errors: ['test', 'hello'],
      selectedImage: null,
      newEmptyData: templeateData,
    };
  },
  methods: {
    // Generic add item
    addItem(e, source, target) {
      e.preventDefault();
      target.push(JSON.parse(JSON.stringify(source)));
    },
    // Generic remove item
    removeItem(e, index, target) {
      e.preventDefault();
      target.splice(index, 1);
    },
    pickImage() {
      this.$refs.image.click();
    },
    onImageSelected({ target: { files } }) {
      const [image] = files;
      this.selectedImage = image;
    },
    onImageUpload() {
      const url = 'https://api.cloudinary.com/v1_1/fredhawk/image/upload';
      const fd = new FormData();
      fd.append('api_key', process.env.CLOUDINARY_API);
      fd.append('api_secret', process.env.CLOUDINARY_SECRET);
      fd.append('file', this.selectedImage);
      fd.append('upload_preset', 'resume');
      axios.post(url, fd).then((res) => {
        this.userdata.basics.picture = res.data.secure_url;
      });
    },
  },
};
</script>

<style scoped>
.card {
  align-items: stretch;
}
</style>
