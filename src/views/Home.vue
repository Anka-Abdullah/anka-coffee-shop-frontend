<template>
  <div class="home">
    <Navbar :url="'home'" />

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
          <Coupon
            v-for="coupon in coupons"
            :key="coupon.promoId"
            :dataPromo="coupon"/>
          <button class="chocolate one mt-3" style="width: 90%;">
            Apply Coupon
          </button>
          <b-row
            ><router-link
              to="/addpromo"
              class="chocolate putih mx-auto mt-3"
              v-show="this.user.roleId === 1"
              >Add New Promo</router-link
            ></b-row
          >
          <div class="my-4">
            <ol>
              <h6 class="anka-title">Terms and Condition</h6>
              <p class="m-0">You can only apply 1 coupon per day</p>
              <p class="m-0">It only for dine in</p>
              <p class="m-0">Buy 1 get 1 only for new user</p>
              <p class="m-0">Should make member card to apply coupon</p>
            </ol>
          </div>
          <hr class="responsive"
        /></b-col>

        <b-col lg="8" sm="12"
          ><div class="text-center">
            <ul>
              <li>
                <label class="select" @click="getProduct('', '', '')"
                  >Favorite and Promo
                  <input type="radio" name="radio" checked="checked" hidden />
                  <span class="checkmark"></span>
                </label>
              </li>
              <li>
                <label
                  class="select"
                  @click="getProduct('coffee-9jUsQS1', '', '')"
                  >Coffee
                  <input type="radio" value="value" name="radio" hidden />
                  <span class="checkmark"></span>
                </label>
              </li>

              <li>
                <label
                  class="select"
                  @click="getProduct('noncoffee-J95yQgd', '', '')"
                  >Non Coffee
                  <input
                    type="radio"
                    value="noncoffee-J95yQgd"
                    name="radio"
                    hidden
                  />
                  <span class="checkmark"></span>
                </label>
              </li>
              <li>
                <label
                  class="select"
                  @click="getProduct('food-Z6RTUvh', '', '')"
                  >Foods
                  <input
                    type="radio"
                    value="food-Z6RTUvh"
                    name="radio"
                    hidden
                  />
                  <span class="checkmark"></span>
                </label>
              </li>
              <li>
                <label class="select"
                  >Add-On
                  <input type="radio" name="radio" hidden />
                  <span class="checkmark"></span>
                </label>
              </li>
              <li>
                <label class="select"
                  >Sort By
                  <b-dropdown text="" variant="outline" dropleft>
                    <b-dropdown-item
                      @click="getProduct('', 'productName', 'asc')"
                      >Name A-Z</b-dropdown-item
                    >
                    <b-dropdown-item
                      @click="getProduct('', 'productName', 'desc')"
                      >Name Z-A</b-dropdown-item
                    >
                    <b-dropdown-item
                      @click="getProduct('', 'productPrice', 'desc')"
                      >Highest Price</b-dropdown-item
                    >
                    <b-dropdown-item
                      @click="getProduct('', 'productPrice', 'asc')"
                      >Lowest Price</b-dropdown-item
                    >
                  </b-dropdown>
                </label>
              </li>
            </ul>
          </div>
          <b-container fuid style="padding-top: 20px">
            <b-row>
              <b-col
                lg="3"
                sm="12"
                v-for="item in products"
                :key="item.productId"
                ><b-row
                  ><CardProduct
                    class="mx-auto"
                    :data="item"
                    @emit-product="detailProduct(item.productId)"/></b-row
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
              <router-link
                to="/addproduct"
                class="chocolate one mx-auto mb-3"
                v-show="this.user.roleId === 1"
                >Add New Product</router-link
              >
            </b-row>
            <b-row> </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <Footbar />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
import Coupon from '../components/home/Coupon'
import CardProduct from '../components/home/CardProduct'
import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      currentPage: 1
    }
  },
  components: {
    Navbar,
    Footbar,
    Coupon,
    CardProduct
  },
  created() {
    this.getProducts()
    this.getCoupons()
    console.log(this.user.roleId)
  },
  computed: {
    ...mapGetters({
      products: 'dataProducts',
      coupons: 'dataCoupons',
      page: 'pageProducts',
      limit: 'pageLimit',
      totalRows: 'pagetotalRows',
      search: 'setSearch',
      sort: 'setSort',
      asc: 'setAsc',
      user: 'setUser'
    })
  },
  methods: {
    ...mapActions(['getProducts', 'getCoupons']),
    ...mapMutations(['setPage', 'setSearch', 'setSort', 'setAsc']),
    getProduct(search, sort, asc) {
      this.setSearch(search)
      this.setSort(sort)
      this.setAsc(asc)
      this.getProducts()
    },
    handelPageChange(e) {
      this.setPage(e)
      this.setSearch(this.search)
      this.setSort(this.sort)
      this.setAsc(this.asc)
      this.getProducts()
    },
    detailProduct(productId) {
      console.log(productId)
      this.$router.push({ name: 'Product', params: { id: productId } })
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
ul {
  padding: 0 !important;
  list-style-type: none;
}
li {
  display: inline-block;
  margin-top: 20px;
}
.select {
  padding: 0 10px;
  display: inline-block;
  position: relative;
  z-index: 1;
  margin: 0 10px;
  font-family: 'caveatregular', cursive;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: rgb(85, 84, 84);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkmark {
  text-align: center;
  position: absolute;
  top: 27px;
  left: 0;
  height: 3px;
  width: 100%;
}

.select:hover input ~ .checkmark {
  background-color: #6a4029;
}
.select:hover {
  transform: scale(1.05);
  background-color: rgb(255, 243, 177);
  color: #6a4029;
}
.select input:checked ~ .checkmark {
  background-color: #6a4029;
}
@media (max-width: 600px) {
  li,
  .select {
    display: block;
    margin: 10px 0;
  }
}
</style>
