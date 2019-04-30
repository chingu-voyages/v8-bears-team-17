<template>
        <v-flex xs12 sm6 md4>
          <v-card class="ma-2 pa-2" height="100%">
            <v-card-title class="headline">Location</v-card-title>
            <div class="teal lighten-5 pa-2 ma-1">
              <v-text-field
                name="address"
                label="Address"
                type="text"
                placeholder="e.g. Appelstreet 2"
                v-model="info.address"
                :error-messages="errors.collect('address')"
                v-validate.continues="{required: true, regex: /^[a-zåäöA-ZÅÄÖ0-9. ]*$/}"
              ></v-text-field>
              <v-text-field
                name="postalcode"
                label="Postal Code"
                type="text"
                placeholder="e.g."
                v-model="info.postalcode"
                :error-messages="errors.collect('postalcode')"
                v-validate.continues="{required: true, regex: /^[a-zåäöA-ZÅÄÖ0-9- ]*$/}"
              ></v-text-field>
              <v-text-field
                name="city"
                label="City"
                type="text"
                placeholder="e.g. Copenhagen"
                v-model="info.city"
                :error-messages="errors.collect('city')"
                v-validate.continues="{required: true, regex: /^[a-zåäöA-ZÅÄÖ ]*$/}"
              ></v-text-field>
              <v-text-field
                name="countrycode"
                label="Country Code"
                type="text"
                placeholder="e.g. "
                v-model="info.countrycode"
                :error-messages="errors.collect('countrycode')"
                v-validate.continues="{required: true, regex: /^[A-ZÅÄÖ]*$/}"
              ></v-text-field>
              <v-text-field
                name="region"
                label="Region"
                type="text"
                placeholder="e.g."
                v-model="info.region"
                :error-messages="errors.collect('region')"
                v-validate.continues="{required: true, regex: /^[a-zA-ZåäöÅÄÖ ]*$/}"
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
</template>

<script>
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
  },
};
</script>

<style>
</style>
