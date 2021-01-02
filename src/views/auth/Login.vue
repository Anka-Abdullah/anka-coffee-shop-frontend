<template>
  <div class="login">
    <Navbar />
    <h1>LOGIN PAGE</h1>
    <h2>{{ name }}</h2>
    <b-form>
      <input type="email" v-model="form.userEmail" /><br />
      <input type="password" v-model="form.userPassword" />
      <br />
      <button @click.prevent="onSubmit">Submit</button>
      <button @click.prevent="onReset">Reset</button>
    </b-form>
    <Footbar />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
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
  computed: {
    //   mapState mapGetters
    //   [1]
    // dataname() {
    //   return this.$store.state.name
    // }
    // [2]
    //cara A
    ...mapState(['name'])
    // cara B
    // ...mapState({
    //   dataName: 'name'
    // })
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
