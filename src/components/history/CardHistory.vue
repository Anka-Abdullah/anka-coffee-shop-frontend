<template>
  <div>
    <button @click="showModal">
      <b-card no-body class="text-center px-4 py-2">
        <h5>Total: IDR {{ data.total }}</h5>
        <h5>{{ data.paymentMethod }}</h5>
        <h5 class="anka-title">{{ data.deliveryMethod }}</h5>
      </b-card>
    </button>
    <b-modal ref="my-modal" hide-footer :title="data.historyCreatedAt">
      <b-card no-body class="cardcart mx-auto">
        <h2 class="anka-title text-center mb-0">Order Summary</h2>
        <div class="cart-scroll">
          <b-row>
            <Card
              class="mx-auto"
              v-for="(item, index) in invoice"
              :key="index"
              :data="item"
            />
          </b-row>
        </div>
        <b-row class="px-5">
          <h5><b>Subtotal</b></h5>
          <h5 class="ml-auto">
            <b> {{ data.subTotal }} </b>
          </h5>
        </b-row>
        <b-row class="px-5">
          <h5><b>Tax and Fees</b></h5>
          <h5 class="ml-auto">
            <b> {{ data.tax }} </b>
          </h5>
        </b-row>
        <b-row class="px-5">
          <h5><b>Discounts</b></h5>
          <h5 class="ml-auto">
            <b> {{ data.discount }} </b>
          </h5>
        </b-row>
        <b-row class="px-5">
          <h4 class="anka-title"><b>Total</b></h4>
          <h4 class="anka-title ml-auto">
            <b>IDR {{ data.total }} </b>
          </h4>
        </b-row>
      </b-card>
      <b-row>
        <button class="chocolate mx-auto w-75 my-4">Print Invoice</button>
      </b-row>
    </b-modal>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Card from './itemlist'
export default {
  props: {
    data: Object
  },
  components: {
    Card
  },
  mounted() {
    this.getInvoices(this.data.historyId)
  },
  computed: {
    ...mapGetters({
      invoice: 'setInvoices'
    })
  },
  methods: {
    ...mapActions(['getInvoices']),
    showModal() {
      this.$refs['my-modal'].show()
    }
  }
}
</script>
<style scoped></style>
