<template>
  <div class="login">
    <b-container fluid>
      <b-row>
        <b-col lg="6" sm="12" class=" form px-0 mx-auto shadow"
          ><Navbar :link="'/register'" :text="'Sign Up'" />
          <b-container class="px-5">
            <h1 class="anka-title text-center my-5">Login</h1>
            <h5 class="anka-title">Email Address :</h5>
            <input type="email" class="b-input" v-model="form.userEmail" />
            <h5 class="anka-title mt-4">Password :</h5>
            <input
              type="password"
              class="b-input"
              v-model="form.userPassword"
            />
            <b-row>
              <button class="ml-auto mr-3 mt-3" @click.prevent="onReset">
                <h6 class="text-secondary">reset</h6>
              </button>
            </b-row>
            <router-link to="/forgotpassword"
              ><h6 class="text-secondary mb-5">
                Forgot PassWord.?
              </h6></router-link
            >
            <b-row>
              <button
                class="chocolate yellow w-75 mx-auto"
                @click.prevent="onSubmit"
              >
                Login
              </button>
            </b-row>
            <b-row>
              <button class="chocolate putih mt-3 mb-5 w-75 mx-auto p-1">
                <img src="../../assets/google.png" />
                Login With Google
              </button>
            </b-row>
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
  name: 'Login',
  components: {
    Navbar
  },
  data() {
    return {
      message: '',
      status: '',
      form: {
        userEmail: '',
        userPassword: ''
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      this.login(this.form)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Enjoy Your Coffee'
          })
          setTimeout(this.$router.push('/'), 1000)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.data.message
          })
        })
    },
    onReset() {
      this.form = {
        userEmail: '',
        userPassword: ''
      }
    }
  }
}
</script>
<style scoped>
.login {
  background-image: url('../../assets/nani.png');
  background-size: cover;
}
.form {
  max-width: 500px;
  background: rgba(255, 255, 255, 0.795);
  border-radius: 20px;
  overflow: hidden;
  margin: 29px 0;
}
input {
  background: none;
}
</style>
