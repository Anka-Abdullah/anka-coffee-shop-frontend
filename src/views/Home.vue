<template>
  <div class="home">
    <Navbar />

    <b-container fluid style="padding-top: 100px">
      <b-row>
        <b-col
          lg="4"
          sm="12"
          class="border-right border-secondary"
          style="padding-top: 20px"
          ><div style="text-align: center">
            <h4 class="anka-title">Promo Today</h4>
            <p>Coupons will be updated every weeks.<br />Check them out!</p>
          </div>
          <Coupon />
          <button class="chocolate one mt-3" style="width: 90%;">
            Apply Coupon
          </button>
          <b-row
            ><router-link to="" class="chocolate putih mx-auto mt-3"
              >Add New Promo</router-link
            ></b-row
          >
          <div class="my-4">
            <ol>
              <h6 class="anka-title">Terms and Condition</h6>
              <li><p>You can only apply 1 coupon per day</p></li>
              <li><p>It only for dine in</p></li>
              <li><p>Buy 1 get 1 only for new user</p></li>
              <li><p>Should make member card to apply coupon</p></li>
            </ol>
          </div>
          <hr class="responsive"
        /></b-col>

        <b-col lg="8" sm="12"
          ><Sorting />
          <b-container fuid style="padding-top: 20px">
            <b-row>
              <b-col
                lg="3"
                sm="12"
                v-for="(item, index) in products"
                :key="index"
                ><b-row
                  ><CardProduct
                    class="mx-auto"
                    :productName="item.productName"
                    :productPrice="item.productPrice"/></b-row
              ></b-col>
            </b-row>
            <b-row class="mb-4">
              <b-pagination
                class="paginations mx-auto"
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="limit"
                @change="handelPageChange"
                aria-controls="my-table"
              ></b-pagination>
              <router-link to="/add" class="chocolate one mx-auto mb-3"
                >Add New Product</router-link
              >
            </b-row>
            <b-row> </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <!-- <FormInput :dataName="contohNama" @changeName="contohNama = $event" />
    <label for="">{{ contohNama }}</label> -->
    <Footbar />
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
import Coupon from '../components/home/Coupon'
import Sorting from '../components/home/Sorting'
import CardProduct from '../components/home/CardProduct'
// import FormInput from '../components/_base/FormInput'
export default {
  name: 'Home',
  data() {
    return {
      products: [],
      contohNama: 'wahyudi',
      currentPage: 1,
      totalRows: null,
      limit: 5,
      page: 1
    }
  },
  components: {
    Navbar,
    Footbar,
    Coupon,
    Sorting,
    CardProduct
    // FormInput
  },
  created() {
    this.getProduct()
  },
  methods: {
    getProduct() {
      axios
        .get(
          `http://localhost:3765/product?page=${this.page}&limit=${this.limit}`
        )
        .then(response => {
          console.log(response)
          this.totalRows = response.data.pagination.totalData
          this.products = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    handelPageChange(e) {
      console.log(e)
      this.page = e
      this.getProduct()
    }
  }
}
</script>
<style scoped>
a.one:hover {
  color: white !important;
}
.paginations {
  color: #412719 !important;
}
</style>
