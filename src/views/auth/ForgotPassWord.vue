<template>
  <div class="body">
    <b-container class="text-center" style="margin-bottom: 100px">
      <h1 class="anka-text-shadow">Forgot Your Password?</h1>
      <h4 class="anka-text-shadow m-0 mb-5">
        Don’t worry, we got your back!
      </h4>
      <input
        type="text"
        placeholder="Enter Your Email Address"
        class="w-50 p-3"
        v-model="userEmail"
      /><button class="chocolate yellow p-3 px-5" @click="countDownTimer">
        Send
      </button>
      <h4 class="m-0 mt-5 anka-text-shadow text-center">
        Click here if you didn’t receive any link <br />
        in <strong class="countdown">{{ countDown }}</strong> seconds
      </h4>
      <b-row>
        <button class="chocolate p-3 w-25 mx-auto my-3">Resend Link</button>
      </b-row>
    </b-container>
    <Footbar />
  </div>
</template>
<script>
import Footbar from '../../components/_base/Footbar'
export default {
  components: {
    Footbar
  },
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
    }
  }
}
</script>
<style scoped>
.body {
  background-image: url('../../assets/nani.png');
  background-size: cover;
  background-attachment: fixed;
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
</style>
