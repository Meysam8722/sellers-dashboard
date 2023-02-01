<template>
  <v-container v-else fluid class="px-3 px-sm-0 py-0">
    <v-row class="my-6 mx-0 mx-sm-6">
      <v-col v-for="item in salesItems" :key="item.id" cols="12" sm="6" md="3">
        <v-card
          :color="darkMode ? 'darkBlue' : 'white'"
          class="pa-6"
          height="100%"
          hover
        >
          <div class="d-flex flex-column justify-center align-center">
            <span
              :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
              class="font-weight-bold"
            >
              {{ item.title }}
            </span>
            <v-progress-circular
              :value="100"
              :color="item.color"
              :size="100"
              :width="15"
            >
              <div :class="darkMode ? 'white--text' : 'veryDarkBlue--text'">
                <span class="big-text"> 70 </span>
              </div>
            </v-progress-circular>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Orders",

  data() {
    return {
      salesItems: [
        {
          id: 1,
          title: "New Orders",
          color: "#3AC2CB",
        },
        {
          id: 2,
          title: "Shipped Orders",
          color: "#FE9518",
        },
        {
          id: 3,
          title: "Completed Orders",
          color: "#34B53A",
        },
        {
          id: 4,
          title: "Returned Applications",
          color: "#F12E67",
        },
      ],
    };
  },

  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
  },
};
</script>
<style scoped>
.v-sheet.v-card {
  border-radius: 10px;
}
.big-text {
  font-size: 20px;
}
</style>
