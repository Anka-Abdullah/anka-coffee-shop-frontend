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
              v-show="image === ''"
            />
            <img
              v-show="image !== ''"
              :src="`http://localhost:3765/${image}`"
              width="200"
              class="rounded-circle"
            />
            <h4>
              <strong>{{ form.firstName + ' ' + form.lastName }}</strong>
            </h4>
            <h5 class="m-0">{{ form.userEmail }}</h5>

            <label class="chocolate yellow mt-5" @click="showModal">
              Choose Photo</label
            >
            <br />
            <button class="chocolate mt-3" @click="removeImage">
              Remove Photo</button
            ><br />
            <button class="chocolate putih my-4">
              Edit Password</button
            ><br />
            <h3>
              <strong
                >Do you want to save <br />
                the cahnge?</strong
              >
            </h3>

            <button class="chocolate yellow mt-5" @click="editDataUser">
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
              <b-row>
                <b-col lg="7" sm="12">
                  <h5 class="text-secondary mt-5">Email adress :</h5>
                  <input type="text" class="b-input" v-model="form.userEmail"/>
                  <h5 class="text-secondary mt-5">Delivery Address :</h5>
                  <input type="text" class="b-input" v-model="form.userAddress"
                /></b-col>
                <b-col lg="5" sm="12">
                  <h5 class="text-secondary mt-5">Mobile number :</h5>
                  <input type="number" class="b-input" v-model="form.userPhone"
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
                  <input type="text" class="b-input" v-model="form.firstName"/>
                  <h5 class="text-secondary mt-5">Last name :</h5>
                  <input type="text" class="b-input" v-model="form.lastName"
                /></b-col>
                <b-col lg="5" sm="12">
                  <h5 class="text-secondary mt-5">DD/MM/YY</h5>
                  <input type="date" class="b-input"
                /></b-col>
              </b-row>
              <div class="my-5"></div>
            </b-card>
          </b-col> </b-row
      ></b-card>
    </b-container>
    <Footbar />
    <b-modal centered ref="my-modal" hide-footer hide-header>
      <div class="d-block text-center">
        <input type="file" id="file-image" @change="handleFile" />
        <button class="chocolate w-50" @click="updateImage">update</button>
      </div></b-modal
    >
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'
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
      form: {
        firstName: '',
        lastName: '',
        userEmail: '',
        userAddress: '',
        userPhone: ''
      },
      image: ''
    }
  },
  created() {
    this.getDataUser()
  },
  computed: {
    ...mapGetters({ user: 'dataUser' })
  },
  methods: {
    ...mapActions([
      'logout',
      'updateProfile',
      'getUserByid',
      'patchImage',
      'deleteImage'
    ]),
    getDataUser() {
      this.getUserByid(this.user.userId).then(result => {
        this.form = result.data.data[0]
        this.image = result.data.data[0].image
      })
    },
    editDataUser() {
      const data = {
        data: this.form,
        id: this.user.userId
      }
      this.updateProfile(data)
        .then(() => {
          this.getDataUser()
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleFile(e) {
      this.image = e.target.files[0]
      console.log(e.target.files[0])
    },
    removeImage() {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(result => {
        if (result.isConfirmed) {
          this.deleteImage(this.user.userId)
            .then(() => {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
            })
            .catch(() => {
              Swal.fire('error')
            })
        }
      })
    },
    updateImage() {
      let formData = new FormData()
      formData.append('image', this.image)
      const data = {
        data: formData,
        id: this.user.userId
      }
      this.patchImage(data)
      this.hideModal()
      this.getDataUser()
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
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
