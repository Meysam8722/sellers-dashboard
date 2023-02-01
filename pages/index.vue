<template>
  <v-container fluid class="py-0 px-3 px-sm-0">
    <v-row class="justify-space-between pt-3 pb-0 px-6 px-sm-9 align-center">
      <v-col cols="12" sm="8" md="7">
        <div
          :class="$vuetify.breakpoint.smAndUp ? 'left-box' : ''"
          class="d-flex flex-row"
        >
          <div class="search-container">
            <v-text-field
              v-model="search"
              loading="false"
              single-line
              solo
              dense
              hide-details
              max-width="100px"
              :background-color="darkMode ? 'veryDarkBlue' : 'veryLightGrey'"
              class="font-weight-bold"
              :class="darkMode ? 'light-title' : 'dark-title'"
              :color="darkMode ? 'rgba(164, 180, 203, 0.3)' : 'veryDarkBlue'"
            >
              <template #prepend>
                <v-icon color="rgba(164, 180, 203, 0.3)" class="ml-2 mr-n3">
                  mdi-magnify
                </v-icon>
              </template>
            </v-text-field>
          </div>

          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <div class="branch-container">
                <v-btn
                  outlined
                  dark
                  v-bind="attrs"
                  v-on="on"
                  class="mr-1 font-weight-bold"
                  height="100%"
                >
                  <span
                    :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
                    >{{ branch }}</span
                  >
                  <v-icon
                    right
                    small
                    :color="darkMode ? 'white' : 'veryDarkBlue'"
                  >
                    mdi-chevron-down
                  </v-icon>
                </v-btn>
              </div>
            </template>

            <v-list nav dense :color="darkMode ? 'darkBlue' : 'white'">
              <v-list-item
                v-for="(item, index) in branchItems"
                :key="index"
                link
                @click="branchHandler(item)"
              >
                <v-list-item-title
                  class="medium-txt font-weight-bold"
                  :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
                  >{{ item }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
          <div>
            <v-btn
              depressed
              color="mainBlue"
              class="white--text font-weight-bold ml-4 mr-10"
              height="100%"
            >
              Search
            </v-btn>
          </div>
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <div>
                <v-btn
                  outlined
                  dark
                  v-bind="attrs"
                  v-on="on"
                  class="ml-1 font-weight-bold"
                  height="100%"
                >
                  <span
                    :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
                    >{{ date || "Pick a date" }}</span
                  >
                  <v-icon
                    right
                    small
                    :color="darkMode ? 'white' : 'veryDarkBlue'"
                  >
                    mdi-chevron-down
                  </v-icon>
                </v-btn>
              </div>
            </template>
            <v-date-picker
              v-model="date"
              scrollable
              :dark="darkMode"
              color="mainBlue"
              class="font-weight-bold"
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                :color="darkMode ? 'mainBlue' : 'veryDarkBlue'"
                class="font-weight-bold"
                @click="modal = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                :color="darkMode ? 'mainBlue' : 'veryDarkBlue'"
                class="font-weight-bold"
                @click="$refs.dialog.save(date)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </div>
      </v-col>
    </v-row>
    <TotalSales />
    <Orders />
    <StatisticCharts />
    <Rankings />
  </v-container>
</template>
<script>
import TotalSales from "~/components/TotalSales";
import Orders from "~/components/Orders";
import Rankings from "~/components/Rankings";
import StatisticCharts from "~/components/StatisticCharts";

export default {
  name: "HomePage",
  components: {
    TotalSales,
    Orders,
    Rankings,
    StatisticCharts,
  },
  data() {
    return {
      modal: false,
      date: null,
      search: "",
      messageItems: [],
      branch: "Branch 1",
      branchItems: ["Branch 1", "Branch 2", "Branch 3"],
    };
  },
  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
  },

  methods: {
    branchHandler(item) {
      this.branch = item;
    },
  },
};
</script>
<style scoped>
>>> .v-input__slot {
  max-width: 200px !important;
  box-shadow: none !important;
}
.left-box >>> .v-input__control {
  flex-direction: row;
  justify-content: start;
}
.right-box >>> .v-input__control {
  flex-direction: row;
  justify-content: end;
}

>>> .dark-title.v-input input {
  color: #040d21;
}
>>> .light-title.v-input input {
  color: white;
}
>>> .dark-title.v-input input::placeholder {
  color: hsl(0, 0%, 52%);
}
>>> .light-title.v-input input::placeholder {
  color: hsl(0, 0%, 70%);
}
.v-btn {
  text-transform: unset !important;
}
.branch-container .v-btn {
  border-bottom-left-radius: 0 !important;
  border-top-left-radius: 0 !important;
  border-left: none;
}
.v-btn--outlined {
  border: solid 1px rgba(164, 180, 203, 0.3);
  border-radius: 8px;
}
.v-btn {
  border-radius: 8px;
}
>>> .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: red !important;
}
.search-container {
  border: solid 1px rgba(164, 180, 203, 0.3);
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}
>>> .v-btn__content {
  font-weight: bold !important;
}
.v-picker__title__btn:not(.v-picker__title__btn--active) {
  font-weight: bold !important;
}
</style>
