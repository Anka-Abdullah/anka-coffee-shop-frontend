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
          .get(`http://${process.env.VUE_APP_ROOT_URL}/promo`)
          .then(response => {
            resolve(response)
            context.commit('setCoupons', response.data)
          })
          .catch(error => {
            reject(error)
            console.log(error)
          })
      })
    },
    deleteCoupon(payload) {
      console.log(payload)
      //   return new Promise((resolve, reject) => {
      //     axios
      //       .delete(`http://${process.env.VUE_APP_ROOT_URL}/promo/` , payload)
      //       .then(response => {
      //         resolve(response)
      //       })
      //       .catch(error => {
      //         reject(error)
      //         console.log(error)
      //       })
      //   })
    }
  },
  getters: {
    dataCoupons(state) {
      return state.coupons
    }
  }
}
