<template>
  <div class="body">
    <b-container class="text-center">
      <h1 class="anka-text-shadow">Create New Password</h1>
      <input
        type="password"
        placeholder="Enter Your Password"
        class="w-100 p-2 rounded-pill"
        style="max-width: 500px"
        v-model="form.userPassword"
      /><button
        class="chocolate yellow mt-3"
        style="max-width: 200px"
        @click="changePassword"
      >
        Send
      </button>
    </b-container>
  </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      form: {
        userPassword: '',
        userKeys: this.$route.params.keys
      }
    }
  },
  methods: {
    changePassword() {
      console.log(this.form)
      axios
        .patch(
          `http://${process.env.VUE_APP_ROOT_URL}/user/password`,
          this.form
        )
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'please Login'
          })
        })
    }
  }
}
</script>
<style scoped>
.body {
  height: 100vh;
  background-image: url('../../assets/nani.png');
  background-size: cover;
  padding-top: 120px;
}
h1 {
  font-size: 65px;
  font-weight: 900;
}
input {
  border: none;
}
input:focus {
  outline: none;
  background-color: rgb(231, 208, 178);
}
@media (max-width: 600px) {
  h1 {
    font-size: 30px;
  }
  .body {
    padding-top: 50px;
  }
}
</style>
