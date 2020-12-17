<template>
  <div class="profile">
    <Navbar />
    <b-container fluid style="padding-top: 100px"><h1>Profile</h1></b-container>
    <Footbar />
  </div>
</template>
<script>
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
export default {
  name: 'Profile',
  components: {
    Navbar,
    Footbar
  }
}
</script>
