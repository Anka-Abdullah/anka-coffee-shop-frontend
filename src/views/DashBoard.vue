<template>
  <div class="dashboard">
    <Navbar />
    <b-container style="padding-top: 130px;">
      <b-row>
        <b-col lg="4" sm="6"
          ><b-card class="shadow bg-white">
            <h4 class="anka-title">today's income</h4>
            <h4>
              <strong>IDR {{ getDay }}</strong>
            </h4>
          </b-card></b-col
        ><b-col lg="4" sm="6"
          ><b-card class="shadow bg-white">
            <h5 class="anka-title">this month's income</h5>
            <h4>
              <strong>IDR {{ getMonth }}</strong>
            </h4>
          </b-card></b-col
        ><b-col lg="4" sm="6"
          ><b-card class="shadow bg-white">
            <h5 class="anka-title">this year's income</h5>
            <h4>
              <strong>IDR {{ getYear }}</strong>
            </h4>
          </b-card></b-col
        >
      </b-row>
      <b-row>
        <button class="mx-auto mb-3 mt-5" @click="chart = !chart">
          <h2 v-if="chart">View Daily Data</h2>
          <h2 v-if="!chart">View Monthly Data</h2>
        </button>
      </b-row>

      <BarChartMonth v-if="chart" />
      <BarChartDay v-if="!chart" />
      <div id="myfirstchart" style="height: 250px;"></div>
    </b-container>
    <Footbar />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
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
      chart: true,
      price: 1000000,
      getDay: 0,
      getMonth: 0,
      getYear: 0
    }
  },
  created() {
    this.daily()
    this.monthly()
    this.year()
  },
  computed: {
    ...mapGetters({ user: 'dataUser' })
  },
  methods: {
    ...mapActions(['getDashboard']),
    daily() {
      const data = {
        userId: this.user.userId,
        time: 'DAY'
      }
      this.getDashboard(data)
        .then(result => {
          this.getDay = parseInt(result.data.data[0].Total).toLocaleString()
        })
        .catch(err => {
          console.log(err)
        })
    },
    monthly() {
      const data = {
        userId: this.user.userId,
        time: 'MONTH'
      }
      this.getDashboard(data)
        .then(result => {
          this.getMonth = parseInt(result.data.data[0].Total).toLocaleString()
        })
        .catch(err => {
          console.log(err)
        })
    },
    year() {
      const data = {
        userId: this.user.userId,
        time: 'YEAR'
      }
      this.getDashboard(data)
        .then(result => {
          this.getYear = parseInt(result.data.data[0].Total).toLocaleString()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
