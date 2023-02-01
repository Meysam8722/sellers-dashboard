<template>
  <v-app>
    <v-app-bar color="#3AC2CB" height="48px">
      <div
        class="d-flex flex-row justify-space-between align-center full-width mx-0 mx-sm-10"
      >
        <v-app-bar-nav-icon aria-label="menu" @click.stop="drawer = !drawer">
          <template #default>
            <v-icon size="40" color="white">
              mdi-microsoft-xbox-controller-menu
            </v-icon>
          </template>
        </v-app-bar-nav-icon>

        <h3 class="white--text font-weight-bold">
          Rate us in marouf to take a free month
        </h3>
        <v-btn icon text color="white" class="mr-n3 mr-sm-n4">
          <v-icon size="24"> mdi-close </v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :dark="false"
      :color="darkMode ? 'darkBlue' : 'white'"
      temporary
      app
    >
      <template #prepend>
        <img
          src="~/assets/images/kwaidi_logo_mall.png"
          width="201"
          class="pa-4"
        />
      </template>
      <template #append>
        <div class="pa-4">
          <v-btn
            height="60"
            block
            :color="darkMode ? 'veryDarkGrey' : 'darkGrey'"
            :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
          >
            <div class="d-flex flex-row align-center">
              <img src="~/assets/images/windows-icon.png" height="50" />
              <span class="font-weight-bold">Kwaidi POS</span>
            </div>
          </v-btn>
        </div>
      </template>
      <SideBarContent />
    </v-navigation-drawer>
    <v-main :class="darkMode ? 'main-dark-container' : 'main-light-container'">
      <GlobalAppBar />
      <Nuxt />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import GlobalAppBar from "~/components/GlobalAppBar";
import SideBarContent from "~/components/SideBarContent";
import Footer from "~/components/Footer";

export default {
  name: "DefaultLayout",
  components: {
    GlobalAppBar,
    SideBarContent,
    Footer,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
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
.v-toolbar__extension {
  height: 48px !important;
}
.full-width {
  width: 100% !important;
}
.main-light-container {
  background-color: #fafafa;
}
.main-dark-container {
  background-color: #040d21;
}
@media only screen and (max-width: 600px) {
  h3 {
    font-size: 14px;
  }
  span {
    font-size: 12px;
  }
}
.v-btn {
  text-transform: unset !important;
  border-radius: 10px;
}
</style>
