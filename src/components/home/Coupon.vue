<template
  ><div>
    <div>
      <div
        class="sunday anka-card p-1"
        style="background: #f5c361; display: flex;"
      >
        <div class="img-card p-0 pl-1">
          <img :src="img" class="rounded-pill" alt="sunday" width="60" />
          <b-navbar
            class="bg-light p-0 mx-2 py-1 rounded-pill mt-1"
            v-show="this.user.roleId === 1"
          >
            <b-icon
              icon="trash-fill"
              variant="danger"
              class="mx-auto set-coupon"
              @click="showModal"
            ></b-icon>
            <b-icon
              icon="pencil-fill"
              variant="info"
              class="mx-auto set-coupon"
              @click="setPromo"
            ></b-icon>
          </b-navbar>
        </div>
        <div class="txt-card">
          <b-col>
            <h6 class="anka-title m-0 mt-1">
              <b>Code: {{ dataPromo.promoCode }}</b>
            </h6>
            <p class="m-0" style="font-family: cursive;">
              {{ dataPromo.promoName }}
            </p>
            <p class="m-0" style="font-family: cursive;">
              Minimum order: IDR {{ dataPromo.promoMinPurchase }}
            </p>
            <p class="m-0" style="font-family: cursive;">
              Maksimum Discount: IDR {{ dataPromo.promoMaxLimit }}
            </p>
          </b-col>
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
        <button class="chocolate mx-auto" @click="deletePromo">
          Delete
        </button>
      </b-row>
    </b-modal>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    dataPromo: Object
  },
  data() {
    return {
      img: `https://${process.env.VUE_APP_ROOT_URL}/${this.dataPromo.image}`
    }
  },
  created() {
    this.getCoupons()
  },
  computed: {
    ...mapGetters({ user: 'dataUser' })
  },
  methods: {
    ...mapActions(['deleteCoupon', 'getCoupons', 'getProducts']),
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    setPromo() {
      this.$router.push({
        name: 'AddPromo',
        query: { data: this.dataPromo }
      })
    },
    deletePromo() {
      this.deleteCoupon(this.dataPromo.promoId)
        .then(() => {
          this.getCoupons()
          this.getProducts()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>
.set-coupon:hover {
  transform: scale(1.2);
}
@media (max-width: 600px) {
  span {
    margin-left: 200px;
    margin-top: -20px;
  }
}
</style>
