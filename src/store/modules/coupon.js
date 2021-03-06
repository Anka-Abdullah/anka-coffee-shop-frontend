import axios from 'axios'

export default {
  modules: {},
  state: {
    coupons: []
  },
  mutations: {
    setCoupons(state, payload) {
      state.coupons = payload.data
    }
  },
  actions: {
    getCoupons(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_ROOT_URL}/promo`)
          .then(response => {
            resolve(response)
            context.commit('setCoupons', response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteCoupon(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_ROOT_URL}/promo/${payload}`)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    createCoupon(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_ROOT_URL}/promo`, payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    updateCoupon(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_ROOT_URL}/promo/${payload.id}`,
            payload.data
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    dataCoupons: state => state.coupons
  }
}
