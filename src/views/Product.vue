<template>
  <div class="profile">
    <Navbar />
    <b-container style="padding-top: 100px">
      <h5 style="color: rgb(124, 124, 124)" class="mt-3">
        favorite promo <span style="color: #6a4029">> Cold Brew</span>
      </h5>
      <b-row>
        <b-col lg="6" sm="12">
          <b-row>
            <div class="productimg mx-auto">
              <img src="../assets/kopiteko.png" alt="" />
            </div>
          </b-row>
          <p style="font-size: 20px" class="text-center mb-3">
            Delivery only on <br /><b>Monday to friday</b> at
            <b>1 - 7 pm</b>
          </p>
        </b-col>
        <b-col lg="6" sm="12">
          <h1 class="name mt-5">{{ product.productName }}</h1>
          <h1 class="m-0 price">IDR {{ product.productPrice }}</h1>
          <p class="m-4" style="font-size: 19px">
            Cold brewing is a method of brewing that combines ground coffee and
            cool water and uses time instead of heat to extract the flavor. It
            is brewed in small batches and steeped for as long as 48 hours.
          </p>
          <h5 class="anka-title mt-5">Size :</h5>
          <select name="size" id="size">
            <option>Select size</option>
            <option value="1">R</option>
            <option value="2">L</option>
            <option value="3">XL</option>
          </select>
          <h5 class="anka-title mt-5">Delivery Method :</h5>
          <select name="method" id="method">
            <option>Select delivery method</option>
            <option value="1">Dine in</option>
            <option value="2">Door Delivery</option>
            <option value="3">Pick Up</option>
          </select>
          <div class="my-5"></div>
          <b-row>
            <b-col lg="5" sm="12" class="p-0">
              <div class="count">
                <button>+</button><span>0</span><button>-</button>
              </div>
            </b-col>
            <b-col lg="7" sm="12"
              ><button class="chocolate yellow p-2" style="width: 100%">
                Add To Cart
              </button></b-col
            >
          </b-row>
          <b-row>
            <button class="chocolate p-2 mt-3 mx-auto" style="width: 100%">
              Checkout
            </button>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <Footbar />
  </div>
</template>
<script>
import axios from 'axios'
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
export default {
  name: 'Profile',
  components: {
    Navbar,
    Footbar
  },
  data() {
    return {
      product: [],
      productId: ''
    }
  },
  created() {
    this.productId = this.$route.params.id
    console.log(this.$route.params.id)
    this.getProductById(this.$route.params.id)
  },
  methods: {
    getProductById(id) {
      axios
        .get(`http://localhost:3765/product/${id}`)
        .then(response => {
          console.log(response.data.data[0])
          this.product = response.data.data[0]
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
<style scoped>
.productimg {
  margin: 25px 0 5px 0;
  width: 400px;
  height: auto;
  overflow: hidden;
  border-radius: 15px;
}
select {
  width: 85%;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
}
h1.name {
  font-family: 'Patrick Hand', cursive;
  font-weight: 900;
  font-size: 60px;
  letter-spacing: 4px;
}
.count {
  padding: 0 10px;
  width: 97%;
  border-radius: 20px;
  line-height: 45px;
  background-color: #bebebe;
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  font-weight: bold;
}
@media (max-width: 600px) {
  h1.name,
  h1.price {
    text-align: center;
  }
  .count {
    width: 70%;
  }
}
</style>
