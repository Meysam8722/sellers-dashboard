<template>
  <div class="d-flex flex-row justify-space-between align-center">
    <div class="d-flex flex-column align-start">
      <div class="d-flex flex-row align-center">
        <v-icon color="mainBlue" class="mr-1" size="20"> mdi-poll </v-icon>
        <span class="mainBlue--text">1000 SR</span>
      </div>

      <span :class="darkMode ? 'darkGrey--text' : 'veryDarkBlue--text'"
        >Total Sales</span
      >
    </div>
    <div class="d-flex flex-column align-start">
      <div class="d-flex flex-row align-center">
        <v-icon color="green" class="mr-1" size="20">
          mdi-elevation-rise
        </v-icon>
        <span class="green--text">50</span>
      </div>

      <span
        :class="darkMode ? 'darkGrey--text' : 'veryDarkBlue--text'"
        class="ml-1"
        >Sales (12%)</span
      >
    </div>
    <div class="d-flex flex-column align-start">
      <div class="d-flex flex-row align-center">
        <v-icon
          v-for="item in [0, 1, 2, 3, 4]"
          :key="item"
          color="orange"
          size="20"
        >
          mdi-star
        </v-icon>
      </div>

      <span
        :class="darkMode ? 'darkGrey--text' : 'veryDarkBlue--text'"
        class="ml-1"
        >20 (Reviews)</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "Rating",
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
<style scoped></style>
