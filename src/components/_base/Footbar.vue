<template>
  <div>
    <footer class="bg-light">
      <b-container>
        <b-row>
          <b-col lg="6" sm="12">
            <div class="logo mt-3">
              <img
                src="../../assets/Coffee-icon.png"
                style="margin: -7px 4px 0 0;"
              />Coffee Shop
            </div>
            <p class="ml-2 mt-2">
              Coffee Shop is a store <br />
              that sells some good <br />
              meals, and especially coffee. <br />
              We provide high quality beans
            </p>
            <Element class="desktop mb-3" />
          </b-col>
          <b-col lg="3" sm="12" class="mt-3 pl-4"
            ><h5>Product</h5>
            <a href="#">Download</a><br />
            <a href="#">Pricing</a><br />
            <a href="#">Locations</a><br />
            <a href="#">Countries</a><br />
            <a href="#">Blog</a><br
          /></b-col>
          <b-col lg="3" sm="12" class="mb-5 mt-3 pl-4"
            ><h5>Engage</h5>
            <a href="#">Coffe Shop ?</a><br />
            <a href="#">FAQ</a><br />
            <a href="#">About US</a><br />
            <a href="#">Privacy Policy</a><br />
            <a href="#">Terms of Service</a><br />
            <b-row>
              <Element class="responsive mt-3" />
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>
<script>
import Element from './FootbarElement'
export default {
  components: {
    Element
  }
}
</script>
<style scoped>
a {
  color: #42200e;
}
</style>
