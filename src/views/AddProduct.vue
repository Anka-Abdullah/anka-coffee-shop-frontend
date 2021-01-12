<template>
  <div class="addproduct">
    <Navbar />
    <b-container style="padding-top: 120px">
      <h5 style="color: rgb(124, 124, 124)">
        Favorite and Promo <span style="color: #6a4029">> Add New Product</span>
        <b-row>
          <b-col lg="6" sm="12" class="text-center">
            <b-row v-show="form.image === ''">
              <b-badge class="camera mt-5 mx-auto"
                ><b-icon
                  icon="camera-fill"
                  class="sosmed"
                  scale="6"
                  variant="secondary"
                ></b-icon
              ></b-badge>
            </b-row>
            <img
              v-show="form.image !== ''"
              :src="`http://localhost:3765/${form.image}`"
              width="200"
              class="rounded-circle"
            />
            <form>
              <b-row>
                <input
                  type="file"
                  id="file-image"
                  hidden
                  @change="handleFile"
                />
                <label
                  for="file-image"
                  class="chocolate yellow my-5 mx-auto"
                  style="padding-top: 15px; padding-bottom: 15px"
                >
                  Choose Image
                </label>
              </b-row>
              <h4 class="anka-title mb-3 text-center">Delivery Hour :</h4>
              <b-row>
                <select
                  name="starthour"
                  id="starthour"
                  class="mx-auto"
                  v-model="form.deliveryStartHour"
                >
                  <option value=""> Select end hour</option>
                  <option value="10">10:00</option>
                  <option value="11">11:00</option>
                  <option value="12">12:00</option>
                  <option value="13">13:00</option>
                  <option value="14">14:00</option>
                  <option value="15">15:00</option>
                  <option value="16">16:00</option>
                  <option value="17">17:00</option>
                </select>
              </b-row>
              <div class="my-3"></div>
              <b-row>
                <select
                  name="endhour"
                  id="endhour"
                  class="mx-auto"
                  v-model="form.deliveryEndHour"
                >
                  <option value=""> Select start hour</option>
                  <option value="10">10:00</option>
                  <option value="11">11:00</option>
                  <option value="12">12:00</option>
                  <option value="13">13:00</option>
                  <option value="14">14:00</option>
                  <option value="15">15:00</option>
                  <option value="16">16:00</option>
                  <option value="17">17:00</option>
                </select>
              </b-row>
              <h4 class="anka-title mt-5 mb-3 text-center">
                Input Stock :
              </h4>
              <b-row>
                <input
                  type="number"
                  class="stock mx-auto mb-5"
                  placeholder="input stock"
                  v-model="form.productStock"
                />
              </b-row>
            </form>
            <hr class="responsive" />
          </b-col>
          <b-col lg="6" sm="12">
            <form>
              <h5 class="anka-title mt-5">Name:</h5>
              <input
                type="text"
                class="b-input"
                placeholder="Type product name min. 50 characters"
                v-model="form.productName"
              />
              <h5 class="anka-title mt-5">Price:</h5>
              <input
                type="number"
                class="b-input"
                placeholder="Type the price"
                v-model="form.productPrice"
              />
              <h5 class="anka-title mt-5">Description:</h5>
              <input
                type="text"
                class="b-input"
                placeholder="Describe your product min. 150 characters"
                v-model="form.productDescription"
              />
              <b-row>
                <b-col lg="6" sm="12">
                  <h5 class="anka-title mt-5">Category:</h5>
                  <select
                    name="category"
                    id="category"
                    class="mx-auto"
                    v-model="form.categoryId"
                  >
                    <option value="">Select Category</option>
                    <option value="1">Coffee</option>
                    <option value="2">Non-Coffee</option>
                    <option value="3">Food</option>
                  </select>
                </b-col>
                <b-col lg="6" sm="12">
                  <h5 class="anka-title mt-5">Discount:</h5>
                  <select
                    name="discount"
                    id="discount"
                    class="mx-auto"
                    v-model="form.productDiscount"
                  >
                    <option value="">Select Discount</option>
                    <option value="10">10%</option>
                    <option value="20">20%</option>
                    <option value="30">30%</option>
                    <option value="40">40%</option>
                    <option value="50">50%</option>
                  </select>
                </b-col>
              </b-row>
              <h5 class="anka-title mt-5">Input product size :</h5>
              <p class="m-0">Click size you want to use for this product</p>
              <label class="selectsize" v-show="form.categoryId !== '3'">
                <input type="checkbox" v-model="form.productSizeR250" />
                <span class="checkmark">R</span>
              </label>
              <label class="selectsize" v-show="form.categoryId !== '3'">
                <input type="checkbox" v-model="form.productSizeL300" />
                <span class="checkmark">L</span>
              </label>
              <label class="selectsize" v-show="form.categoryId !== '3'">
                <input type="checkbox" v-model="form.productSizeXL500" />
                <span class="checkmark">X</span>
              </label>
              <label class="selectsize" v-show="form.categoryId === '3'">
                <input type="checkbox" v-model="form.productSizeR250" />
                <span class="checkmark" style="font-size: 17px">250gr</span>
              </label>
              <label class="selectsize" v-show="form.categoryId === '3'">
                <input type="checkbox" v-model="form.productSizeL300" />
                <span class="checkmark" style="font-size: 17px">300gr</span>
              </label>
              <label
                class="selectsize"
                v-show="form.categoryId === '3'"
                value="1"
              >
                <input
                  type="checkbox"
                  v-model="form.productSizeXL500"
                  value="1"
                />
                <span class="checkmark" style="font-size: 17px">500gr</span>
              </label>
              <h5 class="anka-title mt-5">Input delivery methods :</h5>
              <p class="m-0">Click methods you want to use for this product</p>

              <label class="selectsize" style="padding-left: 150px;">
                <input type="checkbox" v-model="form.productDelivery" />
                <span class="checkmark" style="font-size: 17px"
                  >Home Delivery</span
                >
              </label>
              <label class="selectsize" style="padding-left: 100px;">
                <input type="checkbox" v-model="form.productDinein" />
                <span class="checkmark" style="font-size: 17px">Dine in</span>
              </label>
              <label class="selectsize" style="padding-left: 150px;">
                <input type="checkbox" v-model="form.productTakeAway" />
                <span class="checkmark" style="font-size: 17px">Take Away</span>
              </label>
              <button
                type="submit"
                v-show="this.productId == null"
                class="chocolate mt-5 p-3"
                style="width: 90%"
                @click="postProduct"
              >
                Save Product
              </button>
              <button
                type="submit"
                v-show="this.productId > 0"
                class="chocolate mt-5 p-3"
                style="width: 90%"
                @click="patchProduct"
              >
                Update Product
              </button>
              <button class="chocolate mt-2 putih p-3 mb-5" style="width: 90%">
                Cancel
              </button>
            </form>
          </b-col>
        </b-row>
      </h5>
    </b-container>
    <Footbar />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
// import axios from 'axios'
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
export default {
  name: 'AddProduct',
  components: {
    Navbar,
    Footbar
  },
  data() {
    return {
      productId: '',
      form: {
        productName: '',
        categoryId: '',
        productPrice: '',
        productStock: '',
        deliveryStartHour: '',
        deliveryEndHour: '',
        productDiscount: '',
        productSizeR250: false,
        productSizeL300: false,
        productSizeXL500: false,
        productDelivery: false,
        productDinein: false,
        productTakeAway: false,
        image: '',
        productDescription: ''
      }
    }
  },
  created() {
    let getData = this.$route.query.data
    if (getData) {
      this.productId = this.$route.query.data.productId
      this.form = this.$route.query.data
    } else {
      this.productId = null
    }
  },
  methods: {
    ...mapActions(['createProduct', 'updateProduct', 'getProducts']),
    postProduct() {
      let formData = new FormData()
      formData.append('productName', this.form.productName)
      formData.append('categoryId', this.form.categoryId)
      formData.append('productPrice', this.form.productPrice)
      formData.append('productStock', this.form.productStock)
      formData.append('deliveryStartHour', this.form.deliveryStartHour)
      formData.append('deliveryEndHour', this.form.deliveryEndHour)
      formData.append('productDiscount', this.form.productDiscount)
      formData.append('productSizeR250', this.form.productSizeR250)
      formData.append('productSizeL300', this.form.productSizeL300)
      formData.append('productSizeXL500', this.form.productSizeXL500)
      formData.append('productDelivery', this.form.productDelivery)
      formData.append('productDinein', this.form.productDinein)
      formData.append('productTakeAway', this.form.productTakeAway)
      formData.append('image', this.form.image)
      formData.append('productDescription', this.form.productDescription)
      // Display the key/value pairs
      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }
      this.createProduct(formData)
        .then(() => {
          this.getProducts()
          this.$router.replace('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    patchProduct() {
      let formData = new FormData()
      formData.append('productName', this.form.productName)
      formData.append('categoryId', this.form.categoryId)
      formData.append('productPrice', this.form.productPrice)
      formData.append('productStock', this.form.productStock)
      formData.append('deliveryStartHour', this.form.deliveryStartHour)
      formData.append('deliveryEndHour', this.form.deliveryEndHour)
      formData.append('productDiscount', this.form.productDiscount)
      formData.append('productSizeR250', this.form.productSizeR250)
      formData.append('productSizeL300', this.form.productSizeL300)
      formData.append('productSizeXL500', this.form.productSizeXL500)
      formData.append('productDelivery', this.form.productDelivery)
      formData.append('productDinein', this.form.productDinein)
      formData.append('productTakeAway', this.form.productTakeAway)
      formData.append('image', this.form.image)
      formData.append('productDescription', this.form.productDescription)
      const data = {
        data: formData,
        id: this.productId
      }
      this.updateProduct(data)
      this.$router.go('/')
    },
    handleFile(e) {
      console.log(e.target.files[0].name)
      this.form.image = e.target.files[0]
    }
  }
}
</script>
<style scoped>
select {
  width: 250px;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
}
input.stock {
  width: 250px;
  height: 50px;
  padding: 10px;
}
input.stock:focus {
  outline: none;
  border: 3px solid #ffba33;
}

span.camera {
  width: 200px;
  height: 200px;
  margin-left: 20px;
  line-height: 200px;
  border-radius: 200px;
  background-color: #e6e6e6;
}
.selectsize {
  display: inline-block;
  position: relative;
  text-align: center;
  padding-left: 80px;
  margin-bottom: 50px;
  cursor: pointer;
  font-size: 50px;
}

.selectsize input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 10px;
  left: 0px;
  line-height: 50px;
  padding: 0px 10px;
  border-radius: 10px;
  background-color: rgb(241, 241, 241);
  color: rgb(99, 99, 99);
}

.selectsize:hover input ~ .checkmark {
  background-color: #ccc;
}

.selectsize input:checked ~ .checkmark {
  background-color: #ffd900;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.selectsize input:checked ~ .checkmark:after {
  display: block;
}
</style>
