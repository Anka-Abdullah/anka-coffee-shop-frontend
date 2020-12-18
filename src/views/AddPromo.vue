<template>
  <div class="addpromo">
    <Navbar />
    <b-container>
      <b-container style="padding-top: 100px">
        <h5 style="color: rgb(124, 124, 124)" class="mt-4">
          Favorite and Promo
          <span style="color: #6a4029">> Add New Promo</span>
          <b-row>
            <b-col lg="6" sm="12">
              <b-row>
                <b-badge class="camera mt-5 mx-auto"
                  ><b-icon
                    icon="camera-fill"
                    class="sosmed"
                    scale="6"
                    variant="secondary"
                  ></b-icon
                ></b-badge>
              </b-row>
              <b-row>
                <button
                  class="chocolate yellow my-5 mx-auto"
                  style="padding-top: 15px; padding-bottom: 15px"
                >
                  Choose From Galery
                </button>
              </b-row>

              <hr class="responsive" />
            </b-col>
            <b-col lg="6" sm="12">
              <form>
                <h5 class="anka-title mt-5">Name :</h5>
                <input
                  type="text"
                  class="formadd"
                  placeholder="Type product name min. 50 characters"
                />
                <h5 class="anka-title mt-5">Description :</h5>
                <input
                  type="text"
                  class="formadd"
                  placeholder="Describe your product min. 150 characters"
                />
                <h5 class="anka-title mt-5">Coupon Usage Code :</h5>
                <input
                  type="text"
                  class="formadd"
                  placeholder="Type the code"
                />
                <b-row>
                  <b-col lg="6" sm="12"
                    ><h5 class="anka-title mt-5">Minimum Purchase :</h5>
                    <input type="number" class="formadd" placeholder="200000"
                  /></b-col>
                  <b-col lg="6" sm="12"
                    ><h5 class="anka-title mt-5">Maximal Discount :</h5>
                    <input type="number" class="formadd" placeholder="50000"
                  /></b-col>
                  <b-col lg="6" sm="12"></b-col>
                </b-row>
                <h5 class="anka-title mt-5">Expire Date :</h5>
                <b-row>
                  <b-col lg="6" sm="12">
                    <input type="date" class="formadd" placeholder="start date"
                  /></b-col>
                  <b-col lg="6" sm="12">
                    <input type="date" class="formadd" placeholder="end date"
                  /></b-col>
                  <b-col lg="6" sm="12"></b-col>
                </b-row>
                <b-row>
                  <b-col lg="6" sm="12">
                    <h5 class="anka-title mt-5">Category:</h5>
                    <select name="category" id="category" class="mx-auto">
                      <option>Select Category</option>
                      <option value="1">Coffee</option>
                      <option value="2">Non-Coffee</option>
                      <option value="3">Food</option>
                    </select>
                  </b-col>
                  <b-col lg="6" sm="12">
                    <h5 class="anka-title mt-5">Discount:</h5>
                    <select name="discount" id="discount" class="mx-auto">
                      <option>Select Discount</option>
                      <option value="10">10%</option>
                      <option value="20">20%</option>
                      <option value="30">30%</option>
                      <option value="40">40%</option>
                      <option value="50">50%</option>
                    </select>
                  </b-col>
                </b-row>
                <button class="chocolate mt-5 p-3" style="width: 90%">
                  Save Promo
                </button>
                <button
                  class="chocolate mt-2 putih p-3 mb-5"
                  style="width: 90%"
                >
                  Cancel
                </button>
              </form>
            </b-col>
          </b-row>
        </h5>
      </b-container>
    </b-container>
    <Footbar />
  </div>
</template>
<script>
import Navbar from '../components/_base/Navbar'
import Footbar from '../components/_base/Footbar'
export default {
  name: 'AddPromo',
  components: {
    Navbar,
    Footbar
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
input.formadd {
  border: none;
  width: 95%;
  border-bottom: 1px solid #6a4029;
}
input.formadd:focus {
  outline: none;
  border-bottom: 3px solid #ffba33;
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
