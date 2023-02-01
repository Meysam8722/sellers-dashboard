<template>
  <v-container
    fluid
    class="d-flex flex-row justify-space-between align-center px-12 pb-3 pt-9"
  >
    <v-row>
      <v-col cols="12" md="6" class="px-0">
        <div
          class="d-flex flex-row font-weight-bold"
          :class="$vuetify.breakpoint.smAndDown ? ' justify-center' : ''"
        >
          <div
            :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
            class="mt-2"
          >
            Welcome To Kwaidi Sellers Dashboard
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="d-flex flex-row justify-end align-center">
          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                depressed
                class="mx-1"
                height="50"
                :color="darkMode ? 'veryDarkBlue' : 'veryLightGrey'"
              >
                <div class="d-flex flex-row align-center">
                  <img
                    src="~/assets/images/ahmed-mohammed.jpg"
                    alt="Dima"
                    height="30"
                    class="mr-2"
                  />
                </div>
                <div class="d-flex flex-column align-start font-weight-bold">
                  <div class="d-flex flex-row align-center justify-center">
                    <span
                      :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
                      >Hi Dima!</span
                    >
                    <v-icon
                      right
                      small
                      :color="darkMode ? 'white' : 'veryDarkBlue'"
                    >
                      mdi-chevron-down
                    </v-icon>
                  </div>
                  <span
                    :class="darkMode ? 'darkGrey--text' : 'veryDarkBlue--text'"
                    class="small-txt"
                    >Good Morning!</span
                  >
                </div>
              </v-btn>
            </template>

            <v-list nav dense :color="darkMode ? 'darkBlue' : 'white'">
              <v-list-item
                v-for="(item, index) in messageItems"
                :key="index"
                link
              >
                <v-list-item-title
                  class="medium-txt font-weight-bold"
                  :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
                  >{{ item.title }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                outlined
                dark
                v-bind="attrs"
                v-on="on"
                class="mx-1 font-weight-bold"
              >
                <span
                  :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
                  >{{ language }}</span
                >
                <v-icon
                  right
                  small
                  :color="darkMode ? 'white' : 'veryDarkBlue'"
                >
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </template>

            <v-list nav dense :color="darkMode ? 'darkBlue' : 'white'">
              <v-list-item
                v-for="(item, index) in languages"
                :key="index"
                link
                @click="languageHandler(item)"
              >
                <v-list-item-title
                  class="medium-txt font-weight-bold"
                  :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
                  >{{ item }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                outlined
                dark
                v-bind="attrs"
                v-on="on"
                class="blue--text mx-1"
              >
                <v-icon size="20"> mdi-message-badge-outline </v-icon>
              </v-btn>
            </template>

            <v-list nav dense :color="darkMode ? 'darkBlue' : 'white'">
              <v-list-item
                v-for="(item, index) in messageItems"
                :key="index"
                link
              >
                <v-list-item-title
                  class="font-weight-bold medium-txt"
                  :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
                  >{{ item.title }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                outlined
                dark
                v-bind="attrs"
                v-on="on"
                class="blue--text mx-1"
              >
                <v-icon size="20"> mdi-bell-badge-outline </v-icon>
              </v-btn>
            </template>

            <v-list nav dense :color="darkMode ? 'darkBlue' : 'white'">
              <v-list-item
                v-for="(item, index) in notificationItems"
                :key="index"
                link
              >
                <v-list-item-title
                  class="font-weight-bold medium-txt"
                  :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
                  >{{ item.title }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn
            icon
            outlined
            class="mr-n3 mr-sm-n4 blue--text mx-1"
            @click="$store.commit('setDarkMode', !darkMode)"
          >
            <v-icon size="20">
              {{ darkMode ? "mdi-weather-sunny" : "mdi-weather-night" }}
            </v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "GlobalAppBar",
  data() {
    return {
      language: "En",
      languages: ["En", "Ar"],
      notificationItems: [{ title: "Profile Settings" }, { title: "Log Out" }],
      messageItems: [
        { title: "Profile Settings" },
        { title: "Client Dashboard" },
      ],
    };
  },
  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
  },
  methods: {
    languageHandler(item) {
      if (item === "En") {
        this.language = "En";
      } else if (item === "Ar") {
        this.language = "Ar";
      }
    },
  },
};
</script>
<style scoped>
.v-btn {
  border-color: #858585;
}
.v-btn--round {
  border-radius: 5px;
  border-color: #858585;
}
.small-txt {
  font-size: 10px !important;
}
img {
  border-radius: 4px;
}
span {
  word-break: unset;
}
>>> .v-input__slot {
  max-width: 80px !important;
}
.v-btn {
  text-transform: unset !important;
}
.v-btn--outlined {
  border: solid 1px rgba(164, 180, 203, 0.3);
  border-radius: 8px;
}
.medium-txt {
  font-size: 13px;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #3ac2cb;
}
</style>
