<template>
  <div class="body">
    <b-container class="text-center">
      <h1 class="anka-text-shadow">Forgot Your Password?</h1>
      <h4 class="anka-text-shadow m-0 mb-5">
        Don’t worry, we got your back!
      </h4>
      <input
        type="text"
        placeholder="Enter Your Email Address"
        v-model="userEmail"
        class="w-100 p-2 rounded-pill"
        style="max-width: 400px"
      /><button
        class="chocolate yellow mt-3"
        style="max-width: 200px"
        @click="sendEmail"
      >
        Send
      </button>
      <h4 class="m-0 mt-5 anka-text-shadow text-center">
        Click here if you didn’t receive any link <br />
        in <strong class="countdown">{{ countDown }}</strong> seconds
      </h4>
      <b-row>
        <button class="chocolate mx-auto my-3" style="max-width: 300px">
          Resend Link
        </button>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      userEmail: '',
      countDown: 120
    }
  },
  methods: {
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
    },
    sendEmail() {
      console.log(this.userEmail)
      axios
        .post(
          `https://${process.env.VUE_APP_ROOT_URL}/user/forgot?userEmail=${this.userEmail}`
        )
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Check Your Email'
          })
          setTimeout(this.$router.push('/login'), 1500)
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

.countdown {
  font-size: 50px;
  letter-spacing: 3px;
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
