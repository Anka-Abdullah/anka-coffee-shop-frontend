<script>
import { Bar } from 'vue-chartjs'
import { mapActions, mapGetters } from 'vuex'
export default {
  extends: Bar,
  data() {
    return {
      dataDashboard: []
    }
  },
  created() {
    this.getDataMonth()
  },
  computed: {
    ...mapGetters({ user: 'dataUser' })
  },
  methods: {
    ...mapActions(['getChart']),
    getDataMonth() {
      const data = {
        userId: this.user.userId,
        time: 'MONTH'
      }
      this.getChart(data)
        .then(result => {
          const value = result.data.data
          value.map(
            x =>
              (this.dataDashboard[
                x.historyCreatedAt.slice(5, 7) - 1
              ] = parseInt(x.Total))
          )
          this.renderChart(
            {
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
              ],
              datasets: [
                {
                  label: 'Monthly',
                  backgroundColor: '#f87979',
                  data: this.dataDashboard
                }
              ]
            },
            { responsive: true, maintainAspectRatio: false }
          )
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
