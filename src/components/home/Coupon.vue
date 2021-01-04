<template
  ><div>
    <div>
      <div class="sunday anka-card" style="background: #f5c361; display: flex;">
        <div class="img-card">
          <img src="../../assets/sunday.png" alt="sunday" />
        </div>
        <div class="txt-card">
          <a @click="showModal" v-show="this.roleId === '2'"
            ><b-badge variant="warning" style="margin-left: -100px;"
              ><b-icon
                icon="trash-fill"
                scale="1.5"
                variant="dark"
              ></b-icon></b-badge
          ></a>
          <a @click="setPromo" v-show="this.roleId === '2'"
            ><b-badge variant="info"
              ><b-icon
                icon="pencil-fill"
                scale="1.5"
                variant="dark"
              ></b-icon></b-badge
          ></a>
          <h6 class="anka-title m-0 mt-1">Code: {{ promoCode }}</h6>
          <b>{{ promoName }}</b
          ><br />
          <b>Minimum order: IDR {{ promoMinPurchase }}</b
          ><br />
          <b>Maksimum Discount: IDR {{ promoMaxLimit }}</b>
        </div>
      </div>
    </div>
    <b-modal ref="my-modal" hide-footer title="Delete Promo">
      <div class="d-block text-center">
        <h1 class="anka-title mb-5">remove this promo?</h1>
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
        <button class="chocolate mx-auto" @click="deletePromo()">Delete</button>
      </b-row>
    </b-modal>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: [
    'promoCode',
    'promoName',
    'promoMinPurchase',
    'promoMaxLimit',
    'promoId',
    'patch'
  ],
  data() {
    return {
      roleId: localStorage.getItem('role')
    }
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    setPromo() {
      console.log(this.patch)
      this.$router.push({ name: 'AddPromo', query: { data: this.patch } })
    },
    deletePromo() {
      axios
        .delete(`http://${process.env.VUE_APP_ROOT_URL}/promo/` + this.promoId)
        .then(response => {
          console.log(response)
          alert('promo deleted')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
<style scoped>
span {
  position: absolute !important;
  width: 32px;
  height: 32px;
  margin-left: 250px;
  margin-top: -20px;
  line-height: 28px;
  border-radius: 30px;
}

span:hover {
  transform: scale(1.2);
}
@media (max-width: 600px) {
  span {
    margin-left: 200px;
    margin-top: -20px;
  }
}
</style>
