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
          ><Coupon
        /></b-col>
        <b-col lg="8" sm="12" style="padding-top: 20px"
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
            <b-row>
              <b-pagination
                class="mx-auto"
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="limit"
                @change="handelPageChange"
                aria-controls="my-table"
              ></b-pagination>
            </b-row>
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
