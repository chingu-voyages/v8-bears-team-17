<template>
        <v-flex >
          <v-card class="ma-2 pa-2">
            <v-card-title class="headline">Personal data</v-card-title>
            <div class="teal lighten-5 pa-2 ma-1">
              <v-text-field
                name="name"
                label="Name"
                type="text"
                placeholder="Your Name"
                v-model="info.name"
                :error-messages="errors.collect('name')"
                v-validate.continues="'alpha_spaces|required'"
              ></v-text-field>
              <v-text-field
                name="label"
                label="Label"
                type="text"
                placeholder="e.g. Humble Rockstar"
                v-model="info.label"
                :error-messages="errors.collect('label')"
                v-validate.continues="'required|alpha_spaces'"
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
                hint="Your@email.com"
                v-model="info.email"
                :error-messages="errors.collect('email')"
                v-validate.continues="'required|email'"
              ></v-text-field>
              <v-text-field
                name="phone"
                label="phone"
                type="tel"
                placeholder="Your phone number"
                hint="Enter phone number"
                v-model="info.phone"
                :error-messages="errors.collect('phone')"
                v-validate.continues="{required: true, regex: /^[0-9- \(\)]*$/}"
              ></v-text-field>
              <v-text-field
                name="website"
                label="Website"
                type="url"
                placeholder="www.yourwebsite.com"
                v-model="info.website"
                hint="www.yourwebsite.com"
                :error-messages="errors.collect('website')"
                v-validate.continues="'required|url'"
              ></v-text-field>
              <v-textarea
                name="summary"
                label="Summary"
                type="text"
                placeholder="Your summary"
                v-model="info.summary"
                hint="Your summary"
                :error-messages="errors.collect('summary')"
                v-validate.continues="{required: true, regex: /^[a-zA-ZåäöÅÄÖ0-9,.!? ]*$/}"
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
</template>

<script>
import axios from 'axios';

export default {
  props: {
    data: {
      type: Object,
    },
  },
  inject: ['$validator'],
  data() {
    return {
      info: this.data,
      selectedImage: null,
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
        this.info.picture = res.data.secure_url;
      });
    },
  },
};
</script>

<style>
</style>
