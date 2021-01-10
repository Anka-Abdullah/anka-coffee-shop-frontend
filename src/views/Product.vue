<template>
  <div class="profile">
    <Navbar />
    <b-container style="padding-top: 100px">
      <h5 style="color: rgb(124, 124, 124)" class="mt-3">
        favorite promo
        <span style="color: #6a4029">> {{ product.productName }}</span>
      </h5>
      <b-row>
        <b-col lg="6" sm="12" class="text-center">
          <b-row>
            <div class="productimg mx-auto">
              <img :src="url" alt="" />
            </div>
          </b-row>
          <p style="font-size: 20px" class="text-center mb-3">
            Delivery only on <br /><b>Monday to Sarturday</b> at
            <b>1 - 7 pm</b>
          </p>
        </b-col>
        <b-col lg="6" sm="12">
          <h1 class="name mt-5">{{ product.productName }}</h1>
          <h1 class="m-0 price">
            IDR {{ displayPrice(product.productPrice) }}
          </h1>
          <p class="m-4" style="font-size: 19px">
            Cold brewing is a method of brewing that combines ground coffee and
            cool water and uses time instead of heat to extract the flavor. It
            is brewed in small batches and steeped for as long as 48 hours.
          </p>
          <h3 class="anka-title mt-5">Size :</h3>
          <select name="size" v-model="size" v-if="product.categoryId === 1">
            <option value="">Select size</option>
            <option value="R">R</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <select name="size" v-model="size" v-if="product.categoryId !== 1">
            <option value="">Select size</option>
            <option value="250 gr">250 gr</option>
            <option value="300 gr">300 gr</option>
            <option value="500 gr">500 gr</option>
          </select>

          <div class="my-5"></div>
          <b-row>
            <b-col lg="5" sm="12" class="p-0">
              <div class="count">
                <button @click="plus()">+</button><span>{{ count }}</span
                ><button @click="min()" v-show="count > 1">-</button
                ><button v-show="count === 1">-</button>
              </div>
            </b-col>
            <b-col lg="7" sm="12"
              ><button
                class="chocolate yellow p-2"
                style="width: 98%"
                @click="toCart({ ...product, qty: count, size: size })"
              >
                Add To Cart
              </button></b-col
            >
          </b-row>
          <b-row>
            <button
              class="chocolate p-2 mt-3 mx-auto"
              style="width: 100%; padding: 0;"
            >
              <router-link to="/cart" class="text-white" style="font-size: 24px"
                >Checkout</router-link
              >
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
import { mapGetters, mapActions } from 'vuex'
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
      url: '',
      count: 1,
      size: ''
    }
  },
  created() {
    this.getProductById(this.$route.params.id)
  },
  computed: {
    ...mapGetters({
      cart: 'setProductCart'
    })
  },
  methods: {
    ...mapActions(['addToCart']),
    toCart(payload) {
      this.addToCart(payload)
    },
    getProductById(id) {
      axios
        .get(`http://${process.env.VUE_APP_ROOT_URL}/product/${id}`)
        .then(response => {
          console.log(response)
          this.product = response.data.data[0]
          this.url = 'http://localhost:3765/' + response.data.data[0].image
        })
        .catch(error => {
          console.log(error)
        })
    },
    displayPrice(price) {
      let output = price * this.count
      return output.toLocaleString()
    },
    plus() {
      this.count++
    },
    min() {
      this.count--
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
select:focus {
  outline: none;
}
h1.name {
  font-family: 'caveatregular', cursive;
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
