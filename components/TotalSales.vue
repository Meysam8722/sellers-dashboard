<template>
  <v-container v-else fluid class="px-3 px-sm-0 py-0">
    <v-row class="my-6 mx-0 mx-sm-6">
      <v-col
        v-for="(item, index) in salesItems"
        :key="item.id"
        cols="12"
        sm="4"
      >
        <v-card
          :color="darkMode ? 'darkBlue' : 'white'"
          class="pa-6 font-weight-bold"
          height="100%"
          hover
        >
          <div class="d-flex flex-row justify-center align-center">
            <div class="d-flex flex-column justify-center align-start">
              <div class="d-flex flex-row justify-center align-center">
                <div
                  class="d-flex flex-row justify-center align-center icon-container pa-1 mr-3"
                  :style="iconColors[index]"
                >
                  <v-icon color="white" size="30">{{ item.icon }}</v-icon>
                </div>
                <span class="darkGrey--text" style="font-weight: 700">
                  {{ item.title }}
                </span>
              </div>
              <span
                :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
                class="big-text mt-4"
              >
                {{ item.text }}
              </span>
              <div class="d-flex flex-row align-center">
                <v-icon right small :color="item.percentageColor">
                  {{ item.percentageIcon }}</v-icon
                >
                <span :class="`${item.percentageColor}--text`" class="mt-2">
                  10%
                </span>
              </div>
            </div>
            <v-sparkline
              width="100"
              :value="value2"
              :smooth="radius || false"
              :line-width="width"
              :stroke-linecap="lineCap"
              :type="type"
              :auto-line-width="autoLineWidth"
              :color="item.curveColor"
              auto-draw
              :auto-draw-duration="2000"
            ></v-sparkline>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "TotalSales",
  data() {
    return {
      width: 1,
      radius: 60,
      padding: 0,
      lineCap: "round",
      value2: [1, 11, 4, 7],
      type: "trend",
      autoLineWidth: false,
      salesItems: [
        {
          id: 1,
          title: "Total Sales",
          icon: "mdi-currency-usd",
          iconColor: "#3AC2CB",
          text: "100.00 SR",
          curveColor: "green",
          percentageColor: "green",
          percentageIcon: "mdi-elevation-rise",
        },
        {
          id: 2,
          title: "Total Orders",
          icon: "mdi-shopping-outline",
          iconColor: "#F12E67",
          text: "100 Orders",
          curveColor: "green",
          percentageColor: "green",
          percentageIcon: "mdi-elevation-rise",
        },
        {
          id: 3,
          title: "Total Income",
          icon: "mdi-circle-multiple-outline",
          iconColor: "#FE9518",
          text: "100.00 SR",
          curveColor: "pink",
          percentageColor: "red",
          percentageIcon: "mdi-elevation-decline",
        },
      ],
    };
  },
  computed: {
    iconColors() {
      return this.salesItems.map((item) => {
        return {
          "background-color": item.iconColor,
        };
      });
    },
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
  },
};
</script>
<style scoped>
.icon-container {
  border-radius: 8px;
  width: 40px;
  height: 40px;
}
.big-text {
  font-size: 20px;
}
.v-sheet.v-card {
  border-radius: 10px;
}
</style>
