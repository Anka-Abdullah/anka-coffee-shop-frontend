<template>
  <div class="addpromo">
    <Navbar />
    <b-container style="padding-top: 120px">
      <h5 style="color: rgb(124, 124, 124)" class="mt-4">
        Favorite and Promo
        <span style="color: #6a4029">> Add New Promo</span>
        <b-row>
          <b-col lg="6" sm="12">
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
            </form>
            <hr class="responsive" />
          </b-col>
          <b-col lg="6" sm="12">
            <form>
              <h5 class="anka-title mt-5">Name :</h5>
              <input
                type="text"
                class="b-input"
                placeholder="Type Promo name min. 50 characters"
                v-model="form.promoName"
              />
              <h5 class="anka-title mt-5">Description :</h5>
              <input
                type="text"
                class="b-input"
                placeholder="Describe your Promo min. 150 characters"
                v-model="form.promoDescription"
              />
              <h5 class="anka-title mt-5">Coupon Usage Code :</h5>
              <input
                type="text"
                class="b-input"
                placeholder="Type the code"
                v-model="form.promoCode"
              />
              <b-row>
                <b-col lg="6" sm="12"
                  ><h5 class="anka-title mt-5">Minimum Purchase :</h5>
                  <input
                    type="number"
                    class="b-input"
                    placeholder="200000"
                    v-model="form.promoMinPurchase"
                /></b-col>
                <b-col lg="6" sm="12"
                  ><h5 class="anka-title mt-5">Maximal Discount :</h5>
                  <input
                    type="number"
                    class="b-input"
                    placeholder="50000"
                    v-model="form.promoCode"
                /></b-col>
                <b-col lg="6" sm="12"></b-col>
              </b-row>
              <h5 class="anka-title mt-5">Expire Date :</h5>
              <b-row>
                <b-col lg="6" sm="12">
                  <input type="date" class="b-input" placeholder="start date"
                /></b-col>
                <b-col lg="6" sm="12">
                  <input type="date" class="b-input" placeholder="end date"
                /></b-col>
                <b-col lg="6" sm="12"></b-col>
              </b-row>
              <b-col lg="6" sm="12">
                <h5 class="anka-title mt-5">Discount:</h5>
                <select
                  name="discount"
                  id="discount"
                  class="mx-auto"
                  v-model="form.promoPercent"
                >
                  <option value="">Select Discount</option>
                  <option value="10">10%</option>
                  <option value="20">20%</option>
                  <option value="30">30%</option>
                  <option value="40">40%</option>
                  <option value="50">50%</option>
                </select>
              </b-col>
              <button
                v-show="this.promoId == null"
                class="chocolate mt-5 p-3"
                style="width: 90%"
                @click="postCoupon"
              >
                Save Coupon
              </button>
              <button
                v-show="this.promoId > 0"
                class="chocolate mt-5 p-3"
                style="width: 90%"
                @click="patchCoupon"
              >
                Update Coupon
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
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
export default {
  name: 'AddPromo',
  components: {
    Navbar,
    Footbar
  },
  data() {
    return {
      promoId: null,
      form: {
        promoName: '',
        promoPercent: '',
        promoMinPurchase: '',
        promoCode: '',
        promoDescription: '',
        image: ''
      }
    }
  },
  created() {
    let getData = this.$route.query.data
    if (getData) {
      this.form = this.$route.query.data
      this.promoId = this.$route.query.data.promoId
    }
  },
  methods: {
    ...mapActions(['createCoupon', 'updateCoupon', 'getProducts']),
    postCoupon() {
      let formData = new FormData()
      formData.append('promoName', this.form.promoName)
      formData.append('promoPercent', this.form.promoPercent)
      formData.append('promoMinPurchase', this.form.promoMinPurchase)
      formData.append('promoCode', this.form.promoCode)
      formData.append('promoDescription', this.form.promoDescription)
      formData.append('image', this.form.image)
      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }
      this.createCoupon(this.formData)
        .then(() => {
          this.getProducts()
          this.$router.replace('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    patchCoupon() {
      let formData = new FormData()
      formData.append('promoName', this.form.promoName)
      formData.append('promoPercent', this.form.promoPercent)
      formData.append('promoMinPurchase', this.form.promoMinPurchase)
      formData.append('promoCode', this.form.promoCode)
      formData.append('promoDescription', this.form.promoDescription)
      formData.append('image', this.form.image)
      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }
      const data = {
        data: this.formData,
        id: this.promoId
      }
      this.updateCoupon(data)
      this.$router.replace('/')
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
</style>
