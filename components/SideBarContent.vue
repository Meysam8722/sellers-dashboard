<template>
  <v-list nav dense :color="darkMode ? 'darkBlue' : 'white'">
    <v-list-item v-for="item in items" :key="item.title" link>
      <v-menu v-if="item.hasSubItems" bottom offset-x open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item-title
            v-bind="attrs"
            v-on="on"
            class="d-flex flex-row justify-space-between align-center font-weight-bold"
          >
            <span :class="darkMode ? 'white--text' : 'veryDarkBlue--text'">{{
              item.title
            }}</span>
            <v-icon
              right
              size="20"
              :color="darkMode ? 'white' : 'veryDarkBlue'"
            >
              mdi-chevron-down
            </v-icon>
          </v-list-item-title>
        </template>

        <v-list nav dense :color="darkMode ? 'darkBlue' : 'white'">
          <v-list-item v-for="element in item.subItems" :key="element.id" link>
            <v-list-item-title
              :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
              class="font-weight-bold medium-txt"
              >{{ element.title }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
      <v-list-item-title
        v-else
        v-text="item.title"
        :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
        class="font-weight-bold"
      ></v-list-item-title>
    </v-list-item>
    <v-list-item link>
      <v-list-item-title
        :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
        class="d-flex flex-row align-center font-weight-bold"
      >
        <span>Log Out</span>
        <v-icon right :color="darkMode ? 'white' : 'veryDarkBlue'">
          mdi-location-exit</v-icon
        >
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "SideBarContent",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Dashboard",
          hasSubItems: false,
        },
        {
          id: 2,
          title: "Branch Management",
          hasSubItems: false,
        },
        {
          id: 3,
          title: "Roles Management",
          hasSubItems: true,
          subItems: [
            {
              id: 1,
              title: "Employee List",
            },
            {
              id: 2,
              title: "Role List",
            },
            {
              id: 3,
              title: "Employee Log",
            },
          ],
        },
        {
          id: 4,
          title: "Customer Management",
          hasSubItems: true,
          subItems: [
            {
              id: 1,
              title: "Customer List",
            },
            {
              id: 2,
              title: "Reviews",
            },
            {
              id: 3,
              title: "Customer Sticker",
            },
          ],
        },
        {
          id: 5,
          title: "Supplier Management",
          hasSubItems: false,
        },
        {
          id: 6,
          title: "Products Management",
          hasSubItems: true,
          subItems: [
            {
              id: 1,
              title: "Products List",
            },
            {
              id: 2,
              title: "Products Package",
            },
            {
              id: 3,
              title: "Trash",
            },
          ],
        },
        {
          id: 7,
          title: "Orders Management",
          hasSubItems: true,
          subItems: [
            {
              id: 1,
              title: "Orders List",
            },
            {
              id: 2,
              title: "Waybill Generate",
            },
          ],
        },
        {
          id: 8,
          title: "Marketing Management",
          hasSubItems: true,
          subItems: [
            {
              id: 1,
              title: "Platform Ads",
            },
            {
              id: 2,
              title: "Pin Ads",
            },
            {
              id: 3,
              title: "Coupons",
            },
            {
              id: 4,
              title: "Special Offers",
            },
            {
              id: 5,
              title: "Affiliate System",
            },
            {
              id: 6,
              title: "Kwaidi Affiliate",
            },
            {
              id: 7,
              title: "Cart Overtime",
            },
            {
              id: 8,
              title: "Available Stock",
            },
            {
              id: 9,
              title: "SMS Services",
            },
            {
              id: 10,
              title: "Customer Points",
            },
            {
              id: 11,
              title: "Live Streaming",
            },
          ],
        },
        {
          id: 9,
          title: "Store Theme",
          hasSubItems: true,
          subItems: [
            {
              id: 1,
              title: "Store Design",
            },
            {
              id: 2,
              title: "My App",
            },
          ],
        },
        {
          id: 10,
          title: "Accounting & Reports",
          hasSubItems: true,
          subItems: [
            {
              id: 1,
              title: "Invoice",
            },
            {
              id: 2,
              title: "Purchase",
            },
            {
              id: 3,
              title: "Supplier Bills",
            },
            {
              id: 4,
              title: "Affiliate Bills",
            },
            {
              id: 5,
              title: "Bills Reports",
            },
          ],
        },
        {
          id: 11,
          title: "System Setting",
          hasSubItems: true,
          subItems: [
            {
              id: 1,
              title: "Basic Setting",
            },
            {
              id: 2,
              title: "Store Plan",
            },
            {
              id: 3,
              title: "Seo Setting",
            },
            {
              id: 4,
              title: "Brands Setting",
            },
            {
              id: 5,
              title: "Orders Setting",
            },
            {
              id: 6,
              title: "Footer Custom",
            },
            {
              id: 7,
              title: "Store Options",
            },
            {
              id: 8,
              title: "Domain Setting",
            },
          ],
        },
        {
          id: 12,
          title: "App Market",
          hasSubItems: true,
          subItems: [
            {
              id: 1,
              title: "App Market",
            },
            {
              id: 2,
              title: "Installed Apps",
            },
          ],
        },
        {
          id: 13,
          title: "Video Center",
          hasSubItems: false,
        },
        {
          id: 14,
          title: "Hiring Team",
          hasSubItems: false,
        },
        {
          id: 15,
          title: "Kwaidi Store",
          hasSubItems: false,
        },
        {
          id: 16,
          title: "Get A Gift",
          hasSubItems: false,
        },
        {
          id: 17,
          title: "Cashier",
          hasSubItems: false,
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
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #3ac2cb;
}
.medium-txt {
  font-size: 13px;
}
</style>
