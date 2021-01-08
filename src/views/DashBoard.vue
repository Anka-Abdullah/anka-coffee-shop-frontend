<template>
  <div class="dashboard">
    <Navbar />
    <b-container style="padding-top: 130px;">
      <b-row>
        <b-col lg="4" sm="6"
          ><b-card class="shadow bg-white">
            <h5>today's income</h5>
            <h4>IDR 100000000</h4>
          </b-card></b-col
        ><b-col lg="4" sm="6"
          ><b-card class="shadow bg-white">
            <h5>this month's income</h5>
            <h4>IDR 100000000</h4>
          </b-card></b-col
        ><b-col lg="4" sm="6"
          ><b-card class="shadow bg-white">
            <h5>this year's income</h5>
            <h4>IDR 100000000</h4>
          </b-card></b-col
        >
      </b-row>
      <b-row>
        <button class="mx-auto mb-3 mt-5" @click="chart = !chart">
          <h1 v-if="chart">View Dailyly Data</h1>
          <h1 v-if="!chart">View Monthly Data</h1>
        </button>
      </b-row>

      <BarChartMonth v-if="chart" />
      <BarChartDay v-if="!chart" />
    </b-container>
    <Footbar />
  </div>
</template>
<script>
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
import BarChartMonth from '../components/dashboard/BarChartMonth'
import BarChartDay from '../components/dashboard/BarChartDay'
export default {
  name: 'DashBoard',
  components: {
    Navbar,
    Footbar,
    BarChartMonth,
    BarChartDay
  },
  data() {
    return {
      chart: true
    }
  },
  methods: {
    month() {
      this.chart === 'month'
    }
  }
}
</script>
