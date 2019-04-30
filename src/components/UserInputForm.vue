<template>
  <v-form>
    <!--@submit="checkForm">-->
    <!--error handling, not sure if the snackbar thing works!
    //TODO: add height=100% to all cards or find better solution
    //TODO: Fix the non functioning remove button -> interests keyword
    //TODO: fix snackbar
    //TODO: Decide id personal data and location should have add buttons
    //TODO: implement ok/edit button, so that the
    //TODO: input values will be shown to user upon click, button changes to edit
    Actually this shouldn't be in this component, I think, but rather the resume.vue?-->

    <v-container xs12>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4>
          <v-btn color="info" @click="cancelEdit"><span>Cancel </span>
      <v-icon>cancel</v-icon></v-btn>
      <v-btn color="info" @click="saveEdit"><span>Save </span>
      <v-icon>save</v-icon></v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <!-- Basics -->
        <UserFormBasics :data="userFormData.basics" />
        <UserFormLocation :data="userFormData.basics.location" />
        <UserFormSocial :data="userFormData.basics.profiles" />
        <UserFormWork :data="userFormData.work" />
        <UserFormVolunteer :data="userFormData.volunteer" />
        <UserFormEducation :data="userFormData.education" />
        <UserFormAwards :data="userFormData.awards" />
        <UserFormPublications :data="userFormData.publications" />
        <UserFormSkills :data="userFormData.skills" />
        <UserFormLanguages :data="userFormData.languages" />
        <UserFormInterests :data="userFormData.interests" />
        <UserFormReferences :data="userFormData.references" />
      </v-layout>
    </v-container>
  </v-form>
</template>


<script>
import axios from 'axios';
import UserFormBasics from './UserForm/UserFormBasics.vue';
import UserFormLocation from './UserForm/UserFormLocation.vue';
import UserFormSocial from './UserForm/UserFormSocial.vue';
import UserFormWork from './UserForm/UserFormWork.vue';
import UserFormVolunteer from './UserForm/UserFormVolunteer.vue';
import UserFormEducation from './UserForm/UserFormEducation.vue';
import UserFormAwards from './UserForm/UserFormAwards.vue';
import UserFormPublications from './UserForm/UserFormPublications.vue';
import UserFormSkills from './UserForm/UserFormSkills.vue';
import UserFormLanguages from './UserForm/UserFormLanguages.vue';
import UserFormInterests from './UserForm/UserFormInterests.vue';
import UserFormReferences from './UserForm/UserFormReferences.vue';

export default {
  $_veeValidate: {
    validator: 'new',
  },
  components: {
    UserFormBasics,
    UserFormLocation,
    UserFormSocial,
    UserFormWork,
    UserFormVolunteer,
    UserFormEducation,
    UserFormAwards,
    UserFormPublications,
    UserFormSkills,
    UserFormLanguages,
    UserFormInterests,
    UserFormReferences,
  },
  props: {
    userdata: {
      type: Object,
    },
    isEditing: Boolean,
  },
  data() {
    return {
      selectedImage: null,
      userFormData: this.userdata,
      isEdit: this.isEditing,
    };
  },
  computed: {
  },
  methods: {
    test() {
      console.log(this.userFormData);
    },
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
        this.userFormData.basics.picture = res.data.secure_url;
      });
    },
    cancelEdit() {
      this.isEdit = !this.isEdit;
      this.$emit('toggle-edit', this.isEdit);
    },
    saveEdit() {
      this.$validator.validateAll().then((isValid) => {
        if (isValid) {
          this.isEdit = !this.isEdit;
          this.$emit('toggle-edit', this.isEdit);
          this.$emit('save-form', this.userFormData);
        } else {
          console.log('errors in form');
        }
      }).catch(err => console.error(err));
    },
  },
};
</script>

<style scoped>
.card {
  align-items: stretch;
}
</style>
