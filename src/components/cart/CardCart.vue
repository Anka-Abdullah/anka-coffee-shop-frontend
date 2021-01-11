<template>
  <div>
    <div
      class="sunday anka-card"
      style=" display: flex; margin: 0; padding: 10px"
      v-for="(item, index) in cart"
      :key="index"
    >
      <div class="img-card">
        <img src="../../assets/latte.png" width="62" class="mr-2" />
      </div>
      <div class="txt-card">
        <h6 class="anka-title m-0 mt-1">
          {{ name }}
        </h6>
        <b-row class="pl-3" style="width: 250px">
          <h6>
            <b>X {{ qty }}</b>
          </h6>
          <h6 class="ml-auto">
            <b>IDR {{ price }}</b>
          </h6>
        </b-row>
        <h6><b>Regular</b></h6>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: ['name', 'price', 'qty'],
  computed: {
    ...mapGetters({
      cart: 'setProductCart'
    })
  }
}
</script>
<style scoped>
img {
  border-radius: 50%;
}
</style>
