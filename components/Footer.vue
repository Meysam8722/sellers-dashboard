<template>
  <v-container fluid class="px-6 pb-6">
    <v-row class="align-center">
      <v-col cols="12" sm="6" md="6" class="pr-md-6 pr-9">
        <v-btn
          :color="darkMode ? 'veryDarkGrey' : 'darkGrey'"
          :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
          class="ml-3"
          x-large
          block
          height="100"
        >
          <div class="d-flex flex-row align-center justify-center mr-6">
            <v-icon left size="70" :color="darkMode ? 'white' : 'veryDarkBlue'"
              >mdi-google-plus</v-icon
            >
          </div>
          <span class="font-weight-bold">Add Google Analytics Key</span>
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6" md="2" class="px-5">
        <div class="d-flex flex-column align-start font-weight-bold">
          <span :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
            >Instagram Followers</span
          >
          <div class="d-flex flex-row align-center">
            <img
              src="~/assets/images/instagram-icon.png"
              width="50"
              class="ml-n2"
            />
            <span :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
              >100k</span
            >
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="2" class="px-5">
        <div class="d-flex flex-row justify-center">
          <div class="d-flex flex-column align-start font-weight-bold">
            <span :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
              >Twitter Followers</span
            >
            <div class="d-flex flex-row align-center">
              <img
                src="~/assets/images/twitter-icon.png"
                width="50"
                class="ml-n2"
              />
              <span :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
                >100k</span
              >
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="2" class="px-5">
        <div class="d-flex flex-row justify-end">
          <div class="d-flex flex-column align-start font-weight-bold">
            <span :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
              >Tiktok Followers</span
            >
            <div class="d-flex flex-row align-center">
              <img src="~/assets/images/tiktok-icon.png" width="50" />
              <span
                :class="darkMode ? 'mainBlue--text' : 'veryDarkBlue--text'"
                class="font-weight-bold"
                >Connect</span
              >
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
  },
};
</script>
<style scoped>
.v-btn {
  text-transform: unset !important;
  border-radius: 10px;
}
</style>
