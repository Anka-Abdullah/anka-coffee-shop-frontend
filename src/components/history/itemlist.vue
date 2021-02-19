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
        </b-row>
        <b-row class="pl-3" style="width: 250px">
          <h6>
            <b>X {{ data.productQty }}</b>
          </h6>
          <h6 class="ml-auto">
            <b>IDR {{ data.productPrice * data.productQty }}</b>
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
export default {
  props: {
    data: Object
  },
  methods: {
    url(x) {
      return `${process.env.VUE_APP_ROOT_URL}/` + x
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
