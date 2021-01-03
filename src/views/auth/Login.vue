<template>
  <div class="login">
    <b-container fluid>
      <b-row>
        <b-col lg="6" sm="12" class="desktop authbg">
          <div style="margin: 210px 0 0 220px; position: fixed">
            <div class="text-center mx-auto">
              <strong
                ><h1 class="caveat text-white">
                  Coffee Shop
                </h1></strong
              >
              <h5 class="mt-2">
                Coffee Shop is a store <br />
                that sells some good <br />
                meals, and especially coffee. <br />
                We provide high quality beans
              </h5>
            </div>
          </div>
        </b-col>
        <b-col lg="6" sm="12" class="px-0"
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
                <h6 class="border-bottom border-dark">reset</h6>
              </button>
            </b-row>
            <router-link to="/forgotpassword"
              ><h6 class="anka-title mb-5">Forgot PassWord?</h6></router-link
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

    <Footbar />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Navbar from './component/NavbarAuth'
import Footbar from '../../components/_base/Footbar'
export default {
  name: 'Login',
  components: {
    Navbar,
    Footbar
  },
  data() {
    return {
      form: {
        userEmail: '',
        userPassword: ''
      }
    }
  },
  methods: {
    //   mapActions mapMutations
    ...mapActions(['login']),
    onSubmit() {
      this.login(this.form)
        .then(result => {
          console.log(result)
          this.$router.push('/')
        })
        .catch(err => {
          alert(err.data.message)
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
