<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
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
            data: [40, 20, 12, 39, 10, 40]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    )
  }
}
</script>
