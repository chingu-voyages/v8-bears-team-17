<template>
  <v-footer height="auto" class="no-print">
    <v-layout justify-space-around row wrap class="footer-color">
      <v-card-title>
        <strong>Make your resume shine!</strong>
        <v-divider class="mx-3" inset vertical></v-divider>Email us:
        <v-btn icon>
          <v-icon color="white" size="24px">email</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-actions justify-center>
        &copy;2019 -
        <strong>17 BEARS</strong>
      </v-card-actions>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: "SiteFooter",
  data: () => ({})
};
</script>

<style>
.footer-color {
  background: #24a4b3;
  color: white;
}
@media print {
  .no-print {
    display: none !important;
    margin: 0 !important;
  }
}
</style>
