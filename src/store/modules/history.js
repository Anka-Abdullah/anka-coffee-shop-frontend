// import axios from 'axios'

import axios from 'axios'

export default {
  modules: {},
  state: {
    invoice: [],
    chart: [],
    dashboard: []
  },
  mutations: {},
  actions: {
    createInvoice(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `http://${process.env.VUE_APP_ROOT_URL}/product/invoice`,
            payload
          )
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {
    setInvoice: state => state.invoice,
    setChart: state => state.chart,
    setDashboard: state => state.dashboard
  }
}
