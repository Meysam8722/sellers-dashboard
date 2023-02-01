<template>
  <v-container v-else fluid class="px-3 px-sm-0 py-0">
    <v-row class="my-6 mx-0 mx-sm-6">
      <v-col cols="12" md="6" order="2">
        <v-card
          :color="darkMode ? 'darkBlue' : 'white'"
          class="pa-6"
          :class="darkMode ? 'dark-theme-text' : 'light-theme-text'"
          height="100%"
        >
          <v-card-title
            :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
            class="pt-0 font-weight-bold"
          >
            The Best Branch Performance
          </v-card-title>
          <client-only>
            <ApexCharts
              :options="bestPerformanceOptions"
              :series="[30, 20, 20]"
              height="255"
              chart-id="donutChart"
            >
            </ApexCharts>
          </client-only>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" order="1">
        <v-card
          :color="darkMode ? 'darkBlue' : 'white'"
          class="pa-6"
          :class="darkMode ? 'dark-theme-text' : 'light-theme-text'"
          height="100%"
        >
          <v-card-title
            :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
            class="pt-0 font-weight-bold"
          >
            Statistics
          </v-card-title>
          <client-only>
            <ApexCharts
              :options="areaChartOptions"
              :series="[
                {
                  name: 'Sales',
                  data: [4, 6, 9, 5, 3, 5, 1],
                },
                {
                  name: 'Returned',
                  data: [1, 2, 4, 8, 4, 3, 4],
                },
                {
                  name: 'New Clients',
                  data: [5, 4, 2, 3, 6, 8, 6],
                },
              ]"
              height="255"
              chart-id="areaChart"
            >
            </ApexCharts>
          </client-only>
          <v-card-text
            :class="darkMode ? 'white--text' : 'veryDarkBlue--text'"
            class="font-weight-bold"
            >Total Sales: 1000 SR</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
    <v-row class="my-6 mx-0 mx-sm-6">
      <v-col v-for="item in [0, 1]" :key="item" cols="12" md="6">
        <v-card
          :color="darkMode ? 'darkBlue' : 'white'"
          class="pa-6"
          :class="darkMode ? 'dark-theme-text' : 'light-theme-text'"
          height="100%"
        >
          <client-only>
            <ApexCharts
              :options="donutChartOptions"
              :series="[20, 30, 30, 20]"
              height="255"
              chart-id="donutChart"
            >
            </ApexCharts>
          </client-only>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "StatisticCharts",
  data() {
    return {
      areaChartOptions: {
        annotations: {
          yAxis: [
            {
              label: {
                style: {
                  color: "#fff",
                },
              },
            },
          ],
        },
        chart: {
          height: 350,
          type: "area",
        },
        colors: ["#3AC2CB", "#F12E67", "#FE9518"],
        dataLabels: {
          enabled: false,
          style: {
            colors: ["rgba(164, 180, 203, 0.3)"],
          },
        },
        stroke: {
          curve: "smooth",
        },
        legend: {
          position: "left",
        },
        xaxis: {
          type: "day",
          categories: ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        labels: {
          show: true,
          style: {
            colors: ["#ffffff"],
            fontSize: "12px",
            fontWeight: 400,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      bestPerformanceOptions: {
        chart: {
          type: "donut",
          width: 700,
        },
        colors: ["#3AC2CB", "#F12E67", "#FE9518"],
        plotOptions: {
          pie: {
            customScale: 0.9,
          },
        },

        labels: ["Khobar Branch", "Damman Branch", "Riyadh Branch"],
        legend: {
          position: "left",
          verticalAlign: "start",
          horizontalAlign: "center",
        },
        responsive: [
          {
            breakpoint: 450,
            options: {
              chart: {
                width: 300,
                height: 300,
              },
              legend: {
                position: "bottom",
                horizontalAlign: "start",
              },
            },
          },
        ],
      },
      donutChartOptions: {
        chart: {
          type: "donut",
          width: 700,
        },
        colors: ["#3AC2CB", "#F12E67", "#34B53A", "#FE9518"],
        plotOptions: {
          pie: {
            customScale: 0.9,
          },
        },

        labels: [
          "Standard Vat Rate 1000 SR",
          "Not Subject To Vat 1000 SR",
          "Expect From Vat 1000 SR",
          "Zero Vat Rated 1000 SR",
        ],
        legend: {
          position: "left",
          verticalAlign: "start",
          horizontalAlign: "center",
        },
        responsive: [
          {
            breakpoint: 450,
            options: {
              chart: {
                width: 300,
                height: 300,
              },
              legend: {
                position: "bottom",
                horizontalAlign: "start",
              },
            },
          },
        ],
      },
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
  border-color: #a4b4cb;
}
.v-card__title {
  word-break: unset;
}
>>> .apexcharts-legend-text {
  font-size: 15px !important;
}
@media only screen and (max-width: 550px) {
  >>> .apexcharts-legend-text {
    font-size: 10px !important;
  }
}
.dark-theme-text >>> .apexcharts-legend-text {
  color: white !important;
}
.light-theme-text >>> .apexcharts-legend-text {
  color: #040d21 !important;
}
>>> .apexcharts-legend.apx-legend-position-left {
  justify-content: space-around;
}
</style>
