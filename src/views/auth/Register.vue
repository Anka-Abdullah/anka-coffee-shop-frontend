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
          ><Navbar :link="'/login'" :text="'Login'" />
          <b-container class="px-5">
            <h1 class="anka-title text-center my-5">Sign Up</h1>
            <h5 class="anka-title">Email Address :</h5>
            <input type="email" class="b-input" v-model="form.userEmail" />
            <h5 class="anka-title mt-4">Phone Number :</h5>
            <input type="number" class="b-input" v-model="form.userPhone" />
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
            <b-row>
              <button
                class="chocolate yellow w-75 mx-auto"
                @click.prevent="onSubmit"
              >
                Sign Up
              </button>
            </b-row>
            <b-row>
              <button class="chocolate putih mt-3 mb-5 w-75 mx-auto p-1">
                <img src="../../assets/google.png" />
                Sign up With Google
              </button>
            </b-row>
            <h5 class="ceveat text-secondary text-center">
              Already have an account?
            </h5>
            <b-row>
              <router-link
                to="/login"
                class="chocolate w-75 text-center mx-auto mt-3 mb-5"
                >Login Here</router-link
              >
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
        userPassword: '',
        userPhone: null
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      this.login(this.form)
        .then(result => {
          alert(result.data.message)
        })
        .catch(err => {
          alert(err.data.message)
        })
    }
  }
}
</script>
