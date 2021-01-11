<template>
  <div>
    <div
      class="sunday anka-card"
      style=" display: flex; margin: 0; padding: 10px"
    >
      <div class="img-card">
        <img :src="url(data.image)" width="62" class="mr-2" />
      </div>
      <div class="txt-card">
        <b-row class="pl-3">
          <h6 class="anka-title m-0 mt-1">
            {{ data.productName }}
          </h6>
          <button @click="deleteCartItem(index)" class="ml-5">
            <small class="text-danger"><strong>X delete</strong></small>
          </button>
        </b-row>
        <b-row class="pl-3" style="width: 250px">
          <h6>
            <b>X {{ data.qty }}</b>
          </h6>
          <h6 class="ml-auto">
            <b>IDR {{ data.productPrice * data.qty }}</b>
          </h6>
        </b-row>
        <h6>
          <b>size : {{ data.size }}</b>
        </h6>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: {
    data: Object,
    index: Number
  },
  methods: {
    ...mapActions(['deleteCartItem']),
    url(x) {
      return 'http://localhost:3765/' + x
    }
  }
}
</script>
<style scoped>
button:hover {
  background-color: rgb(223, 223, 223);
}

img {
  border-radius: 50%;
}
</style>
