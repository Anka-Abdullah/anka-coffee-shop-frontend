<template>
  <div class="cart">
    <Navbar />
    <b-container style="padding-top: 100px">
      <b-row>
        <b-col lg="6" sm="12">
          <h1 class="anka-text-shadow text-center mt-5">
            <b
              >Checkout your <br />
              item now!</b
            >
          </h1>
          <b-row>
            <b-card no-body class="cardcart mx-auto">
              <h2 class="anka-title text-center mb-0">Order Summary</h2>
              <div class="cart-scroll">
                <b-row>
                  <Card
                    class="mx-auto"
                    v-for="(item, index) in cart"
                    :key="index"
                    :data="item"
                    :index="index"
                  />
                </b-row>
              </div>
              <b-row class="px-5">
                <h5><b>Subtotal</b></h5>
                <h5 class="ml-auto">
                  <b>{{ subTotal }}</b>
                </h5>
              </b-row>
              <b-row class="px-5">
                <h5><b>Tax and Fees</b></h5>
                <h5 class="ml-auto">
                  <b>{{ tax }}</b>
                </h5>
              </b-row>
              <b-row class="px-5">
                <h5><b>Discounts</b></h5>
                <h5 class="ml-auto">
                  <b>{{ discount }}</b>
                </h5>
              </b-row>
              <b-row class="px-5">
                <h4 class="anka-title"><b>Total</b></h4>
                <h4 class="anka-title ml-auto">
                  <b>IDR {{ total }}</b>
                </h4>
              </b-row>
            </b-card>
          </b-row>
        </b-col>
        <b-col lg="6" sm="12">
          <b-row class="cartcolumn mt-5 mx-auto">
            <h3 class="anka-text-shadow">Address Detail</h3>
            <button class="text-white ml-auto">edit</button>
            <b-col xl="12">
              <b-list-group class="mt-2">
                <b-list-group-item
                  ><b>Delivery</b> to Iskandar Street</b-list-group-item
                >
                <b-list-group-item
                  >Km 5 refinery road oppsite re public road, effurun,
                  Jakarta</b-list-group-item
                >
                <b-list-group-item>+62 81348287878</b-list-group-item>
              </b-list-group>
            </b-col>
            <h5 class="anka-text-shadow Input Comt-5">Select Cupon Code</h5>
            <b-col xl="12">
              <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
                <div v-for="coupon in coupons" :key="coupon.promoId">
                  <b-dropdown-item
                    v-model="discount"
                    @click="useDiscount(coupon.promoPercent)"
                    >{{ coupon.promoCode }}</b-dropdown-item
                  >
                </div>
              </b-dropdown>
            </b-col>
            <h5 class="anka-text-shadow mt-3">Delivery Method :</h5>
            <b-col xl="12">
              <select name="method" v-model="deliveryMethod">
                <option value="">Select delivery method</option>
                <option value="Dine in">Dine in</option>
                <option value="Door Delivery">Door Delivery</option>
                <option value="Pick Up">Pick Up</option>
              </select>
            </b-col>
            <h3 class="anka-text-shadow mt-5">Payment Method</h3>
            <b-col xl="12">
              <b-list-group class="mt-2">
                <b-list-group-item
                  ><input
                    type="radio"
                    name="payment"
                    value="Card"
                    v-model="paymentMethod"
                  /><label for=""
                    ><div class="navbar">
                      <span
                        class="badge badge-danger mr-2"
                        style="background: #f47b0a"
                        ><b-icon
                          icon="credit-card-fill"
                          scale="1.5"
                          aria-hidden="true"
                        ></b-icon
                      ></span>
                      <h4><b>Card</b></h4>
                    </div>
                  </label></b-list-group-item
                >
                <b-list-group-item
                  ><input
                    type="radio"
                    name="payment"
                    id="bank"
                    value="Bank Account"
                    v-model="paymentMethod"
                  />
                  <label for=""
                    ><div class="navbar">
                      <span
                        class="badge badge-danger mr-2"
                        style="background: #895537"
                        ><b-icon
                          icon="person-circle"
                          scale="1.5"
                          aria-hidden="true"
                        ></b-icon
                      ></span>
                      <h4><b>Bank Account</b></h4>
                    </div>
                  </label></b-list-group-item
                >
                <b-list-group-item
                  ><input
                    type="radio"
                    name="payment"
                    value="Cash On Delivery"
                    v-model="paymentMethod"
                  />
                  <label for=""
                    ><div class="navbar">
                      <span
                        class="badge badge-danger mr-2"
                        style="background: #ffba33; color: black"
                        ><b-icon
                          icon="cart-check-fill"
                          scale="1.5"
                          aria-hidden="true"
                        ></b-icon
                      ></span>
                      <h4><b>Cash On Delivery</b></h4>
                    </div>
                  </label></b-list-group-item
                >
              </b-list-group>
            </b-col>
            <b-col xl="12">
              <button
                class="chocolate p-2 my-5 mx-auto"
                style="width: 100%; border: 1px solid white"
                @click="confirmAndPay"
                :disabled="cart.length < 1"
              >
                Confirm and Pay
              </button>
            </b-col>
          </b-row>
        </b-col></b-row
      ></b-container
    >
    <Footbar />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
import Card from '../components/cart/CardCart'
export default {
  name: 'Cart',
  components: {
    Navbar,
    Footbar,
    Card
  },
  data() {
    return {
      subTotal: null,
      discount: 0,
      tax: null,
      total: null,
      paymentMethod: '',
      deliveryMethod: '',
      postKey: null
    }
  },
  created() {
    this.countTotal()
    this.getCoupons().then(() => {
      console.log(this.coupons)
    })
  },
  computed: {
    ...mapGetters({
      user: 'dataUser',
      cart: 'dataCarts',
      coupons: 'dataCoupons'
    })
  },
  methods: {
    ...mapActions([
      'createInvoice',
      'getPostKey',
      'postHistory',
      'emptyCart',
      'getCoupons'
    ]),
    countTotal() {
      let x = 0
      for (var i in this.cart) {
        x += this.cart[i].productPrice * this.cart[i].qty
      }
      this.subTotal = x
      this.tax = x * 0.1
      this.total = x - this.discount + this.tax
    },
    useDiscount(e) {
      this.discount = (this.subTotal * e) / 100
    },
    confirmAndPay() {
      if (this.paymentMethod === '' && this.deliveryMethod === '') {
        alert(`Don't forget to choose a Payment Method!! & Delivery Method`)
      } else {
        this.getPostKey().then(result => {
          for (var i in this.cart) {
            const dataInvoice = {
              historyId: result,
              productId: this.cart[i].productId,
              productQty: this.cart[i].qty,
              size: this.cart[i].size
            }
            this.createInvoice(dataInvoice)
          }
          const id = result
          const dataHistory = {
            userId: this.user.userId,
            discount: this.discount,
            tax: this.tax,
            subTotal: this.subTotal,
            total: this.total,
            paymentMethod: this.paymentMethod,
            deliveryMethod: this.deliveryMethod
          }
          const payload = {
            id,
            dataHistory
          }
          this.postHistory(payload)
          this.emptyCart()
        })
      }
    }
  }
}
</script>
<style scoped>
.cart {
  background-image: url('../assets/background3.png');
  background-size: cover;
}
.cardcart {
  width: 70%;
  padding: 30px 0;
  border-radius: 15px;
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
.cartcolumn {
  width: 400px;
}
.cart .badge {
  height: 20px;
  width: 20px;
  line-height: 18px;
  font-size: 10px;
}
.cart .bg-light {
  margin-left: -10px;
  width: 35px;
  height: 35px;
  line-height: 34px;
}
.cart .badge .bg-success1 {
  background-color: #6a4029;
  color: #6a4029;
}
input[type='radio']:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #ffffff;
  content: '';
  display: inline-block;
  visibility: visible;
  border: 2px solid #a7a8a7;
}

input[type='radio']:checked:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #ffba33;
  content: '';
  display: inline-block;
  visibility: visible;
  border: 2px solid #6a4029;
}
input[type='text'] {
  border: none;
  padding: 10px;
  border: 2px solid #6a4029;
}
select {
  border: none;
  padding: 10px;
  border: 2px solid #6a4029;
}
select:focus,
input[type='text']:focus {
  outline: none;
  background-color: #ffca38;
}
section.cart .badge-danger {
  width: 35px;
  height: 35px;
  font-size: 17px;
  line-height: 31px;
  margin: 0 8px 0 20px;
}
@media (max-width: 900px) {
  .cardcart {
    width: 90%;
  }
  .cartcolumn {
    width: 95%;
  }
}
</style>
