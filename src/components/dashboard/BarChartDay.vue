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
        time: 'DAY'
      }
      this.getChart(data)
        .then(result => {
          const value = result.data.data
          value.map(
            x =>
              (this.dataDashboard[
                parseInt(new Date(x.historyCreatedAt).getDay())
              ] = parseInt(x.Total))
          )
          this.renderChart(
            {
              labels: [
                'sunday',
                'Monday',
                'Tuesdey',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
              ],
              datasets: [
                {
                  label: 'Daily',
                  backgroundColor: '#ffba33',
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
