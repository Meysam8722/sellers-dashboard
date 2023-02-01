<template>
  <v-container v-else fluid class="px-3 px-sm-0 py-0">
    <v-row class="my-6 mx-0 mx-sm-6">
      <v-col
        v-for="item in rankingItems"
        :key="item.id"
        cols="12"
        :md="item.md"
        :lg="item.lg"
      >
        <v-card
          :color="darkMode ? 'darkBlue' : 'white'"
          class="px-2 py-6"
          height="100%"
        >
          <v-card-title
            :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
            class="pt-0 font-weight-bold"
          >
            {{ item.title }}
          </v-card-title>
          <v-card-text
            v-for="element in [0, 1, 2, 3, 4]"
            :key="element"
            class="pb-0 font-weight-bold"
          >
            <div
              class="d-flex flex-row align-center justify-start ml-n2"
              :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
            >
              <div class="coffee mr-2" :class="item.id === 1 ? 'ml-2' : ''">
                <img
                  v-if="item.id === 1"
                  src="~/assets/images/italian-coffee-3.jpg"
                  :alt="item.title"
                  height="60"
                />
              </div>
              <div class="ahmed mr-2">
                <img
                  v-if="item.id === 3"
                  src="~/assets/images/ahmed-mohammed.jpg"
                  :alt="item.title"
                  height="40"
                />
              </div>

              <div class="d-flex flex-column align-start">
                <span v-if="item.id === 2">
                  {{ item.id + ". " + item.subItemTitle }}</span
                >
                <span v-else> {{ item.subItemTitle }}</span>
                <span
                  :class="darkMode ? 'darkGrey--text' : 'veryDarkBlue--text'"
                  >{{ item.subItemText }}</span
                >
              </div>

              <Rating v-if="item.id === 1" class="flex-grow-1 ml-16" />
            </div>

            <v-divider v-if="element !== 4"></v-divider>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Rating from "~/components/Rating";
export default {
  name: "Rankings",
  components: {
    Rating,
  },
  data() {
    return {
      rankingItems: [
        {
          id: 1,
          title: "Best Selling Products",
          subItemTitle: "Italian Coffee",
          subItemText: "20 SR",
          md: 12,
          lg: 6,
        },
        {
          id: 2,
          title: "Most Purchased Customers",
          subItemTitle: "Ahmed Mohammed",
          subItemText: "1000 SR",
          md: 6,
          lg: 3,
        },
        {
          id: 3,
          title: "Highest Performing Employees",
          subItemTitle: "Ahmed Mohammed",
          subItemText: "Riyadh Branch",
          md: 6,
          lg: 3,
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
.big-text {
  font-size: 20px;
}
.v-sheet.v-card {
  border-radius: 10px;
}
.theme--light.v-divider {
  border-color: rgba(164, 180, 203, 0.3);
}
.v-card__title {
  word-break: unset;
}
.ahmed img {
  border-radius: 10px;
}
.coffee img {
  border-radius: 20px;
}
.v-rating {
  max-width: 50px;
}
</style>
