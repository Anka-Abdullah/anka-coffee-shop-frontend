<template>
  <div>
    activate
  </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  created() {
    this.activate()
  },
  methods: {
    activate() {
      axios
        .patch(
          `${process.env.VUE_APP_ROOT_URL}/user/active/${this.$route.params.keys}`
        )
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Yeay',
            text: 'your account is already active, please login'
          })
          setTimeout(this.$router.push('/login'), 1500)
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Activate is Failed'
          })
        })
    }
  }
}
</script>
