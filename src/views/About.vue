<template>
  <div class="about">
    <b-alert variant="success" :show="showAlert">{{ showMessage }}</b-alert>

    <div class="m-1" v-for="(item, index) in products" :key="index">
      <h6>name: {{ item.productName }}</h6>
      <h6>price: Rp.{{ item.productPrice }},-</h6>
      <button type="button" @click="setProduct()">update</button>
    </div>

    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="limit"
      @change="handelPageChange"
      aria-controls="my-table"
    ></b-pagination>

    <form>
      <input type="text" v-model="form.productName" placeholder="productName" />
      <input type="number" v-model="form.categoryId" placeholder="categoryId" />
      <input
        type="number"
        v-model="form.productPrice"
        placeholder="productPrice"
      />
      <input
        type="number"
        v-model="form.productStock"
        placeholder="productStock"
      />
      <input
        type="number"
        v-model="form.deliveryStartHour"
        placeholder="deliveryStartHour"
      />
      <input
        type="number"
        v-model="form.deliveryEndHour"
        placeholder="deliveryEndHour"
      />
      <input
        type="number"
        v-model="form.productStatus"
        placeholder="productStatus"
      />
      <input
        type="number"
        v-model="form.productSizeR250"
        placeholder="productSizeR250"
      />
      <input
        type="number"
        v-model="form.productSizeL300"
        placeholder="productSizeL300"
      />
      <input
        type="number"
        v-model="form.productSizeXL500"
        placeholder="productSizeXL500"
      />
      <input
        type="number"
        v-model="form.productDelivery"
        placeholder="productDelivery"
      />
      <input
        type="number"
        v-model="form.productDinein"
        placeholder="productDinein"
      />
      <input
        type="number"
        v-model="form.productTakeAway"
        placeholder="productTakeAway"
      />
      <input
        type="text"
        v-model="form.productImage"
        placeholder="productImage"
      />
      <input
        type="text"
        v-model="form.productDescription"
        placeholder="productDescription"
      />
      <br /><button type="button" @click="postProduct()">post</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  computed: {
    rows() {
      return this.totalRows
    }
  },
  data() {
    return {
      products: [],
      productId: '',
      form: {
        productName: '',
        categoryId: '',
        productPrice: '',
        productStock: '',
        deliveryStartHour: '',
        deliveryEndHour: '',
        productDiscount: '',
        productSizeR250: '',
        productSizeL300: '',
        productSizeXL500: '',
        productDelivery: '',
        productDinein: '',
        productTakeAway: '',
        productImage: '',
        productDescription: ''
      },
      showAlert: false,
      showMessage: '',
      currentPage: 1,
      totalRows: null,
      limit: 3,
      page: 1
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    setProduct(data) {
      console.log(data)
      this.form = data
      this.productId = data.productId
    },
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
    patchProduct() {
      console.log(this.productId)
      console.log(this.form)
    },
    postProduct() {
      console.log(this.form)
      axios
        .post('http://localhost:3765/product/', this.form)
        .then(response => {
          console.log(response)
          this.showAlert = true
          this.showMessage = response.data.message
          // this.getProduct()
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
