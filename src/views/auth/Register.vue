<template>
  <div class="register">
    <b-container fluid>
      <b-row>
        <b-col lg="6" sm="12" class=" form px-0 mx-auto shadow"
          ><Navbar :link="'/login'" :text="'Login'" />
          <b-container class="px-5">
            <h1 class="anka-title text-center my-4">Sign Up</h1>
            <h5 class="anka-title">Email Address :</h5>
            <input
              type="email"
              class="b-input"
              v-model="form.userEmail"
              required
            />
            <h5 class="anka-title mt-4">Phone Number :</h5>
            <input
              type="number"
              class="b-input"
              v-model="form.userPhone"
              required
            />
            <h5 class="anka-title mt-4">Password :</h5>
            <input
              type="password"
              class="b-input"
              v-model="form.userPassword"
              minlength="8"
              required
            />
            <small class="text-secondary">min 8 characters</small>

            <b-row> </b-row>
            <b-row>
              <button
                type="submit"
                class="chocolate yellow w-75 mx-auto mt-4"
                data-toggle="modal"
                data-target="#exampleModal"
                @click="onSubmit"
              >
                Sign Up
              </button>
            </b-row>
            <b-row>
              <button class="chocolate putih my-3 w-75 mx-auto p-1">
                <img src="../../assets/google.png" />
                Sign up With Google
              </button>
            </b-row>
            <h5 class="ceveat text-secondary text-center mb-3">
              Already have an account?
              <router-link to="/login" class="text-dark ml-2"
                >Login Here</router-link
              >
            </h5>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'
import Navbar from './component/NavbarAuth'
export default {
  name: 'Register',
  components: {
    Navbar
  },
  data() {
    return {
      form: {
        userEmail: '',
        userPassword: '',
        userPhone: null
      }
    }
  },
  methods: {
    ...mapActions(['register']),
    onSubmit() {
      this.register(this.form).then(result => {
        Swal.fire({
          icon: 'success',
          title: 'Yeay',
          text: result.data.message
        })
      })
    }
  }
}
</script>
<style scoped>
.register {
  background-image: url('../../assets/nani.png');
  background-size: cover;
}
.form {
  max-width: 500px;
  background: rgba(255, 255, 255, 0.795);
  border-radius: 20px;
  overflow: hidden;
  margin: 40px 0;
}
input {
  background: none;
}
</style>
