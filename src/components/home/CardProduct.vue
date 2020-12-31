<template>
  <div>
    <div class="card-item">
      <img
        src="../../assets/latte.png"
        width="120"
        class="rounded-pill"
        alt="item"
      />
      <div class="card-item-discount" v-show="discount > 0">
        {{ discount }}%
      </div>
      <a @click="showModal" v-show="this.roleId === '2'"
        ><b-badge variant="warning" style="margin-left: -125px;"
          ><b-icon
            icon="trash-fill"
            scale="1.5"
            variant="dark"
          ></b-icon></b-badge
      ></a>
      <a @click="setProduct" v-show="this.roleId === '2'"
        ><b-badge variant="info" style="margin-left: -26px;"
          ><b-icon
            icon="pencil-fill"
            scale="1.5"
            variant="dark"
          ></b-icon></b-badge
      ></a>

      <h4 class="card-item-title" @click="$emit('emit-product')">
        {{ productName }}
      </h4>
      <h6 class="anka-title">IDR {{ productPrice }}</h6>
    </div>
    <b-modal ref="my-modal" hide-footer title="Delete Prduct">
      <div class="d-block text-center">
        <h1 class="anka-title mb-5">remove this prduct?</h1>
      </div>
      <b-row>
        <button
          class="chocolate putih mx-auto"
          block
          @click="hideModal"
          style="padding: 5px 25px"
        >
          Cancel
        </button>
        <button class="chocolate mx-auto" @click="deleteProduct">Delete</button>
      </b-row>
    </b-modal>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: ['productName', 'productPrice', 'productId', 'discount', 'form'],
  data() {
    return {
      roleId: localStorage.getItem('role')
    }
  },
  methods: {
    setProduct() {
      console.log(this.form)
      this.$router.push({ name: 'AddProduct', query: { data: this.form } })
    },
    deleteProduct() {
      axios
        .delete(
          `http://${process.env.VUE_APP_ROOT_URL}/product/` + this.productId
        )
        .then(response => {
          console.log(response)
          alert('product deleted')
        })
        .catch(error => {
          console.log(error)
        })
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    }
  }
}
</script>
<style scoped>
.card-item-title:hover {
  background-color: #ffba33;
}
span {
  position: absolute !important;
  width: 32px;
  height: 32px;
  margin-top: 50px;
  line-height: 28px;
  border-radius: 30px;
}

span:hover {
  transform: scale(1.2);
}
.card-item {
  padding: 5px;
  margin: 50px 0px 40px 0px;
  border-radius: 30px;
  width: 140px;
  height: 200px;
  text-align: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072);
}
.card-item:hover {
  transform: scale(1.05);
}
.card-item img {
  margin-top: -40px;
}
.card-item-discount {
  position: absolute;
  background: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 70px;
  border-radius: 20px;
  font-weight: 800;
  font-size: 23px;
  margin-top: -90px;
  margin-left: 90px;
}
.card-item-title {
  font-size: 25px;
  font-weight: 800;
  font-family: 'Patrick Hand', cursive;
  margin-top: 12px;
}
</style>
