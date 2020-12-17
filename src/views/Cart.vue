<template>
  <div class="cart">
    <Navbar />
    <b-container style="padding-top: 100px"
      ><h1 class="anka-text-shadow text-white text-center">
        Checkout your <br />
        item now!
      </h1>
      <b-row>
        <b-col lg="6" sm="12">
          <b-card no-body class="cardcart">
            <h2 class="anka-title text-center mb-4">Order Summary</h2>
            <div class="cart-scroll">
              <b-row>
                <Card class="mx-auto" />
              </b-row>
            </div>
          </b-card>
        </b-col>
        <b-col lg="6" sm="12"></b-col></b-row
    ></b-container>
    <Footbar />
  </div>
</template>
<script>
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
import Card from '../components/cart/CardCart'
export default {
  name: 'Cart',
  components: {
    Navbar,
    Footbar,
    Card
  }
}
</script>
<style scoped>
.cart {
  background-image: url('../assets/background3.png');
  background-size: cover;
}
.cardcart {
  width: 86%;
}
.cart-scroll {
  width: auto;
  margin: 15px;
  border-bottom: 0.3px solid rgb(223, 223, 223);
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 10px;
  width: auto;
  height: 300px;
}
.cart-scroll p {
  font-size: 18px;
  padding: 0;
  margin: -3px;
}
@media (max-width: 900px) {
  .cardcart {
    width: 100%;
  }
}
</style>
