<template>
  <div class="history">
    <Navbar />
    <b-container fluid style="padding-top: 100px"
      ><h1 class="text-center text-white mt-3" style="font-weight: 700">
        Let’s see what you have bought!
      </h1>
      <h5 style="text-align: center" class="text-white mb-5">
        Select item to delete
      </h5>
      <b-row>
        <b-col lg="3" sm="12">
          <b-row
            ><Card
              class="mx-auto"
              v-for="(item, index) in history"
              :key="index"
              :data="item"
          /></b-row> </b-col
        >></b-row
      ></b-container
    >
    <Footbar />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
import Card from '../components/history/CardHistory'
export default {
  name: 'History',
  components: {
    Navbar,
    Footbar,
    Card
  },
  created() {
    this.getHistory()
  },
  computed: {
    ...mapGetters({
      history: 'setHistory'
    })
  },
  methods: {
    ...mapActions(['getHistory'])
  }
}
</script>
<style scoped>
.history {
  background-image: url('../assets/background3.png');
  background-size: cover;
}
@media (max-width: 600px) {
  .history h1.text-center {
    font-size: 45px;
  }
}
</style>
