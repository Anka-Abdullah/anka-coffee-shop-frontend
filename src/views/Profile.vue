<template>
  <div class="profile">
    <Navbar />
    <b-container style="padding: 130px 0 100px 0"
      ><h1 class="anka-text-shadow">User Profile</h1>
      <b-card class="bg-white"
        ><b-row>
          <b-col lg="4" sm="12" class="text-center">
            <img
              src="../assets/39.png"
              width="200"
              class="rounded-circle"
              id="user-image"
              v-show="form.image === ''"
            />
            <img
              v-show="form.image !== ''"
              :src="`http://localhost:3765/${user.image}`"
              width="200"
              class="rounded-circle"
            />
            <h2 class="m-0">
              <strong>{{ form.firstName + ' ' + form.lastName }}</strong>
            </h2>
            <h3 class="m-0">{{ form.userEmail }}</h3>
            <form>
              <input type="file" id="file-image" @change="handleFile" hidden />
              <label for="file-image" class="chocolate yellow mt-5">
                Choose Photo</label
              >
            </form>
            <br />
            <button class="chocolate mt-3">Remove Photo</button><br />
            <button class="chocolate putih my-4">
              Edit Password</button
            ><br />
            <h3>
              <strong
                >Do you want to save <br />
                the cahnge?</strong
              >
            </h3>

            <button class="chocolate yellow mt-5" @click="patchUser">
              Save cahnge</button
            ><br />
            <button class="chocolate my-3 w-50">Cancel</button><br />
            <button class="chocolate putih my-5 w-50" @click="logout">
              Logout
            </button>
          </b-col>
          <b-col lg="8" sm="12">
            <b-card class="shadow border-0">
              <h3 class="mb-2"><strong>Contacts</strong></h3>
              <form>
                <b-row>
                  <b-col lg="7" sm="12">
                    <h5 class="text-secondary mt-5">Email adress :</h5>
                    <input
                      type="text"
                      class="b-input"
                      v-model="form.userEmail"/>
                    <h5 class="text-secondary mt-5">Delivery Address :</h5>
                    <input
                      type="text"
                      class="b-input"
                      v-model="form.userAddress"
                  /></b-col>
                  <b-col lg="5" sm="12">
                    <h5 class="text-secondary mt-5">Mobile number :</h5>
                    <input
                      type="number"
                      class="b-input"
                      v-model="form.userPhone"
                  /></b-col>
                </b-row>
                <h3 class="mt-5 mb-3"><strong>Details</strong></h3>
                <b-row>
                  <b-col lg="7" sm="12">
                    <h5 class="text-secondary mt-5">Display name :</h5>
                    <input
                      type="text"
                      class="b-input"
                      :value="form.firstName + ' ' + form.lastName"/>
                    <h5 class="text-secondary mt-5">First name :</h5>
                    <input
                      type="text"
                      class="b-input"
                      v-model="form.firstName"/>
                    <h5 class="text-secondary mt-5">Last name :</h5>
                    <input type="text" class="b-input" v-model="form.lastName"
                  /></b-col>
                  <b-col lg="5" sm="12">
                    <h5 class="text-secondary mt-5">DD/MM/YY</h5>
                    <input type="date" class="b-input"
                  /></b-col>
                </b-row>
              </form>
              <div class="my-5"></div>
            </b-card>
          </b-col> </b-row
      ></b-card>
    </b-container>
    <Footbar />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
export default {
  name: 'Profile',
  components: {
    Navbar,
    Footbar
  },
  data() {
    return {
      userId: null,
      form: {
        firstName: '',
        lastName: '',
        userEmail: '',
        userAddress: '',
        userPhone: '',
        image: ''
      }
    }
  },
  created() {
    this.form = this.user
    console.log(this.form)
  },
  computed: {
    ...mapGetters({ user: 'dataUser' })
  },
  methods: {
    ...mapActions(['logout', 'updateProfile']),
    patchUser() {
      let formData = new FormData()
      formData.append('firstName', this.form.firstName)
      formData.append('lastName', this.form.lastName)
      formData.append('userEmail', this.form.userEmail)
      formData.append('userAddress', this.form.userAddress)
      formData.append('userPhone', this.form.userPhone)
      formData.append('image', this.form.image)

      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }
      const payload = {
        data: formData,
        id: this.user.userId
      }
      this.updateProfile(payload)
        .then(() => {
          this.$router.replace('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleFile(e) {
      console.log(e.target.files[0].name)
      this.form.image = e.target.files[0]
    }
  }
}
</script>
<style scoped>
.profile {
  background-image: url('../assets/nani.png');
  background-size: cover;
  background-attachment: fixed;
}
</style>
