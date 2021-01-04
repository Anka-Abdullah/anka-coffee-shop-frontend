<template>
  <div class="dashboard">
    <Navbar />
    <b-container style="padding-top: 140px;">
      dashboard
    </b-container>
    <Footbar />
  </div>
</template>
<script>
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
export default {
  name: 'DashBoard',
  components: {
    Navbar,
    Footbar
  }
}
</script>
